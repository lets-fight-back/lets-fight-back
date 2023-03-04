import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const LoginHero = () => {
  return (
    <LoginHeroStyle>
      <h3 className="head_login">LOGIN</h3>
      <div className="cards_login">
        <div className="card_login">
          <h4 className="card_head">For Candidates</h4>
          <button className="login_btn_hero">Login</button>
          <div className="login_signup">
            <p>
              Don’t have an account? <br></br>
              <span className="signup_span"> Sign Up</span>{" "}
            </p>
          </div>
        </div>
        <div className="card_login">
          <h4 className="card_head">For Recruiters</h4>
          <button className="login_btn_hero" style={{background:"#298358"}}>Login</button>
          <div className="login_signup">
            <p>
              Don’t have an account? <br></br>
              <span className="signup_span" style={{color:"#298358"}}> Sign Up</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </LoginHeroStyle>
  );
};

export default LoginHero;

let LoginHeroStyle = styled.div(
  css`
    box-sizing: border-box;
    padding-bottom: 5.5rem;
    .head_login {
      padding-top: 3.5rem;
      font-size: 48px;
      line-height: 72px;
      text-align: center;
      font-weight: 700;
      margin-bottom: 3.75rem;
    }
    .cards_login {
      display: flex;
      justify-content: space-evenly;

    }
    .card_login {
      padding: 3rem 1rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-evenly;
      min-width: 25%;
      border: 1px solid rgba(0, 0, 0, 0.12);
      box-shadow: 6px 8px 25px rgba(0, 0, 0, 0.25);
      border-radius: 12px;

    }
    .card_head {
      font-size: 2rem;
      line-height: 4.8rem;
      font-weight: 700;
    }
    .login_signup {
      font-weight: 500;
      font-size: 18px;
      line-height: 150%;
      color: #212121;
      text-align: center;
    }
    .signup_span {
      color: #4653f6;
      font-weight: 700;
    }
    .login_btn_hero {
      background: #4653f6;
      border-radius: 12px;
      padding: 1rem 2.5rem;
      margin-bottom: 1rem;
      border: none;
      color: white;
      font-size: 1.25rem;
      line-height: 150%;
      font-weight: 600;
      cursor: pointer;
    }
    @media only screen and (max-width: 620px) {
        .head_login {
            padding-top: 1.5rem;
      margin-bottom: 0.75rem;
    }
        .cards_login {

     flex-direction: column;
    }
    .card_login {
    width: 80%;

    margin: 3rem  auto 0 auto;

    }
    }
  `
);