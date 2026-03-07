// =============================================
// CORNER STONE INFRA TECH - Enhanced Script
// =============================================

document.addEventListener('DOMContentLoaded', function () {
  lucide.createIcons();

  initHeader();
  initScrollReveal();
  initServices();
  initFinishingServices();
  initPortfolio();
  initTestimonials();
  initContact();
  initFooter();
  initSmoothScrolling();
  injectWhatsAppFloat();
  initCounterAnimation();
});

// ─────────────────────────────────────────
// WhatsApp helper
// ─────────────────────────────────────────
function sendWhatsAppMessage(serviceTitle = '') {
  const num = '919581026463';
  const msg = serviceTitle
    ? `Hi! I'm interested in your ${serviceTitle} service. Please provide more details.`
    : `Hi! I want to know more about your construction services.`;
  window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ─────────────────────────────────────────
// WhatsApp Floating Button
// ─────────────────────────────────────────
function injectWhatsAppFloat() {
  const el = document.createElement('div');
  el.className = 'whatsapp-float';
  el.innerHTML = `
    <a href="https://wa.me/919581026463?text=Hi!%20I'm%20interested%20in%20your%20construction%20services."
       target="_blank" class="whatsapp-float-btn" aria-label="Chat on WhatsApp">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.991 1.523A9.9 9.9 0 003.01 14.947a9.9 9.9 0 001.49 5.132L2.898 22l5.262-1.438a9.868 9.868 0 004.788 1.22h.005c5.445 0 9.877-4.433 9.877-9.877 0-2.638-.997-5.123-2.813-6.998a9.857 9.857 0 00-7.214-2.989z"/>
      </svg>
    </a>
    <span class="whatsapp-float-tooltip">Chat with us!</span>
  `;
  document.body.appendChild(el);
}

// ─────────────────────────────────────────
// Header
// ─────────────────────────────────────────
function initHeader() {
  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const menuIcon = document.getElementById('menu-icon');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    menuIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
    lucide.createIcons();
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuIcon.setAttribute('data-lucide', 'menu');
      lucide.createIcons();
    });
  });
}

// ─────────────────────────────────────────
// Scroll Reveal (Intersection Observer)
// ─────────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  // Observe section headers and other elements
  document.querySelectorAll('.section-header, .about-content, .value-item, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
  });
}

// ─────────────────────────────────────────
// Counter Animation
// ─────────────────────────────────────────
function initCounterAnimation() {
  const stats = document.querySelectorAll('.stat-value');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const raw = el.textContent.trim();
      const num = parseFloat(raw.replace(/[^0-9.]/g, ''));
      const suffix = raw.replace(/[0-9.]/g, '');
      if (isNaN(num)) return;

      let start = 0;
      const duration = 1800;
      const step = timestamp => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = num <= 10 ? (ease * num).toFixed(1) : Math.floor(ease * num);
        el.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = raw;
      };
      requestAnimationFrame(step);
      observer.unobserve(el);
    });
  }, { threshold: 0.6 });

  stats.forEach(el => observer.observe(el));
}

// ─────────────────────────────────────────
// Services
// ─────────────────────────────────────────
function initServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;

  const mainServices = [
    {
      icon: 'hard-hat',
      title: 'Building & Civil Works',
      description: 'All kinds of construction and structural services from foundation to finish.',
      image: 'https://uploads.onecompiler.io/42u9xvqj6/44eyfwg5r/hero.webp',
      features: ['Residential Building Construction', 'Commercial Building Construction', 'Structural Works', 'Foundation & Concrete Works', 'Masonry Works', 'Price will be negotiated'],
      contactPrimary: '9581026463', contactSecondary: '7893209610'
    },
    {
      icon: 'home',
      title: 'Interior Design & Planning',
      description: 'Creative and functional interior solutions tailored to your lifestyle. Interior design starts from Rs.450/',
      image: 'https://uploads.onecompiler.io/42u9xvqj6/44ffkbmag/images%20(4).jpg',
      features: ['Space Planning', 'Interior Design Concepts', 'False Ceiling & Wall Designs', 'Modular Furniture Planning', 'Starting from Rs.450/'],
      contactPrimary: '9581026463', contactSecondary: '7893209610'
    },
    {
      icon: 'tool',
      title: 'Renovation & Remodeling',
      description: 'Upgrade and refresh your existing spaces with modern craftsmanship.',
      image: 'https://uploads.onecompiler.io/42u9xvqj6/44ffkbmag/13-Nov-24-Renovation-vs-remodeling1.webp',
      features: ['Home Renovation', 'Building Remodeling', 'Structural Repairs', 'Interior Upgrades', 'Price will be negotiated'],
      contactPrimary: '9581026463', contactSecondary: '7893209610'
    },
    {
      icon: 'road',
      title: 'Infrastructure Works',
      description: 'Developing essential civil infrastructure with precision and durability.',
      image: 'https://uploads.onecompiler.io/42u9xvqj6/44ffkbmag/1754904793579.png',
      features: ['Roads & Drainage', 'Compound Walls', 'Site Development', 'Utility Installations', 'Price will be negotiated'],
      contactPrimary: '9581026463', contactSecondary: '7893209610'
    },
    {
      icon: 'clipboard',
      title: 'Project Management',
      description: 'End‑to‑end planning, supervision, and delivery of your construction project.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      features: ['Construction Planning', 'Site Supervision', 'Cost Estimation', 'Quality Control', 'Price will be negotiated'],
      contactPrimary: '9581026463', contactSecondary: '7893209610'
    }
  ];

  mainServices.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'service-card reveal';
    card.style.transitionDelay = `${i * 80}ms`;
    card.innerHTML = buildServiceCard(s);
    grid.appendChild(card);
  });

  observeReveal(grid.querySelectorAll('.reveal'));
  lucide.createIcons();
}

