import React ,{Component} from 'react';
//引入动作
import {fetchSwiperList,fetchMiaoshaList,fetchNewList} from "../modules/qcsdata.js";
//将ui组件转容器组件
import {connect} from "react-redux";
//引入轮播插件
import MainSwiper from "../components/main/mainswiper";
import "./qcsmain.scss";
class QcsMain extends Component{
	//钩子函数中调用store动作
	componentDidMount(){
		console.log("钩子函数执行了");
		this.props.dispatch(fetchSwiperList());
		this.props.dispatch(fetchMiaoshaList());
		this.props.dispatch(fetchNewList());
	}
	render(){
		let {miaoshaList,newList} = this.props;
		return (
		<div>
			{/*轮播*/}
			<MainSwiper lunboList = {this.props.swiperList}></MainSwiper>
			<ul id="miaosha">
				{
					miaoshaList.map(item=><li key={item.item_id}>
						<img src={item.image_url} alt="666" />
					</li>)
				}
			</ul>
			<ul id="miaosha">
				{
					newList?newList.map(item=><li key={item.id}>
						<img src={item.image_url} alt="666" />
					</li>):""
				}
			</ul>
		</div>
		)
	}
}
//将 state中的值和 props中的值进行映射
const mapStateToProps = (state) =>{
	const swiperList = state.qcsdata.swiperList ||[];
	const miaoshaList = state.qcsdata.miaoshaList ||[];
	const newList = state.qcsdata.newList ||[];
	return {swiperList,miaoshaList,newList}
}

export default connect(mapStateToProps)(QcsMain);