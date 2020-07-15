import React from "react";
import {Link,Route} from "react-router-dom";
//引入页面
import Main from "./pages/main";
import About from "./pages/about";
import QcsMain from './pages/qcsmain';

//定义路由表
const App = ()=>(
		<div>
			<div>
				<Link to="/">首页</Link>
				<Link to="/about">关于我们</Link>
				<Link to="/qcsmain">qcs首页</Link>
			</div>
			<div>
				<Route path="/" exact={true} component={Main} />
				<Route path="/about" component={About} />
				<Route path="/qcsmain" component={QcsMain} />
			</div>
		</div>
)

export default App;