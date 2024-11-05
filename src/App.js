import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Introduce from "./pages/Introduce";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      
      <Header /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/introduce" element={<Introduce />} />
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
