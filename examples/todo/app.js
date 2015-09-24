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

var NewTodo = React.createClass({
  getInitialState: function() {
    return { value: '' };
  },

  componentDidMount: function() {
    this.focus();
  },

  onSubmit: function() {
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
    this.focus();
  },

  onChange: function(e) {
    this.setState({ value: e.target.value });
  },

  submitOnEnter: function(e) {
    if (e.key === 'Enter') {
      this.onSubmit();
    }
  },

  focus: function() {
    React.findDOMNode(this.refs.input).focus();
  },

  render: function() {
    return (
      <div>
        <input ref="input" onChange={this.onChange} value={this.state.value} onKeyPress={this.submitOnEnter} />
        <button onClick={this.onSubmit}>New Item</button>
      </div>
    )
  }
});

var TodoList = React.createClass({
  getInitialState: function() {
    return { 
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

  onSubmitNewItem: function(newItem) {
    var items, newItem, newIndex;

    items    = this.state.items;
    newIndex = this.state.items.length;
    newItem  = { title: newItem, index: newIndex, completed: false };

    items.push(newItem);

    this.setState({ items: items });
  },

  render: function() {
    var toggleComplete = this.toggleComplete;

    var items = this.state.items.map(function(item, index) {
      return <TodoItem index={index} {... item} onCheck={toggleComplete} />
    });

    return (
      <div>
        {items}
        <NewTodo onSubmit={this.onSubmitNewItem} />
      </div>
    )
  }
});

React.render(<TodoList items={items} />, document.getElementById("app"));
