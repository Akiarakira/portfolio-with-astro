// Change theme

const themeToggle = document.querySelector("#themeToggle");
const bodyElement = document.querySelector("#body");
const THEME_KEY = "portfolio-theme";
const LANGUAGE_KEY = "portfolio-language";

if (bodyElement) {
  function getPreferredTheme() {
    return localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark";
  }

  function applyTheme(theme) {
    const isDark = theme === "dark";
    bodyElement.classList.toggle("darkMode", isDark);
    bodyElement.classList.toggle("lightMode", !isDark);

    if (themeToggle) {
      themeToggle.checked = isDark;
    }
  }

  applyTheme(getPreferredTheme());

  themeToggle?.addEventListener("change", function () {
    const next = themeToggle.checked ? "dark" : "light";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });
}

const spanishTranslations = {
  "Projects": "Proyectos",
  "Professional Experience": "Experiencia profesional",
  "Testimonials": "Testimonios",
  "See My Work": "Ver mi trabajo",
  "View All Projects": "Ver todos los proyectos",
  "Download CV": "Descargar CV",
  "Full-Stack Developer": "Desarrolladora Full-Stack",
  "I have over 4 years of experience building beautiful, high-converting websites with Shopify and WordPress. Specialized in custom development, UX optimization, and elegant design.": "Tengo más de 4 años de experiencia creando sitios web atractivos y orientados a la conversión con Shopify y WordPress. Me especializo en desarrollo personalizado, optimización UX y diseño elegante.",
  "Tools & Tech": "Herramientas y tecnologías",
  "View Project →": "Ver proyecto →",
  "Technologies:": "Tecnologías:",
  "Stack:": "Tecnologías:",
  "Kind words": "Palabras bonitas",
  "A few lovely things clients and teammates have said about working with me.": "Algunas cosas bonitas que clientes y compañeros han dicho sobre trabajar conmigo.",
  "Let's Connect": "Conectemos",
  "Let's chat!": "¡Hablemos!",
  "Available for new projects": "Disponible para nuevos proyectos",
  "Usually replies fast": "Suele responder rápido",
  "Email me": "Envíame un correo",
  "Let's connect": "Conectemos",
  "Made with ❤ in Venezuela": "Hecho con ❤ en Venezuela",
  "Open contact options": "Abrir opciones de contacto",
  "Language selector": "Selector de idioma",
  "All rights reserved.": "Todos los derechos reservados.",
  "Front-End Engineer and Shopify Specialist with 4 years of experience, focused on Shopify 2.0, Liquid, Cart API, GraphQL integrations, and conversion-focused, mobile-first storefronts across Shopify, WordPress, and custom Node.js ecosystems.": "Ingeniera Front-End y especialista en Shopify con 4 años de experiencia, enfocada en Shopify 2.0, Liquid, Cart API, integraciones GraphQL y tiendas mobile-first orientadas a la conversión en Shopify, WordPress y ecosistemas Node.js personalizados.",
  "A-TeamWork": "A-TeamWork",
  "Web Developer & Shopify Specialist": "Desarrolladora web y especialista en Shopify",
  "Full-Stack Web Developer": "Desarrolladora web Full-Stack",
  "Web Developer (Contractor)": "Desarrolladora web (contratista)",
  "Web Developer": "Desarrolladora web",
  "Systems Analyst / Analyst II": "Analista de sistemas / Analista II",
  "Biomedical Equipment Maintenance Engineer": "Ingeniera de mantenimiento de equipos biomédicos",
  "Engineered a custom Node.js/GraphQL CLI automation suite leveraging the Shopify Admin API for mass normalization and synchronization of 3,500+ products and 7,300+ variants, integrating dry-run workflows and traceability logs for zero-downtime production deployments.": "Desarrollé una suite CLI de automatización en Node.js/GraphQL usando la API de administración de Shopify para normalizar y sincronizar masivamente más de 3.500 productos y 7.300 variantes, con flujos dry-run y registros de trazabilidad para despliegues sin interrupciones.",
  "Built a custom Shopify application using Shopify Devs APIs and GraphQL to automate complex product variant structuring and streamline catalog sync.": "Construí una aplicación personalizada de Shopify usando sus APIs y GraphQL para automatizar estructuras complejas de variantes y agilizar la sincronización del catálogo.",
  "Led the end-to-end frontend redesign of a luxury jewelry e-commerce platform, translating Figma prototypes into pixel-perfect, accessible, mobile-first code.": "Lideré el rediseño frontend completo de una plataforma de comercio electrónico de joyería de lujo, convirtiendo prototipos de Figma en código accesible, mobile-first y fiel al diseño.",
  "Raised Lighthouse performance score by 47% on a legacy theme through image compression, script optimization, and layout rendering fixes, with measurable gains in load time on mobile.": "Aumenté un 47% el rendimiento medido por Lighthouse en un tema antiguo mediante compresión de imágenes, optimización de scripts y mejoras de renderizado, reduciendo los tiempos de carga móvil.",
  "Developed and maintained Shopify e-commerce sites with advanced Liquid theme customization (Shopify 2.0).": "Desarrollé y mantuve sitios de comercio electrónico en Shopify con personalización avanzada de temas Liquid (Shopify 2.0).",
  "Engineered System Builder, a complex logic-based questionnaire tool that automated product selection and bundling for HVAC systems, directly driving conversion growth.": "Desarrollé System Builder, una herramienta de cuestionario basada en lógica que automatizaba la selección y agrupación de productos HVAC, impulsando directamente el crecimiento de conversiones.",
  "Automated warranty certificate generation triggered by Shopify webhooks through a custom Node.js/Express API, Puppeteer PDF rendering, and HubSpot CRM integration.": "Automaticé la generación de certificados de garantía activada por webhooks de Shopify mediante una API personalizada Node.js/Express, renderizado PDF con Puppeteer e integración con HubSpot CRM.",
  "Delivered client projects as an independent contractor, managing multiple concurrent priorities with a strong delivery focus.": "Entregué proyectos para clientes como contratista independiente, gestionando varias prioridades simultáneas con un fuerte enfoque en resultados.",
  "Improved performance and code quality across projects using Lighthouse audits, web vitals checks, multi-device testing, and CRO principles.": "Mejoré el rendimiento y la calidad del código mediante auditorías de Lighthouse, métricas web, pruebas multidispositivo y principios de CRO.",
  "Configured and managed VPS servers, DNS settings, SSL certificates, and corporate business email services across multiple domains.": "Configuré y administré servidores VPS, DNS, certificados SSL y servicios de correo corporativo en múltiples dominios.",
  "Designed high-converting landing pages for clients and events using WordPress, Elementor, and custom code.": "Diseñé landing pages de alta conversión para clientes y eventos usando WordPress, Elementor y código personalizado.",
  "Led the redesign and restructuring of the corporate Intranet on WordPress to streamline internal organizational communication.": "Lideré el rediseño y reestructuración de la intranet corporativa en WordPress para optimizar la comunicación interna.",
  "Updated and created PHP interface components to query and modify internal company records connected to an IBM iSeries database and MySQL.": "Actualicé y creé componentes de interfaz PHP para consultar y modificar registros internos conectados a bases de datos IBM iSeries y MySQL.",
  "Performed technical diagnostics, calibration, and preventive/corrective maintenance on precision medical and biomedical electronic hardware.": "Realicé diagnósticos técnicos, calibración y mantenimiento preventivo/correctivo de equipos electrónicos médicos y biomédicos de precisión.",
  "Maintained detailed technical service logs and documentation ensuring equipment compliance.": "Mantuve registros detallados de servicio técnico y documentación para garantizar el cumplimiento de los equipos.",
  "Marketing landing page for the FocusSpace Chrome extension. Built to showcase Pomodoro focus sessions, smart site blocking, browser cleanup, and productivity analytics while driving installs from the Chrome Web Store.": "Landing page de marketing para la extensión de Chrome FocusSpace, creada para mostrar sesiones Pomodoro, bloqueo inteligente de sitios, limpieza del navegador y analíticas de productividad.",
  "Privacy-first Chrome extension for deep work. Cleans distracting tabs and browser history by keyword/category, runs Pomodoro focus sessions with task tracking, and sends real-time alerts when distracting tabs open during a session.": "Extensión de Chrome centrada en la privacidad para trabajar sin distracciones. Limpia pestañas e historial por palabra clave o categoría, ejecuta sesiones Pomodoro y envía alertas en tiempo real.",
  "Marketing website for a compliance-first outsourcing company. Built a multi-page Next.js app with an interactive Vanta globe hero, light/dark theme support, responsive service landing sections, careers application form, contact forms, and a conversion-focused CTA flow.": "Sitio web de marketing para una empresa de outsourcing enfocada en cumplimiento. Construí una aplicación multipágina en Next.js con globo interactivo de Vanta, temas claro/oscuro, formularios y flujo CTA orientado a conversiones.",
  "Personal website for Ana Verdugo. Ongoing maintenance and continuous updates. Implemented new Liquid features not available by default in Shopify, such as add-on package options selectable via checkboxes within a product.": "Sitio personal para Ana Verdugo, con mantenimiento y actualizaciones continuas. Implementé funcionalidades Liquid personalizadas en Shopify, como paquetes adicionales seleccionables mediante casillas.",
  "Developed and maintained Shopify e-commerce sites, built a custom Node.js/Express API to automate certificate generation, and enhanced mobile UX/performance.": "Desarrollé y mantuve sitios de comercio electrónico en Shopify, construí una API personalizada Node.js/Express para automatizar certificados y mejoré la experiencia móvil.",
  "Modularized the header and footer into a single component. Recreated the new design from Figma using CSS and Tailwind.": "Modularicé el encabezado y pie de página en un solo componente. Reproduje el nuevo diseño de Figma usando CSS y Tailwind.",
  "Improved performance and code quality across multiple projects; used Lighthouse audits for Web Vitals, ran multi-device testing, and consistently applied Conversion Rate Optimization (CRO) principles.": "Mejoré el rendimiento y la calidad del código en varios proyectos mediante auditorías Lighthouse, pruebas multidispositivo y principios de optimización de conversiones (CRO).",
  "Fixed visual bugs and layout issues on mobile devices to ensure a consistent experience.": "Corregí errores visuales y problemas de diseño en dispositivos móviles para garantizar una experiencia consistente.",
  "Successfully translated high-fidelity Figma designs into a fully functional, responsive WordPress site, ensuring pixel-perfect accuracy and a seamless user experience.": "Convertí diseños de alta fidelidad de Figma en un sitio WordPress funcional y responsive, manteniendo precisión visual y una experiencia fluida.",
  "Developed a high-performance frontend application based on visual mockups, bridging the gap between static design and functional web components.": "Desarrollé una aplicación frontend de alto rendimiento basada en mockups, conectando el diseño estático con componentes web funcionales.",
  "Full-scale UI/UX redesign from Figma to WordPress, optimized for speed and modern aesthetics using Elementor and custom code.": "Rediseño completo de UI/UX desde Figma hasta WordPress, optimizado para velocidad y estética moderna con Elementor y código personalizado.",
  "High-fidelity Figma to Webflow development, delivering a robust and scalable web presence with custom-coded enhancements.": "Desarrollo de alta fidelidad desde Figma hasta Webflow, creando una presencia web robusta y escalable con mejoras de código personalizado.",
  "Strategic content update and UI refinement, focused on enhancing clarity and conversion through optimized data presentation and clean code.": "Actualización estratégica de contenido y refinamiento de UI, enfocada en mejorar la claridad y conversión mediante datos optimizados y código limpio.",
  "Conducted deep UX and performance audits using Lighthouse and PageSpeed Insights, implementing technical fixes that improved user retention and conversion rates (CRO).": "Realicé auditorías profundas de UX y rendimiento con Lighthouse y PageSpeed Insights, implementando mejoras técnicas que aumentaron la retención y las conversiones.",
  "Maintained, optimized, and managed multiple e-commerce websites built on Shopify and WordPress.": "Mantuve, optimicé y administré múltiples sitios de comercio electrónico creados con Shopify y WordPress.",
  "Collaborated closely with design and marketing teams to align technical builds with business conversion goals and brand strategy.": "Colaboré estrechamente con los equipos de diseño y marketing para alinear las implementaciones técnicas con los objetivos de conversión y la estrategia de marca.",
  "Debugged and resolved complex theme-related issues to ensure seamless UX, reliable functionality, and responsive mobile shopping experiences.": "Depuré y resolví problemas complejos de temas para garantizar una UX fluida, funcionalidades confiables y experiencias de compra responsive.",
  "Created a custom Frequently Bought Together snippet using JavaScript that dynamically recommended and bundled complementary products in cart to boost Average Order Value (AOV).": "Creé un componente personalizado de productos frecuentemente comprados juntos que recomendaba y agrupaba productos complementarios para aumentar el valor promedio del pedido.",
  "Built dynamic landing pages and Product Display Pages (PDP) using HTML, CSS, and JavaScript, focusing on visual quality and mobile performance.": "Construí landing pages y páginas de producto dinámicas con HTML, CSS y JavaScript, enfocándome en la calidad visual y el rendimiento móvil.",
  "Optimized front-end performance metrics and UI responsiveness to enhance the mobile shopping experience.": "Optimicé las métricas de rendimiento frontend y la respuesta de la interfaz para mejorar la experiencia de compra móvil.",
  "Developed application UIs and features for Deliverate and Localchat (delivery app) using Tailwind CSS, DaisyUI, Alpine.js, and JavaScript.": "Desarrollé interfaces y funcionalidades para Deliverate y Localchat usando Tailwind CSS, DaisyUI, Alpine.js y JavaScript.",
  "Integrated real-time map visualization and tracking features for delivery management, plus custom admin and driver dashboards.": "Integré visualización de mapas y seguimiento en tiempo real para la gestión de entregas, además de paneles personalizados para administradores y conductores.",
  "Developed and optimized responsive UI components for the company website using HTML, CSS, and Tailwind CSS.": "Desarrollé y optimicé componentes de interfaz responsive para el sitio de la empresa usando HTML, CSS y Tailwind CSS.",
  "Used Figma and Canva to prototype interactive interfaces before front-end implementation.": "Usé Figma y Canva para prototipar interfaces interactivas antes de su implementación frontend.",
  "Contributed to full-stack development of plugins and themes for the ProspectorWeb lead generation platform using PHP, TypeScript, HTMX, and Alpine.js.": "Contribuí al desarrollo full-stack de plugins y temas para la plataforma de generación de leads ProspectorWeb usando PHP, TypeScript, HTMX y Alpine.js.",
  "Executed UI/UX redesigns, including Dark Mode, enhanced sidebar navigation, and messaging automation features (Drip Campaigns).": "Ejecuté rediseños de UI/UX que incluyeron modo oscuro, mejoras de navegación lateral y automatización de mensajes.",
  "Resolved critical domain, server, and third-party platform issues (GoHighLevel, HubSpot, AirTable).": "Resolví problemas críticos de dominios, servidores y plataformas externas como GoHighLevel, HubSpot y AirTable.",
  "If you're looking for someone who really makes things happen, that's Andreina. She has great attention to detail and handles multiple projects at once, always delivering on time. I would work with her a thousand times more without hesitation. Excellent programmer!": "Si buscas a alguien que realmente haga que las cosas sucedan, esa persona es Andreina. Tiene gran atención al detalle, gestiona varios proyectos y siempre entrega a tiempo. Trabajaría con ella mil veces más. ¡Excelente programadora!",
  "Andreina was a key contributor on my development team, moving confidently across full-code, WordPress, and Webflow projects. She adapts technically, learns fast, and always seeks to fully understand a problem before proposing solutions. A positive, committed teammate I highly recommend.": "Andreina fue una pieza clave de mi equipo de desarrollo, trabajando con soltura en proyectos de código completo, WordPress y Webflow. Se adapta técnicamente, aprende rápido y busca entender cada problema antes de proponer soluciones. La recomiendo ampliamente.",
  "Andreina was an absolute lifesaver across several marketing campaigns, building high-converting, flawless websites at lightning speed even under intense launch pressure. Her ability to deliver perfect work on tight timelines completely optimized our workflow.": "Andreina fue indispensable en varias campañas de marketing, creando sitios impecables y de alta conversión con gran rapidez incluso bajo presión. Su capacidad de entregar trabajo perfecto en plazos ajustados optimizó por completo nuestro flujo de trabajo.",
  "Andreina worked with us as a Web Developer for six months, consistently demonstrating professionalism, strong problem-solving skills, and a commitment to high-quality results. She took ownership of every task, tested her work across devices, and was a reliable, collaborative team member. I strongly recommend her.": "Andreina trabajó con nosotros como desarrolladora web durante seis meses, demostrando profesionalismo, gran capacidad para resolver problemas y compromiso con resultados de alta calidad. Se hizo responsable de cada tarea y fue una compañera confiable y colaborativa. La recomiendo ampliamente.",
  "Semantic, accessible markup for landing pages and layouts.": "Marcado semántico y accesible para landing pages y layouts.",
  "Responsive grids, animations and pixel-perfect designs.": "Grids responsive, animaciones y diseños pixel-perfect.",
  "Interactive UI, form validation and DOM-driven features.": "Interfaces interactivas, validación de formularios y funcionalidades basadas en el DOM.",
  "Type-safe components and reliable app-wide refactors.": "Componentes con tipos seguros y refactors confiables en toda la aplicación.",
  "Custom WordPress plugins and server-side templating.": "Plugins personalizados de WordPress y plantillas del lado del servidor.",
  "Automation scripts and data-processing tasks.": "Scripts de automatización y tareas de procesamiento de datos.",
  "REST APIs with Express and build tooling.": "APIs REST con Express y herramientas de compilación.",
  "Component-based SPAs with hooks and state management.": "SPAs basadas en componentes con hooks y gestión de estado.",
  "Utility-first styling with consistent design tokens.": "Estilos utility-first con tokens de diseño consistentes.",
  "Custom Liquid themes and storefront feature work.": "Temas Liquid personalizados y funcionalidades para storefronts.",
  "Figma-to-theme builds and Elementor customizations.": "Creación de temas desde Figma y personalizaciones con Elementor.",
  "Lightweight reactivity for menus, modals and toggles.": "Reactividad ligera para menús, modales y toggles.",
  "Server-driven partial updates without heavy JS.": "Actualizaciones parciales impulsadas por el servidor sin JavaScript pesado.",
  "Relational schemas and queries for content-driven apps.": "Esquemas relacionales y consultas para aplicaciones basadas en contenido.",
  "Document storage for flexible, fast-changing data.": "Almacenamiento de documentos para datos flexibles y cambiantes.",
  "CRM integrations, landing pages and lead capture forms.": "Integraciones CRM, landing pages y formularios de captación de leads.",
};

