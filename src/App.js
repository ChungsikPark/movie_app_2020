import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
// as 를 사용해서 원하는대로 이름을 바꿔서 지정할 수 있다
// import {About as Potato} from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
  // BrowserRouter 와 HashRouter(주소에 /#/가 포함된다) 둘 중에 선택해서 쓰면 된다. 하지만 HashRouter가 github pages에서 설정하기에 더 용이하다.
  return <HashRouter>
    <Navigation />
    {/* 여러 컴포넌트가 겹쳐서 랜더링 되는 것을 막기 위해서 exact={true}를 쓴다 */}
    {/* 왜냐하면 path를 비교하고 같은게 있으면 전부 랜더링 하기 때문이다 */}
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="/movie/:id" component={Detail} />
  </HashRouter>
}

export default App;