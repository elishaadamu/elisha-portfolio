import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import Testimonials from "./Components/Testimonials";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Testimonials />
            <Contact />
        </div>
    );
}

export default App;