function normalize(value) {
  return value.replace(/\s+/g, " ").trim();
}

function translatePage(language) {
  document.documentElement.dataset.language = language;
  document.documentElement.lang = language;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const original = node.__originalText ?? node.textContent;
    node.__originalText = original;
    const key = normalize(original || "");
    const translated = language === "es" ? spanishTranslations[key] : original;
    if (translated && key) {
      const leading = original.match(/^\s*/)?.[0] || "";
      const trailing = original.match(/\s*$/)?.[0] || "";
      node.textContent = `${leading}${translated}${trailing}`;
    }
  });

  document.querySelectorAll("[aria-label]").forEach((element) => {
    const original = element.dataset.originalAriaLabel || element.getAttribute("aria-label");
    if (!original) return;
    element.dataset.originalAriaLabel = original;
    element.setAttribute("aria-label", language === "es" ? spanishTranslations[normalize(original)] || original : original);
  });

  document.querySelectorAll(".language-option").forEach((option) => {
    if (option instanceof HTMLElement && option.dataset.language) {
      option.setAttribute("aria-pressed", String(option.dataset.language === language));
    }
  });

  localStorage.setItem(LANGUAGE_KEY, language);
  window.dispatchEvent(new CustomEvent("languagechange", { detail: { language } }));
}

const language = localStorage.getItem(LANGUAGE_KEY) === "es" ? "es" : "en";
translatePage(language);

document.querySelectorAll(".language-option").forEach((option) => {
  option.addEventListener("click", () => translatePage(option.dataset.language || "en"));
});
