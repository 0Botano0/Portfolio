const buttons = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
buttons.forEach(button => button.addEventListener('click', () => {
  buttons.forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  let count = 0;
  projects.forEach(project => { project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter; if (!project.hidden) count++; });
  document.querySelectorAll('[data-group]').forEach(group => { group.hidden = button.dataset.filter !== 'all' && group.dataset.group !== button.dataset.filter; });
  document.getElementById('filter-status').textContent = `แสดง ${count} ผลงาน`;
}));
document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
  const target = document.querySelector(link.getAttribute('href'));
  if (target?.closest('[hidden]')) document.querySelector('[data-filter="all"]').click();
}));
