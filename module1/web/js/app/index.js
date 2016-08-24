/*
ReactDOM.render(
    React.createElement('h1',null, 'Hello!'),
    document.getElementById('content')
);*/

var params = [{author:"sala", text:"haha1"}, {author:"andy", text:"haha2"}];
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
        var nodes = this.props.data.map(function (comment) {
            return (
                <Comment author = {comment.author}>
                    {comment.text}
                </Comment>
            );
        });


        return(
            <div className="comment-list">
                {nodes}
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

    render: function(){
        return (
            <div className="comment-box">
                <h1>Comment</h1>
                <CommentList data={this.props.data}/>
                <CommentForm />
            </div>
        )
    }
});




$("#btn").bind('click', function () {
    $.ajax({
        type: "POST",
        url:"index/index.action",
        dataType:"json",
        data:{}
    }).done(function (data) {
        ReactDOM.render(
            <CommentBox data={data}/>,
            document.getElementById('content')
        );
    });
});