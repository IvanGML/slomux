import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {mapStateToProps} connect - function with store properties
 * @param {mapDispatchToProps} connect - function with actions 
 * 
 * Connect actually just HOC that gets state from context and from props
 * and pass in inside returned react component.
 * 
 * it happen every time of initializing and resieving new props
 */
export default (
    mapStateToProps = () => ({}),
    mapDispatchToProps = () => ({})
) => Component => {
    class Connected extends React.Component {
        onStoreOrPropsChange(props) {
            const {
                store
            } = this.context;
            const state = store.getState();
            const stateProps = mapStateToProps(state, props);
            const dispatchProps = mapDispatchToProps(store.dispatch, props);
            this.setState({
                ...stateProps,
                ...dispatchProps
            });
        }
        componentWillMount() {
            const {
                store
            } = this.context;
            this.onStoreOrPropsChange(this.props);
            this.unsubscribe = store.subscribe(() => this.onStoreOrPropsChange(this.props));
        }
        componentWillReceiveProps(nextProps) {
            this.onStoreOrPropsChange(nextProps);
        }
        componentWillUnmount() {
            this.unsubscribe();
        }
        render() {
            return <Component {...this.props} {...this.state} />;
        }
    }

    Connected.contextTypes = {
        store: PropTypes.object
    };

    return Connected;
}