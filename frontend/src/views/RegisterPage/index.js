import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { PersonAdd } from "@material-ui/icons";

import { Link, Redirect } from "react-router-dom";

import api from "../../services/api.js";

import "./styles.css";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [npassword, setNPassword] = useState("");

  const [validation, setValidation] = useState(false);

  async function registerUser() {
    if (password !== npassword) return alert("As senhas não coincidem");

    const data = { name, email, password };
    try {
      const { status, created } = await api.post("/register", data);
      console.log(status, created);
      if (status === true && created === true) {
        setValidation(true);
        return <Redirect to="/home" />;
      }
    } catch {
      alert("Erro ao criar usuário");
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
              <div id="group-input">
                <label htmlFor="username">Nome</label>
                <input
                  id="username"
                  type="text"
                  value={name}
                  onChange={({ value }) => setName(value)}
                />
              </div>
              <div id="group-input">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={({ value }) => setEmail(value)}
                />
              </div>
              <div id="group-input">
                <label htmlFor="Password">Digite sua senha</label>
                <input
                  id="Password"
                  type="password"
                  value={password}
                  onChange={({ value }) => setPassword(value)}
                />
              </div>
              <div id="group-input">
                <label htmlFor="Password">Digite novamente sua senha</label>
                <input
                  id="Password"
                  type="password"
                  value={npassword}
                  onChange={({ value }) => setNPassword(value)}
                />
              </div>

              <div id="button-group">
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
