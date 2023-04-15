import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
    const initialData = { key1: 'value1', key2: 'value2' };
    return { initialData };
}) satisfies PageServerLoad;

export const actions = {
    register: async ({ request }) => {
        const formData = await request.formData()
        const username = formData.get('username');
        const password = formData.get('password');
        
        if (!username) {
            return fail(400, { username, missing: true });
        }

        if (password !== 'pass123') {
            return fail(400, { username, incorrect: true });
        }

        return { success: true, username };
    }
} satisfies Actions;