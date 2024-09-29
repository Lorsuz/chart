import React from "react";
import Graphic from "../components/Graphic";
import styled from "styled-components";

function Balance({ data }) {
  return (
    <StyledComponent>
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
        <Graphic data={data}></Graphic>
      </div>
    </StyledComponent>
  );
}

const StyledComponent = styled.main`
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	padding: 2rem;
	width: 100dvw;
	.left{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 4rem;
		min-height: 80dvh;
		h1{
			color:#019192;
			font-size: 3rem;
		}
		span{
			margin-bottom: 1.2rem;
			font-weight: 600;
			font-size: 1.2rem;
			color: #474747;			
		}
		.hr{
			background: #ccc;
			height: 1px;
			margin-bottom: 2rem;
		}
		h2{
			color:#019192;
			margin-bottom: 1.5rem;
			font-size: 1.5rem;
			
		}
		p{
			color: #474747;
			font-size: 1.1rem;
			font-weight: 400;
		}
	}
	.right{
		flex: 1.3;
		padding: 0rem;
		height: 100%;
		min-height: 80dvh;
		display: flex;
		flex-direction: column;
		justify-content: center;

	}
`;

export default Balance;
