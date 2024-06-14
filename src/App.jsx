import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Register from "./components/Registration/Register";
import Login from "./components/Login/Login";
import BasicMath from "./components/BasicMath/BasicMath";
import "bootstrap/dist/css/bootstrap.min.css";
import Triangle from "./components/Geometry/Triangle/Triangle";
import Rectangle from "./components/Geometry/Rectangle/Rectangle";
import Circle from "./components/Geometry/Circle/Circle";
import Square from "./components/Geometry/Square/Square";
import Exam from "./components/Exam/Exam";
import AdminAut from "./components/AdminPanel/AdminPanelAutorize/AdminAut"
import Dashboard from "./components/AdminPanel/Dashboards/Dashboards";
import SelectLevelAndTheme from "./components/SelectLevelAndTheme/SelectLevelAndTheme";
import EditQuiz from "./components/AdminPanel/EditQuiz/EditQuiz";
import DevelopOfLogicThink from "./components/Dev_of_logic_think/Develop_of_logic_think";
import AddQuiz from "./components/AdminPanel/AddQuiz/AddQuiz";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/basic-math" element={<BasicMath />} />
        <Route path="/triangle" element={<Triangle />} />
        <Route path="/rectangle" element={<Rectangle />} />
        <Route path="/circle" element={<Circle />} />
        <Route path="/development-of-logical-thinking" element={<DevelopOfLogicThink />} />
        <Route path="/square" element={<Square />} />
        <Route path="/exam/:id_level/:id_themes" element={<Exam />} />
        <Route path="/adminEditQuestion/:id" element={<EditQuiz />} />
        <Route path="/admin" element= {<AdminAut/>}/>
        <Route path="/dashboards" element={<Dashboard/>} />
        <Route path="/choiceExam" element={<SelectLevelAndTheme/>} />
        <Route path="/addQuiz" element={<AddQuiz/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
