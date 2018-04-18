import * as React from 'react';
import PropTypes from 'prop-types';
import injectReducers from "./injectReducers";

interface ILoadableState {
    Component: new () => React.Component<any, any>;
}

interface ILoaded {
    component: Promise<any>;
    reducers?: {
        [key: string]: Promise<any>;
    };
    sagas: Array<Promise<any>>;
}

export default (loader: () => ILoaded) => {
    return class Loadable extends React.Component<any, ILoadableState> {
        static contextTypes = {
            store: PropTypes.object.isRequired,
        };

        constructor(props: any) {
            super(props);
            this.state = {Component: null};
        }

        async componentWillMount() {
            const {component, reducers, sagas} = loader();
            const componentModule = await component;

            const reducerNames = Object.keys(reducers);
            const reducerModules = await Promise.all(reducerNames.map(n => reducers[n]));

            const sagaModules = await Promise.all(sagas);

            sagaModules.map(s => this.context.store.runSaga(s.default));
            this.setState({Component: componentModule.default});
            injectReducers(this.context.store, reducerModules.reduce((modules, m, i) => ({...modules, [reducerNames[i]]: m.default}), {}))
        }

        render() {
            const {Component} = this.state;
            return Component ? <Component {...this.props} /> : null;
        }
    }
}