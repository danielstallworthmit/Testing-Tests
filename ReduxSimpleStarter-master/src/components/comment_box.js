import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comment: '' };
    }

    handleChange(e) {
        this.setState({comment: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
    }
    render() {
        return (
            <form className="comment-box" onSubmit={this.handleSubmit.bind(this)}>
                <h4>Add Comment</h4>
                <textarea 
                    onChange={this.handleChange.bind(this)}
                    value={this.state.comment}
                />
                <div><button action="submit">Submit Comment</button></div>
            </form>
        )
    }
}

export default connect(null, actions)(CommentBox);