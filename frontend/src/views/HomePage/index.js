import React, { useState } from "react";
import Logo from "../../assets/images/Logomarca_CLIO.jpg";
import UnityIcon from "../../assets/images/icon_unity.png";
import CardIcon from "../../assets/images/icon_cardboard.png";
import api from "../../services/api.js";

import Suggests from "../../components/Suggests";

import "./styles.css";

function HomePage() {
  const [sendSuggest, setSendSuggest] = useState("");
  const [name, setName] = useState("");
  const [posts, setPosts] = useState([
    {
      author: "Fulano",
      date: "20/09",
      suggest: "bal abla bla",
    },
    {
      author: "Fulano",
      date: "20/09",
      suggest: "bal abla bla",
    },
    {
      author: "Fulano",
      date: "20/09",
      suggest: "bal abla bla",
    },
    {
      author: "Fulano",
      date: "20/09",
      suggest: "bal abla bla",
    },
    {
      author: "Fulano",
      date: "20/09",
      suggest: "bal abla bla",
    },
    {
      author: "Fulano",
      date: "20/09",
      suggest: "bal abla bla",
    },
    {
      author: "Fulano",
      date: "20/09",
      suggest: "bal abla bla",
    },
    {
      author: "Fulano",
      date: "20/09",
      suggest: "bal abla bla",
    },
    {
      author: "Fulano",
      date: "20/09",
      suggest: "bal abla bla",
    },
    {
      author: "Fulano",
      date: "20/09",
      suggest: "bal abla bla",
    },
    {
      author: "Fulano",
      date: "20/09",
      suggest: "bal abla bla",
    },
    {
      author: "Fulano",
      date: "20/09",
      suggest: "bal abla bla",
    },
    {
      author: "Fulano",
      date: "20/09",
      suggest: "bal abla bla",
    },
    {
      author: "Fulano",
      date: "20/09",
      suggest: "bal abla bla",
    },
    {
      author: "Fulano",
      date: "20/09",
      suggest: "bal abla bla",
    },
  ]);

  async function getAllPosts() {}

  async function createPost() {}

  return (
    <div className="home-page-container">
      <header
        className="header-user"
        style={{
          display: "flex",
          flexDirection: "row",
          margin: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={Logo} alt="CLIO" height={150} />
      </header>
      <div className="content">
        <div className="banner-image">
          Conheça sobre o projeto CLIO criado e desenvolvido por alunos da
          Fundação Matias Machline na qual por meio do dele pretendem ensinar
          História para alunos com TDHA, ou, Transtorno de Déficit de Atenção
        </div>

        <div className="about-project">
          <h1>O que é TDAH?</h1>
          <p>
            {" "}
            O TDAH apresenta em si a desatenção, impulsividade e hiperatividade,
            entretanto, elas ocorrem em menor intensidade, o que torna seu
            diagnóstico bastante complicado pois estes são atitudes naturais do
            ser humano. Quanto mais jovem é o indivíduo, mais fica difícil
            definir se possui TDAH ou se somente não tem controle de si por
            conta da idade. Desse modo é verificado fatores como o grau de
            ocorrência dos sintomas do transtorno, caso apresentem uma grande
            intensidade, pode-se dizer se o paciente possui este problema. Mas
            também pode variar de qual fase da vida humana está sendo tratada,
            se é uma criança, um adolescente ou um adulto, cada um possui seu
            nível de desatenção e hiperatividade. Assim, estes sintomas são mais
            presentes no ambiente escolar e podem prejudicar os jovens no
            processo pedagógico das disciplinas, principalmente, de História.
            Conforme diz o vídeo do canal Nerdologia “A falta de atenção ou
            hiperatividade não era um problema no passado, mas hoje em dia, em
            um mundo onde crianças devem sentar, ficar quietas e concentradas na
            sala de aula é um problema, ainda mais quando a quantidade de
            distrações é maior” [IAMARINO, 2016]. O que evidencia o impacto
            negativo do transtorno na sala de aula. Também, o médico Drauzio
            Varella na série exibida no Fantástico diz que: “O TDAH acomete
            cerca de 4% das crianças, elas não param quietas, não prestam
            atenção nas aulas e vivem no ‘mundo da lua’ ”[VARELLA, 2013].{" "}
          </p>
          <h1>O que é Realidade Virtual?</h1>
          <p>
            {" "}
            a Realidade Virtual (RV) que proporciona a imersão num mundo
            tridimensional por meio de um óculos de RV e, muita das vezes,
            juntamente com um smartphone rodando a aplicação, percebe-se que
            muitos dos jovens se atraem por estes por terem um maior contato. Os
            softwares de RV buscam estimular nos seus usuários os sentidos
            auditivos, visuais e proporcionar interações no ambiente apresentado
            [COUTINHO, 2015]. Cada vez mais as tecnologias de RV tomam os
            espaços educacionais, como os museus e algumas escolas, a fim de
            promover um ensino de qualidade [SOARES, 2017]. Logo, aplicações
            desse estilo já vem tomando seu devido espaço em ambientes
            educacionais.
          </p>
          <h1>Por que aplicar um software em RV direcionado à História?</h1>
          <p>
            O software CLIO, que utiliza a Realidade Virtual (RV) como um
            mecanismo para auxiliar os professores no ensino de História com
            alunos que possuem TDAH. Desse modo, busca-se minimizar os impactos
            negativos do transtorno através de um tour num mundo tridimensional
            (3D) que retrata um momento histórico, e, acompanhado de uma
            personagem chamada Clio, a deusa grega da História, que explicará um
            assunto relacionado a disciplina, além de interagir por meio de
            perguntas, com pontuação a respeito do assunto, para verificar se o
            aluno estava prestando atenção na explicação do conteúdo e para
            instigá-lo a aprender mais, tornando-o o protagonista da história.
          </p>
        </div>
        <div className="about-group">
          <h1 style={{ textAlign: "center", fontSize: "24pt" }}>
            Integrantes da equipe
          </h1>
          <ul>
            <li>
              <img
                src="https://avatars0.githubusercontent.com/u/54730158?s=460&u=4e58cb7ee2df46ef5c12caf4d7af182865bdfa9a&v=4"
                alt="Ian Marcony"
              />{" "}
              <p>
                Ian é o programador da equipe e responsável por implementar todo
                o código e design definido por seus parceiros de equipe
              </p>
            </li>
            <li>
              <img
                src="https://instagram.fmao1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/106582964_2666188706960610_5520225715665204418_n.jpg?_nc_ht=instagram.fmao1-1.fna.fbcdn.net&_nc_ohc=jWD0FG-79IcAX_IukCr&oh=373901e84118dace90f45844799e7810&oe=5F8C5220"
                alt="Débora Maciel"
              />{" "}
              <p>
                Débora é a pesquisadora e analista, responsável por pesquisar os
                assuntos de história e quem produziu o roteiro na qual seguimos
                para ensinar História
              </p>
            </li>
            <li>
              <img
                src="https://lh3.googleusercontent.com/a-/AOh14GgiUl2YyUslDDGTC7iWcVVaHmRFG4gxUPKbik-a=s160-p-k-no-mo"
                alt="Pedro Gabriel"
              />{" "}
              <p>
                Pedro é o designer, é ele quem definiu os estilos e modelos
                usados na parte gráfica do software, além disso, ele também
                ajudou em idealizar partes do projeto e de como seria organizada
              </p>
            </li>
          </ul>
        </div>

        <div className="about-tech">
          <h1>Tecnologias Utilizadas</h1>
          <div id="group-tech">
            <div
              className="icon-group"
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#292626",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px",
              }}
            >
              <img src={UnityIcon} alt="Unity" />
              <footer
                style={{ backgroundColor: "#292626", textAlign: "center" }}
              >
                Unity
              </footer>
            </div>
            <p>
              A Unity é uma IDE para a produção de jogos no geral, ela
              disponibiliza ferramentas e recursos, como por exemplo, a criação
              de cenas/fases, códigos em scripts utilizando a Linguagem C#,
              mecanismos de física, sistema de Interface de Usuário, dá a
              possibilidade produzir softwares cross-platforms, manipulação de
              áudio e vídeo além de efeitos especiais.(EDUARDO, 2015). Esta
              Engine permite aos desenvolvedores possibilidades de evoluir de um
              jogo 2D até um jogo 3D, incluindo sistemas que utilizam o AR e VR.
              Ela permite uma produção rápida, possui uma documentação bem
              explicativa, possui uma loja de recursos que facilita o
              desenvolvimento.
            </p>
          </div>
          <div id="group-tech">
            <div
              className="icon-group"
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#292626",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px",
              }}
            >
              <img src={CardIcon} alt="Google Cardboard" />

              <footer
                style={{ backgroundColor: "#292626", textAlign: "center" }}
              >
                Google Cardboard
              </footer>
            </div>{" "}
            <p>
              Este é um projeto da empresa Google que continuamente recebe
              atualizações, com sua tecnologia, eles buscam promover o uso da
              Realidade Virtual e facilitar a vida de desenvolvimento. É
              distribuído às plataformas Java, Unity, Unreal, IOS. Além disso,
              com o uso do SDK fornecido por eles, o desenvolvedor pode aplicar
              em diversas situações e conseguir construir uma aplicação com
              muita qualidade e desempenho.(Google, 2019). Com este SDK de open
              source, a empresa busca promover a construção de sistemas
              cross-platform trazendo a experiência VR. Além disso, sua produção
              , em geral, é de baixo custo e desta forma a produção de um
              sistema fica mais fácil.(Google, 2019).
            </p>
          </div>
        </div>
        <div className="video-apresent">
          <h1>Conheça mais com este vídeo</h1>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KC8-sZJarL0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            backgroundColor: "#292626",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              backgroundColor: "#292626",
              margin: 10,
              fontSize: "24pt",
            }}
          >
            Sugestões
          </h1>{" "}
          <div
            className="form-suggests-group"
            style={{
              backgroundColor: "#292626",
              display: "flex",
              width: "100%",
              height: 300,
              justifyContent: "space-between",
            }}
          >
            {posts.length > 0 ? (
              <ul
                style={{
                  width: "50%",
                  height: "100%",
                  position: "relative",
                  float: "left",
                  overflow: "auto",
                  backgroundColor: "#292626",
                }}
              >
                {posts.map((item) => (
                  <Suggests
                    author={item.author}
                    date={item.date}
                    suggest={item.suggest}
                  />
                ))}
              </ul>
            ) : (
              <h1
                style={{
                  textAlign: "center",
                  backgroundColor: "#292626",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 10,
                  position: "relative",
                  float: "left",
                  fontSize: "24pt",
                  width: "50%",
                  height: "100%",
                }}
              >
                Sem Sugestões!!!
                <br />
                Caso queira, sugira algo legal para o projeto ser bem
                avançado!!!
              </h1>
            )}

            <form
              className="form-send-suggest"
              style={{ width: "50%", float: "right" }}
            >
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "12pt",
                  backgroundColor: "#292626",
                }}
              >
                Deixe aqui sua Sugestão
              </h1>
              <div
                className="group-input"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#292626",
                }}
              >
                <label
                  htmlFor="name"
                  style={{
                    textAlign: "left",
                    margin: 10,
                    backgroundColor: "#292626",
                  }}
                >
                  Seu nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={({ value }) => setName(value)}
                />
              </div>

              <div
                className="group-input"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#292626",
                }}
              >
                <label
                  htmlFor="sendSuggest"
                  style={{
                    textAlign: "left",
                    margin: 10,
                    backgroundColor: "#292626",
                  }}
                >
                  Escreva aqui
                </label>
                <textarea
                  id="sendSuggest"
                  value={sendSuggest}
                  onChange={({ value }) => setSendSuggest(value)}
                />
              </div>
              <button type="submit" id="button-form">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
