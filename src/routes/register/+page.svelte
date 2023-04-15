<script lang="ts">
	import type { ActionData, PageData } from './$types';

	export let form: ActionData;

	export let data: PageData;
</script>

<h1 class="m-10 text-3xl font-extrabold">User Registration</h1>

<section class="m-10">
	<div>key1: {data.initialData.key1}</div>
	<div>key2: {data.initialData.key2}</div>
</section>

<section class="m-10">
	<form method="POST" action="?/register">
		{#if form?.missing}<p class="error">Username is missing</p>{/if}
		{#if form?.incorrect}<p class="error">Bad credentials</p>{/if}
		{#if form?.success}<p class="success">User was registered</p>{/if}
		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="username"> Username </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="username"
				name="username"
				type="text"
				placeholder="Username"
				value={form?.username ?? ''}
			/>
		</div>
		<div class="mb-6">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Password </label>
			<input
				class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
				id="password"
				name="password"
				type="password"
				placeholder="******************"
			/>
			<p class="text-red-500 text-xs italic">Please choose a password.</p>
		</div>
		<div class="flex items-center justify-between">
			<input
				type="submit"
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				value="Register"
			/>
		</div>
	</form>
</section>