function initFinishingServices() {
  const grid = document.getElementById('finishing-services-grid');
  if (!grid) return;

  const finishingServices = [
    {
      icon: 'droplet',
      title: 'Painting & Finishes',
      description: 'Comprehensive painting services including specialized smoke design, royal play, and aqua silk finishes.',
      image: 'https://uploads.onecompiler.io/42u9xvqj6/44f9bu7pt/Painting-Contractors-FI-1.webp',
      features: ['Painting works', 'Smoke design', 'Royal play designs', 'Aqua silk paints', 'Price will be negotiated']
    },
    {
      icon: 'droplets',
      title: 'Plumbing Work',
      description: 'Complete house plumbing solutions including bathroom & kitchen pipelines, sanitary ware, leak detection & repair.',
      image: 'https://uploads.onecompiler.io/42u9xvqj6/44f9bu7pt/0602030005-01-Plumbers.jpg',
      features: ['Complete house plumbing solutions', 'Bathroom & kitchen pipeline', 'Sanitary ware fitting', 'CPVC/UPVC/PVC piping', 'Price will be negotiated']
    },
    {
      icon: 'zap',
      title: 'Electrical Wiring & Lighting',
      description: 'Complete electrical wiring with fire-resistant cables, modular switches, and energy-efficient LED lighting.',
      image: 'https://uploads.onecompiler.io/42u9xvqj6/44f9bu7pt/switchboards-electrician.jpg',
      features: ['Concealed & open wiring systems', 'FRLS fire-resistant cables', 'Modular switches & fittings', 'LED energy-efficient lighting', 'Price will be negotiated']
    }
  ];

  finishingServices.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'service-card reveal';
    card.style.transitionDelay = `${i * 100}ms`;
    card.innerHTML = buildServiceCard(s);
    grid.appendChild(card);
  });

  observeReveal(grid.querySelectorAll('.reveal'));
  lucide.createIcons();
}

function buildServiceCard(s) {
  return `
    <div class="service-image-container">
      <img src="${s.image}" alt="${s.title}" class="service-image" loading="lazy">
      <div class="service-overlay"></div>
      <div class="service-icon"><i data-lucide="${s.icon}"></i></div>
    </div>
    <div class="service-content">
      <h3 class="service-title">${s.title}</h3>
      <p class="service-description">${s.description}</p>
      <div class="service-features">
        ${s.features.map(f => `
          <div class="service-feature">
            <div class="service-feature-dot"></div>
            <span class="service-feature-text">${f}</span>
          </div>`).join('')}
      </div>
      ${s.contactPrimary ? `
        <div class="service-contact">
          <strong>📞 Contact:</strong> ${s.contactPrimary}${s.contactSecondary ? ' / ' + s.contactSecondary : ''}
        </div>` : ''}
      <button class="service-button" onclick="sendWhatsAppMessage('${s.title}')">
        Know More &rarr;
      </button>
    </div>
  `;
}

