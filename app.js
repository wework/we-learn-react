var posts = [{
  title: "My first post",
  body: "Lorem ipsum"
}, {
  title: "My second post",
  body: "Dolor sit amet"
}];

var BlogApp = React.createClass({
  render: function() {
    return (
        <div>
          Welcome! I have {this.props.posts.length} posts. Now let's show them!
        </div>
    );
  }
});

React.render(<BlogApp posts={posts}/>, document.getElementById("app"));
