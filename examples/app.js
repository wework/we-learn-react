var examples = [{
  name: "Counter",
  path: "/examples/counter"
},{
  name: "Markdown Editor",
  path: "/examples/markdown"
},{
  name: "Todo List",
  path: "/examples/todo"
}];

var Nav = React.createClass({
  render: function() {
    var items = this.props.items.map(function(item) {
      return <li key={item.path}><a target="_blank" href={item.path}>{item.name}</a></li>;
    });

    return <ul>{items}</ul>;
  }
});

var Examples = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Examples</h1>
        <p>Here are some simple React apps to play with. This page itself is a simple React app, so be sure to view the source!</p>
        <Nav items={this.props.examples} />
      </div>
    );
  }
});

React.render(<Examples examples={examples} />, document.getElementById("app"));
