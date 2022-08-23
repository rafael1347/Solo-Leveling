import Navbar from "./Navbar";
import "./Layout.css";
import { useEffect, useState } from "react";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Layout = (props) => {
  const [visibility, setVisibility] = useState(false);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div>
      <div className="span">
        <Navbar />
        <div className="site-title">SOLO LEVELING MANGA ONLINE</div>
        <div className="site-underline"></div>
        <div className="site-description">
          Read Solo Leveling Online In High Quality
        </div>
      </div>
      <main className="main">{props.children}</main>
      <button
        className={visibility ? "scroll-To-Top" : "scroll-false"}
        onClick={scrollToTop}
      >
        ^
      </button>
    </div>
  );
};

export default Layout;
