import React, {
    useState,
    useEffect
} from 'react';

function DeveloperForm({onSubmit}) {

    const [github_username, setGithubUsername] = useState('');
    const [technologies, setTechnologies] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    
    useEffect(() => { // will be executed once if its array is empty, and when changes occur on that array
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const {
                    latitude,
                    longitude
                } = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => console.log(err), {
                timeout: 30000
            }
        );
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        await onSubmit({
			github_username,
			technologies,
			latitude,
			longitude
		});
		setGithubUsername('');
		setTechnologies('');
    }

	return (
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
	)
}

export default DeveloperForm;