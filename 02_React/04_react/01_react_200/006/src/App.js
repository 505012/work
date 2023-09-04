import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Dept from "./pages/Dept";
import Add_Dept from "./pages/Add_Dept";
import Emp from "./pages/Emp";
import Add_Emp from "./pages/Add_Emp";
import { Routes, Route, Link } from "react-router-dom";

// 매뉴 라이브러리 추가
function App() {
  return (
    <div className="App">
      {/* 메뉴 */}
      {/*  */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page" >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/dept" class="nav-link" >
                  Dept
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/add-dept" class="nav-link" >
                Add Dept
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/emp" class="nav-link" >
                  Emp
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/add-emp" class="nav-link" >
                  Add Emp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 본문 */}
      <div>
        {/* 컴포넌트와 메뉴 url 연결 : 라우터(연결) */}
        <Routes>
          {/* 첫화면 url -> <Home/> 띄워라 */}
          <Route path="/" element={<Home />} />
          {/* /dept : dept url -> <Dept/> 띄워라 */}
          <Route path="/dept" element={<Dept />} />
          <Route path="/add-dept" element={<Add_Dept />} />
          <Route path="/emp" element={<Emp />} />
          <Route path="/add-emp" element={<Add_Emp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
