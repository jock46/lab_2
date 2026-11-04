// 1. Збереження даних у localStorage
function initLocalStorage() {
  const platform = navigator.platform || 'Unknown OS';
  const userAgent = navigator.userAgent || 'Unknown Browser';

  localStorage.setItem('sys_platform', platform);
  localStorage.setItem('sys_user_agent', userAgent);

  const footerInfo = document.getElementById('footer-sys-info');
  if (footerInfo) {
    const savedOs = localStorage.getItem('sys_platform');
    const savedUa = localStorage.getItem('sys_user_agent');
    footerInfo.innerHTML = `
      <strong>OS/Platform (localStorage):</strong> ${savedOs}<br>
      <strong>User Agent (localStorage):</strong> ${savedUa}
    `;
  }
}

// 2. Отримання коментарів (Варіант №22)
async function loadReviews() {
  const container = document.getElementById('reviews-container');
  if (!container) return;

  try {
    container.innerHTML = '<p style="color: #94a3b8;">Завантаження коментарів...</p>';

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/22/comments');
    if (!response.ok) throw new Error('Помилка завантаження');

    const comments = await response.json();
    container.innerHTML = '';

    comments.forEach((comment) => {
      const card = document.createElement('div');
      card.className = 'review-card';
      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
          <strong style="color: #60a5fa; text-transform: capitalize;">${comment.name}</strong>
          <small style="color: #64748b;">${comment.email}</small>
        </div>
        <p style="color: #cbd5e1; font-style: italic; margin: 0; font-size: 0.9rem;">"${comment.body}"</p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = `<p style="color: #f87171;">Помилка: ${error.message}</p>`;
  }
}

// 3. Модальне вікно (таймер 1 хв)
function initContactModal() {
  const modal = document.getElementById('contact-modal');
  const closeBtn = document.getElementById('close-modal-btn');

  if (!modal) return;
  if (sessionStorage.getItem('modal_closed')) return;

  setTimeout(() => {
    modal.style.display = 'flex';
  }, 60000);

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      sessionStorage.setItem('modal_closed', 'true');
    });
  }
}

// 4. Перемикач теми за часом
function initThemeSwitch() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');

  function applyThemeByTime() {
    const hours = new Date().getHours();
    if (hours >= 7 && hours < 21) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      if (themeToggleBtn) themeToggleBtn.innerText = '☀️ Денний режим (07:00–21:00)';
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      if (themeToggleBtn) themeToggleBtn.innerText = '🌙 Нічний режим';
    }
  }

  applyThemeByTime();

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      if (document.body.classList.contains('dark-theme')) {
        document.body.classList.replace('dark-theme', 'light-theme');
        themeToggleBtn.innerText = '☀️ Денний режим';
      } else {
        document.body.classList.replace('light-theme', 'dark-theme');
        themeToggleBtn.innerText = '🌙 Нічний режим';
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initLocalStorage();
  loadReviews();
  initContactModal();
  initThemeSwitch();
});