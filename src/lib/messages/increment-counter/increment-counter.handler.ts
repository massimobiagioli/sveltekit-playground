import type { IncrementCounterMessage, IncrementCounterResult } from './increment-counter.message';

const IncrementCounterHandler =
	() =>
	async ({ actualValue }: IncrementCounterMessage): Promise<IncrementCounterResult> => {
		console.log(`*** IncrementCounterHandler: ${actualValue}`);
		return new Promise((resolve) => resolve({ newValue: actualValue + 1 }));
	};

export default IncrementCounterHandler;
