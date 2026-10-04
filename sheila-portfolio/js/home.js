/* ============================================================
   SHEILA LOBO CABRERA — RENDERIZADO DE LA HOME
   ============================================================ */

(function(){

  function flowHTML(steps, small){
    return `<div class="flow ${small ? 'project-flow' : ''}">` + steps.map((step, i) => {
      const arrow = i < steps.length - 1
        ? `<svg class="flow-arrow" viewBox="0 0 28 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="0" y1="7" x2="22" y2="7"/><path d="M16 1 L22 7 L16 13"/></svg>`
        : "";
      return `<span class="flow-step"><span class="flow-pill">${step}</span>${arrow}</span>`;
    }).join("") + `</div>`;
  }

  function tagsHTML(tags){
    return tags.map(t => {
      if (typeof t === "object") return `<span class="tag${t.strong ? ' tag-strong' : ''}">${t.label}</span>`;
      return `<span class="tag">${t}</span>`;
    }).join("");
  }

  function renderHero(c){
    document.getElementById("hero-content").innerHTML = `
      <div class="hero-copy" data-reveal>
        <p class="hero-kicker">${c.hero.kicker}</p>
        <h1>${c.hero.name}</h1>
        <p class="hero-position">${c.hero.position}</p>
        <p class="hero-lead">${c.hero.text}</p>
        <div class="hero-cta">
          <a class="btn btn-primary" href="#proyectos">${c.hero.ctaPrimary}</a>
          <a class="btn btn-ghost" href="#sobre-mi">${c.hero.ctaSecondary}</a>
        </div>
      </div>
      <div class="hero-media" data-reveal>
        <div class="hero-media-frame">
          <img src="assets/images/hero.jpg" alt="Retrato de Sheila Lobo Cabrera" width="1600" height="1600">
        </div>
        <div class="hero-media-deco" aria-hidden="true"></div>
        <p class="hero-media-tag">${c.hero.mediaTag}</p>
      </div>
    `;
  }

  function renderAbout(c){
    document.getElementById("about-content").innerHTML = `
      <div class="about-media" data-reveal>
        <video
          class="about-video"
          poster="assets/projects/sobre-mi-clase-poster.jpg"
          muted playsinline loop preload="metadata"
          aria-label="Sheila Lobo Cabrera explicando la programación de un sensor de humedad con micro:bit en clase">
          <source src="assets/projects/sobre-mi-clase.webm" type="video/webm">
          <source src="assets/projects/sobre-mi-clase.mp4" type="video/mp4">
        </video>
        <button type="button" class="about-video-toggle" id="about-video-toggle" aria-label="${c.about.videoPause}">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <g class="icon-pause"><rect x="6.5" y="5" width="3.8" height="14" rx="1"/><rect x="13.7" y="5" width="3.8" height="14" rx="1"/></g>
            <path class="icon-play" d="M8 5.2v13.6a.6.6 0 0 0 .9.5l11-6.8a.6.6 0 0 0 0-1L8.9 4.7a.6.6 0 0 0-.9.5z"/>
          </svg>
        </button>
      </div>
      <div data-reveal>
        <p class="eyebrow">${c.about.eyebrow}</p>
        <h2 id="about-title">${c.about.title}</h2>
        <p style="margin-top:0.8em; color: var(--ink-soft);">${c.about.p1}</p>
        <p style="margin-top:1em; color: var(--ink-soft);">${c.about.p2}</p>
        <p style="margin-top:1em; color: var(--ink-soft);">${c.about.p3}</p>
      </div>
    `;
  }

  function renderApproach(c){
    document.getElementById("approach-content").innerHTML = `
      <div class="section-head" data-reveal>
        <p class="eyebrow">${c.approach.eyebrow}</p>
        <h2 id="approach-title">${c.approach.title}</h2>
        <p class="lead" style="margin-top:0.8em;">${c.approach.intro}</p>
      </div>
      <div data-reveal>
        ${flowHTML(c.approach.flow)}
        <p class="flow-note">${c.approach.note}</p>
      </div>
    `;
  }

  function renderAmbitos(c){
    document.getElementById("ambitos-content").innerHTML = `
      <div class="section-head" data-reveal>
        <p class="eyebrow">${c.ambitos.eyebrow}</p>
        <h2 id="ambitos-title">${c.ambitos.title}</h2>
      </div>
      <div class="ambitos-list">
        ${c.ambitos.items.map(item => `
          <div class="ambito" data-reveal>
            <div class="ambito-mark" aria-hidden="true">${item.mark}</div>
            <div class="ambito-body">
              <h3>${item.title}</h3>
              ${item.subtitle ? `<p class="ambito-sub">${item.subtitle}</p>` : ""}
              ${item.degrees.length ? `<ul class="ambito-degrees">${item.degrees.map(d => `<li>${d}</li>`).join("")}</ul>` : ""}
              <p>${item.text}</p>
              ${item.tags.length ? `<div class="tag-cluster">${tagsHTML(item.tags)}</div>` : ""}
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  function renderProjectsHome(c, lang){
    const featured = c.projects.filter(p => p.featured);
    const exploreLabel = lang === "es" ? "Explorar proyecto" : "Explore project";
    const placeholderLabel = lang === "es" ? "Imagen provisional" : "Placeholder image";
    document.getElementById("projects-content").innerHTML = `
      <div class="section-head" data-reveal>
        <p class="eyebrow">${c.projectsHome.eyebrow}</p>
        <h2 id="projects-title">${c.projectsHome.title}</h2>
        <p class="lead" style="margin-top:0.8em;">${c.projectsHome.intro}</p>
      </div>
      <div class="projects-grid">
        ${featured.map(p => `
          <a class="project-teaser" href="proyectos.html?open=${p.id}#${p.id}" data-reveal>
            <div class="project-teaser-media">
              <img src="${p.media}" alt="" loading="lazy">
              ${p.media.endsWith(".svg") ? `<span class="media-badge">${placeholderLabel}</span>` : ""}
            </div>
            <div class="project-teaser-body">
              <h3>${p.title}</h3>
              <p>${p.phrase}</p>
              <div class="project-teaser-tags">${tagsHTML(p.tags.slice(0,3))}</div>
              <div class="project-teaser-foot">
                <span class="link-arrow">${exploreLabel}
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </span>
              </div>
            </div>
          </a>
        `).join("")}
      </div>
      <div class="projects-cta" data-reveal>
        <a class="link-arrow" href="proyectos.html">${c.projectsHome.ctaAll}
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
        </a>
      </div>
    `;
  }

  function renderFormacion(c){
    document.getElementById("formacion-content").innerHTML = `
      <div class="section-head" data-reveal>
        <p class="eyebrow">${c.formacion.eyebrow}</p>
        <h2 id="formacion-title">${c.formacion.title}</h2>
      </div>
      <div class="education-cols">
        <div data-reveal>
          <h3 class="education-group-title">${c.formacion.uniTitle}</h3>
          <div class="education-list">
            ${c.formacion.uni.map(u => `
              <div class="education-item">
                <h4>${u.title}</h4>
                <p>${u.desc}</p>
              </div>`).join("")}
          </div>
        </div>
        <div data-reveal>
          <h3 class="education-group-title">${c.formacion.complTitle}</h3>
          <div class="education-list">
            ${c.formacion.compl.map(u => `
              <div class="education-item">
                <h4>${u.title}</h4>
              </div>`).join("")}
          </div>
        </div>
      </div>
    `;
  }

  function renderContact(c){
    document.getElementById("contact-content").innerHTML = `
      <div data-reveal>
        <p class="eyebrow">${c.contact.eyebrow}</p>
        <h2 id="contact-title">${c.contact.title}</h2>
        <p class="lead" style="margin-top:0.7em;">${c.contact.lead}</p>
      </div>
      <div data-reveal style="display:flex; flex-wrap:wrap; align-items:center; gap:1rem;">
        <a class="contact-email" href="mailto:sheila.lobocabrera@gmail.com">sheila.lobocabrera@gmail.com</a>
        <button type="button" class="copy-btn" data-copy="sheila.lobocabrera@gmail.com" data-label-copied="${c.contact.copied}">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="5" y="5" width="9" height="9" rx="1.5"/><path d="M2 11V3a1 1 0 0 1 1-1h8"/></svg>
          ${c.contact.copy}
        </button>
      </div>
    `;
  }

  function initAboutVideo(c){
    const video = document.querySelector(".about-video");
    const btn = document.getElementById("about-video-toggle");
    if (!video) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let userPaused = false;   // si la persona lo pausa, el scroll no lo reanuda

    // Icono y etiqueta accesible siguen siempre el estado real del vídeo.
    // Se cambia una clase (no la propiedad "hidden", que no funciona en SVG).
    function sync(){
      if (!btn) return;
      const paused = video.paused;
      btn.classList.toggle("is-paused", paused);
      btn.setAttribute("aria-label", paused ? c.about.videoPlay : c.about.videoPause);
    }
    video.addEventListener("play", sync);
    video.addEventListener("pause", sync);
    sync();

    if (btn){
      btn.addEventListener("click", () => {
        if (video.paused){ userPaused = false; video.play().catch(() => {}); }
        else { userPaused = true; video.pause(); }
      });
    }

    if (reduced) return;               // se queda en el póster; la persona decide si lo reproduce
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){ if (!userPaused) video.play().catch(() => {}); }
        else video.pause();
      });
    }, { threshold: 0.35 });
    io.observe(video);
  }

  function renderAll(lang){
    const c = window.SITE_CONTENT[lang];
    document.documentElement.lang = lang;
    document.getElementById("page-title").textContent = c.meta.title;
    document.getElementById("meta-description").setAttribute("content", c.meta.description);
    const ogT = document.getElementById("meta-og-title"); if (ogT) ogT.setAttribute("content", c.meta.title);
    const ogD = document.getElementById("meta-og-description"); if (ogD) ogD.setAttribute("content", c.meta.description);

    SiteCommon.renderNav(lang);
    renderHero(c);
    renderAbout(c);
    renderApproach(c);
    renderAmbitos(c);
    renderProjectsHome(c, lang);
    renderFormacion(c);
    renderContact(c);
    SiteCommon.renderFooter(lang);
    SiteCommon.setLangButtons(lang);

    SiteCommon.markRevealTargets(document);
    SiteCommon.initRevealOnScroll();
    SiteCommon.initCopyButtons();
    SiteCommon.initActiveNavHighlight();
    initAboutVideo(c);
  }

  SiteCommon.initLangSwitcher(renderAll);
  SiteCommon.initMobileNav();
  SiteCommon.initStickyHeader();
  renderAll(SiteCommon.getLang());

})();
