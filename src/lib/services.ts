import RegisterHandler from '$lib/messages/register/register.handler';
import IncrementCounterHandler from '$lib/messages/increment-counter/increment-counter.handler';

const registerHandler = RegisterHandler();
const incrementCounterHandler = IncrementCounterHandler();

export { registerHandler, incrementCounterHandler };
