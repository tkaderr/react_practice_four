import React, {Component} from 'react';
import {connect} from 'react-redux'; //when we want to get actioncreator into component use maptostateprop
import {fetchPosts} from '../actions'; //action creator
import {Link} from 'react-router-dom';
import _ from 'lodash';

class PostsIndex extends Component {

    //automatically will run componentdidmount--built function
    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        return _.map(this.props.posts, post => {
            return (
                <li className ="list-group-item" key={post.id}>
                <Link to={`/posts/${post.id}`}>
                {post.title}
                </Link>
                </li>
                );
        });//cant use .map because that is for arrays. Have to use lodash to go through list of objects
    }

    render() {
        console.log(this.props.posts);
        return (
            <div>
                <div className ="text-xs-right"><Link className ="btn btn-primary" to="/posts/new">Add a Post</Link></div>
                <h3>Posts</h3>
                <ul className ="list-group">
                    {this.renderPosts()}
                </ul>
                </div>
        );
    }
}

function mapStateToProps(state){
    return {posts: state.posts};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex); //instead of use maptostateprop, you can use fetchPosts in the connect here