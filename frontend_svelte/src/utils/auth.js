export function googleSignIn() {
	const auth2 = gapi.auth2.getAuthInstance();

	auth2.signIn().then((user) => {
		const id_token = user.getAuthResponse().id_token;

		// Aquí puedes enviar el token a tu backend para verificarlo y autenticar al usuario
		// Puedes usar una llamada a la API fetch o una biblioteca como axios para enviar el token al servidor
		// Ejemplo con fetch:
		fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ token: id_token })
		}).then((response) => response.json());
	});
}
