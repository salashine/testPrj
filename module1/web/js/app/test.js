var Container = React.createClass({
    render: function () {
        return(
            <div>
                <span>container </span>
                <span>{this.props.children}</span>
            </div>
        )
    }
});

var Client = React.createClass({
    render: function () {
        return(
            "未登录, 请先登录"
        )
    }
});


var Login = React.createClass({
    render: function () {
        return(
            <span id="login" data-ref="abc"  dangerouslySetInnerHTML="aaa">"hello, this is {window.username}"</span>
        )
    }
});

window.login = true;
window.username = "sala";


var params= {foo:"x", bar:"y"};
var Component = React.createClass({
    render: function () {
        return(
            <div>{this.props.foo},{this.props.bar}</div>
            )

    }
});


class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    handleClick(a, b, event) {

        this.setState({ liked: !this.state.liked });
        this.handler(event);
    }

    handler(e){
        console.log(this.refs.ppp);

    }

    render() {
        const text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <p onClick={this.handleClick.bind(this, "a", "b")} ref="ppp">
                You {text} this. Click to toggle.
            </p>
        );
    }
}


var div =  React.createElement("div");
var a = ReactDOM.render(
    <LikeButton />,
    document.getElementById('nav')
);
console.log(a);