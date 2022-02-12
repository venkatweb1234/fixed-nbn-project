import {
  IMG,
  Maindiv,
  StyledBtn,
  StyleddivImage,
  StyledP,
  StyledPara1,
  StyledPara2,
} from "../header/header.styles";
import logo from '../../components/images/optus.png'


const Header = () => {
  const ModalOpen = () =>{
    alert('ModalOpen');
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <StyleddivImage />
            <Maindiv>
              <IMG src={logo} alt="Logo" />
              <StyledP>
                Internet on day dot
              </StyledP>
              <StyledPara1>
                It starts with 4G, 5G and NBN home internet that gets you going
                from day one
              </StyledPara1>
              <StyledPara2 onClick={ModalOpen}>T&Cs apply</StyledPara2>
              <StyledBtn>Find out more</StyledBtn>
            </Maindiv>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