// ─────────────────────────────────────────
// Portfolio
// ─────────────────────────────────────────
function initPortfolio() {
  const grid = document.getElementById('portfolio-grid');
  const filterContainer = document.getElementById('portfolio-filters');
  if (!grid) return;

  const projects = [
    {
      id: 1, title: 'Gajuwaka Residency', category: 'residential', location: 'Gajuwaka',
      image: 'https://uploads.onecompiler.io/42u9xvqj6/44f9bu7pt/WhatsApp%20Image%202026-03-03%20at%2012.42.15.jpeg',
      description: 'Crafted with superior materials and engineered for lasting structural strength. Modern residential project in prime location — Malabar Gold Back Side, Beside Sri Kanya Theatre.',
      likes: 120, views: 850
    },
    {
      id: 2, title: 'Luxury Apartment', category: 'luxury', location: 'Visakhapatnam',
      image: 'https://uploads.onecompiler.io/42u9xvqj6/44fc9f7hf/WhatsApp%20Image%202026-03-03%20at%2022.45.32.jpeg',
      description: 'Premium apartments featuring Vizag Steel, Ramco Cement, and high-end finishes. Located at Dath Sai Nagar, Mangalam Duvvada Kurmanpallem.',
      likes: 95, views: 640
    },
    {
      id: 3, title: 'Modern Villa', category: 'modern', location: 'Steel Plant Area',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Custom-built villa with Sudhakar plumbing, Legrand electrical fittings, and premium interior design.',
      likes: 150, views: 1200
    }
  ];

  // Build filter buttons
  const categories = ['all', ...new Set(projects.map(p => p.category))];
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (cat === 'all' ? ' active' : '');
    btn.setAttribute('data-filter', cat);
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    filterContainer.appendChild(btn);

    btn.addEventListener('click', () => {
      filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filtered = cat === 'all' ? projects : projects.filter(p => p.category === cat);
      renderProjects(filtered);
    });
  });

  renderProjects(projects);

  function renderProjects(list) {
    grid.innerHTML = '';
    list.forEach((p, i) => {
      const item = document.createElement('div');
      item.className = 'portfolio-item';
      item.style.animationDelay = `${i * 100}ms`;
      item.innerHTML = `
        <div class="portfolio-image-container">
          <img src="${p.image}" alt="${p.title}" class="portfolio-image" loading="lazy">
          <div class="portfolio-overlay">
            <div class="portfolio-overlay-content">
              <span class="portfolio-location"> ${p.location}</span>
              <a href="#contact" class="portfolio-link"><i data-lucide="external-link"></i></a>
            </div>
          </div>
        </div>
        <div class="portfolio-content">
          <h3 class="portfolio-title">${p.title}</h3>
          <p class="portfolio-description">${p.description}</p>
          <div class="portfolio-meta">
            <div class="portfolio-stats">
              <div class="portfolio-stat"><i data-lucide="heart"></i><span>${p.likes}</span></div>
              <div class="portfolio-stat"><i data-lucide="eye"></i><span>${p.views}</span></div>
            </div>
            <span class="portfolio-category ${p.category}">${p.category}</span>
          </div>
        </div>
      `;
      grid.appendChild(item);
    });
    lucide.createIcons();
  }
}

// ─────────────────────────────────────────
// Testimonials - New Section
// ─────────────────────────────────────────
function initTestimonials() {
  const section = document.getElementById('testimonials-section');
  if (!section) return;

  const reviews = [
    {
      name: 'Ravi Kumar', role: 'Home Owner', location: 'Gajuwaka, Vizag', initials: 'RK', rating: 5,
      text: 'East End Infra Tech built our dream home with exceptional quality. The team was professional, timely, and used premium materials throughout. Highly recommended!'
    },
    {
      name: 'Priya Lakshmi', role: 'Villa Owner', location: 'Steel Plant Area, Vizag', initials: 'PL', rating: 5,
      text: 'Outstanding workmanship! Our villa exceeded expectations. The plumbing, electrical, and finishing work was top-notch. Very satisfied with the entire process.'
    },
    {
      name: 'Suresh Babu', role: 'Apartment Builder', location: 'Kurmanpallem, Vizag', initials: 'SB', rating: 5,
      text: 'Trusted and reliable. They completed our apartment project on time and within budget. The quality of materials used was excellent — Vizag Steel, Ramco Cement — the best!'
    },
    {
      name: 'Anitha Reddy', role: 'Home Renovation', location: 'Duvvada, Vizag', initials: 'AR', rating: 5,
      text: 'The renovation they did for our old house was beyond expectations. Creative interior design, smooth execution. The painting and finishing work is simply stunning!'
    },
    {
      name: 'Venkat Rao', role: 'Commercial Client', location: 'Gajuwaka, Vizag', initials: 'VR', rating: 5,
      text: 'Excellent project management. Our commercial building was delivered with zero compromise on quality. The team communicates well and keeps clients updated throughout.'
    },
    {
      name: 'Meena Devi', role: 'Home Owner', location: 'Visakhapatnam', initials: 'MD', rating: 5,
      text: 'Very professional team. From foundation to finishing — every detail was perfect. The 4.9 rating they have is absolutely deserved. Will definitely work with them again!'
    }
  ];

  const track = section.querySelector('.testimonials-track');
  if (!track) return;

  reviews.forEach((r, i) => {
    const card = document.createElement('div');
    card.className = 'testimonial-card reveal';
    card.style.transitionDelay = `${i * 80}ms`;
    card.innerHTML = `
      <div class="testimonial-rating">
        ${'★'.repeat(r.rating)}
      </div>
      <p class="testimonial-text">"${r.text}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar-placeholder">${r.initials}</div>
        <div>
          <div class="testimonial-name">${r.name}</div>
          <div class="testimonial-role">${r.role}</div>
          <div class="testimonial-location"> ${r.location}</div>
        </div>
      </div>
    `;
    track.appendChild(card);
  });

  observeReveal(track.querySelectorAll('.reveal'));
}

