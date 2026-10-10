(function () {
  "use strict";

  var C = window.SITE_CONTENT || {};
  var root = document.documentElement;
  var REVIEW_PLACEHOLDER = "Review text goes here.";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var saveData = navigator.connection && navigator.connection.saveData;

  root.classList.add("js");

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  // "9:16" -> 0.5625
  function ratioOf(value) {
    var parts = String(value || "9:16").split(/[:/x]/);
    var w = parseFloat(parts[0]);
    var h = parseFloat(parts[1]);
    return w > 0 && h > 0 ? w / h : 9 / 16;
  }

  /* ---------- Contact links ---------- */

  var email = C.email || "divycooper@gmail.com";

  function mailto(subject) {
    return "mailto:" + email + (subject ? "?subject=" + encodeURIComponent(subject) : "");
  }

  $$("[data-email]").forEach(function (a) {
    a.href = mailto(a.getAttribute("data-subject"));
    if (a.hasAttribute("data-email-text")) a.textContent = email;
  });

  var book = $("#book-call");
  if (book) {
    if (C.bookingUrl) {
      book.href = C.bookingUrl;
      book.target = "_blank";
      book.rel = "noopener";
    } else {
      book.href = mailto("Book a call");
    }
  }

  var socials = C.socials || {};
  $$("[data-social]").forEach(function (a) {
    var url = socials[a.getAttribute("data-social")];
    if (url) {
      a.href = url;
    } else {
      a.removeAttribute("target");
      a.addEventListener("click", function (e) { e.preventDefault(); });
    }
  });

  /* ---------- Hero background video ---------- */

  var hero = C.hero || {};
  var heroVideo = $("#hero-video");
  if (heroVideo && hero.video && !reduceMotion && !saveData) {
    if (hero.poster) heroVideo.poster = hero.poster;
    heroVideo.src = hero.video;
    heroVideo.preload = "auto";
    heroVideo.addEventListener("canplay", function () {
      heroVideo.classList.add("is-ready");
    }, { once: true });
    var p = heroVideo.play();
    if (p && p.catch) p.catch(function () {});
  }

  /* ---------- About image ---------- */

  if (C.aboutImage) {
    $("#about-img").src = C.aboutImage;
    $("#about-media").hidden = false;
  }

  /* ---------- Recent work ---------- */

  var projects = (C.projects || []).filter(Boolean);
  var grid = $("#work-grid");

  function playIcon() {
    var ns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("aria-hidden", "true");
    var path = document.createElementNS(ns, "path");
    path.setAttribute("d", "M7 4.5v15l12.5-7.5z");
    svg.appendChild(path);
    return svg;
  }

  function buildCard(project, i) {
    var card = el("button", "work-card reveal");
    card.type = "button";
    card.style.setProperty("--d", (i % 3) * 0.08 + "s");

    var media = el("div", "work-card__media");

    if (project.poster) {
      var img = el("img");
      img.src = project.poster;
      img.alt = project.brand || "";
      img.loading = "lazy";
      img.decoding = "async";
      media.appendChild(img);
    } else {
      media.appendChild(el("div", "work-card__placeholder", pad(i + 1)));
    }

    var play = el("span", "work-card__play");
    play.appendChild(playIcon());
    media.appendChild(play);
    card.appendChild(media);

    var caption = el("span", "work-card__caption");
    caption.appendChild(el("span", "work-card__index", pad(i + 1)));
    caption.appendChild(el("span", "work-card__brand", project.brand || ""));
    card.appendChild(caption);

    // Muted hover preview on desktop. The video only downloads on first hover.
    var previewSrc = project.preview || project.video;
    if (canHover && previewSrc && !saveData) {
      var preview = null;
      card.addEventListener("mouseenter", function () {
        if (!preview) {
          preview = el("video");
          preview.muted = true;
          preview.loop = true;
          preview.playsInline = true;
          preview.setAttribute("playsinline", "");
          preview.preload = "auto";
          preview.src = previewSrc;
          media.insertBefore(preview, play);
        }
        var pr = preview.play();
        if (pr && pr.then) {
          pr.then(function () { card.classList.add("is-previewing"); }).catch(function () {});
        } else {
          card.classList.add("is-previewing");
        }
      });
      card.addEventListener("mouseleave", function () {
        card.classList.remove("is-previewing");
        if (preview) preview.pause();
      });
    }

    card.addEventListener("click", function () { openPlayer(i, card); });
    return card;
  }

  if (grid) {
    projects.forEach(function (project, i) { grid.appendChild(buildCard(project, i)); });
    if (!projects.length) $("#work").hidden = true;
  }

  /* ---------- Immersive player ---------- */

  var player = $("#player");
  var pMedia = $("#player-media");
  var pVideo = $("#player-video");
  var pEmpty = $("#player-empty");
  var current = -1;
  var returnFocus = null;
  var closing = false;

  function fillPlayer(i) {
    var project = projects[i];
    current = i;

    $("#player-count").textContent = pad(i + 1) + " / " + pad(projects.length);
    $("#player-brand").textContent = project.brand || "";
    $("#player-goal").textContent = project.goal || "";
    $("#player-delivered").textContent = project.delivered || "";
    pMedia.style.setProperty("--r", String(ratioOf(project.ratio)));

    pVideo.pause();
    if (project.video) {
      pEmpty.hidden = true;
      pVideo.hidden = false;
      pVideo.poster = project.poster || "";
      pVideo.src = project.video;
      pVideo.preload = "auto";
      var pr = pVideo.play();
      if (pr && pr.catch) pr.catch(function () {});
    } else {
      pVideo.removeAttribute("src");
      pVideo.removeAttribute("poster");
      pVideo.load();
      pVideo.hidden = true;
      pEmpty.hidden = false;
    }

    var multi = projects.length > 1;
    $("#player-prev").hidden = !multi;
    $("#player-next").hidden = !multi;
  }

  function openPlayer(i, trigger) {
    if (!player || !projects[i]) return;
    returnFocus = trigger || document.activeElement;
    fillPlayer(i);
    root.classList.add("is-locked");
    if (typeof player.showModal === "function") {
      player.showModal();
    } else {
      player.setAttribute("open", "");
    }
    player.scrollTop = 0;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { player.classList.add("is-open"); });
    });
  }

  function closePlayer() {
    if (!player || closing || !player.hasAttribute("open")) return;
    closing = true;
    player.classList.remove("is-open");
    pVideo.pause();

    var done = function () {
      pVideo.removeAttribute("src");
      pVideo.load();
      if (typeof player.close === "function") player.close();
      else player.removeAttribute("open");
      root.classList.remove("is-locked");
      closing = false;
      if (returnFocus && returnFocus.focus) returnFocus.focus({ preventScroll: true });
    };
    setTimeout(done, reduceMotion ? 0 : 420);
  }

  function step(dir) {
    if (projects.length < 2) return;
    fillPlayer((current + dir + projects.length) % projects.length);
  }

  if (player) {
    $$("[data-close]", player).forEach(function (b) { b.addEventListener("click", closePlayer); });

    // Clicking the empty space around the video and details closes the player.
    player.addEventListener("click", function (e) {
      if (e.target.hasAttribute && e.target.hasAttribute("data-close-zone")) closePlayer();
    });

    player.addEventListener("cancel", function (e) {
      e.preventDefault();
      closePlayer();
    });

    $("#player-prev").addEventListener("click", function () { step(-1); });
    $("#player-next").addEventListener("click", function () { step(1); });

    document.addEventListener("keydown", function (e) {
      if (!player.hasAttribute("open")) return;
      if (e.key === "Escape") { e.preventDefault(); closePlayer(); }
      if (e.target === pVideo) return;
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });

    // Swipe left/right on the video to change project on touch screens.
    var startX = 0, startY = 0;
    pMedia.addEventListener("touchstart", function (e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });
    pMedia.addEventListener("touchend", function (e) {
      var dx = e.changedTouches[0].clientX - startX;
      var dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? 1 : -1);
    }, { passive: true });
  }

  /* ---------- Reviews ---------- */

  var previewMode = /[?&]preview\b/.test(location.search);
  var reviews = (C.reviews || []).filter(function (r) {
    if (!r) return false;
    var text = String(r.text || "").trim();
    if (!text) return false;
    return previewMode || text !== REVIEW_PLACEHOLDER;
  });

  var reviewsSection = $("#reviews");
  var track = $("#reviews-track");
  var dots = $("#reviews-dots");

  if (reviewsSection && reviews.length) {
    reviews.forEach(function (r, i) {
      var fig = el("figure", "review reveal");
      fig.style.setProperty("--d", i * 0.08 + "s");
      var quote = el("blockquote");
      quote.appendChild(el("p", "review__text", String(r.text).trim()));
      fig.appendChild(quote);

      var cap = el("figcaption");
      if (r.brand) cap.appendChild(el("span", "review__brand", r.brand));
      if (r.client) cap.appendChild(el("span", "review__client", r.client));
      fig.appendChild(cap);
      track.appendChild(fig);
    });

    if (reviews.length > 1) {
      var dotEls = reviews.map(function (_, i) {
        var d = el("button");
        d.type = "button";
        d.setAttribute("aria-label", String(i + 1));
        d.addEventListener("click", function () {
          var card = track.children[i];
          track.scrollTo({ left: card.offsetLeft - track.offsetLeft - parseFloat(getComputedStyle(track).paddingLeft || 0), behavior: reduceMotion ? "auto" : "smooth" });
        });
        dots.appendChild(d);
        return d;
      });

      var setActive = function () {
        var w = track.clientWidth || 1;
        var idx = Math.round(track.scrollLeft / (track.children[0].offsetWidth + 16 || w));
        idx = Math.max(0, Math.min(dotEls.length - 1, idx));
        dotEls.forEach(function (d, i) { d.setAttribute("aria-current", i === idx ? "true" : "false"); });
      };
      var ticking = false;
      track.addEventListener("scroll", function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () { setActive(); ticking = false; });
      }, { passive: true });
      setActive();
    } else {
      dots.hidden = true;
    }

    reviewsSection.hidden = false;
  }

  /* ---------- Nav background on scroll ---------- */

  var nav = $("#nav");
  var onScroll = function () { nav.classList.toggle("is-scrolled", window.scrollY > 40); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal on scroll ---------- */

  var revealEls = $$(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealEls.forEach(function (n) { io.observe(n); });
  } else {
    revealEls.forEach(function (n) { n.classList.add("is-visible"); });
  }
})();
