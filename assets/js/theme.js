// assets/js/theme.js
// 1) Immediately apply stored theme
(function() {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark-mode');
  }
})();

// 2) On DOM ready, wire up the toggle button
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  const icon = toggle.querySelector('i');

  // set initial icon
  const isDark = document.documentElement.classList.contains('dark-mode');
  icon.classList.toggle('fa-sun', isDark);
  icon.classList.toggle('fa-moon', !isDark);

  // click handler
  toggle.addEventListener('click', () => {
    const nowDark = document.documentElement.classList.toggle('dark-mode');
    localStorage.setItem('theme', nowDark ? 'dark' : 'light');
    icon.classList.toggle('fa-sun', nowDark);
    icon.classList.toggle('fa-moon', !nowDark);
  });
});
