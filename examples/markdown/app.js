var Markdown = React.createClass({
  render: function() {
    var html = marked(this.props.text);
    
    // https://facebook.github.io/react/tips/dangerously-set-inner-html.html
    return <div style={this.style} dangerouslySetInnerHTML={{__html: html}}></div>;
  }
});

var Editor = React.createClass({
  style: {
    editor: {
      width: '100%',
      height: 200
    },
    preview: {
      backgroundColor: '#eee',
      border: 'solid 2px #ddd',
      padding: 10
    }
  },

  getInitialState: function() {
    return { body: "" }
  },

  onChange: function(e) {
    var body = e.target.value;
    this.setState({ body: body });
  },

  render: function() {
    return (
      <div>
        <textarea style={this.style.editor} onChange={this.onChange} value={this.state.body} placeholder="What's on your mind?" />
        <p>Preview:</p>
        <div style={this.style.preview}>
          <Markdown text={this.state.body} />
        </div>
      </div>
    )
  }
});

React.render(<Editor />, document.getElementById("app"));
