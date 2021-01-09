import React, { useEffect } from "react";
import Links from "./Links";
import Signup from "./Signup";
import Logo from "./Logo";
import "./Nav.css";

const Nav = () => {
  // const [scrolling, setScrolling] = useState(false);
  const scrollTop = 50;

  useEffect(() => {
    const checkScroll = () => {
      let currentPosition = window.pageYOffset;
      if (currentPosition > scrollTop) {
        console.log("greater");
        document.getElementById("nav-id").classList.add("navOnScroll");
      }
      if (currentPosition <= scrollTop) {
        console.log("less");
        document.getElementById("nav-id").classList.remove("navOnScroll");
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => {
      console.log("cleanup");
      window.removeEventListener("scroll", checkScroll);
    };
  });
  return (
    <nav className="Nav-Grid-Container" id="nav-id">
      <Logo />
      <div>
        <Links link="How it works" />
        <Links link="Credit Cards and More" />
        <Links link="Investing" />
        <Links link="Loans" />
        <Links link="Resources" />
        <button className="login-btn">Login</button>
        <Signup link="Sign Up" />
      </div>
    </nav>
  );
};

export default Nav;
