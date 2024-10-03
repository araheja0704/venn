import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from "prop-types";
import "../../css/navbar.scss";

const Navbar = ({ useScroll }) => {
  const topViewportRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(false);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(topViewportRef.current.getBoundingClientRect().top);
  }, [topViewportRef]);

  useEffect(() => {
    const updateScrollPosition = () => {
      const position = window.pageYOffset || document.documentElement.scrollTop;
      setScrollTop(top < position);
    };

    window.addEventListener("scroll", updateScrollPosition);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    }
  }, [top]);

  return (
    <div className='horizontal-nav'>
      {/* eslint-disable-next-line no-nested-ternary */}
      <div className={`nav-tabs ${useScroll ? (scrollTop ? "shadow-visible" : "shadow-hidden") : "shadow-visible"}`} ref={topViewportRef}>
        <NavLink to="/">
          <img src="https://www.michigandaily.com/wp-content/uploads/2024/09/2024electionslogo.png"
            alt="Michigan Daily 2024 Presidential Election logo" />
        </NavLink>
        <NavLink to="/voter-information">Voter Information</NavLink>
        <NavLink to="/federal">Federal Elections</NavLink>
        <NavLink to="/state">State Elections</NavLink>
        <NavLink to="/local">Local Elections</NavLink>
        <NavLink to="/election-results">Election Results</NavLink>
        <NavLink to="/faq">FAQ</NavLink>

      </div>
    </div>
  );
}

Navbar.propTypes = {
  useScroll: PropTypes.bool,
}

Navbar.defaultProps = {
  useScroll: false,
};

export default Navbar;