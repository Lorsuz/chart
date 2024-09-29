import { useState } from "react";
import styled from "styled-components";

const Compras = ({ setOrder }) => {
  const items = [
    { id: 1, name: "Celular", price: 1500 },
    { id: 2, name: "Notebook", price: 3000 },
    { id: 3, name: "Teclado", price: 250 },
    { id: 4, name: "Mouse", price: 100 },
    { id: 5, name: "Fone de Ouvido", price: 200 },
  ];

  const [cart, setCartItems] = useState([]);

  const addToCart = (item) => {
    const purchaseTime = new Date().toLocaleString(); // Captura a data e hora atuais
    const itemWithTime = { ...item, time: purchaseTime }; // Adiciona o momento ao item

    setCartItems((prev) => [...prev, itemWithTime]);
    setOrder((prev) => [...prev, itemWithTime]);
  };

  return (
    <StyledComponent>
      <h1>Loja de Compras</h1>
      <ul className="items">
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>Preço: R${item.price}</p>
            <button onClick={() => addToCart(item)}>Comprar</button>
          </li>
        ))}
      </ul>
      <div className="orders">
        <h2>Pedidos feitos</h2>
        {cart.length === 0 ? (
          <p>Nenhum pedido realizado</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - R${item.price} <br />
                <small>Momento da compra: {item.time}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </StyledComponent>
  );
};

const StyledComponent = styled.main`
  padding: 2rem;
  h1 {
    color: #019192;
    font-size: 2.3rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  ul.items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      background-color: #f9f9f9;
      padding: 2rem 1.5rem;
      min-width: 200px;
      flex: 1;
      margin: 1rem;
      text-align: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      h3 {
        color: #333;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: #575959;
      }
      p {
        color: #434242;
        font-weight: 600;
        margin-bottom: 1rem;
        font-size: 1.2rem;
      }

      button {
        border: 2px solid #019192;
        color: #019192;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 0.5rem;
        font-weight: 600;
        transition: all 0.3s;
        width: 100%;

        &:hover {
          color: #fff;
          background-color: #019192;
        }
      }
    }
  }

  .orders {
    margin-top: 2rem;
    padding: 1rem;
    border-top: 2px solid #e2e2e2;
    h2 {
      color: #019192;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    p {
      color: #575959;
      font-size: 1.2rem;
    }
    ul {
      list-style: none;
			display: flex;
			gap: 1rem;
			flex-wrap: wrap;
      li {
        background-color: #f9f9f9;
        padding: 1rem;
        margin: 0.5rem 0;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        color: #575959;
        small {
          display: block;
          color: #a0a0a0;
          margin-top: 0.5rem;
        }
      }
    }
  }
`;

export default Compras;
