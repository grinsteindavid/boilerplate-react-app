import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li> {/* New link to Contact Page */}
      </ul>
    </nav>
  );
};

export default Navbar;