var object = {};
_.extend(object, Backbone.Events);
object.on("test:aa", function(msg){
    console.log("triggered " + msg);
});

$("#bind").bind('click', function(){
    object.trigger("test:aa", "ssssss");
});

$("#remove").bind('click', function(){
    object.off("test:aa");
});

var Sidebar = Backbone.Model.extend({
    promptColor: function() {
        var cssColor = prompt("请输入一个CSS颜色值：");
        this.set({colors: cssColor});
    }
});

window.sidebar = new Sidebar;

sidebar.bind('change:colors', function(model, color) {
    console.log(model);
    $('#sidebar').css({background: color});
});





