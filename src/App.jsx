import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Formik, Field, ErrorMessage } from "formik";
import schema from "./schema";

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <h1 lang="en">Frontend Travel</h1>

        <Formik
          validationSchema={schema}
          initialValues={{
            name: "",
            email: "",
            phone: "",
            cpf: "",
          }}
        >
          {() => (
            <form>
              <FormField>
                <h2>Dados Pessoais</h2>

                <div>
                  <label htmlFor="name">
                    Nome<i>*</i>:
                  </label>
                  <Field type="text" name="name" id="name"></Field>
                  <ErrorMessage name="name" />
                </div>

                <div>
                  <label htmlFor="email">
                    E-mail<i>*</i>:
                  </label>
                  <Field type="text" name="email" id="email"></Field>
                  <ErrorMessage name="email" />
                </div>

                <div>
                  <label htmlFor="phone">Telefone:</label>
                  <Field type="tel" name="phone" id="phone"></Field>
                </div>

                <div>
                  <label htmlFor="cpf">
                    CPF<i>*</i>:
                  </label>
                  <Field type="number" name="cpf" id="cpf"></Field>
                  <ErrorMessage name="cpf" />
                </div>
              </FormField>

              <FormField>
                <h2>Destinos de Interesse</h2>
                <select>
                  <option value="">Selecione um país</option>
                </select>

                <select>
                  <option value="">Selecione uma cidade</option>
                </select>
              </FormField>

              <button type="submit">Enviar</button>
            </form>
          )}
        </Formik>
      </Main>
    </>
  );
}

const Main = styled.main``;

const FormField = styled.div`
  border: 2px solid #000;
  margin-bottom: 10px;
`;

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    text-decoration: none;
  }
  
  html {
    font-size: 62.5%;
    background-color: theme.background;
    color: theme.color; 
  }
  body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ol, ul {
    list-style: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button,
  input[type=number] {
    -webkit-appearance: none;
    -moz-appearance: none;
    margin: 0;
  }
`;

export default App;
