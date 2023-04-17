<script lang="ts">
	import { incrementCounterSignal } from "$lib/signals";

	let count: number = 0;

	async function handleClickClient() {
		count++;
	}

	async function handleClickServer() {
		const { newValue } = await incrementCounterSignal({ actualValue: count });
		count = newValue;
	}
</script>

<h1 class="m-10 text-3xl font-extrabold">Counter</h1>

<section class="m-10">
	<div class="mb-5">Count: {count}</div>
	<button
		on:click={handleClickClient}
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
	>
		Increment (Client)
	</button>
	<button
		on:click={handleClickServer}
		class="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
	>
		Increment (Server)
	</button>
</section>
