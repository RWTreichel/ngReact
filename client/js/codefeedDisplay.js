  var CodeFeedDisplay = React.createClass( {
    propTypes: {
      name: React.PropTypes.string.isRequired,
    },

    render: function() {
      return React.createElement("h1", null, "Hello ", this.props.name);
    }
  } );