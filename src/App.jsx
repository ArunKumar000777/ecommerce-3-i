import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import BestDeals from "./components/BestDeals";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <NavBar />
            <Header />
            <BestDeals />
            <Footer/>
        </div>
    );
}

export default App;
