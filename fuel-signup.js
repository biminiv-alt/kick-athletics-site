/* Kick Athletics: free Tournament Day Fuel Plan signup.
   Drop <div data-fuel-signup data-place="article"></div> anywhere; this script fills it.
   Subscribes the email to Kit form 10232656 ("Kick: Tournament Day Fuel Plan (site)"). */
(function () {
  var FORM_ID = "10232656";
  var KIT_PUBLIC_KEY = "9JSd-76ZSveD4nbFfGu8ow"; // Kit public API key (safe for browsers, same one /quiz/ uses)
  var PDF_URL = "/downloads/tournament-day-fuel-plan.pdf";
  var DONE_KEY = "kick_fuel_plan_signup";

  var css = "" +
    ".fs-card{--fs-bg:#fff;--fs-ink:#1e2a2a;--fs-soft:#4a5559;--fs-line:#e2d9cc;--fs-accent:#c85a3a;--fs-btn-ink:#fff;--fs-field:#fff;" +
    "background:var(--fs-bg);color:var(--fs-ink);border:1px solid var(--fs-line);border-radius:16px;padding:26px 24px;margin:40px 0;" +
    "display:flex;gap:22px;align-items:center;font-family:Inter,system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;box-shadow:0 1px 3px rgba(30,42,42,.06);text-align:left}" +
    ".fs-card[data-theme=dark]{--fs-bg:#131A26;--fs-ink:#F4F7FB;--fs-soft:#9AA8C2;--fs-line:#263248;--fs-accent:#F59E0B;--fs-btn-ink:#0B0F17;--fs-field:#0B0F17;box-shadow:none}" +
    ".fs-thumb{flex:0 0 96px;width:96px;height:124px;border-radius:8px;background:#0B0F17;position:relative;overflow:hidden;box-shadow:0 6px 18px rgba(0,0,0,.18);transform:rotate(-3deg)}" +
    ".fs-thumb:before{content:'';position:absolute;left:0;right:0;top:0;height:4px;background:#F59E0B}" +
    ".fs-thumb b{position:absolute;left:10px;top:16px;width:16px;height:16px;border-radius:4px;background:linear-gradient(135deg,#F59E0B,#EF4444)}" +
    ".fs-thumb i{position:absolute;left:10px;right:10px;top:44px;font:900 13px/1.05 Inter,system-ui,sans-serif;color:#fff;font-style:normal}" +
    ".fs-thumb u{position:absolute;left:10px;top:86px;width:22px;height:3px;background:#F59E0B}" +
    ".fs-body{flex:1;min-width:0}" +
    ".fs-kicker{font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--fs-accent);font-weight:700;margin:0 0 6px}" +
    ".fs-title{font-size:21px;line-height:1.25;font-weight:800;margin:0 0 6px;color:var(--fs-ink)}" +
    ".fs-sub{font-size:15px;line-height:1.5;color:var(--fs-soft);margin:0 0 14px}" +
    ".fs-form{display:flex;gap:8px;flex-wrap:wrap;margin:0}" +
    ".fs-form input{flex:1 1 200px;min-width:0;font:16px Inter,system-ui,sans-serif;padding:13px 14px;border-radius:10px;border:1px solid var(--fs-line);background:var(--fs-field);color:var(--fs-ink)}" +
    ".fs-form input:focus{outline:2px solid var(--fs-accent);outline-offset:1px}" +
    ".fs-form button{flex:0 0 auto;font:700 16px Inter,system-ui,sans-serif;padding:13px 20px;border-radius:10px;border:0;background:var(--fs-accent);color:var(--fs-btn-ink);cursor:pointer}" +
    ".fs-form button[disabled]{opacity:.6;cursor:default}" +
    ".fs-fine{font-size:12.5px;color:var(--fs-soft);margin:10px 0 0;line-height:1.45}" +
    ".fs-err{color:#d14343}" +
    ".fs-done .fs-title{margin-bottom:4px}" +
    ".fs-dl{display:inline-block;margin-top:6px;font-weight:700;color:var(--fs-accent);text-decoration:underline}" +
    "@media (max-width:560px){.fs-card{flex-direction:column;align-items:flex-start;padding:22px 18px}.fs-thumb{display:none}.fs-form button{flex:1 1 100%}}";

  function addCss() {
    if (document.getElementById("fs-css")) return;
    var s = document.createElement("style"); s.id = "fs-css"; s.textContent = css; document.head.appendChild(s);
  }
  function track(place) {
    try { if (window.gtag) gtag("event", "generate_lead", { lead_source: "fuel_plan_pdf", signup_place: place, page_path: location.pathname }); } catch (e) {}
    try { if (window.fbq) { fbq("track", "Lead", { content_name: "Tournament Day Fuel Plan" }); fbq("trackCustom", "FuelPlanSignup", { place: place }); } } catch (e) {}
  }
  function done(card, sent) {
    card.classList.add("fs-done");
    card.querySelector(".fs-body").innerHTML =
      '<div class="fs-kicker">' + (sent ? "It's on the way" : "You already have it") + '</div>' +
      '<div class="fs-title">' + (sent ? "Check your inbox for the Fuel Plan." : "Your Tournament Day Fuel Plan") + '</div>' +
      '<div class="fs-sub" style="margin:0">' + (sent ? "It should land in a minute or two. Want it right now?" : "Print it the night before and stick it on the fridge.") +
      '<br><a class="fs-dl" href="' + PDF_URL + '" target="_blank" rel="noopener" data-fs-download>Download the PDF</a></div>';
  }
  function render(el) {
    var place = el.getAttribute("data-place") || "page";
    var theme = el.getAttribute("data-theme") || "light";
    el.innerHTML =
      '<div class="fs-card" data-theme="' + theme + '" id="fuel-plan">' +
        '<div class="fs-thumb" aria-hidden="true"><b></b><i>Tournament Day Fuel Plan</i><u></u></div>' +
        '<div class="fs-body">' +
          '<div class="fs-kicker">Free printable</div>' +
          '<div class="fs-title">The Tournament Day Fuel Plan</div>' +
          '<p class="fs-sub">What to eat and drink from the night before to the last whistle: a between-games snack chart, a water plan and a cooler checklist. Seven pages, free.</p>' +
          '<form class="fs-form" novalidate>' +
            '<input type="email" name="email" placeholder="Your email" autocomplete="email" aria-label="Your email" required>' +
            '<button type="submit">Send me the plan</button>' +
          '</form>' +
          '<p class="fs-fine">We\'ll email you the PDF plus a few short game-day tips. Unsubscribe anytime.</p>' +
        '</div>' +
      '</div>';
    var card = el.firstChild;
    try { if (localStorage.getItem(DONE_KEY)) { done(card, false); return; } } catch (e) {}
    var form = card.querySelector("form"), btn = form.querySelector("button"), input = form.querySelector("input"), fine = card.querySelector(".fs-fine");
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var email = (input.value || "").trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { fine.className = "fs-fine fs-err"; fine.textContent = "Please enter a valid email address."; input.focus(); return; }
      btn.disabled = true; btn.textContent = "Sending...";
      fetch("https://api.convertkit.com/v3/forms/" + FORM_ID + "/subscribe", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ api_key: KIT_PUBLIC_KEY, email: email })
      }).then(function (r) { if (!r.ok) throw new Error("kit " + r.status); return r.json(); })
        .then(function (d) {
          if (!d || !d.subscription) throw new Error("no subscription");
          try { localStorage.setItem(DONE_KEY, "1"); } catch (e) {}
          track(place); done(card, true);
        })
        .catch(function () {
          btn.disabled = false; btn.textContent = "Send me the plan";
          fine.className = "fs-fine fs-err"; fine.textContent = "Something went wrong. Please try again in a moment.";
        });
    });
  }
  function init() {
    addCss();
    var els = document.querySelectorAll("[data-fuel-signup]");
    for (var i = 0; i < els.length; i++) render(els[i]);
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a[data-fs-download]");
      if (a) { try { if (window.gtag) gtag("event", "file_download", { file_name: "tournament-day-fuel-plan.pdf", link_url: a.href }); } catch (err) {} }
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
