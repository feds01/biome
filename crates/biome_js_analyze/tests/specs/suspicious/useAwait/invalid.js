async function fetchData() {
	return fetch('/data');
}

(async function fetchDataImmediate() {
	return fetch('/data');
})();

const obj = {
	async fetchData() {
		return fetch('/data');
	},
};

class DataFetcher {
	async fetchData() {
		return fetch('/data');
	}
}

async function outer() {
	async function innerFetchData() {
		return fetch('/data');
	}
}

async function outer() {
	async function innerFetchData() {
		return fetch('/data');
	}
	return fetch('/another-data');
}

async function outer() {
	async function innerFetchData() {
		return await fetch('/data');
	}
	return fetch('/another-data');
}

async function complexFunction() {
	const obj = {
		async fetchData() {
			return fetch('/data');
		},
	};

	class NestedDataFetcher {
		async fetchData() {
			return fetch('/data');
		}
	}

	if (a === 'a') {
		return fetch('condition-data');
	}
}

async function withoutForAwait () {
	let sum = 0;
	for (const n of [1, 2, 3]) {
		sum += n
	}
	return sum;
};

function Sample(validator) {
	return (
		_,
		__,
		descriptor
	) => {
		const originalMethod = descriptor.value;
		validator()
		descriptor.value = async (...args) => originalMethod.apply(this, args);
		return descriptor;
	};
}

class Sample {
	@Sample()
	async decoratedBreaks() {
		return true;
	}

	@Sample(() => true)
	async decoratedWithCallbackBreaks() {
		return true;
	}
}
