import styled from "styled-components";
import demo from "../assets/demo.png";
const EventInfoCard = () => {
  return (
    <Wrapper>
      <div>
        <div className="container">
          <div className="wrapper">
            <div className="banner-image">
              <figure>
                <img src={demo} alt="" />
              </figure>
            </div>
            <h1>CODE-E-FESATA 2.0</h1>
            <p>
              Get ready to embark on a thrilling journey of coding challenges
              and fun! Here's what's waiting for you:
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default EventInfoCard;

const Wrapper = styled.section`
  
  padding: 2rem;
  font-family: "Lexend Deca Light";



  .container {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.25);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    padding: 15px;
    filter: drop-shadow(0 30px 10px rgba(0,0,0,0.125));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    text-align: center;
    width: 60%;
    height: 50%;
  }

  .wrapper {
    width: 70%;
    height: 40%;

  }

  .banner-image {
    height:auto;
    width: 100%;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255, 0.255)
    overflow:hidden;
    
    img{
      width: 100%;
      height: auto;
    }
  }
  
  

  h1{
    color: black;
    text-transform: uppercase;
    font-size: 30px;
  }

  p {
    color: #fff;
    text-align: center;
    font-size: 1.1rem;
    line-height: 150%;
    letter-spacing: 2px;    
  }

  .button-wrapper{
    margin-top: 18px;
  }

  .outline {
    background: transparent;
    color: rgba(0, 212, 255, 0.9);
    border: 1px solid rgba(0, 212, 255, 0.6);
    transition: all .3s ease;

  }

  .outline:hover{
    transform: scale(1.125);
    color: rgba(255, 255, 255, 0.9);
    border-color: rgba(255, 255, 255, 0.9);
    transition: all .3s ease;
  }

  .fill {
    background: rgba(0, 212, 255, 0.9);
    color: rgba(255,255,255,0.95);
    filter: drop-shadow(0);
    font-weight: bold;
    transition: all .3s ease;
  }

  .fill:hover{
    transform: scale(1.125);
    border-color: rgba(255, 255, 255, 0.9);
    filter: drop-shadow(0 10px 5px rgba(0,0,0,0.125));
    transition: all .3s ease;
  }
`;
