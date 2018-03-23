import * as React from 'react';

interface ILoadableState {
    Component: new () => React.Component<any, any>;
}

interface ILoaded {
    component: Promise<any>;
    reducers?: Promise<any>[];
}

export default (loader: () => ILoaded) => {
    return class Loadable extends React.Component<any, ILoadableState> {
        constructor(props: any) {
            super(props);
            this.state = {Component: null};
        }

        async componentWillMount() {
            const {component, reducers} = loader();
            const componentModule = await component;

            this.setState({Component: componentModule.default});
        }

        render() {
            const {Component} = this.state;
            return Component ? <Component {...this.props} /> : null;
        }
    }
}