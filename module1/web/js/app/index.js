/*
ReactDOM.render(
    React.createElement('h1',null, 'Hello!'),
    document.getElementById('content')
);*/
var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h2>{this.props.author}</h2>
                {this.props.children}
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function(){
        return(
            <div className="comment-list">
                <Comment author="sala"><font color="red">haha sala1</font></Comment>
                <Comment author="andy">haha andy2</Comment>
            </div>
        )
    }
});




var CommentForm = React.createClass({
    render: function(){
        return(
            <div className="comment-form">
                I am comment Form.
            </div>
        )
    }
});



var CommentBox = React.createClass({
    //displayName: 'CommentBox',
    render: function(){
        return (
            <div className="comment-box">
                <h1>Comment</h1>
                <CommentList />
                <CommentForm />
            </div>
        )
    }
});

ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);
