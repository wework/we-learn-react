var posts = [{
  title: "My first post",
  body: "Lorem ipsum"
}, {
  title: "My second post",
  body: "Dolor sit amet"
}];

var BlogApp = React.createClass({
  render: function() {
    return <div>Welcome! Showing {this.props.posts.length} posts.</div>;
  }
});

React.render(<BlogApp posts={posts}/>, document.getElementById("app"));
