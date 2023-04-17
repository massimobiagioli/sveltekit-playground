import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { incrementCounterHandler } from '$lib/services';

export const POST = (async ({ request }) => {
	const { actualValue } = await request.json();
	const { newValue } = await incrementCounterHandler({ actualValue });
	return json({ newValue });
}) satisfies RequestHandler;
