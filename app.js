var posts = [{
  title: "My first post",
  body: "Lorem ipsum"
}, {
  title: "My second post",
  body: "Dolor sit amet"
}];

var BlogPost = React.createClass({
  render: function() {
    return <div><h1>{this.props.title}</h1><p>{this.props.body}</p></div>;
  }
});

var BlogApp = React.createClass({
  render: function() {
    var posts = this.props.posts.map(function(post) {
      return <BlogPost {... post} />;
    });

    return (
        <div>
          Welcome! I have {this.props.posts.length} posts. Now let's show them!
          { posts }
        </div>
    );
  }
});

React.render(<BlogApp posts={posts}/>, document.getElementById("app"));
