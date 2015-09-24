var posts = [{
  title: "My first post",
  body: "Lorem ipsum",
  index: 0
}, {
  title: "My second post",
  body: "Dolor sit amet",
  index: 1
}];

var Post = React.createClass({
  render: function() {
    return (
      <div>
        <div>{this.props.title}</div>
        <div>{this.props.body}</div>
        <button onClick={this.props.onEdit}>Edit</button>
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }
});

var Form = React.createClass({
  getInitialState: function() {
    return { title: this.props.post.title, body: this.props.post.body, index: this.props.post.index };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({ title: nextProps.post.title, body: nextProps.post.body, index: nextProps.post.index });
  },

  onTitleChange: function(e) {
    this.state.title = e.currentTarget.value;
    this.setState({ title: this.state.title });
  },

  onBodyChange: function(e) {
    this.state.body = e.currentTarget.value;
    this.setState({ body: this.state.body });
  },

  onSave: function() {
    this.props.onSave({ title: this.state.title, body: this.state.body, index: this.state.index });
    this.setState({ title: "", body: "", index: "" });
  },

  render: function() {
    if(!this.props.open) {
      return <div></div>;
    }

    return (
      <div>
        <div>
        <div>Title</div>
        <input onChange={this.onTitleChange} value={this.state.title}></input>
        <div>Body</div>
        <input onChange={this.onBodyChange} value={this.state.body}></input>
        <button onClick={this.onSave}>Save</button>
        </div>
      </div>
    );
  }
});


var BlogApp = React.createClass({
  getInitialState: function() {
    return {
      openModal: false,
      currentPost: {},
      posts: this.props.posts
    };
  },

  toggleForm: function() {
    this.setState({ openModal: !this.state.openModal });
  },

  selectPost: function(post) {
    this.setState({ currentPost: post, openModal: !this.state.openModal });
  },

  deletePost: function(post) {
    var posts = this.state.posts.filter(function(p) {
      return p.index != post.index;
    });

    this.setState({ posts: posts });
  },

  savePost: function(post) {
    var posts = {};
    if (!isNaN(post.index)) {
      posts = this.state.posts.filter(function(p) {
        return p.index != post.index;
      });
    } else {
      posts = this.state.posts;
      post.index = this.state.posts.length;
    }

    var sortByIndex = function(a, b) { return a.index - b.index };

    this.setState({ posts: posts.concat(post).sort(sortByIndex), openModal: !this.state.openModal, currentPost: {} });
  },

  render: function() {
    var that = this;
    var posts = this.state.posts.map(function(p) {
      return <Post title={p.title} body={p.body} onEdit={that.selectPost.bind(that,p)} onDelete={that.deletePost.bind(that, p)}/>;
    });

    return (
      <div>
        <div> My Blog </div>
        <button onClick={this.toggleForm}>Create Post</button>
        { posts }
        <Form open={this.state.openModal} onClose={this.toggleForm} post={this.state.currentPost} onSave={this.savePost}/>
      </div>
    );
  }
});

React.render(<BlogApp posts={posts}/>, document.getElementById("app"));
