var Node = Backbone.Model.extend({
    initialize: function(){
        var value = this.get("foo");
    },
    test: function(value){
        this.set({"foo": value});
    },
});

var node = new Node({"foo": "hello"});

node.bind("change:foo", function(model, value){
    console.log(value);
});

node.id = "iiidd";


var index=0;
$("#bind").bind("click", function () {
    node.test(index++);
});
$("#remove").bind("click", function () {
    node.unset("foo");
    node.get("foo");

    console.log(node.cid);
});