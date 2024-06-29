import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div style={{ height: "100vh", padding:"20px", backgroundColor: "#232323", color: "white" }}>
            <h1 style={{ fontSize:"48px", marginBottom: "20px" }}>Homepage</h1>
            <ul style={{ listStyle:"none", padding: "0" }}>
                <li style={{ marginBottom: "10px" }}>
                    <Link to="/welcomepage" style={{color: "#87CEFA", textDecoration: "none"}}>
                        WelcomePage
                    </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                    <Link to="/signupphase" style={{color: "#87CEFA", textDecoration: "none"}}>
                        Signup              </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                    <Link to="/loginphase" style={{color: "#87CEFA", textDecoration: "none"}}>
                        Login
                    </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                    <Link to="/workspacephase" style={{color: "#87CEFA", textDecoration: "none"}}>
                        WorkSpace
                    </Link>
                </li>

            </ul>
        </div>
    );
};
export default Home;