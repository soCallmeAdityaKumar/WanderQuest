import React, { useState } from "react";
import "./Navbar.scss";
import { SiYourtraveldottv } from "react-icons/si";
import { IoMdCloseCircle } from "react-icons/io";
import { IoReorderThree } from "react-icons/io5";

const Navbar = () => {

    const [active, setactive] = useState('navBar');

    const showNav = () => {
        setactive('navBar activeNavbar');
    }
    const closeNav = () => {
        setactive('navBar');
    }

    const [transparent, setTransparent] = useState('header');
    const addBg = () => {
      if(window.scrollY >= 10) {
        setTransparent('header activeHeader')
      }
      else{
        setTransparent('header')
      }
    }
    window.addEventListener('scroll', addBg)

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <a href="/" className="logo">
            <h1 className="flex">
              <SiYourtraveldottv className="icon" />
              Netropolis
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="/" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#popular" className="navLink">
                Popular
              </a>
            </li>
            <li className="navItem">
              <a href="#explore" className="navLink">
                Packages
              </a>
            </li>
            <li className="navItem">
              <a href="#footer" className="navLink">
                Contact
              </a>
            </li>

            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="/login">Login</a>
              </button>
              <button className="btn">
                <a href="/signup">SignUp</a>
              </button>
              <button className="btn">
                <a href="/">Logout</a>
              </button>
              <button className="btn">
                <a href="/form">Create Quest</a>
              </button>
            </div>
          </ul>
          <div className="closeNavbar" onClick={closeNav}>
            <IoMdCloseCircle className="icon" />
          </div>
        </div>

        <div className="toggleNavbar" onClick={showNav}>
        <IoReorderThree className="icon"/>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
