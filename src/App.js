import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Particles from "react-particles-js";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Particles
      className="particles-canvas"
      params={{
        Particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width : 6,
              color: "#f9ab00" 
            }
          }
        }
      }} 
    />
    <Navbar/>
    <Header/>
    </>
  );
}

export default App;
