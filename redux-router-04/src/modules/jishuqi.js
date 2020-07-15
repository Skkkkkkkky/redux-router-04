//创建计数器的纯函数
const initState = { count:10 }; //项目里一般初始值为对象

export default (state = initState,action) => {
	switch(action.type){
		case "INCREMENT":
			return {count:state.count + 1};
		case "DECREMENT":
			return {count:state.count - 1};
		case "DOUBLE":
			return {count:state.count + 2}
		default:
			return state;
	}
}

//动作
//加一
export const increment = () => {
	return {
		type:"INCREMENT"
	}
}
//减一
export const decrement = () => {
	return {
		type:"DECREMENT"
	}
}

//异步操作 延时加一
export const incrementSync = ()=> {
	return dispatch=>{
		return setTimeout(()=>{
			dispatch({
				type:"INCREMENT"
			})
		},1000)
	}
}
//异步操作 延时加二
export const incrementSyncDoub = ()=> {
	return dispatch=>{
		return setTimeout(()=>{
			dispatch({
				type:"DOUBLE"
			})
		},1000)
	}
}