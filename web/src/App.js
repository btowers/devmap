import React, {
	useState,
	useEffect
} from 'react';

import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DeveloperForm from './components/DeveloperForm';
import Developer from './components/Developer';

/**
 * Componente: Bloco isolado de HTML, CSS, JS, o qual não interfere no restante da aplicação;
 * Propriedade: Informações que um componente PAI passa para o componente FILHO;
 * Estado: Informações mantidas pelo componente (Lembrar: imutabilidade);
 */

function App() {

    const [developers, setDevelopers] = useState([]);

	useEffect(() => {
		async function load() {
			const api_response = await api.get('/developers');
			setDevelopers(api_response.data);
		}
		load();
	}, []);

	async function handleSubmit(data) {
		const api_response = await api.post('/developers', data);
		setDevelopers([...developers, api_response.data]);
	}

	return (
		<div id="app">
			<aside>
				<strong>Cadastrar</strong>
				<DeveloperForm onSubmit={handleSubmit} />
		  	</aside>
			<main>
				<ul>
					{developers.map(developer => (
						<Developer key={developer._id} developer={developer} />
					))}
				</ul>
			</main>
		</div>
	)
}

export default App;