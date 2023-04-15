import type { RegisterMessage, RegisterResult } from './register.message';

const RegisterHandler =
	() =>
	async (message: RegisterMessage): Promise<RegisterResult> => {
		const { username, password } = message;
		return new Promise((resolve, reject) => {
			if (password !== 'pass123') {
				resolve({ success: false });
			}

			console.log(
				`*** Calling database to register user ${username} with password ${password} ***`
			);

			resolve({ success: true });
		});
	};

export default RegisterHandler;
