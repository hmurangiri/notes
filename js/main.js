const menuItems = [
  {label: 'Home', url: '/'},
  {label: 'About', url: '/about'},
  {label: 'Services', url: '/services'},
  {label: 'Contact', url: '/contact'}
];

// Generate the HTML code for the menu
function generateMenu() {
  let menuHtml = '';
  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    menuHtml += `<li><a href="${menuItem.url}">${menuItem.label}</a></li>`;
  }
  document.getElementById('menu').innerHTML = menuHtml;
}
