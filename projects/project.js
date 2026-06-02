document.addEventListener('DOMContentLoaded', () => {
  // 콘텐츠 섹션 스크롤 등장 애니메이션
  const sections = document.querySelectorAll('.content-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  sections.forEach((section, index) => {
    section.style.transitionDelay = `${index * 0.05}s`;
    observer.observe(section);
  });
});
