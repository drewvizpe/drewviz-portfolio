// ==========================================
// DREW.VIZ — Internationalization (EN / ES)
// ==========================================

const translations = {
  es: {
    // Nav
    'nav.work': 'Trabajos',
    'nav.process': 'Proceso',
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',

    // Hero
    'hero.label': 'Estudio de Visualización Arquitectónica',
    'hero.title': 'Narrativas <strong>arquitectónicas</strong><br>en luz y forma',
    'hero.desc': 'Renders fotorrealistas, experiencias inmersivas 360° y animaciones cinematográficas para proyectos residenciales de lujo, hospitalidad y comerciales en todo el mundo.',
    'hero.cta1': 'Solicitar Cotización',
    'hero.cta2': 'Ver Trabajos',
    'hero.scroll': 'Desliza',

    // Portfolio
    'portfolio.label': 'Portafolio',
    'portfolio.title': 'Proyectos <strong>Seleccionados</strong>',
    'portfolio.subtitle': 'Una selección curada de visualizaciones arquitectónicas en proyectos residenciales, comerciales y hoteleros.',
    'portfolio.cta1': 'Solicitar Cotización',
    'portfolio.cta2': 'Ver Mi Proceso',

    // Design Process
    'process.label': 'Flujo de Trabajo',
    'process.title': 'Proceso de <strong>Diseño</strong>',
    'process.subtitle': 'De la geometría base al render cinematográfico final — un vistazo paso a paso de cómo construyo escenas fotorrealistas. Proyecto: Gondor — La Ciudad Blanca.',
    'process.step1.title': 'Modelo Clay',
    'process.step1.desc': 'Geometría base y volumetría. Modelado 3D puro sin materiales — enfocado en proporciones, escala y detalle arquitectónico.',
    'process.step2.title': 'Vegetación',
    'process.step2.desc': 'Agregando elementos orgánicos — árboles, césped, cobertura vegetal. Integrando la naturaleza con el entorno construido para crear realismo.',
    'process.step3.title': 'Entorno',
    'process.step3.desc': 'Ensamblaje completo de la escena — cielo, agua, terreno y efectos atmosféricos. Construyendo el mundo completo alrededor de la arquitectura.',
    'process.step4.title': 'Composición',
    'process.step4.desc': 'Ubicación de cámara, diseño de iluminación y refinamiento de materiales. Creando el encuadre cinematográfico que cuenta la historia.',
    'process.step5.title': 'Render Final',
    'process.step5.desc': 'Render en alta resolución con Corona Renderer, seguido de corrección de color, composición y postproducción cinematográfica. La visión completa materializada.',

    // Filter buttons
    'filter.interior': 'Interiores',
    'filter.exterior': 'Exteriores',
    'filter.commercial': 'Comercial',
    'filter.creative': 'Creativo',
    'filter.all': 'Todos',

    // 360°
    'pano.label': 'Inmersivo',
    'pano.title': 'Experiencia <strong>360°</strong>',
    'pano.subtitle': 'Explora espacios de forma interactiva. Haz clic y arrastra para mirar alrededor — como estar ahí.',
    'pano.btn1': 'Apartamento de Lujo',
    'pano.btn2': 'Astete Park — Sala',
    'pano.btn3': 'Astete Park — Cocina',
    'pano.btn4': 'Astete Park — Dormitorio Principal',
    'pano.btn5': 'Astete Park — Baño',

    // Videos
    'videos.label': 'Movimiento',
    'videos.title': 'Animación <strong>Arquitectónica</strong>',
    'videos.subtitle': 'Recorridos cinematográficos que dan vida a los espacios con movimiento, luz y atmósfera.',
    'videos.v1.title': 'Dolly In Lento',
    'videos.v1.desc': 'Acercamiento cinematográfico a un espacio de estar moderno',
    'videos.v2.title': 'Cambio de Diseño',
    'videos.v2.desc': 'Transición en tiempo real entre opciones de diseño',
    'videos.v3.title': 'Sala con Personas',
    'videos.v3.desc': 'Dando vida a la visualización arquitectónica',
    'videos.v4.title': 'Habitación Vacía',
    'videos.v4.desc': 'Espacio arquitectónico puro — luz, materiales, silencio',
    'videos.cta': 'Inicia Tu Proyecto',

    // About
    'about.label': 'Nosotros',
    'about.title': 'El Artista Detrás de <strong>la Visión</strong>',
    'about.p1': 'Soy Andrew Montejo, arquitecto y especialista en visualización 3D con base en Lima, Perú, con más de 8 años de experiencia transformando planos arquitectónicos en imágenes fotorrealistas impactantes.',
    'about.p2': 'Mi proceso es meticuloso: cada proyecto pasa por modelado 3D cuidadoso, composición de escena, diseño de iluminación, creación de materiales, renderizado en alta resolución y postproducción profesional — todo orientado a comunicar la intención arquitectónica con claridad cinematográfica.',
    'about.p3': 'Trabajo actual y reciente con marcas de lujo en relojería, retail y belleza (bajo NDA), junto con proyectos residenciales, de hospitalidad y comerciales para estudios de arquitectura y desarrolladores en todo el mundo.',
    'about.stat1': 'Años de Experiencia',
    'about.stat2': 'Proyectos Entregados',
    'about.stat3num': 'Lujo',
    'about.stat3': 'Marcas Premium (NDA)',
    'about.chip.ai': 'IA Post (opcional)',

    // Services
    'services.label': 'Servicios',
    'services.title': 'Lo Que <strong>Ofrezco</strong>',
    'services.subtitle': 'Cada proyecto se adapta a tus necesidades. Solicita una cotización personalizada para tus requerimientos específicos.',
    'services.s1.title': 'Renders Interiores',
    'services.s1.desc': 'Visualizaciones interiores fotorrealistas con iluminación precisa, materiales y atmósfera para proyectos residenciales de lujo, hospitalidad y comerciales.',
    'services.s2.title': 'Renders Exteriores',
    'services.s2.desc': 'Visualizaciones exteriores cinematográficas con entornos realistas — escenas de día, atardecer y noche que muestran tu edificio en contexto.',
    'services.s3.title': 'Panorámicas 360°',
    'services.s3.desc': 'Renders panorámicos interactivos para tours virtuales y presentaciones a clientes. Deja que tus compradores exploren el espacio antes de construirlo.',
    'services.s4.title': 'Animación',
    'services.s4.desc': 'Animaciones cinematográficas de recorrido y sobrevuelo con transiciones profesionales de iluminación, movimiento de cámara y postproducción.',
    'services.s5.title': 'Aumento con IA <span style="opacity:.6;font-weight:400;font-size:.8em;">— complemento opcional</span>',
    'services.s5.desc': 'Para proyectos donde lo amerite el brief, puedo añadir una capa de aumento con IA sobre el output 3D tradicional para refinar materiales o explorar variaciones visuales.',
    'services.s6.title': 'Postproducción',
    'services.s6.desc': 'Corrección de color profesional, composición y refinamiento de imagen para elevar cada render a una calidad final lista para presentación.',

    // Contact
    'contact.label': 'Contacto',
    'contact.title': 'Trabajemos <strong>Juntos</strong>',
    'contact.subtitle': 'Envíame tus planos, referencias y visión. Te proporcionaré una cotización detallada en 24 horas.',
    'contact.info.title': '¿Listo para dar vida a tu proyecto?',
    'contact.info.desc': 'Trabajo con estudios de arquitectura y desarrolladores en todo el mundo. Cada proyecto recibe atención personalizada y un enfoque adaptado a tu visión y cronograma.',
    'contact.email': 'Correo',
    'contact.based': 'Ubicación',
    'contact.location': 'Lima, Perú — Disponible a nivel mundial',
    'contact.form.name': 'Nombre',
    'contact.form.name_ph': 'Tu nombre',
    'contact.form.email': 'Correo',
    'contact.form.service': 'Servicio Requerido',
    'contact.form.select': 'Selecciona un servicio…',
    'contact.form.opt.interior': 'Renders Interiores',
    'contact.form.opt.exterior': 'Renders Exteriores',
    'contact.form.opt.pano': 'Panorámica 360°',
    'contact.form.opt.animation': 'Animación Arquitectónica',
    'contact.form.opt.ai': 'Aumento con IA (complemento opcional)',
    'contact.form.opt.postprod': 'Postproducción',
    'contact.form.opt.full': 'Paquete Completo',
    'contact.form.details': 'Detalles del Proyecto',
    'contact.form.details_ph': 'Cuéntame sobre tu proyecto: tipo de espacio, referencias de estilo, cantidad de renders, plazo...',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.success.title': '¡Mensaje Enviado!',
    'contact.success.text': 'Nos pondremos en contacto contigo lo antes posible. ¡Gracias!',

    // Gallery descriptions
    'gallery.kaisergarten.desc': 'Exterior Residencial de Lujo',
    'gallery.erika.desc': 'Estudio de Luz Natural',
    'gallery.japandi.desc': 'Minimalismo Cálido',
    'gallery.astete.lobby.desc': 'Áreas Comunes Premium',
    'gallery.rustic.title': 'Cocina Rústica',
    'gallery.rustic.desc': 'Materiales Naturales',
    'gallery.tangleos.terrace.desc': 'Vida al Aire Libre de Lujo',
    'gallery.astete.fachada.desc': 'Edificio Residencial',
    'gallery.liblab.desc': 'Residencial Moderno',
    'gallery.softlight.title': 'Sala Luz Suave',
    'gallery.softlight.desc': 'Interior Minimalista',
    'gallery.marsano.night.desc': 'Vista Nocturna',
    'gallery.oceanview.title': 'Apartamento Vista al Mar',
    'gallery.oceanview.desc': 'Sala Moderna',
    'gallery.terracotta.title': 'Sala Terracota',
    'gallery.terracotta.desc': 'Paleta Cálida',
    'gallery.bluelounge.title': 'Salón Azul',
    'gallery.bluelounge.desc': 'Interior de Restaurante',
    'gallery.striped.title': 'Elegancia Rayada',
    'gallery.striped.desc': 'Interior Hotelero',
    'gallery.tangleos.interior.desc': 'Industrial Moderno',
    'gallery.chachapoyas.desc': 'Edificio Residencial',
    'gallery.tangleos.fachada.desc': 'Casa de Lujo — Fachada',
    'gallery.astete.kitchen.desc': 'Residencial Moderno',
    'gallery.astete.bathroom.desc': 'Acabados de Lujo',
    'gallery.astete.coworking.desc': 'Amenidades Premium',
    'gallery.astete.gym.desc': 'Amenidades Residenciales',
    'gallery.astete.gourmet.desc': 'Área Social',
    'gallery.oficina.title': 'Oficina Ejecutiva',
    'gallery.oficina.desc': 'Interior Corporativo',
    'gallery.lounge.title': 'Sala de Oficina',
    'gallery.lounge.desc': 'Área de Descanso Corporativa',
    'gallery.chachapoyas.lobby.desc': 'Edificio Residencial',
    'gallery.solnaixet.aerial.desc': 'Vista Aérea — Complejo Residencial',
    'gallery.solnaixet.living.desc': 'Apartamento Planta Baja',
    'gallery.solnaixet.bedroom.desc': 'Suite Principal',
    'gallery.malecon.desc': 'Residencial Costero',
    'gallery.gondor.desc': 'Estudio Cinematográfico de Entorno · 3ds Max & Corona',

    // Round 2: Javier + Vanessa
    'gallery.javier.fireplace.desc': 'Residencial de Lujo · Chimenea y Muro de Piedra',
    'gallery.javier.bath.desc': 'Piedra y Travertino · Atmósfera Spa',
    'gallery.javier.pool.desc': 'Conexión Interior-Exterior',
    'gallery.javier.powder.desc': 'Cerámica Esmeralda · Detalles en Latón',
    'gallery.vanessa.living.desc': 'Mesa Live-Edge · Iluminación Curada',
    'gallery.vanessa.suite.desc': 'Cabecera Texturada · Ambiente Cálido',

    // Footer
    'footer.copy': '© 2026 DREW.VIZ — Estudio de Visualización Arquitectónica'
  }
};

