import React, { useState, useEffect } from 'react';

import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// Componente: Bloco isolado de HTML, CSS, JS, o qual não interfere no restante da aplicação;
// Propriedade: Informações que um componente PAI passa para o componente FILHO;
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade);

function App() {
  const [github_username, setGithubUsername] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  // useEffect() will be executed once if its array is empty, and when changes occur on that array
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // console.log(position.coords);
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => console.log(err),
      {timeout: 30000}
    );
  }, []);
  async function handleSubmit(event) {
    event.preventDefault();
    // console.log(event);
    const api_response = await api.post('/developers', {
      github_username,
      technologies,
      latitude,
      longitude
    });
    console.log(api_response);
  }
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" required value={github_username} onChange={event => setGithubUsername(event.target.value)} />
          </div>
          <div className="input-block">
            <label htmlFor="technologies">Tecnologias</label>
            <input name="technologies" required value={technologies} onChange={event => setTechnologies(event.target.value)} />
          </div>
          <div className="input-block-group">
            <div className="input-block">
              <label htmlFor="">Latitude</label>
              <input name="latitude" required value={latitude} onChange={event => setLatitude(event.target.value)} />
            </div>
            <div className="input-block">
              <label htmlFor="">Longitude</label>
              <input name="longitude" required value={longitude} onChange={event => setLongitude(event.target.value)} />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="developer-card">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/12952575?s=460&v=4" alt=""/>
              <div className="info">
                <strong>Bruno Torres</strong>
                <span>ReactJS, Angular, NodeJS</span>
              </div>
            </header>
            <p>Gosto bastante de aprender como as coisas funcionam e melhorar a vida das pessoas</p>
            <a href="https://github.com/btowers">Acessar perfil no Github</a>
          </li>
          <li className="developer-card">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/12952575?s=460&v=4" alt=""/>
              <div className="info">
                <strong>Bruno Torres</strong>
                <span>ReactJS, Angular, NodeJS</span>
              </div>
            </header>
            <p>Gosto bastante de aprender como as coisas funcionam e melhorar a vida das pessoas</p>
            <a href="https://github.com/btowers">Acessar perfil no Github</a>
          </li>
          <li className="developer-card">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/12952575?s=460&v=4" alt=""/>
              <div className="info">
                <strong>Bruno Torres</strong>
                <span>ReactJS, Angular, NodeJS</span>
              </div>
            </header>
            <p>Gosto bastante de aprender como as coisas funcionam e melhorar a vida das pessoas</p>
            <a href="https://github.com/btowers">Acessar perfil no Github</a>
          </li>
          <li className="developer-card">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/12952575?s=460&v=4" alt=""/>
              <div className="info">
                <strong>Bruno Torres</strong>
                <span>ReactJS, Angular, NodeJS</span>
              </div>
            </header>
            <p>Gosto bastante de aprender como as coisas funcionam e melhorar a vida das pessoas</p>
            <a href="https://github.com/btowers">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default App;