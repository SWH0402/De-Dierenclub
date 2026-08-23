const defaultPageMeta = {
  en: {
    title: "De Dierenclub Pet Sitting | Trusted Dog Walker & Pet Sitter in Amsterdam",
    description: "Reliable, loving pet sitting and dog walking in Amsterdam. Perfect for expats and locals who want a trusted, English-speaking pet sitter for their dog or cat."
  },
  nl: {
    title: "De Dierenclub Pet Sitting | Betrouwbare Hondenuitlaatservice & Huisdierenoppas Amsterdam",
    description: "Betrouwbare en liefdevolle huisdierenoppas en hondenuitlaatservice in Amsterdam. Ideaal voor expats en Nederlanders die op zoek zijn naar een vertrouwde oppas voor hun hond of kat."
  },
  es: {
    title: "De Dierenclub Pet Sitting | Paseador de Perros y Cuidador de Mascotas de Confianza en Ámsterdam",
    description: "Cuidado de mascotas y paseo de perros confiable y cariñoso en Ámsterdam. Perfecto para expatriados y locales que buscan un cuidador de mascotas de confianza para su perro o gato."
  }
};

const pageMeta = window.PAGE_META || defaultPageMeta;

const translations = {
  nav_home: { en: "Home", nl: "Home", es: "Inicio" },
  nav_services: { en: "Services", nl: "Diensten", es: "Servicios" },
  nav_about: { en: "About", nl: "Over mij", es: "Sobre mí" },
  nav_pricing: { en: "Pricing", nl: "Prijzen", es: "Precios" },
  nav_book: { en: "Book", nl: "Boeken", es: "Reservar" },
  nav_contact: { en: "Contact", nl: "Contact", es: "Contacto" },

  header_book_btn: { en: "New Client", nl: "Nieuwe Klant", es: "Cliente Nuevo" },
  header_login_btn: { en: "Client Login", nl: "Klantenlogin", es: "Acceso Clientes" },
  cta_new_client_btn: { en: "New Client? Book Now", nl: "Nieuwe klant? Boek nu", es: "¿Cliente nuevo? Reserva ahora" },
  cta_returning_client_btn: { en: "Returning Client? Log In", nl: "Bestaande klant? Log in", es: "¿Cliente existente? Inicia sesión" },
  menu_open: { en: "Open menu", nl: "Open menu", es: "Abrir menú" },
  menu_close: { en: "Close menu", nl: "Sluit menu", es: "Cerrar menú" },

  hero_headline_1: { en: "Your home.", nl: "Jouw huis.", es: "Tu hogar." },
  hero_headline_2: { en: "Their comfort.", nl: "Hun comfort.", es: "Su comodidad." },
  hero_headline_3: { en: "Your peace of mind.", nl: "Jouw gemoedsrust.", es: "Tu tranquilidad." },
  scroll_indicator_label: { en: "Scroll to explore", nl: "Scroll om te ontdekken", es: "Desplázate para explorar" },

  services_title: { en: "Services", nl: "Diensten", es: "Servicios" },
  services_lede: { en: "Thoughtful, hands-on care because your pet deserves nothing less.", nl: "Attente, persoonlijke zorg, omdat je huisdier niet minder verdient.", es: "Cuidado atento y personal, porque tu mascota no merece menos." },

  service_walking_title: { en: "Dog Walking", nl: "Hondenuitlaatservice", es: "Paseo de Perros" },
  service_walking_desc: { en: "Fresh air, exercise, and plenty of sniffing time. Solo or small-group walks tailored to your dog's energy level and pace.", nl: "Frisse lucht, beweging en volop tijd om te snuffelen. Individuele of kleine groepswandelingen, afgestemd op het energieniveau en tempo van je hond.", es: "Aire fresco, ejercicio y mucho tiempo para olfatear. Paseos individuales o en grupos pequeños, adaptados al nivel de energía y ritmo de tu perro." },
  service_petsitting_title: { en: "Pet Sitting", nl: "Huisoppas", es: "Cuidado en Casa" },
  service_petsitting_desc: { en: "Overnight stays at your home so your pets keep their normal routine. Ideal for longer trips or pets who do best with constant company.", nl: "Overnachtingen bij jou thuis, zodat je huisdieren hun normale routine behouden. Ideaal voor langere reizen of huisdieren die het best gedijen bij voortdurend gezelschap.", es: "Estancias nocturnas en tu casa para que tus mascotas mantengan su rutina normal. Ideal para viajes más largos o mascotas que están mejor con compañía constante." },
  service_dropin_title: { en: "Drop-in Visits", nl: "Bezoekjes aan huis", es: "Visitas a Domicilio" },
  service_dropin_desc: { en: "A friendly check-in at home for feeding, fresh water, playtime, and cuddles — great for cats, puppies, or a midday visit.", nl: "Een gezellig bezoekje thuis voor eten, vers water, speeltijd en knuffels — ideaal voor katten, puppy's of een tussendoortje in de middag.", es: "Una visita amistosa en casa para alimentar, agua fresca, tiempo de juego y mimos — perfecta para gatos, cachorros o una visita a mediodía." },
  service_grooming_title: { en: "Grooming", nl: "Verzorging", es: "Aseo" },
  service_grooming_desc: { en: "Bath (at your home) and nail trims to keep your pet clean and comfortable — convenient, low-stress grooming without ever leaving the house.", nl: "Bad (bij jou thuis) en nagels knippen om je huisdier schoon en comfortabel te houden — handige, stressvrije verzorging zonder de deur uit te hoeven.", es: "Baño (en tu casa) y corte de uñas para mantener a tu mascota limpia y cómoda — servicios de aseo convenientes y de bajo estrés sin salir de casa." },
  service_book_btn: { en: "Book Now", nl: "Boek Nu", es: "Reservar Ahora" },

  about_title: { en: "About Me", nl: "Over Mij", es: "Sobre Mí" },
  about_p1: { en: "Hi, I'm Stephanie.", nl: "Hoi, ik ben Stephanie.", es: "Hola, soy Stephanie." },
  about_p2: { en: "I've spent years inside veterinary clinics as a veterinary technician, worked in animal health pharmaceuticals, and studied veterinary care formally. But the reason clients trust me with their home and their pet is simpler than that: I genuinely love animals, and it shows.", nl: "Ik heb jarenlang in dierenklinieken gewerkt als dierenartsassistente, ervaring opgedaan in de farmaceutische sector voor diergezondheid, en een formele opleiding in diergeneeskundige zorg gevolgd. Maar de reden dat klanten mij hun huis en hun huisdier toevertrouwen is simpeler dan dat: ik hou oprecht van dieren, en dat is te merken.", es: "He pasado años dentro de clínicas veterinarias como técnica veterinaria, trabajé en el sector farmacéutico de salud animal, y estudié formalmente el cuidado veterinario. Pero la razón por la que los clientes me confían su casa y su mascota es más simple que eso: amo genuinamente a los animales, y se nota." },
  about_p3: { en: "Handing over your key to someone you've just met takes real trust. I don't take that lightly. Every pet I care for gets treated as if they were my own, because in the time they're with me, they are.", nl: "Je sleutel geven aan iemand die je net hebt ontmoet vraagt echt vertrouwen. Dat neem ik niet licht op. Elk huisdier waar ik voor zorg wordt behandeld alsof het mijn eigen huisdier is, want in de tijd dat ze bij mij zijn, zijn ze dat ook.", es: "Entregar tu llave a alguien que acabas de conocer requiere confianza real. No me lo tomo a la ligera. Cada mascota que cuido es tratada como si fuera mía, porque durante el tiempo que están conmigo, lo son." },
  about_p4: { en: "I come to your home because research backs what most pet owners already feel: animals are calmer, eat better, and recover faster in their own environment. No kennels, no strangers, no disruption to their routine.", nl: "Ik kom naar jouw huis omdat onderzoek bevestigt wat de meeste huisdiereigenaren al aanvoelen: dieren zijn rustiger, eten beter en herstellen sneller in hun eigen omgeving. Geen kennels, geen vreemden, geen verstoring van hun routine.", es: "Voy a tu casa porque las investigaciones respaldan lo que la mayoría de los dueños de mascotas ya sienten: los animales están más tranquilos, comen mejor y se recuperan más rápido en su propio entorno. Sin residencias, sin desconocidos, sin alteraciones en su rutina." },
  about_p5: { en: "Based in Amsterdam Zuid, caring for pets across Amsterdam.", nl: "Gevestigd in Amsterdam Zuid, met zorg voor huisdieren in heel Amsterdam.", es: "Con base en Ámsterdam Zuid, cuidando mascotas en todo Ámsterdam." },

  reviews_title: { en: "Reviews", nl: "Recensies", es: "Opiniones" },
  reviews_stat: { en: "58 five-star reviews across Rover and TrustedHousesitters", nl: "58 vijfsterrenrecensies op Rover en TrustedHousesitters", es: "58 opiniones de cinco estrellas en Rover y TrustedHousesitters" },
  reviews_platforms_label: { en: "Read more reviews, or leave one of your own:", nl: "Lees meer recensies, of laat er zelf een achter:", es: "Lee más opiniones, o deja la tuya:" },
  reviews_google_link: { en: "Leave a Google Review", nl: "Laat een Google-review achter", es: "Deja una reseña en Google" },

  contact_title: { en: "Get in Touch", nl: "Neem Contact Op", es: "Contacto" },
  contact_lede: { en: "Tell me about your pet", nl: "Vertel me over je huisdier", es: "Cuéntame sobre tu mascota" },
  label_name: { en: "Name", nl: "Naam", es: "Nombre" },
  label_email: { en: "Email", nl: "E-mail", es: "Correo electrónico" },
  label_message: { en: "Message", nl: "Bericht", es: "Mensaje" },
  placeholder_name: { en: "Your name", nl: "Je naam", es: "Tu nombre" },
  placeholder_email: { en: "you@example.com", nl: "jij@voorbeeld.com", es: "tu@ejemplo.com" },
  placeholder_message: { en: "Tell me about your pet and what you're looking for...", nl: "Vertel me over je huisdier en wat je zoekt...", es: "Cuéntame sobre tu mascota y qué estás buscando..." },
  submit_btn: { en: "Send Inquiry", nl: "Verstuur Aanvraag", es: "Enviar Consulta" },
  form_note: { en: "Thanks! This form doesn't send yet — connect it to an email service or form backend to start receiving inquiries.", nl: "Bedankt! Dit formulier verstuurt nog niets — koppel het aan een e-mailservice of formulierback-end om aanvragen te ontvangen.", es: "¡Gracias! Este formulario aún no envía nada — conéctalo a un servicio de correo o backend de formularios para empezar a recibir consultas." },
  whatsapp_btn: { en: "Message on WhatsApp", nl: "Bericht via WhatsApp", es: "Mensaje por WhatsApp" },

  pricing_hero_title: { en: "Pricing", nl: "Prijzen", es: "Precios" },
  pricing_hero_lede: { en: "Simple, transparent pricing because your pet's care should never come with surprises.", nl: "Eenvoudige, transparante prijzen, want de zorg voor je huisdier mag nooit verrassingen bevatten.", es: "Precios simples y transparentes, porque el cuidado de tu mascota nunca debería tener sorpresas." },
  pricing_col_service: { en: "Service", nl: "Dienst", es: "Servicio" },
  pricing_col_price: { en: "Price", nl: "Prijs", es: "Precio" },
  pricing_col_size: { en: "Size", nl: "Grootte", es: "Tamaño" },

  pricing_walk30: { en: "30-minute walk", nl: "Wandeling van 30 minuten", es: "Paseo de 30 minutos" },
  pricing_walk60: { en: "60-minute walk", nl: "Wandeling van 60 minuten", es: "Paseo de 60 minutos" },
  pricing_extra_dog: { en: "Additional dog", nl: "Extra hond", es: "Perro adicional" },

  pricing_dropin_title: { en: "Drop-In Visits", nl: "Oppasbezoeken", es: "Visitas a Domicilio" },
  pricing_dropin_note: { en: "(feeding, playtime, litter/potty, medication administration included)", nl: "(voeren, speeltijd, kattenbak/uitlaten, medicatie toedienen inbegrepen)", es: "(alimentación, tiempo de juego, arenero/paseo, administración de medicación incluidos)" },
  pricing_dogs_label: { en: "Dogs:", nl: "Honden:", es: "Perros:" },
  pricing_cats_label: { en: "Cats:", nl: "Katten:", es: "Gatos:" },
  pricing_visit30: { en: "30-minute visit", nl: "Bezoek van 30 minuten", es: "Visita de 30 minutos" },
  pricing_visit60: { en: "60-minute visit", nl: "Bezoek van 60 minuten", es: "Visita de 60 minutos" },
  pricing_extra_cat: { en: "Additional cat", nl: "Extra kat", es: "Gato adicional" },

  pricing_overnight_title: { en: "Overnight Pet Sitting", nl: "Overnachting bij Oppas", es: "Pernoctación con Cuidado de Mascotas" },
  pricing_overnight_note: { en: "(at client's home)", nl: "(bij de klant thuis)", es: "(en casa del cliente)" },
  pricing_overnight_dog: { en: "Overnight stay (dog)", nl: "Overnachting (hond)", es: "Pernoctación (perro)" },
  pricing_overnight_cat: { en: "Overnight stay (cat)", nl: "Overnachting (kat)", es: "Pernoctación (gato)" },

  pricing_grooming_title: { en: "Grooming Add-Ons", nl: "Extra Verzorgingsdiensten", es: "Servicios de Aseo Adicionales" },
  pricing_bath_dog_label: { en: "Bath (dog, by size):", nl: "Bad (hond, op grootte):", es: "Baño (perro, según tamaño):" },
  pricing_size_small: { en: "Small (up to 10kg)", nl: "Klein (tot 10kg)", es: "Pequeño (hasta 10kg)" },
  pricing_size_medium: { en: "Medium (10–25kg)", nl: "Middel (10-25kg)", es: "Mediano (10–25kg)" },
  pricing_size_large: { en: "Large (25–40kg)", nl: "Groot (25-40kg)", es: "Grande (25–40kg)" },
  pricing_size_xl: { en: "Extra Large (40kg+)", nl: "Extra groot (40kg+)", es: "Extra grande (40kg+)" },
  pricing_bath_cat: { en: "Bath (cat, any size)", nl: "Bad (kat, alle groottes)", es: "Baño (gato, cualquier tamaño)" },
  pricing_nail_dog: { en: "Nail trim (dog)", nl: "Nagels knippen (hond)", es: "Corte de uñas (perro)" },
  pricing_nail_cat: { en: "Nail trim (cat)", nl: "Nagels knippen (kat)", es: "Corte de uñas (gato)" },

  pricing_other_title: { en: "Other Add-Ons", nl: "Overige Toeslagen", es: "Otros Adicionales" },
  pricing_holiday: { en: "Holiday surcharge", nl: "Feestdagentoeslag", es: "Recargo por días festivos" },
  pricing_vet_transport: { en: "Vet visit / medication pickup transport", nl: "Vervoer dierenarts / medicatie ophalen", es: "Transporte a veterinario / recogida de medicación" },

  pricing_cta_lede_2: { en: "Book now and travel knowing they're in good hands.", nl: "Boek nu en reis met een gerust hart, wetende dat ze in goede handen zijn.", es: "Reserva ahora y viaja sabiendo que está en buenas manos." },
  book_title: { en: "Book a Visit", nl: "Boek een Afspraak", es: "Reservar una Visita" },
  book_lede: { en: "Whether it's your first time booking or you're a familiar face, getting started takes less than a minute.", nl: "Of het nu je eerste boeking is of je een bekend gezicht bent, je bent binnen een minuut klaar.", es: "Ya sea tu primera reserva o ya me conoces, empezar toma menos de un minuto." },

  footer_text: { en: "De Dierenclub Pet Sitting · Serving Amsterdam, Netherlands 🐾", nl: "De Dierenclub Pet Sitting · Actief in Amsterdam, Nederland 🐾", es: "De Dierenclub Pet Sitting · Sirviendo a Ámsterdam, Países Bajos 🐾" }
};

