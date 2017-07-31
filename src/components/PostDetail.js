import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPostById } from '../actions';
import { deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostDetail extends Component {
  render() {
    const { post } = this.props;

    if(!post) {
      return (
        <div>
          Loading...    
        </div>
      );
    }
    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
        <Link className="btn btn-primary btn-danger pull-xs-right" 
              to={`/posts/${post.id}`}
              onClick={this.onDeleteClick.bind(this)}>
              Delete post    
        </Link>
        <Link className="btn btn-primary" to="/">Cancel</Link>
      </div>
    );
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPostById(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchPostById, deletePost})(PostDetail);