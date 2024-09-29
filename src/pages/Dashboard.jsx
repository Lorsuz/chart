import React from "react";
import GraphicProfit from "../components/GraphicProfit";
import GraphicOrder from "../components/GraphicOrder";
import styled from "styled-components";

function Dashboard({ data, order }) {
  return (
    <StyledComponent>
      <section className="expenseIncome">
        <div className="left">
          <h1>Balanço</h1>
          <span>Por mês</span>
          <div className="hr"></div>
          <h2>O balanço caiu 20% em março, mas se recuperou em outubro.</h2>
          <p>
            Visualize informações complicadas e densas com gráficos e tabelas.
            Eles são recursos visuais que ajudam a adicionar mais contexto ao
            assunto que você está discutindo.
          </p>
        </div>
        <div className="right">
          <GraphicProfit data={data}></GraphicProfit>
        </div>
      </section>
      <section className="">
        <div className="left">
          <h1>Sucesso em vendas</h1>
          <span>Por unidade</span>
          <div className="hr"></div>
          <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, ullam!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusamus ullam ab sequi, mollitia dolore, itaque ex pariatur sint similique iure earum fugiat nihil id accusantium quam reprehenderit natus ipsam.
          </p>
        </div>
        <div className="right">
          <GraphicOrder order={order}></GraphicOrder>
        </div>
      </section>
    </StyledComponent>
  );
}

const StyledComponent = styled.main`
  width: 100dvw;
	padding-top: 3rem;

  section {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
		align-items: center;
    padding: 2rem;
		min-height: 80dvh;
    .left {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 4rem;
      h1 {
        color: #019192;
        font-size: 3rem;
      }
      span {
        margin-bottom: 1.2rem;
        font-weight: 600;
        font-size: 1.2rem;
        color: #474747;
      }
      .hr {
        background: #ccc;
        height: 1px;
        margin-bottom: 2rem;
      }
      h2 {
        color: #019192;
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
      }
      p {
        color: #474747;
        font-size: 1.1rem;
        font-weight: 400;
      }
    }
    .right {
      flex: 1.3;
      padding: 0rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export default Dashboard;
