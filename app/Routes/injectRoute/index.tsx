import * as React from 'react';

interface ILoadableState {
    Component: new () => React.Component<any, any>;
}

export default (loader: () => Promise<any>) => {
    return class Loadable extends React.Component<any, ILoadableState> {
        constructor(props: any) {
            super(props);
            this.state = {Component: null};
        }

        async componentWillMount() {
            const module = await loader();
            this.setState({Component: module.default});
        }

        render() {
            const {Component} = this.state;
            return Component ? <Component {...this.props} /> : null;
        }
    }
}