// src/App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Perguntas from './pages/Perguntas';
import Balance from './pages/Balance';
import styled from 'styled-components';
function App() {
  const [data, setData] = useState([]);

  return (
		<>
    <Router>
			<StyledComponent>
      <nav>
        <ul>
          <li><Link to="/">Perguntas</Link></li>
          <li><Link to="/balance">Gráficos</Link></li>
        </ul>
      </nav>
			</StyledComponent>
      <Routes>
        <Route path="/" element={<Perguntas setData={setData} />} />
        <Route path="/balance" element={<Balance data={data} />} />
      </Routes>
    </Router>
		</>
  );
}

const StyledComponent = styled.header`
	nav{
		background: #019192;
		padding: 1rem;
		ul{
			display: flex;
			justify-content: center;
			list-style: none;
			li{
				margin: 0 1rem;
				a{
					color: white;
					text-decoration: none;
					font-size: 1.2rem;
				}
			}
		}
	}
`;

export default App;
