import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { registerHandler } from '$lib/services';

export const load = (async () => {
    const initialData = { key1: 'value1', key2: 'value2' };
    return { initialData };
}) satisfies PageServerLoad;

export const actions = {
    register: async ({ request }) => {
        const formData = await request.formData()
        const username = formData.get('username') as string;
        const password = formData.get('password') as string;
        
        if (!username) {
            return fail(400, { username, missing: true });
        }

        const { success } = await registerHandler({ username, password });

        if (!success) {
            return fail(400, { username, incorrect: true });
        }

        return { success, username };
    }
} satisfies Actions;