// ─────────────────────────────────────────
// Contact
// ─────────────────────────────────────────
function initContact() {
  const form = document.getElementById('contact-form');
  const success = document.getElementById('success-message');
  const infoList = document.getElementById('contact-info-list');

  const contactInfo = [
    { icon: 'phone', title: 'Call Us', details: '9581026463 / 7893209610', subtext: 'Mon–Sat 9AM–7PM' },
    { icon: 'mail', title: 'Email Us', details: 'Eastendinfratech1794@gmail.com', subtext: 'We reply within 24 hours' },
    { icon: 'map-pin', title: 'Visit Us', details: 'Vishweswar nagar, D Mart back side,Srinagar,Gajuwaka Visakhapatnam', subtext: 'Gajuwaka, Visakhapatnam' },
    { icon: 'clock', title: 'Working Hours', details: 'Mon–Sat: 9AM–7PM', subtext: 'Sunday: Closed' }
  ];

  if (infoList) {
    contactInfo.forEach(info => {
      const item = document.createElement('div');
      item.className = 'contact-info-item';
      item.innerHTML = `
        <div class="contact-info-icon"><i data-lucide="${info.icon}"></i></div>
        <div class="contact-info-content">
          <h4>${info.title}</h4>
          <p class="contact-detail">${info.details}</p>
          <p class="contact-subtext">${info.subtext}</p>
        </div>
      `;
      infoList.appendChild(item);
    });
  }

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      success.classList.remove('hidden');
      form.reset();
      setTimeout(() => success.classList.add('hidden'), 4000);
    });
  }

  lucide.createIcons();
}

// ─────────────────────────────────────────
// Footer
// ─────────────────────────────────────────
function initFooter() {
  const footerSocial = document.getElementById('footer-social');
  const footerQuickLinks = document.getElementById('footer-quick-links');
  const footerServices = document.getElementById('footer-services');
  const footerContact = document.getElementById('footer-contact');

  const socialLinks = [
    { icon: 'instagram', href: 'https://www.instagram.com/east_end_infra_tech?utm_source=qr&igsh=MWU0OTBiY2c1ZXlvNQ==', label: 'Instagram' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Interior Design', href: '#interior-design' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Residential Construction', 'Villa Construction', 'Commercial Projects',
    'Infrastructure Works', 'Building Consultation', 'Renovation Works'
  ];

  const contactDetails = [
    { icon: 'map-pin', main: 'Vishweswar nagar, D Mart back side,Srinagar', sub: 'Gajuwaka, Visakhapatnam, India' },
    { icon: 'phone', main: '+91 9581026463', sub: 'Mon–Sat 9AM–7PM' },
    { icon: 'mail', main: 'Eastendinfratech1794@gmail.com', sub: 'We reply within 24 hours' }
  ];

  if (footerSocial) socialLinks.forEach(s => {
    const a = document.createElement('a');
    a.href = s.href; a.className = 'footer-social-link';
    a.setAttribute('aria-label', s.label);
    a.innerHTML = `<i data-lucide="${s.icon}"></i>`;
    footerSocial.appendChild(a);
  });

  if (footerQuickLinks) quickLinks.forEach(l => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${l.href}" class="footer-link">${l.name}</a>`;
    footerQuickLinks.appendChild(li);
  });

  if (footerServices) services.forEach(s => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="footer-link">${s}</span>`;
    footerServices.appendChild(li);
  });

  if (footerContact) contactDetails.forEach(c => {
    const div = document.createElement('div');
    div.className = 'footer-contact-item';
    div.innerHTML = `
      <i data-lucide="${c.icon}" class="footer-contact-icon"></i>
      <div class="footer-contact-content">
        <p class="contact-main">${c.main}</p>
        <p class="contact-sub">${c.sub}</p>
      </div>
    `;
    footerContact.appendChild(div);
  });

  lucide.createIcons();
}

// ─────────────────────────────────────────
// Smooth Scrolling
// ─────────────────────────────────────────
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = document.getElementById('header').offsetHeight;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });
}

// ─────────────────────────────────────────
// Shared Reveal Observer
// ─────────────────────────────────────────
function observeReveal(elements) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  elements.forEach(el => obs.observe(el));
}