// Store original English text
const originalTexts = {};

function initI18n() {
  const toggle = document.getElementById('langToggle');
  if (!toggle) return;

  // Save all original English text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.hasAttribute('data-i18n-html')) {
      originalTexts[key] = el.innerHTML;
    } else {
      originalTexts[key] = el.textContent;
    }
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    originalTexts[key] = el.getAttribute('placeholder');
  });

  // Check saved language preference
  const savedLang = localStorage.getItem('drewviz-lang') || 'en';
  if (savedLang === 'es') {
    applyLanguage('es');
    toggle.textContent = 'EN';
  }

  toggle.addEventListener('click', () => {
    const currentLang = toggle.textContent.trim() === 'ES' ? 'es' : 'en';
    applyLanguage(currentLang);
    toggle.textContent = currentLang === 'es' ? 'EN' : 'ES';
    localStorage.setItem('drewviz-lang', currentLang);
  });
}

function applyLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (lang === 'es' && translations.es[key]) {
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = translations.es[key];
      } else {
        el.textContent = translations.es[key];
      }
    } else if (lang === 'en' && originalTexts[key]) {
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = originalTexts[key];
      } else {
        el.textContent = originalTexts[key];
      }
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (lang === 'es' && translations.es[key]) {
      el.setAttribute('placeholder', translations.es[key]);
    } else if (lang === 'en' && originalTexts[key]) {
      el.setAttribute('placeholder', originalTexts[key]);
    }
  });

  document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', initI18n);
