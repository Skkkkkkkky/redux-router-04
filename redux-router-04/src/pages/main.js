import React ,{Component} from "react";
//将UI组件转为容器组件
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
//引入动作
import {increment,decrement,incrementSync,incrementSyncDoub} from "../modules/jishuqi.js";

class Main extends Component{
	render(){
		console.log(this.props);
		return <div>
			首页
			<h3>计数器</h3>
			<button onClick={this.props.increment}>加一</button>
			计数器的值为:{this.props.count}
			<button onClick={this.props.decrement}>减一</button>
			<button onClick={this.props.incrementSync}>延时加一</button>
			<button onClick={this.props.incrementSyncDoub}>延时加二</button>
		</div>
	}
}

//将state 的值映射到 props中
const mapStateToProps = state => ({
	count:state.jishuqi.count
})

//将props中的动作 映射到store 中
const mapDispatchToProps = dispatch => bindActionCreators({
	increment,decrement,incrementSync,incrementSyncDoub
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Main);