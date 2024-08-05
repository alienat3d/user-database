export const debounce = (func, delay = 700) => {
	let timer;

	return (...args) => {
		clearTimeout(timer);
		
		timer = setTimeout(() => { func.apply(this, args) }, delay);
	}
}

export const removeSortClasses = () => {
	const tableHeaders = document.querySelectorAll('thead th');
	tableHeaders.forEach(th => {
		if (th.classList.contains('sort-asc')) {
			th.classList.remove('sort-asc');
		} else if (th.classList.contains('sort-desc')) {
			th.classList.remove('sort-desc');
		}
	});
}