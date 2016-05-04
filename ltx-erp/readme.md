一行代码胜过千言万语。。这篇文章呢。。主要讲述我一步一步优化react性能的过程。。为啥要用immutable.js呢。毫不夸张的说。有了immutable.js（当然也有其他实现库）。。才能将react的性能发挥到极致！要是各位看官用过一段时间的react，而没有用immutable那么本文非常适合你。那么我开始吧！
#1.对于react的来说，父组建有多个子组建
想象一下这种场景，一个父组建下面一大堆子组建。然后呢，这个父组建re－render。是不是下面的子组建都得跟着re－render。可是很多子组建里面是冤枉的啊！！很多子组建的props 和 state 然而并没有改变啊！！虽然virtual dom 的diff 算法很快。。但是性能也不是这么浪费的啊！！下面我们上代码
##1.原始代码如下
以下是父组件代码。。负责输入name 和 age 然后循环显示name 和 age



       export default class  extends Component {
          constructor(props){
            super(props)
            this.state={
              name:"",
              age :"",
              persons:[]
            }
          }
          render() {
            const {name,age,persons} = this.state
            return (
              <div>
                <span>姓名:</span><input value={name} name="name" onChange={this._handleChange.bind(this)}></input>
                <span>年龄:</span><input value={age} name="age" onChange={this._handleChange.bind(this)}></input>
                <input type="button" onClick={this._handleClick.bind(this)} value="确认"></input>
                {persons.map((person,index)=>(
                  <Person key={index} name={person.name} age={person.age}></Person>
                ))}
              </div>
            )
          }
          _handleChange(event){
            this.setState({[event.target.name]:event.target.value})
          }
          _handleClick(){
            const {name,age} = this.state
            this.setState({
              name:"",
              age :"",
              persons:this.state.persons.concat([{name:name,age:age}])
            })

          }
        }

   以下是子组建代码单纯的显示name和age而已

    class Person  extends Component {
      componentWillReceiveProps(newProps){
        console.log(`我新的props的name是${newProps.name}，age是${newProps.age}。我以前的props的name是${this.props.name}，age是${this.props.age}是我要re-render了`);
      }
      render() {
        const {name,age} = this.props;

          return (
            <div>
              <span>姓名:</span>
              <span>{name}</span>
              <span> age:</span>
              <span>{age}</span>
            </div>
          )
      }
    }

运行起来长下图这个样
![图片描述][1]
好那么问题来了。。我们看一下控制台
![图片描述][2]
天哪，，这么多次re-reder..细细观看。。不难发现。组建的新props和旧props是一样的啊。。那么多么浪费性能，好。。PureRenderMixin出场
##2PureRenderMixin
要说这个东西之前哪。。我们得说下Mixin和Higher-Order Components（HOCs）
推荐看两篇文章[React Mixin 的前世今生][3] 和[Mixins Are Dead. Long Live Composition][4]其实这俩东西就够我写一篇文章的了
###Mixin


  [1]: /img/bVr7ow
  [2]: /img/bVr7xE
  [3]: http://zhuanlan.zhihu.com/purerender/20361937
  [4]: https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.f6e4uqoax
