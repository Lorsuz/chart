import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";

import ExpenseIncomeForm from "./pages/ExpenseIncomeForm";
import Shopping from "./pages/Shopping";
import Dashboard from "./pages/Dashboard";

function App() {
  const [data, setData] = useState([]);
	const [order, setOrder] = useState([]);

  return (
    <>
      <Router>
        <StyledComponent>
          <nav>
            <ul>
              <li>
                <Link to="/">Formulário</Link>
              </li>
              <li>
              </li>
              <li>
                <Link to="/shopping">Compras</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>
        </StyledComponent>
        <Routes>
          <Route path="/" element={<ExpenseIncomeForm setData={setData} />} />
          <Route path="/shopping" element={<Shopping setOrder={setOrder} />} />
          <Route path="/dashboard" element={<Dashboard order={order} data={data} />} />
        </Routes>
      </Router>
    </>
  );
}

const StyledComponent = styled.header`
		width: 100dvw;
  nav {
    background: #019192;
    padding: 1rem;
    ul {
      display: flex;
      justify-content: center;
      list-style: none;
      li {
        margin: 0 1rem;
        a {
          color: white;
          text-decoration: none;
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export default App;
