import React from 'react';

import './styles.css';

function Developer({developer}) {

    // or
    // function Developer(props) {
    // const { developer } = props;

    return(
        <li className="developer-card">
            <header>
            <img src={developer.avatar_url} alt={developer.name} />
            <div className="info">
                <strong>{developer.name}</strong>
                <span>{developer.technologies.join(', ')}</span>
            </div>
            </header>
            <p>{developer.bio}</p>
            <a href={`https://github.com/${developer.github_username}`}>Acessar perfil no Github</a>
        </li>
    )
}

export default Developer;