function applyLanguage(lang) {
  document.documentElement.lang = lang;

  const titleEl = document.getElementById('pageTitle');
  if (titleEl) titleEl.textContent = pageMeta[lang].title;
  const descEl = document.getElementById('metaDescription');
  if (descEl) descEl.setAttribute('content', pageMeta[lang].description);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) {
      el.textContent = translations[key][lang];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[key]) {
      el.setAttribute('placeholder', translations[key][lang]);
    }
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria-label');
    if (translations[key]) {
      el.setAttribute('aria-label', translations[key][lang]);
    }
  });

  ['langEnBtn', 'langNlBtn', 'langEsBtn'].forEach((id) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive);
  });

  localStorage.setItem('ddc_lang', lang);
}

['langEnBtn', 'langNlBtn', 'langEsBtn'].forEach((id) => {
  const btn = document.getElementById(id);
  if (btn) btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

const savedLang = localStorage.getItem('ddc_lang');
applyLanguage(['nl', 'es'].includes(savedLang) ? savedLang : 'en');

function currentLang() {
  return ['nl', 'es'].includes(document.documentElement.lang) ? document.documentElement.lang : 'en';
}

/* ---------- Contact form ---------- */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const note = document.getElementById('formNote');
    note.textContent = translations.form_note[currentLang()];
    event.target.reset();
  });
}

