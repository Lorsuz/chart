import { useState } from "react";
import styled from "styled-components";
const Perguntas = ({ setData }) => {
  const [expense, setExpense] = useState("");
  const [income, setIncome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prevData) => [
      ...prevData,
      { expense: Number(expense), income: Number(income) },
    ]);
    setExpense("");
    setIncome("");
  };

  return (
    <StyledComponent>
      <h1>Registro de Gastos e Ganhos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Gasto:
            <input
              type="number"
              value={expense}
              onChange={(e) => setExpense(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Ganho:
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </StyledComponent>
  );
};

const StyledComponent = styled.main`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem;
  width: 100dvw;
	min-height: 80dvh;

  h1 {
    color: #019192;
    font-size: 2.3rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    > div {
      width: 100%;

      label {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 1.2rem;
        margin-bottom: 1rem;
        color: #019192;
				font-weight: 600;
        input {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border: 1px solid #ccc;
          border-radius: 0.2rem;
					&:focus{
						border: 1px solid #019192;
					}
        }
      }
    }
    button {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      background: #019192;
      color: white;
      border: none;
      border-radius: 0.2rem;
      width: 100%;
      cursor: pointer;
      font-size: 1.2rem;
    }
  }
`;

export default Perguntas;
