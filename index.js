import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
    return (
        <div>
            Header
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            Footer
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <h1>FineDiningDash</h1>
            <h3>A Food Ordering Website</h3>
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);