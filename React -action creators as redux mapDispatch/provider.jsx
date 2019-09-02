const { Component } = React;

class ProviderContext extends Component {
    getChildContext() {
      return {
        store: this.props.store
      };
    }
    render() {
      return <div>{this.props.children}</div>;
    }
  }
  ProviderContext.childContextTypes = {
    store: PropTypes.object
  };