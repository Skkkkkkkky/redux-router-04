//创建了一个纯函数的js

//合并状态树
import {combineReducers} from "redux";
//引入路由的状态树
import {routerReducer} from "react-router-redux";
//引入计数器的子树
import jishuqi from "./jishuqi";
//引入获取数据的子树
import qcsdata from "./qcsdata";

//输出
export default combineReducers({
	routerReducer,
	jishuqi,
	qcsdata
})