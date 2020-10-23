const menusidebar = document.querySelector('#header__sidebar');
const sidebar = document.querySelector('.sidebar');

menusidebar = addEventListener('click', function (event) {
	sidebar.classList.toggle('sidebar-visible');
});