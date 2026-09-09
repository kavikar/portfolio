import './style.css';
import { experiences, skillCategories, certifications, projects } from './data.js';

// ===== Typed text animation =====
const typedPhrases = [
  'Software Quality Engineer',
  'SDET',
  'Test Infrastructure Builder',
  'AWS Cloud Practitioner',
];

function initTyped(): void {
  const el = document.querySelector<HTMLSpanElement>('.typed-text');
  if (!el) return;

  let phraseIdx = 0;
  let charIdx = 0;
  let deleting = false;

  const tick = (): void => {
    const phrase = typedPhrases[phraseIdx];
    el.textContent = deleting
      ? phrase.substring(0, charIdx--)
      : phrase.substring(0, charIdx++);

    let delay = deleting ? 50 : 90;

    if (!deleting && charIdx > phrase.length) {
      delay = 2000;
      deleting = true;
    } else if (deleting && charIdx < 0) {
      deleting = false;
      charIdx = 0;
      phraseIdx = (phraseIdx + 1) % typedPhrases.length;
      delay = 400;
    }

    setTimeout(tick, delay);
  };

  tick();
}

// ===== Navbar scroll effect =====
function initNavbar(): void {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Mobile toggle
  const toggle = navbar.querySelector<HTMLButtonElement>('.nav-toggle');
  const links = navbar.querySelector<HTMLUListElement>('.nav-links');
  toggle?.addEventListener('click', () => {
    links?.classList.toggle('open');
  });

  // Close on link click
  links?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

// ===== Scroll reveal =====
function initScrollReveal(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.timeline-item, .skill-category, .cert-card, .project-card')
    .forEach(el => observer.observe(el));
}

// ===== Counter animation =====
function animateCounter(el: HTMLElement, target: number, suffix = ''): void {
  const duration = 1800;
  const step = 16;
  const increment = target / (duration / step);
  let current = 0;

  const interval = setInterval(() => {
    current = Math.min(current + increment, target);
    el.textContent = Math.round(current) + suffix;
    if (current >= target) clearInterval(interval);
  }, step);
}

function initCounters(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset['target'] ?? '0', 10);
          const suffix = target >= 2 ? '+' : '';
          animateCounter(el, target, suffix);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll<HTMLElement>('.stat-number[data-target]')
    .forEach(el => observer.observe(el));
}

// ===== Render experience timeline =====
function renderTimeline(): void {
  const container = document.getElementById('timeline');
  if (!container) return;

  container.innerHTML = experiences.map(exp => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <span class="timeline-role">${exp.role}</span>
          <span class="timeline-period">${exp.period}</span>
        </div>
        <div class="timeline-company">${exp.company}</div>
        <p class="timeline-desc">${exp.description}</p>
        <div class="timeline-tags">
          ${exp.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// ===== Render skills =====
function renderSkills(): void {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  container.innerHTML = skillCategories.map(cat => `
    <div class="skill-category">
      <div class="skill-cat-icon">${cat.icon}</div>
      <div class="skill-cat-name">${cat.name}</div>
      <div class="skill-items">
        ${cat.skills.map(s => `<span class="skill-badge">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ===== Render certifications =====
function renderCertifications(): void {
  const container = document.getElementById('certs-grid');
  if (!container) return;

  container.innerHTML = certifications.map(cert => `
    <div class="cert-card">
      <div class="cert-icon">${cert.icon}</div>
      <div>
        <div class="cert-name">${cert.name}</div>
        <div class="cert-issuer">${cert.issuer}</div>
      </div>
    </div>
  `).join('');
}

// ===== Render projects =====
function renderProjects(): void {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = projects.map(p => `
    <div class="project-card">
      <div class="project-icon">${p.icon}</div>
      <div>
        <div class="project-name">${p.name}</div>
        <div class="project-period">${p.period}</div>
      </div>
      <p class="project-desc">${p.description}</p>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ===== Footer year =====
function setYear(): void {
  const el = document.getElementById('year');
  if (el) el.textContent = String(new Date().getFullYear());
}

// ===== Boot =====
document.addEventListener('DOMContentLoaded', () => {
  renderTimeline();
  renderSkills();
  renderCertifications();
  renderProjects();

  initTyped();
  initNavbar();
  initCounters();
  setYear();

  // Scroll reveal runs after DOM is populated
  requestAnimationFrame(() => initScrollReveal());
});
