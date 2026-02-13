// ==========================================
// DREW.VIZ — Portfolio v3.0 Scripts
// Fixed: lightbox per category, 360 viewer, particles
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Navigation scroll effect ---
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  // --- Mobile menu ---
  const hamburger = document.querySelector('.nav__hamburger');
  const navLinks = document.querySelector('.nav__links');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // --- Portfolio filter ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const mainGallery = document.querySelector('.gallery');
  const galleryItems = mainGallery ? Array.from(mainGallery.querySelectorAll('.gallery__item')) : [];
  let activeFilter = 'interior'; // starts with interior active

  // Show initial filtered view
  applyFilter('interior');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      applyFilter(activeFilter);
    });
  });

  function applyFilter(filter) {
    galleryItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = '';
        requestAnimationFrame(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        });
      } else {
        item.style.opacity = '0';
        item.style.transform = 'translateY(10px)';
        setTimeout(() => item.style.display = 'none', 350);
      }
    });
  }

  // --- Lightbox (navigates ONLY within current category) ---
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox__img');
  const lightboxTitle = document.querySelector('.lightbox__info h3');
  const lightboxDesc = document.querySelector('.lightbox__info p');
  const lightboxClose = document.querySelector('.lightbox__close');
  const lightboxPrev = document.querySelector('.lightbox__prev');
  const lightboxNext = document.querySelector('.lightbox__next');

  let currentLightboxIndex = 0;
  let currentLightboxSet = []; // only visible images

  // Collect image data from all gallery items + timeline images
  const allClickableItems = document.querySelectorAll('.gallery__item, .timeline__image');

  allClickableItems.forEach(item => {
    const img = item.querySelector('img');
    if (!img) return;

    item.addEventListener('click', (e) => {
      e.stopPropagation();

      // Determine which set of images to navigate
      const parentGallery = item.closest('.gallery');
      const parentTimeline = item.closest('.timeline');

      if (parentGallery && parentGallery === mainGallery) {
        // MAIN GALLERY: only show visible items (current filter)
        currentLightboxSet = galleryItems
          .filter(gi => gi.style.display !== 'none')
          .map(gi => ({
            src: gi.querySelector('img').src,
            title: gi.querySelector('.gallery__overlay h3')?.textContent || '',
            desc: gi.querySelector('.gallery__overlay p')?.textContent || ''
          }));
        currentLightboxIndex = currentLightboxSet.findIndex(i => i.src === img.src);
      } else if (parentTimeline) {
        // DESIGN PROCESS TIMELINE: navigate within timeline images
        const timelineImages = Array.from(parentTimeline.querySelectorAll('.timeline__image'));
        currentLightboxSet = timelineImages.map(ti => {
          const info = ti.closest('.timeline__content')?.querySelector('.timeline__info');
          return {
            src: ti.querySelector('img').src,
            title: info?.querySelector('h3')?.textContent || '',
            desc: 'Gondor — Design Process'
          };
        });
        currentLightboxIndex = timelineImages.indexOf(item);
      } else {
        // FALLBACK: just show this one
        currentLightboxSet = [{
          src: img.src,
          title: '',
          desc: ''
        }];
        currentLightboxIndex = 0;
      }

      if (currentLightboxIndex < 0) currentLightboxIndex = 0;
      openLightbox();
    });
  });

  const lightboxCounter = document.querySelector('.lightbox__counter');

  function openLightbox() {
    const data = currentLightboxSet[currentLightboxIndex];
    if (!data) return;
    lightboxImg.src = data.src;
    if (lightboxTitle) lightboxTitle.textContent = data.title;
    if (lightboxDesc) lightboxDesc.textContent = data.desc;
    if (lightboxCounter) lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${currentLightboxSet.length}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function prevImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxSet.length) % currentLightboxSet.length;
    openLightbox();
  }
  function nextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxSet.length;
    openLightbox();
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  if (lightboxPrev) lightboxPrev.addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });
  if (lightboxNext) lightboxNext.addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  });

  // --- 360° Panorama Viewer (Pannellum) ---
  let viewer = null;
  const panoContainer = document.getElementById('panorama');
  const panoButtons = document.querySelectorAll('.viewer-360__btn');

  function initPanorama(imageUrl) {
    if (!panoContainer || typeof pannellum === 'undefined') return;
    if (viewer) { viewer.destroy(); viewer = null; }
    viewer = pannellum.viewer('panorama', {
      type: 'equirectangular',
      panorama: imageUrl,
      autoLoad: true,
      autoRotate: -2,
      compass: false,
      showZoomCtrl: true,
      showFullscreenCtrl: true,
      hfov: 110,
      minHfov: 50,
      maxHfov: 120,
      friction: 0.15,
      mouseZoom: true,
    });
  }

  // Lazy-load panorama when section becomes visible
  const panoSection = document.getElementById('pano360');
  if (panoSection && panoButtons.length > 0) {
    const panoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !viewer) {
          initPanorama(panoButtons[0].dataset.pano);
          panoObserver.disconnect();
        }
      });
    }, { threshold: 0.15 });
    panoObserver.observe(panoSection);
  }

  panoButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      panoButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      initPanorama(btn.dataset.pano);
    });
  });

  // --- Scroll reveal animations ---
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.08 });
  reveals.forEach(el => revealObserver.observe(el));

  // --- Staggered gallery item reveal ---
  const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        galleryObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });
  galleryItems.forEach(item => galleryObserver.observe(item));

  // --- Hero floating particles ---
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = (8 + Math.random() * 15) + 's';
      p.style.animationDelay = (Math.random() * 10) + 's';
      p.style.width = p.style.height = (1 + Math.random() * 2.5) + 'px';
      particlesContainer.appendChild(p);
    }
  }

  // --- Contact form → WhatsApp (XSS-safe) ---
  const form = document.querySelector('.contact__form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]')?.value || '';
      const email = form.querySelector('[name="email"]')?.value || '';
      const service = form.querySelector('[name="service"]')?.value || '';
      const message = form.querySelector('[name="message"]')?.value || '';
      const text = encodeURIComponent(`Hi! I'm ${name} (${email}).\n\nI'm interested in: ${service}\n\n${message}`);
      const phone = '51970773849';
      window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    });
  }

  // --- Active nav link on scroll + Back to top ---
  const sections = document.querySelectorAll('section[id]');
  const navLinksAll = document.querySelectorAll('.nav__links a');
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 100) {
        current = section.getAttribute('id');
      }
    });
    navLinksAll.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });

    // Show/hide back to top button
    if (backToTop) {
      backToTop.classList.toggle('visible', window.scrollY > 600);
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
