import type {
	IncrementCounterMessage,
	IncrementCounterResult
} from '../messages/increment-counter/increment-counter.message';

const incrementCounterSignal = async (
	message: IncrementCounterMessage
): Promise<IncrementCounterResult> => {
	const result = await fetch('/api/increment-counter', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(message)
	});
	const data = await result.json();
	return new Promise((resolve) => resolve(data));
};

export default incrementCounterSignal;
