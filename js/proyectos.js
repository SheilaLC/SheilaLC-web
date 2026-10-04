/* ============================================================
   SHEILA LOBO CABRERA — RENDERIZADO DE /proyectos
   Bandas horizontales expandibles, un proyecto abierto a la vez.
   ============================================================ */

(function(){

  function flowHTML(steps){
    return `<div class="flow project-flow">` + steps.map((step, i) => {
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

  function paragraphs(text){
    return text.split("\n\n").map(p => `<p>${p}</p>`).join("");
  }

  function labels(lang){
    return lang === "es" ? {
      context: "Contexto",
      objetivo: "Qué se buscaba trabajar",
      proceso: "Cómo se planteó",
      demuestra: "Qué demuestra",
      note: "Nota",
      placeholder: "Imagen provisional — sustituir por fotografía o vídeo del proyecto",
      heroTitle: "Proyectos",
      heroIntro: "Cada proyecto muestra cómo convierto un objetivo o un contenido en una experiencia de aprendizaje: el contexto, cómo se planteó y qué demuestra sobre mi forma de trabajar.",
      privacyTitle: "Sobre las imágenes y los datos de los proyectos",
      privacyText: "Por privacidad, no se publican imágenes identificables de menores sin la autorización adecuada, ni los materiales completos (textos, casos o fichas) utilizados en las actividades.",
    } : {
      context: "Context",
      objetivo: "What we set out to work on",
      proceso: "How it was approached",
      demuestra: "What it demonstrates",
      note: "Note",
      placeholder: "Placeholder image — to be replaced with a project photo or video",
      heroTitle: "Projects",
      heroIntro: "Each project shows how I turn an objective or a piece of content into a learning experience: the context, how it was approached, and what it demonstrates about the way I work.",
      privacyTitle: "About the images and data used in these projects",
      privacyText: "For privacy reasons, no identifiable images of minors are published without appropriate authorisation, and full materials (texts, cases or worksheets) used in the activities are not published either.",
    };
  }

  function renderHero(c, lang){
    const L = labels(lang);
    document.getElementById("proyectos-hero-content").innerHTML = `
      <a class="link-arrow" href="index.html">${lang === "es" ? "← Volver al inicio" : "← Back to home"}</a>
      <h1 style="margin-top:0.9em;">${L.heroTitle}</h1>
      <p class="lead" style="margin-top:0.6em; max-width:44rem;">${L.heroIntro}</p>
    `;
  }

  function galleryFor(p){
    if (p.gallery && p.gallery.length) return p.gallery;
    if (p.video) return [{ type: "video", src: p.video, poster: p.media }];
    return [{ type: "image", src: p.media }];
  }

  function galleryItemHTML(item, i){
    if (item.type === "video"){
      return `<div class="gallery-item" data-index="${i}"${i>0 ? ' hidden' : ''}><video controls muted preload="metadata"${item.poster ? ` poster="${item.poster}"` : ""}><source src="${item.src}" type="video/mp4"></video></div>`;
    }
    return `<div class="gallery-item" data-index="${i}"${i>0 ? ' hidden' : ''}><img src="${item.src}" alt="" loading="lazy"></div>`;
  }

  function galleryHTML(p){
    const items = galleryFor(p);
    const nav = items.length > 1 ? `
      <button type="button" class="gallery-nav gallery-prev" aria-label="Anterior">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 3L5 8l5 5"/></svg>
      </button>
      <button type="button" class="gallery-nav gallery-next" aria-label="Siguiente">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 3l5 5-5 5"/></svg>
      </button>
      <div class="gallery-dots">${items.map((_, i) => `<button type="button" class="gallery-dot${i===0 ? ' is-active' : ''}" data-index="${i}" aria-label="Elemento ${i+1}"></button>`).join("")}</div>
    ` : "";
    return `
      <div class="project-gallery" data-count="${items.length}">
        <div class="project-media-main">
          ${items.map(galleryItemHTML).join("")}
        </div>
        ${nav}
      </div>
    `;
  }

  function initGalleries(root){
    root.querySelectorAll(".project-gallery").forEach(gallery => {
      const items = Array.from(gallery.querySelectorAll(".gallery-item"));
      const dots = Array.from(gallery.querySelectorAll(".gallery-dot"));
      if (items.length <= 1) return;
      let current = 0;
      function show(index){
        items[current].querySelectorAll("video").forEach(v => v.pause());
        items[current].hidden = true;
        dots[current] && dots[current].classList.remove("is-active");
        current = (index + items.length) % items.length;
        items[current].hidden = false;
        dots[current] && dots[current].classList.add("is-active");
      }
      const prev = gallery.querySelector(".gallery-prev");
      const next = gallery.querySelector(".gallery-next");
      if (prev) prev.addEventListener("click", () => show(current - 1));
      if (next) next.addEventListener("click", () => show(current + 1));
      dots.forEach(dot => dot.addEventListener("click", () => show(parseInt(dot.dataset.index, 10))));
    });
  }

  function bandHTML(p, lang){
    const L = labels(lang);
    return `
      <article class="project-band" id="${p.id}" data-project-id="${p.id}">
        <button type="button" class="project-band-trigger" aria-expanded="false" aria-controls="panel-${p.id}">
          <span class="project-band-thumb"><img src="${p.media}" alt="" loading="lazy"></span>
          <span class="project-band-head">
            <h2>${p.title}</h2>
            <p class="project-band-phrase">${p.phrase}</p>
            <span class="project-band-tags">${tagsHTML(p.tags)}</span>
          </span>
          <span class="project-band-chevron" aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6l4 4 4-4"/></svg>
          </span>
        </button>
        <div class="project-band-panel" id="panel-${p.id}">
          <div class="project-band-panel-inner">
            <div class="project-band-content">
              <div>
                ${galleryHTML(p)}
                <p style="font-size:0.8rem; color: var(--ink-soft); margin-top:0.6em;">${(!p.gallery && !p.video && p.media.endsWith(".svg")) ? L.placeholder : ""}</p>
                ${p.note ? `<div class="project-detail-block" style="margin-top:1.2em;"><h3>${L.note}</h3><p>${p.note}</p></div>` : ""}
              </div>
              <div>
                <div class="project-detail-block">
                  <h3>${L.context}</h3>
                  <p>${p.context}</p>
                </div>
                <div class="project-detail-block">
                  <h3>${L.objetivo}</h3>
                  <p>${p.objetivo}</p>
                </div>
                <div class="project-detail-block">
                  <h3>${L.proceso}</h3>
                  ${flowHTML(p.flow)}
                  <div style="margin-top:0.9em;">${paragraphs(p.proceso)}</div>
                </div>
                <div class="project-detail-block">
                  <h3>${L.demuestra}</h3>
                  <div class="project-value-card">${p.demuestra}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function renderBands(c, lang){
    const list = document.getElementById("project-bands-list");
    list.innerHTML = c.projects.map(p => bandHTML(p, lang)).join("");
    initGalleries(list);

    list.querySelectorAll(".project-band-trigger").forEach(trigger => {
      trigger.addEventListener("click", () => {
        const band = trigger.closest(".project-band");
        const isOpen = band.classList.contains("is-open");
        list.querySelectorAll(".project-band.is-open").forEach(open => {
          if (open !== band){
            open.classList.remove("is-open");
            open.querySelector(".project-band-trigger").setAttribute("aria-expanded", "false");
            open.querySelectorAll("video").forEach(v => v.pause());
          }
        });
        band.classList.toggle("is-open", !isOpen);
        trigger.setAttribute("aria-expanded", (!isOpen).toString());
        if (!isOpen){
          setTimeout(() => {
            band.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 180);
        } else {
          band.querySelectorAll("video").forEach(v => v.pause());
        }
      });
    });
  }

  function openFromQuery(){
    const params = new URLSearchParams(location.search);
    const id = params.get("open") || location.hash.replace("#", "");
    if (!id) return;
    const band = document.getElementById(id);
    if (!band || !band.classList.contains("project-band")) return;
    band.classList.add("is-open");
    band.querySelector(".project-band-trigger").setAttribute("aria-expanded", "true");
    setTimeout(() => band.scrollIntoView({ behavior: "smooth", block: "start" }), 250);
  }

  function renderOtherProjects(c, lang){
    const title = c.otherProjectsSection.title;
    const intro = c.otherProjectsSection.intro;
    document.getElementById("other-projects-block").innerHTML = `
      <div class="other-projects">
        <h2>${title}</h2>
        <p class="lead" style="margin-top:0.5em; max-width:46rem;">${intro}</p>
        <div class="other-projects-list">
          ${c.otherProjects.map(op => `
            <div class="other-project">
              ${op.video ? `<div class="other-project-media"><video controls muted preload="metadata"${op.poster ? ` poster="${op.poster}"` : ""}><source src="${op.video}" type="video/mp4"></video></div>` : ""}
              <div class="other-project-body">
                <h3>${op.title} <span style="font-weight:400;color:var(--ink-soft);font-size:0.85rem;">· ${op.context}</span></h3>
                <p>${op.text}</p>
                <div class="other-project-tags">${tagsHTML(op.tags)}</div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  function renderPrivacyNote(lang){
    const L = labels(lang);
    document.getElementById("privacy-note-block").innerHTML = `
      <div class="privacy-note">
        <strong style="color: var(--ink);">${L.privacyTitle}</strong>
        <p style="margin-top:0.4em;">${L.privacyText}</p>
      </div>
    `;
  }

  function renderAll(lang){
    const c = window.SITE_CONTENT[lang];
    document.documentElement.lang = lang;
    document.getElementById("page-title").textContent = c.meta.titleProyectos;
    const desc = document.getElementById("meta-description");
    if (desc) desc.setAttribute("content", c.meta.descriptionProyectos);

    SiteCommon.renderNav(lang);
    renderHero(c, lang);
    renderBands(c, lang);
    renderOtherProjects(c, lang);
    renderPrivacyNote(lang);
    SiteCommon.renderFooter(lang);
    SiteCommon.setLangButtons(lang);

    openFromQuery();
  }

  SiteCommon.initLangSwitcher(renderAll);
  SiteCommon.initMobileNav();
  SiteCommon.initStickyHeader();
  renderAll(SiteCommon.getLang());

})();
