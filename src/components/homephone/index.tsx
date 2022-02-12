import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gethomephonePlans } from '../../redux/actioncreators/plancreators';
import { Plan } from '../__types__/types';
import infinity from '../../components/images/infinity.png'
import { useNavigate } from 'react-router-dom';

const HomePhone = () => {
    const datahomephone = useSelector((state:any) => state.datahomephone);
    const dispatch = useDispatch();
    useEffect(() => {dispatch(gethomephonePlans())}, [])
    const navigate = useNavigate()
    const SelectPlan = () => {
        navigate('/configurator')
      };
    return (
        <>
          <h2 style={{color:'black'}}>Step 2 - Choose your month to month plan</h2>
          {datahomephone.plansHomephone.map((plan: Plan) => {
    
            return (
              <div className="events card1">
                <div
                  className={
                    plan.name == "Phone Everyday"
                      ? "events planHeaderBlue"
                      : ""
                  }
                >
                  <strong
                    className={
                      plan.cost == 55
                        ? "everyEvent"
                       
                        : ""
                    }
                  >
                    {" "}
                    {plan.name}
                  </strong>
                </div>
    
               
                <div className="btnNBN50">
                <img src={infinity} alt="Unlimited Data Infinity" className="infinity"/><p className="unlimited">Unlimited Data</p>
                </div>
                <div className="card-mtm px-4">
                  <p className="mmp pt-2 mt-0">Month-to-month plan</p>
                  <hr className="border" />
                </div>
                <h2 style={{color:'black'}}>
                  ${(plan.cost).toFixed(2)}
                  <p style={{color:'black'}}>per month</p>
                </h2>
                <br />
                <p style={{color:'black'}}>Min.cost is ${plan.cost +252}&nbsp;</p>.
                <br/>
                <button className="SPmcost" onClick={SelectPlan}>Select Plan</button>
              </div>
            );
          })}
        </>
      );
};

export default HomePhone;
