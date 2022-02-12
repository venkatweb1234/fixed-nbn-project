import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Configurator from "../configurator";
import Deals from "../deals";
import Entertainment from "../entertainment";
import Extra from "../extras";
import FixedNavBar from "../fixed-navbar";
import HelpandSupport from "../help&support";
import HomeInterntNBN from "../homeinternetnbn";
import HomePhone from "../homephone";
import LivingNetwork from "../livingnetwork";
import Mobile from "../mobile";
import Prepaid from "../prepaid";
import Shop from "../shop";
import FiveG from "../fiveg";
const FixedRoutes = () => {
  return <>
  <Router>
    <FixedNavBar />
      <Routes>
          <Route path ='/' element={<HomeInterntNBN/>}/>
          <Route path ='/shop' element={<Shop/>}/>
          <Route path ='/mobile' element={<Mobile/>}/>
          <Route path ='/prepaid' element={<Prepaid/>}/>
          <Route path ='/5G' element={<FiveG/>}/>
          <Route path ='/homephone' element={<HomePhone/>}/>
          <Route path ='/entertainment' element={<Entertainment/>}/>
          <Route path ='/livingnetwork' element={<LivingNetwork/>}/>
          <Route path ='/extra' element={<Extra/>}/>
          <Route path ='/helpandsupport' element={<HelpandSupport/>}/>
          <Route path ='/deals' element={<Deals/>}/>
          <Route path ='/configurator' element={<Configurator/>}/>
      </Routes>
  </Router>
  </>;
};

export default FixedRoutes;
