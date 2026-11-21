/*
  MomoInsure — EIC × ALT shared top navigation.
  Included as the very first tag in <body> on every page:
    <script src="../assets/js/site-nav.js"></script>   (pages in src/pages/)
    <script src="src/assets/js/site-nav.js"></script>  (index.html at the root)
  Nav: EIC × ALT brand | Home | Get a Quote | Support (dropdown) | dark/light toggle.
  Pair with the inline theme-init snippet in <head> (sets data-theme before first paint).
*/
(function () {
  // ---- Logos --------------------------------------------------------------
  // Recommended: save the ALT logo as public/images/alt-logo.png and change
  // ALT_LOGO to "public/images/alt-logo.png" (it is rewritten per page depth below).
  var EIC_LOGO = "https://myenterprisegroup.io/gh-insurance/wp-content/uploads/sites/2/2025/07/Enterprise-Insurance-logo_Blue.png";
  var ALT_LOGO = "https://altsolutionsmicrocredit.com/_next/image?url=%2FImages%2FALT-MC-LOGO.png&w=256&q=75";

  var SUPPORT_WHATSAPP = "https://wa.me/233552375066?text=I%20need%20help%20with%20MomoInsure";
  var SUPPORT_EMAIL = "eicinformalmarket@gmail.com";

  // index.html lives at the project root; the calculator lives in src/pages/.
  var inPages = location.pathname.indexOf("/src/pages/") !== -1;
  var current = location.pathname.split("/").pop() || "index.html";
  var homeHref = inPages ? "../../index.html" : "index.html";
  var quoteHref = inPages ? "momoinsure.html" : "src/pages/momoinsure.html";
  var homeActive = current === "index.html" ? " active" : "";
  var quoteActive = current === "momoinsure.html" ? " active" : "";

  var chevron =
    '<svg class="insme-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>';

  // If a logo fails to load, hide it and reveal the text badge that follows it.
  var onErr = "this.style.display='none';this.nextElementSibling.style.display='inline-flex'";

  var html =
    '<header class="insme-nav">' +
    '<div class="insme-nav-inner">' +
    '<a class="insme-nav-brand" href="' + homeHref + '" aria-label="MomoInsure home — EIC × ALT">' +
    '<img src="' + EIC_LOGO + '" alt="Enterprise Insurance (EIC)" onerror="' + onErr + '">' +
    '<span class="insme-fb eic">EIC</span>' +
    '<span class="insme-x" aria-hidden="true">×</span>' +
    '<img src="' + ALT_LOGO + '" alt="ALT Solutions Microcredit" onerror="' + onErr + '">' +
    '<span class="insme-fb alt">ALT</span>' +
    '<span class="insme-pname">MomoInsure</span>' +
    "</a>" +
    '<nav class="insme-nav-links">' +
    '<a href="' + homeHref + '" class="tab' + homeActive + '">Home</a>' +
    '<a href="' + quoteHref + '" class="tab' + quoteActive + '">Get a quote</a>' +
    '<div class="insme-dd insme-dd-right">' +
    '<button type="button" class="tab insme-dd-btn" aria-haspopup="true" aria-expanded="false">Support' + chevron + "</button>" +
    '<div class="insme-dd-menu" role="menu">' +
    '<a href="' + SUPPORT_WHATSAPP + '" role="menuitem" target="_blank" rel="noopener"><strong>WhatsApp</strong><small>Chat with us now</small></a>' +
    '<a href="mailto:' + SUPPORT_EMAIL + '" role="menuitem"><strong>Email</strong><small>' + SUPPORT_EMAIL + "</small></a>" +
    "</div>" +
    "</div>" +
    "</nav>" +
    '<button type="button" class="insme-theme-toggle" id="insme-theme-toggle" aria-label="Toggle dark mode">' +
    '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path></svg>' +
    '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>' +
    "</button>" +
    "</div>" +
    "</header>";

  var thisScript = document.currentScript;
  thisScript.insertAdjacentHTML("afterend", html);

  var nav = document.querySelector(".insme-nav");

  // Dropdown styling: 48px trigger, visible border, 150ms open/close, flip-up variant.
  // Selectors are prefixed with .insme-nav so they win over shared.css.
  var css = [
    '.insme-nav .insme-dd{position:relative;}',
    '.insme-nav .insme-dd-btn{display:inline-flex;align-items:center;gap:8px;min-height:48px;padding:0 16px;border:1px solid var(--line);border-radius:8px;cursor:pointer;transition:border-color 150ms ease-out,background-color 150ms ease-out;}',
    '.insme-nav .insme-dd-btn:hover,.insme-nav .insme-dd.open .insme-dd-btn{border-color:var(--primary-dark);background:var(--tint);}',
    '.insme-nav .insme-dd-btn:focus-visible{outline:2px solid var(--primary-dark);outline-offset:2px;}',
    '.insme-nav .insme-chevron{width:18px;height:18px;flex:none;transition:transform 150ms ease-out;}',
    '.insme-nav .insme-dd.open .insme-chevron{transform:rotate(180deg);}',
    '.insme-nav .insme-dd .insme-dd-menu{display:block;position:absolute;top:calc(100% + 8px);bottom:auto;min-width:240px;max-width:calc(100vw - 32px);max-height:calc(100vh - 96px);overflow-y:auto;visibility:hidden;opacity:0;transform:translateY(-4px);',
    'transition:opacity 150ms ease-out,transform 150ms ease-out,visibility 0s linear 150ms;}',
    '.insme-nav .insme-dd.flip-up .insme-dd-menu{top:auto;bottom:calc(100% + 8px);transform:translateY(4px);}',
    '.insme-nav .insme-dd-right .insme-dd-menu{right:0;left:auto;}',
    '.insme-nav .insme-dd-menu::before{content:"";position:absolute;left:0;right:0;top:-8px;height:8px;}',
    '.insme-nav .insme-dd.flip-up .insme-dd-menu::before{top:auto;bottom:-8px;}',
    '.insme-nav .insme-dd.open .insme-dd-menu{visibility:visible;opacity:1;transform:none;transition-delay:0s;}',
    '@media (hover:hover){.insme-nav .insme-dd:hover .insme-dd-menu{visibility:visible;opacity:1;transform:none;transition-delay:0s;}}',
    '.insme-nav .insme-dd-menu a{display:block;min-height:48px;padding:8px 16px;}',
    '.insme-nav .insme-dd-menu a:hover,.insme-nav .insme-dd-menu a:focus-visible{background:var(--tint);outline:none;box-shadow:inset 3px 0 0 var(--primary-dark);}',
    '@media (prefers-reduced-motion:reduce){.insme-nav .insme-dd-btn,.insme-nav .insme-chevron,.insme-nav .insme-dd .insme-dd-menu{transition:none;}}'
  ].join("");
  var styleEl = document.createElement("style");
  styleEl.textContent = css;
  document.head.appendChild(styleEl);
  function applyOffset() { document.body.style.paddingTop = nav.offsetHeight + "px"; }
  applyOffset();
  window.addEventListener("resize", applyOffset);

  // Support dropdown. CSS opens it on hover (pointer devices); click/tap and the keyboard use the .open class.
  // Keyboard: Enter/Space/ArrowDown open and focus the first item, ArrowUp opens on the last,
  // arrows/Home/End move between items, Esc closes and returns focus to the trigger.
  var dds = Array.prototype.slice.call(nav.querySelectorAll(".insme-dd"));
  function menuItems(dd) { return Array.prototype.slice.call(dd.querySelectorAll('[role="menuitem"]')); }

  // Flip up when there isn't room below the trigger (and there is more room above).
  function place(dd) {
    var btn = dd.querySelector(".insme-dd-btn");
    var menu = dd.querySelector(".insme-dd-menu");
    dd.classList.remove("flip-up");
    var r = btn.getBoundingClientRect();
    var below = window.innerHeight - r.bottom - 16;
    var above = r.top - 16;
    if (menu.offsetHeight > below && above > below) dd.classList.add("flip-up");
  }
  function setOpen(dd, open) {
    if (open) place(dd);
    dd.classList.toggle("open", open);
    dd.querySelector(".insme-dd-btn").setAttribute("aria-expanded", open ? "true" : "false");
  }
  dds.forEach(function (dd) {
    var btn = dd.querySelector(".insme-dd-btn");
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var willOpen = !dd.classList.contains("open");
      dds.forEach(function (o) { setOpen(o, false); });
      setOpen(dd, willOpen);
      if (willOpen && e.detail === 0) menuItems(dd)[0].focus(); // opened from the keyboard
    });
    dd.addEventListener("mouseenter", function () { place(dd); });
    dd.addEventListener("keydown", function (e) {
      var list = menuItems(dd);
      var i = list.indexOf(document.activeElement);
      var n = list.length;
      if (e.target === btn && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
        e.preventDefault();
        setOpen(dd, true);
        list[e.key === "ArrowDown" ? 0 : n - 1].focus();
      } else if (i > -1) {
        var next = null;
        if (e.key === "ArrowDown") next = list[(i + 1) % n];
        else if (e.key === "ArrowUp") next = list[(i - 1 + n) % n];
        else if (e.key === "Home") next = list[0];
        else if (e.key === "End") next = list[n - 1];
        if (next) { e.preventDefault(); next.focus(); }
      }
    });
    // Tabbing out of the dropdown closes it.
    dd.addEventListener("focusout", function (e) {
      if (e.relatedTarget && !dd.contains(e.relatedTarget)) setOpen(dd, false);
    });
  });
  document.addEventListener("click", function (e) {
    dds.forEach(function (dd) { if (!dd.contains(e.target)) setOpen(dd, false); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    dds.forEach(function (dd) {
      if (!dd.classList.contains("open")) return;
      var hadFocus = dd.contains(document.activeElement);
      setOpen(dd, false);
      if (hadFocus) dd.querySelector(".insme-dd-btn").focus();
    });
  });

  document.getElementById("insme-theme-toggle").addEventListener("click", function () {
    var root = document.documentElement;
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("insme-theme", next); } catch (e) {}
  });
})();
