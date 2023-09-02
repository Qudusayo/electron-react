import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>About Page</p>
        <Link to="/">Back to Home</Link>
      </header>
    </div>
  );
}

export default About;
