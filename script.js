document.addEventListener('DOMContentLoaded', () => {
  // 프로젝트 카드 스크롤 등장 애니메이션
  const cards = document.querySelectorAll('.project-card');

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.07}s`;
    cardObserver.observe(card);
  });

  // 현재 섹션에 맞춰 네비게이션 활성화
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  sections.forEach(section => navObserver.observe(section));
});
