import React, { useState } from "react";

import { Link, Redirect } from "react-router-dom";

import { Container } from "@material-ui/core";
import { Lock as LockIcon } from "@material-ui/icons";

import api from "../../services/api.js";

import "./styles.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validation, setValidation] = useState(false);

  async function signinUser() {
    if (email === "" && password === "") return alert("Preencha os campos");

    try {
      const { status } = await api.post("/signin", { email, password });
      console.log(status);
      if (status) {
        setValidation(true);
        return <Redirect to="/home" />;
      }
    } catch {
      alert("Email e/ou Senha incorretos");
    }
  }

  if (validation) {
    return <Redirect to="/home" />;
  } else {
    return (
      <React.Fragment>
        <Container
          maxWidth="sm"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <div className="content">
            <div
              className="image-container"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LockIcon style={{ fontSize: 30 }} />
              <h1>CLIO</h1>
              <h3>Venha conhecer sobre!</h3>
            </div>
            <form
              className="form-signin"
              style={{
                marginTop: 20,
                marginBottom: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              onSubmit={signinUser}
            >
              <div className="group-input">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={({ value }) => setEmail(value)}
                />
              </div>
              <div className="group-input">
                <label htmlFor="Password">Senha</label>
                <input
                  id="Password"
                  type="password"
                  value={password}
                  onChange={({ value }) => setPassword(value)}
                />
              </div>

              <button type="submit">Entrar</button>
            </form>
            <Link to="/register">Criar conta</Link>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default LoginPage;
