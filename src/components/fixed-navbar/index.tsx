import React from 'react';
import {Nav, NavMenu, NavLink, Logo} from './navbar.styles'
import logo from '../../components/images/optus.png'
const FixedNavBar = () => {
  return <>
    <div className="row row-image">
    <div className="col-lg-4">
          <Logo src={logo} alt="Logo"/>
        </div>
        <div className="col-lg-8">
          <Nav>
            <NavMenu>
              <NavLink to="/">Home Internet &amp; nbn&trade;</NavLink>
              <NavLink to="/shop">shop</NavLink>
              <NavLink to="/mobile">Mobile</NavLink>
              <NavLink to="/prepaid">Prepaid</NavLink>
              <NavLink to="/5G">5G</NavLink>
              <NavLink to="/homephone">Homephone</NavLink>
              <NavLink to="/entertainment">Entertainment</NavLink>
              <NavLink to="/livingnetwork">LivingNetwork</NavLink>
              <NavLink to="/extra">Extra</NavLink>
              <NavLink to="/helpandsupport">HelpandSupport</NavLink>
              <NavLink to="/deals">Deals</NavLink>
            </NavMenu>
          </Nav>
        </div>
      </div>
  </>;
};

export default FixedNavBar;
