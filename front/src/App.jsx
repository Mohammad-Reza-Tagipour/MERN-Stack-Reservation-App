import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
function App() {
  // line 17 :id is unique id of hotel
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hotels" element={<List />}></Route>
        <Route path="/hotels/:id" element={<Hotel />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
