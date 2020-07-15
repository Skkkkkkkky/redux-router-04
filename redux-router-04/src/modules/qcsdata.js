//qcs获取数据的纯函数
import axios from "axios";

//定义一个常量
const FETCH_SWIPER_DATA = "FETCH_SWIPER_DATA";
const FETCH_MIAOSHA_DATA = "FETCH_MIAOSHA_DATA";
const FETCH_NEW_DATA = "FETCH_NEW_DATA";

//纯函数
//Object.assert() 是对state的对象进行合并的方法
const qcsdata = (state={},action)=>{
	console.log("qcs纯函数运行了？？");
	switch(action.type){
		case FETCH_SWIPER_DATA: //获取轮播数据
			return Object.assign({},state,{swiperList:action.swiperList});
		case FETCH_MIAOSHA_DATA: //获取秒杀数据
			return Object.assign({},state,{miaoshaList:action.miaoshaList});
		case FETCH_NEW_DATA: //获取新数据
			return Object.assign({},state,{newList:action.newList});
		default:
			return state;
	}
}

/************************************************************************/
//动作
//获取轮播数据的动作
export function fetchSwiperList(){
	console.log("qcs获取轮播数据的函数运行了？？");
	return (dispatch)=>{
		return axios.get("aladdin/get_batch_data?codes=[%22%E4%B8%B4%E6%97%B6%22,%22chajian%22,%22newhome_10icon_one_img2%22,%22newhome_10icon_one_img1%22,%22new_Home_4navs_180105_1%22,%22Home_seckill%22]&version=&app_channel=wap&plat=wap&access_token=&device_id=646b29c0-6d74-11ea-9bcd-c53527f03e1c")
		.then(res=>{
			console.log(res);
			//将获取到的数据发送给纯函数
			dispatch({
				type:FETCH_SWIPER_DATA,
				swiperList:res.data.data.chajian.datas
			})
		})
	}
}
//获取秒杀数据的动作
export function fetchMiaoshaList(){
	console.log("qcs获取秒杀数据的动作运行了??");
	return (dispatch)=>{
		return axios.get("activity/specials/info?count=8&code=Home_flashSale__Top_Img&stock_code=&device_id=646b29c0-6d74-11ea-9bcd-c53527f03e1c").then(res=>{
			console.log(">>>>>>>>>",res);
			//将数据发送给纯函数
			dispatch({
				type:FETCH_MIAOSHA_DATA,
				miaoshaList:res.data.data.specials_item_v_o_s
			})
		});
	}
}
//获取新数据
export function fetchNewList(){
	console.log("qcs获取轮播数据的函数运行了？？");
	return (dispatch)=>{
		return axios.get("tms/aladdin/get?code=show_picture1&province_code=&city_code=&version=&app_channel=wap&plat=wap&access_token=&fringerprint_sm=WHJMrwNw1k%252FG0VV4OGdLXCcoygs7f3XYRw9v%252BwWsqn1wInhdps%252BNBNQ%252FHpSzssa2HF13gO9LOXzTKHH%252BF%252FJQV%252FwErG12xMNp7Nv2h6qHuX4uvvE2CY4%252FgWs5g8LyURrS6TZOJg5hGkZYfhwDCeHJsqFqRPoL7FhKirjl%252Bd2XxfVjdJ0NRuaupIlun%252BQ8yPtuMNmwgTPXDoBXd4ewSZ%252FGGE1uOin0ua3eG37e1qJ6A%252BAJ0JbW2V3IPOSy%252BI0d%252B1L2ikFbY1mRhwFJNDMFkC520HA%253D%253D1487582755342&fringerprint_td=eyJ2IjoiU1FPMUgyRmlHRzhXa0JHQk1Hd1hiREgxQUhyekpEa2dVNjA5R21iNjEwallyby91UDd0YjZhbUhOOEREeWFSUyIsIm9zIjoid2ViIiwiaXQiOjE3NzgsInQiOiJPN1lXN0xyT2FDbHY4czU3Q0JiajNNaGVwek1LTlRmQTNCUXpIMXhGOWRZQmlIUS9EeExycW1hYzQ1cnVCRk04NDV3c0V1OCtwU09EejRJUDlhbVEwZz09In0%253D&device_id=c5a56d10-bb42-11ea-85b6-47e42039dea2")
		.then(res=>{
			console.log("》》》》》》",res);
			//将获取到的数据发送给纯函数
			dispatch({
				type:FETCH_NEW_DATA,
				newList:res.data.data.datas
			})
		})
	}
}

export default qcsdata;