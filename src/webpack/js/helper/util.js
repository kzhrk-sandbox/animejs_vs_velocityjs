export const getNumber = (string)=>{
	return parseInt(string, 10);
};

export const isSpView = ()=>{
	return matchMedia('(max-width: 768px)').matches;
};

export const enablePassiveEventListeners = ()=>{
	let result = false;

	const opts = Object.defineProperty && Object.defineProperty({}, 'passive', {
		get: ()=>{
			result = true;
		}
	});

	document.addEventListener('test', ()=>{}, opts);

	return result;
};