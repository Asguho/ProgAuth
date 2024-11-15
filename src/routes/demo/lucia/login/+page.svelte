<script lang="ts">
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { loginSchema, type LoginSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<LoginSchema>>;

	const form = superForm(data, {
		validators: zodClient(loginSchema),
		dataType: 'json'
	});

	const { form: formData, enhance } = form;
</script>

<h1 class="mb-3 mt-10 text-center text-4xl font-bold">Login</h1>
<form method="POST" use:enhance action="?/login" class="mx-auto max-w-xl">
	<Form.Field {form} name="userName">
		<Form.Control>
			{#snippet children({ props }: { props: any })}
				<Form.Label>Username</Form.Label>
				<Input {...props} bind:value={$formData.userName} />
			{/snippet}
		</Form.Control>
		<Form.Description>This is your public display name.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="password">
		<Form.Control>
			{#snippet children({ props }: { props: any })}
				<Form.Label>Password</Form.Label>
				<Input {...props} bind:value={$formData.password} />
			{/snippet}
		</Form.Control>
		<Form.Description>Must be at least 8 characters long.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Button>Login</Form.Button>
	<Form.Button formaction="?/register">Register</Form.Button>
</form>
