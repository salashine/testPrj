# 为什么使用React

使用React为了解决一个问题:数据的实时刷新。

##简单
底层数据更新,UI自动跟随刷新。

##声明
当数据更新时,UI只刷新改变的部分。

> 通过生成虚拟DOM, 与DOM做比对

##构建可组装的组件
构建可复用组件,使得代码易于重用、测试以及分离关注点。

> 关注点(Concerns)是一种组织代码结构的方式, 用来将复杂的逻辑和重复代码梳理清楚。

##React不是一个MVC框架
React是一个构建可组装的用户接口的库, 当需要实时刷新UI数据时,它鼓励构建可复用的前端UI组件。


#常用API
1. 创建节点

> React.createElement('标签', {props obj}, child...)

    var child1 = React.createElement('li', null, 'First');
    var child2 = React.createElement('li', null, 'Second');
    var root = React.createElement('ul', {className: 'my-list'}, child1, child2);

2. 渲染页面

> ReactDOM.render(node, element);

    ReactDOM.render(
        root,
        document.getElementById("content")
    );

3. 创建组件
> React.createClass({render:function(){}});

    var ComponentClass  = React.createClass({
        render: function(){
            return(
                <ul className={this.props.cname}>
                    <li>First node</li>
                    <li>Second node</li>
                </ul>
            );
        }
    });
<font color='red'>注: 组件名必须大写字母开头</font>

<b>获取参数</b>:
> this.props.paramName
> this.props.children 获取子节点及内容

4. 使用工厂生成组件实例
> React.createFactory()

    var Factory = React.createFactory(ComponentClass);
    var root = Factory({"cname":"alist"});


5. 使用JSX

   5.1 渲染HTML标签,使用小写字母开头标签


    var myDiv = <div className="foo"/>
    ReactDOM.render(
        myDiv,
        document.getElementById("content")
    );


   5.2 渲染React组件,使用大写字母开头标签

    var MyComponent = React.createClass({
        render: function () {
            return(
                <div className="foo">{this.props.val}</div>
            );

        }
    });

    ReactDOM.render(
        <MyComponent val="hello"/>,
        document.getElementById("content")
    );




