import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { PersonAdd } from "@material-ui/icons";

import { Link, Redirect } from "react-router-dom";

import "./styles.css";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [npassword, setNPassword] = useState("");

  const [validation, setValidation] = useState(false);

  function registerUser() {
    setValidation(true);
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
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
              }}
            >
              <PersonAdd style={{ fontSize: 30 }} />
              <h1>Registre-se</h1>
            </div>

            <form
              className="form-register"
              style={{
                marginTop: 20,
                marginBottom: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              onSubmit={registerUser}
            >
              <div className="group-input">
                <label htmlFor="username">Nome</label>
                <input
                  id="username"
                  value={username}
                  onChange={({ value }) => setUsername(value)}
                />
              </div>
              <div className="group-input">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  value={email}
                  onChange={({ value }) => setEmail(value)}
                />
              </div>
              <div className="group-input">
                <label htmlFor="Password">Digite sua senha</label>
                <input
                  id="Password"
                  value={password}
                  onChange={({ value }) => setPassword(value)}
                />
              </div>
              <div className="group-input">
                <label htmlFor="Password">Digite novamente sua senha</label>
                <input
                  id="Password"
                  value={npassword}
                  onChange={({ value }) => setNPassword(value)}
                />
              </div>

              <div className="button-group">
                <button type="submit">Registrar</button>
                <Link to="/">Voltar</Link>
              </div>
            </form>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default RegisterPage;
