import React from 'react';
import { HashRouter, Route } from "react-router-dom";
// import {About as Potato} from "./routes/About";

// function App() {
//   return <HashRouter>
//     <Route path="/about" component={Potato} />
//   </HashRouter>
// }

// export default App;
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return <HashRouter>
    {/* 여러 컴포넌트가 겹쳐서 랜더링 되는 것을 막기 위해서 exact={true}를 쓴다 */}
    {/* 왜냐하면 path를 비교하고 같은게 있으면 전부 랜더링 하기 때문이다 */}
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
  </HashRouter>
}

export default App;