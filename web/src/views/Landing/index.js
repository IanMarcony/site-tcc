import React, { Link } from "react";
import { LockRounded as Lock } from "@material-ui/icons";

function Landing() {
  return (
    <div className="landing-page-container">
      <div className="content">
        <img src={Lock} alt="SignIn" />
        <span>SignIn</span>
        <form className="signin-form">
          <div className="input-container">
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
          <div className="input-container">
            <label htmlFor="">Senha</label>
            <input type="password" />
          </div>
          <button type="submit"></button>
        </form>
        <Link to="/">Criar uma conta</Link>
      </div>
    </div>
  );
}

export default Landing;
