/* ============================================================
   SHEILA LOBO CABRERA — UTILIDADES COMPARTIDAS
   Navegación, idioma, cabecera/pie, menú móvil y microinteracciones.
   Compartido entre index.html, proyectos.html y legal.html.
   ============================================================ */

const NAV_ITEMS = [
  { key: "about",    id: "sobre-mi" },
  { key: "approach", id: "enfoque" },
  { key: "ambitos",  id: "ambitos" },
  { key: "projects", id: "proyectos" },
  { key: "training", id: "formacion" },
  { key: "contact",  id: "contacto" }
];

const SiteCommon = (function(){

  const IS_HOME = /(^|\/)index\.html$|\/$/.test(location.pathname) || location.pathname.endsWith("/sheila-portfolio/") || location.pathname === "" ;

  function getLang(){
    const saved = localStorage.getItem("slc-lang");
    if (saved === "es" || saved === "en") return saved;
    const browser = (navigator.language || "es").slice(0,2);
    return browser === "en" ? "en" : "es";
  }

  function setLangButtons(lang){
    ["lang-es","lang-en"].forEach(id => {
      const btn = document.getElementById(id);
      if (!btn) return;
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function initLangSwitcher(onChange){
    document.querySelectorAll(".lang-switch button").forEach(btn => {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        localStorage.setItem("slc-lang", lang);
        onChange(lang);
      });
    });
  }

  function navHref(id){
    return IS_HOME ? ("#" + id) : ("index.html#" + id);
  }

  function renderNav(lang){
    const c = window.SITE_CONTENT[lang];
    const items = NAV_ITEMS.map(item => {
      return `<li><a href="${navHref(item.id)}" data-nav-id="${item.id}">${c.nav[item.key]}</a></li>`;
    }).join("");
    const mainList = document.getElementById("main-nav-list");
    const mobileList = document.getElementById("mobile-nav-list");
    if (mainList) mainList.innerHTML = items;
    if (mobileList) mobileList.innerHTML = items;

    const brandName = document.getElementById("brand-name");
    if (brandName) brandName.textContent = c.nav.brand;
  }

  function renderFooter(lang){
    const c = window.SITE_CONTENT[lang];
    const el = document.getElementById("footer-content");
    if (!el) return;
    const year = new Date().getFullYear();
    el.innerHTML = `
      <div class="footer-grid">
        <div>
          <div class="footer-brand">Sheila Lobo Cabrera</div>
          <nav class="footer-legal" aria-label="${lang==='es' ? 'Legal' : 'Legal'}">
            <a href="legal.html">${c.footer.legalNotice}</a>
            <a href="legal.html">${c.footer.privacy}</a>
            <a href="legal.html">${c.footer.cookies}</a>
          </nav>
        </div>
        <div>
          <a class="link-arrow" href="mailto:sheila.lobocabrera@gmail.com">sheila.lobocabrera@gmail.com</a>
        </div>
      </div>
      <div class="footer-meta">&copy; ${year} Sheila Lobo Cabrera. ${c.footer.meta}</div>
    `;
  }

  function initMobileNav(){
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("mobile-nav");
    if (!toggle || !nav) return;
    function close(){
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  function initStickyHeader(){
    const header = document.getElementById("site-header");
    if (!header) return;
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initRevealOnScroll(){
    const targets = document.querySelectorAll(".reveal");
    if (!targets.length || !("IntersectionObserver" in window)) {
      targets.forEach(t => t.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    targets.forEach(t => io.observe(t));
  }

  function markRevealTargets(root){
    (root || document).querySelectorAll("[data-reveal]").forEach(el => el.classList.add("reveal"));
  }

  function initActiveNavHighlight(){
    const sections = NAV_ITEMS.map(i => document.getElementById(i.id)).filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in window)) return;
    const links = document.querySelectorAll('[data-nav-id]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          const id = entry.target.id;
          links.forEach(l => l.classList.toggle("is-active", l.dataset.navId === id));
        }
      });
    }, { threshold: 0.5 });
    sections.forEach(s => io.observe(s));
  }

  function initCopyButtons(){
    document.querySelectorAll("[data-copy]").forEach(btn => {
      btn.addEventListener("click", async () => {
        const text = btn.dataset.copy;
        try {
          await navigator.clipboard.writeText(text);
          const original = btn.dataset.labelDefault || btn.textContent;
          btn.dataset.labelDefault = original;
          btn.textContent = btn.dataset.labelCopied || original;
          setTimeout(() => { btn.textContent = original; }, 1800);
        } catch (e) { /* clipboard unavailable — link still works */ }
      });
    });
  }

  return {
    getLang, setLangButtons, initLangSwitcher,
    renderNav, renderFooter,
    initMobileNav, initStickyHeader,
    initRevealOnScroll, markRevealTargets,
    initActiveNavHighlight, initCopyButtons,
    navHref
  };
})();
