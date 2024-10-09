import React from 'react';
import '../../css/App.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-text">Connect with us on social media:</p>
            <div className="social-icons">
                <a href="#" className="icon facebook" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="icon twitter" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="icon instagram" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="icon linkedin" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
            <p className="footer-note">© 2024 Venn. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
