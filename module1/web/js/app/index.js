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
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Your name" ref="author" /><br/>
                    <input type="text" placeholder="Say sth..." ref="text" /><br/>
                    <input type="submit" value="post"/>
                </form>
            </div>
        )
    },
    handleSubmit: function (event) {
        event.preventDefault();
        var author = this.refs.author.value.trim(),
            text = this.refs.text.value.trim();
        if (!author || !text){
            return;
        }

        this.props.onCommentSubmit({'article.author': author, 'article.text':text});

        this.refs.author.value = "";
        this.refs.text.value = "";
        return;
    }
});



var CommentBox = React.createClass({
    queryComment: function(){
        var me = this;
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            data: {},
            type: "POST",
            success: function(data) {
                me.setState({data: data});
            },
            error: function(xhr, status, err) {
                console.error(me.props.url, status, err.toString());
            }
        });
    },
    handleCommentSubmit: function(comment){
        console.log(comment);
        var me = this;
        $.ajax({
            url: "index/save.action",
            dataType: 'json',
            data: comment,
            type: "POST"
        }).done(function(){
            me.queryComment()
        });
    },
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function(){
        this.queryComment();

    },
    render: function(){
        return (
            <div className="comment-box">
                <h1>Comment</h1>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
            </div>
        )
    }
});




$("#start").bind('click', function () {
    ReactDOM.render(
        <CommentBox url="index/query.action" interval={2000}/>,
        document.getElementById('content')
    );
});

$("#end").bind("click", function(){
    if (window.timeId){
        clearInterval(window.timeId);
    }
});