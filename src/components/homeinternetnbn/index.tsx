import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getnbnPlans } from "../../redux/actioncreators/plancreators";
import { Plan } from "../__types__/types";
import infinity from '../../components/images/infinity.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
const HomeInternetNBN = (props: any) => {
  const nbndata = useSelector((state: any) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getnbnPlans());
  }, []);
  const SelectPlan = () => {
    navigate('/configurator')
  };
  return (
    <>
      <h2 style={{color:'black'}}>Step 2 - Choose your speed and month-to-month plan</h2>
      {nbndata.plans.map((plan: Plan) => {

        return (
          <div className="events card1">
            <div
              className={
                plan.name == "Internet Everyday" ||
                plan.name == "Internet Everyday Fast"
                  ? "events planHeaderBlue"
                  : plan.name == "Internet Gamer" ||
                    plan.name == "Internet Gamer Fast"
                  ? "events planHeaderBalck"
                  : plan.cost == 89 || plan.cost == 109
                  ? "events planHeaderYellow"
                  : ""
              }
            >
              <strong
                className={
                  plan.cost !== 89 && plan.cost !== 109
                    ? "everyEvent"
                    : plan.cost === 89 || plan.cost === 109
                    ? "everyEventEnt"
                    : ""
                }
              >
                {" "}
                {plan.name}
              </strong>
            </div>

           
            <div className="btnNBN50">
            <img src={infinity} alt="Unlimited Data infinity" className="infinity"/><p className="unlimited">Unlimited Data</p>
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

// const mapStateToProps = (state:any) =>{
//   return{
//     data: state.data
//   }
// }

// const mapDispatchToProps = (dispatch:any) =>{
//   return{
//     getPlans: dispatch(getnbnPlans())
//   }
//}
// export default connect(mapStateToProps,mapDispatchToProps)(HomeInterntNBN);
export default HomeInternetNBN;
