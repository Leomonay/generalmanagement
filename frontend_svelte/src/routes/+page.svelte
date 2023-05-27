<script>
	import GoogleLogin from '../components/GoogleLogin.svelte';
</script>

<h1 class="mb-5">GestionAPPL te da la bienvenida</h1>
<form class="w-80 max-w-xs p-2 border-2">
	<div class="form-control w-full">
		<label for="username" class="label">
			<span class="label-text">Ingresa tu usuario/email</span>
		</label>
		<input name="username" type="text" class="input input-bordered w-full max-w-xs" />
	</div>
	<div class="form-control w-full">
		<label for="password" class="label">
			<span class="label-text">Contraseña</span>
		</label>
		<input name="password" type="text" class="input input-bordered w-full max-w-xs" />
	</div>
</form>
<GoogleLogin />
