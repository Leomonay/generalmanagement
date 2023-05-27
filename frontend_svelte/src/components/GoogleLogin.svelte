<script>
	import { onMount } from 'svelte';
	import { googleSignIn } from '../utils/auth'; // Crea este archivo para manejar el inicio de sesión

	onMount(() => {
		gapi.load('auth2', () => {
			gapi.auth2.init({
				client_id: 'TU_CLIENT_ID'
			});
		});
	});
</script>

<button on:click={googleSignIn}>Iniciar sesión con Google</button>
