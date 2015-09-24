var items = ['Buy Milk', 'Feed Children', 'Learn React']

var TodoItem = React.createClass({
  onCheck: function() {
    this.props.onCheck(this.props.index);
  },

  render: function() {
    var style = {};

    if (this.props.completed) {
      style.textDecoration = "line-through";
    }

    return (
      <div>
        <input type="checkbox" onChange={this.onCheck} value={this.props.completed} />
        <span style={style}>{ this.props.title }</span>
      </div>
    );
  }
});

var TodoList = React.createClass({
  getInitialState: function() {
    return { 
      newItem: "",
      items: this.props.items.map(function(item) {
        return { title: item, completed: false };
      })
    }
  },

  toggleComplete: function(index) {
    var items = this.state.items;
    items[index].completed = !items[index].completed;

    this.setState({ items: items });
  },

  onChangeNewItem: function(e) {
    this.setState({newItem: e.target.value});
  },

  onSubmitNewItem: function() {
    var items, newItem;

    items = this.state.items;

    var newItem = {
      title: this.state.newItem,
      index: this.state.items.length,
      completed: false
    };

    items.push(newItem);

    this.setState({ items: items, newItem: "" });
  },

  render: function() {
    var toggleComplete = this.toggleComplete;

    var items = this.state.items.map(function(item, index) {
      return <TodoItem index={index} {... item} onCheck={toggleComplete} />
    });

    return (
      <div>
        {items}
        <input ref="newItem" onChange={this.onChangeNewItem} value={this.state.newItem} />
        <button onClick={this.onSubmitNewItem}>New Item</button>
      </div>
    )
  }
});

React.render(<TodoList items={items} />, document.getElementById("app"));
