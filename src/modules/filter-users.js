import { renderFunc } from "./render";
import { removeSortClasses } from "./helpers";

export const filterUsersFunc = () => {
	const table = document.querySelector('.table');
	const tableHeaders = table.querySelectorAll('thead th');
	const btnHaveChildren = document.querySelector('#btn-have-children');
	const btnHavePermission = document.querySelector('#btn-have-permission');
	const btnAll = document.querySelector('#btn-all');

	btnHaveChildren.addEventListener('click', () => {
		removeSortClasses();
		userService.filterUsers('children').then(users => renderFunc(users));
		// table.dataset.filter = 'children';
	})

	btnHavePermission.addEventListener('click', () => {
		removeSortClasses();
		userService.filterUsers('permissions').then(users => renderFunc(users));
		// table.dataset.filter = 'permissions';
	})

	btnAll.addEventListener('click', () => {
		removeSortClasses();
		userService.getUsers().then(users => renderFunc(users));
		// table.removeAttribute('data-filter');
	})
}