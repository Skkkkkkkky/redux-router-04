//创建仓库
//引入创建仓库的插件
/*
	createStore 创建仓库
	applyMiddleware 允许中间件
	compose??
*/
import {createStore,applyMiddleware} from "redux";
//引入路由的中间件
import {routerMiddleware} from "react-router-redux";
//引入logger的中间件
import logger from "redux-logger";
//引入history
import {createBrowserHistory} from "history";
//引入纯函数
import rootReducer from "./modules";
//引入异步操作的中间件
import thunk from "redux-thunk";

//创建历史记录
export const history = createBrowserHistory();

//注意:logger的中间件需要放在允许中间件的最后一个
export default createStore(
	rootReducer,
	applyMiddleware(routerMiddleware(history),thunk,logger)
)