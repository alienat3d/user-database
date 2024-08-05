import { renderFunc } from "./render";
import { removeSortClasses } from "./helpers";

export const sortUsersFunc = () => {
	const table = document.querySelector('.table');
	const tableHeaders = table.querySelectorAll('thead th');
	const headerName = tableHeaders[1];
	const headerEmail = tableHeaders[2];
	const headerHaveChildren = tableHeaders[3];
	const headerHavePermissions = tableHeaders[4];
	let isSort = false;

	const sorting = (elem, sortName) => {
		elem.addEventListener('click', () => {
			// Для последней версии JSON-server
			// userService.getSortUsers(isSort ? 'children' : '-children')
			// 	.then(users => renderFunc(users));
			// Для версии JSON-server 0.17.3
			removeSortClasses();
			userService.getSortUsers({
				name: sortName,
				value: isSort ? 'asc' : 'desc'
			}).then(users => renderFunc(users));
	
			if (isSort) {
				elem.classList.remove('sort-desc');
				elem.classList.add('sort-asc');
			} else {
				elem.classList.remove('sort-asc');
				elem.classList.add('sort-desc');
			}
	
			isSort = !isSort;
		})
	}

	sorting(headerName, 'name');
	sorting(headerEmail, 'email');
	sorting(headerHaveChildren, 'children');
	sorting(headerHavePermissions, 'permissions');
}