/* ---------- Floating bar scroll state ---------- */
const floatingBar = document.querySelector('.floating-bar');
if (floatingBar && document.querySelector('.hero')) {
  // Only pages with a full-bleed dark hero start transparent and solidify on scroll.
  // Pages without one (e.g. pricing.html) keep the light "is-scrolled" styling always,
  // since their content near the top isn't dark enough for light text/icons.
  const updateBarState = () => {
    floatingBar.classList.toggle('is-scrolled', window.scrollY > 80);
  };
  updateBarState();
  window.addEventListener('scroll', updateBarState, { passive: true });
}

/* ---------- Hamburger menu ---------- */
const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const navOverlay = document.getElementById('navOverlay');

function openMenu() {
  navOverlay.classList.add('is-open');
  document.body.classList.add('menu-open');
  navOverlay.setAttribute('aria-hidden', 'false');
  menuToggle.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  navOverlay.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  navOverlay.setAttribute('aria-hidden', 'true');
  menuToggle.setAttribute('aria-expanded', 'false');
}

if (menuToggle && navOverlay) {
  menuToggle.addEventListener('click', () => {
    if (navOverlay.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (menuClose) {
    menuClose.addEventListener('click', closeMenu);
  }

  navOverlay.addEventListener('click', (event) => {
    if (event.target === navOverlay) {
      closeMenu();
    }
  });

  navOverlay.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navOverlay.classList.contains('is-open')) {
      closeMenu();
    }
  });
}

/* ---------- Scroll indicator ---------- */
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
  scrollIndicator.addEventListener('click', () => {
    const target = document.getElementById('services');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
}

/* ---------- Scroll reveal (with safety-net fallback) ---------- */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets = document.querySelectorAll('.reveal-target');
revealTargets.forEach((el) => el.classList.add('reveal'));

function revealAll() {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealAll();
} else {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('is-visible'), (i % 4) * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  revealTargets.forEach((el) => revealObserver.observe(el));

  // Safety net: guarantee content is never stuck invisible if the observer
  // ever fails to fire in time (backgrounded tab, very fast scroll, etc).
  setTimeout(revealAll, 3000);
}
