var Counter = React.createClass({
  getInitialState: function() {
    return { times: 0 }
  },

  increment: function() {
    this.setState({ times: ++this.state.times });
  },

  render: function() {
    return (
      <div>
        <p>You have clicked me {this.state.times} times.</p>
        <button onClick={this.increment}>SHAZAM</button>
      </div>
    )
  }
});

React.render(<Counter />, document.getElementById("app"));
