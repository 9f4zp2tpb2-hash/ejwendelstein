/* =========================================================
   EJ Wendelstein — main.js
   Lädt content.json (oder eine lokale Vorschau-Fassung aus
   dem internen Editor), baut Header & Footer und kümmert
   sich um das mobile Menü.
   ========================================================= */

const EJW_STORAGE_KEY = "ejw_content_override";

/**
 * Lädt den Content: zuerst wird geprüft, ob im Browser eine
 * Vorschau-Version aus dem internen Editor liegt (localStorage).
 * Falls nicht, wird die echte content.json vom Server geladen.
 */
async function ejwLoadContent(base) {
  try {
    const raw = localStorage.getItem(EJW_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    /* ignore broken local override */
  }
  const res = await fetch(base + "content.json", { cache: "no-store" });
  if (!res.ok) throw new Error("content.json konnte nicht geladen werden");
  return res.json();
}

function ejwIcon(name) {
  const icons = {
    instagram:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="2"/><circle cx="17.4" cy="6.6" r="1.2" fill="currentColor"/></svg>',
    mail:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" stroke-width="2"/><path d="M3 6l9 7 9-7" stroke="currentColor" stroke-width="2" fill="none"/></svg>',
    phone:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 4h4l2 5-2.5 1.6a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2.2 2A17 17 0 0 1 3 5.2 2 2 0 0 1 4 4z" stroke="currentColor" stroke-width="2" fill="none"/></svg>',
  };
  return icons[name] || "";
}

function ejwRenderHeader(content, base, activeHref) {
  const nav = content.site.nav
    .map(
      (item) =>
        `<li><a href="${base}${item.href}" class="${
          item.href === activeHref ? "active" : ""
        }">${item.label}</a></li>`
    )
    .join("");

  return `
  <div class="container">
    <a class="brand" href="${base}index.html">
      <img src="${base}images/logo.png" alt="${content.site.name} Logo" width="52" height="52">
      <span class="brand-text">Evangelische<br>Jugend
        <span class="hand">Wendelstein</span>
      </span>
    </a>
    <nav class="main-nav" id="ejwNav" aria-label="Hauptnavigation">
      <ul>${nav}</ul>
    </nav>
    <button class="nav-toggle" id="ejwNavToggle" aria-label="Menü öffnen" aria-expanded="false" aria-controls="ejwNav">
      <span></span>
    </button>
  </div>
  <div class="nav-scrim" id="ejwScrim"></div>`;
}

function ejwRenderFooter(content, base) {
  const c = content.site.contact;
  return `
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <span class="brand-text">Evangelische Jugend <span class="hand">Wendelstein</span></span>
        <p>${content.site.tagline}</p>
        <div class="social-row">
          <a href="${c.instagram}" aria-label="Instagram" target="_blank" rel="noopener">${ejwIcon("instagram")}</a>
          <a href="mailto:${c.email}" aria-label="E-Mail">${ejwIcon("mail")}</a>
          <a href="tel:${c.phone.replace(/[^+\d]/g, "")}" aria-label="Telefon">${ejwIcon("phone")}</a>
        </div>
      </div>
      <div>
        <h4>Navigation</h4>
        <ul>
          ${content.site.nav.map((i) => `<li><a href="${base}${i.href}">${i.label}</a></li>`).join("")}
        </ul>
      </div>
      <div>
        <h4>Kontakt</h4>
        <ul>
          <li>${c.address_line1}</li>
          <li>${c.address_line2}</li>
          <li><a href="mailto:${c.email}">${c.email}</a></li>
          <li>${c.phone}</li>
        </ul>
      </div>
      <div>
        <h4>Rechtliches</h4>
        <ul>
          <li><a href="${base}impressum.html">Impressum</a></li>
          <li><a href="${base}datenschutz.html">Datenschutz</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} ${content.site.name}</span>
      <span>Mit ♥ gebaut für unsere Gemeinde</span>
    </div>
  </div>`;
}

function ejwSetupNavToggle() {
  const btn = document.getElementById("ejwNavToggle");
  const nav = document.getElementById("ejwNav");
  const scrim = document.getElementById("ejwScrim");
  if (!btn || !nav) return;
  const close = () => {
    nav.classList.remove("open");
    scrim.classList.remove("show");
    btn.setAttribute("aria-expanded", "false");
  };
  btn.addEventListener("click", () => {
    const willOpen = !nav.classList.contains("open");
    nav.classList.toggle("open", willOpen);
    scrim.classList.toggle("show", willOpen);
    btn.setAttribute("aria-expanded", String(willOpen));
  });
  scrim.addEventListener("click", close);
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
}

/**
 * Initialisiert eine Seite: lädt den Content, baut Header/Footer
 * und ruft danach die seiteneigene render-Funktion auf.
 * @param {string} activeHref - z.B. "index.html"
 * @param {string} base - "" für Hauptseiten, "../" für /intern/
 * @param {(content: object) => void} renderPage - seiteneigenes Rendering
 */
async function ejwInit(activeHref, base, renderPage) {
  try {
    const content = await ejwLoadContent(base);
    document.getElementById("site-header-mount").innerHTML = ejwRenderHeader(
      content,
      base,
      activeHref
    );
    document.getElementById("site-footer-mount").innerHTML = ejwRenderFooter(
      content,
      base
    );
    ejwSetupNavToggle();
    if (typeof renderPage === "function") renderPage(content, base);
  } catch (err) {
    console.error(err);
    const mount = document.getElementById("site-header-mount");
    if (mount) {
      mount.innerHTML =
        '<div class="container" style="padding:16px 24px;">Inhalte konnten nicht geladen werden. Bitte über einen lokalen Server öffnen (nicht als file://).</div>';
    }
  }
}
