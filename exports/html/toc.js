(function () {
  "use strict";

  function slugify(text) {
    return String(text)
      .toLowerCase()
      .trim()
      .replace(/[ä]/g, "ae")
      .replace(/[ö]/g, "oe")
      .replace(/[ü]/g, "ue")
      .replace(/[ß]/g, "ss")
      .replace(/[^a-z0-9\s\-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/\-+/g, "-");
  }

  function ensureUniqueId(baseId, usedIds) {
    let id = baseId || "abschnitt";
    let counter = 2;

    while (usedIds.has(id) || document.getElementById(id)) {
      id = baseId + "-" + counter;
      counter++;
    }

    usedIds.add(id);
    return id;
  }

  function injectStyles() {
    if (document.getElementById("toc-style")) return;

    const style = document.createElement("style");
    style.id = "toc-style";
    style.textContent = `
      #toc {
        max-width: 1100px;
        margin: 0 0 2rem 0;
        padding: 1rem 1.25rem;
        background: #ffffff;
        border: 1px solid #dbe4ee;
        border-left: 6px solid #0b6bcb;
        border-radius: 14px;
        box-shadow: 0 8px 24px rgba(15,23,42,0.08);
      }

      #toc h2 {
        margin: 0 0 0.75rem 0;
        padding: 0;
        border: 0;
        background: transparent;
        text-align: left;
      }

      #toc ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      #toc li {
        margin: 0.35rem 0;
      }

      #toc li.h1 { font-weight: 700; }
      #toc li.h2 { padding-left: 1rem; }
      #toc li.h3 { padding-left: 2rem; font-size: 0.95em; }

      #toc a {
        text-decoration: none;
        color: #0b6bcb;
      }

      #toc a:hover {
        text-decoration: underline;
      }

      html {
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);
  }

  function createTOC() {
    const headings = Array.from(
      document.querySelectorAll("h1, h2, h3")
    ).filter(el => el.textContent.trim() !== "");

    if (!headings.length) return;

    const usedIds = new Set();

    headings.forEach(function (heading) {
      if (!heading.id) {
        const baseId = slugify(heading.textContent) || "abschnitt";
        heading.id = ensureUniqueId(baseId, usedIds);
      } else {
        usedIds.add(heading.id);
      }
    });

    let toc = document.getElementById("toc");

    if (!toc) {
      toc = document.createElement("nav");
      toc.id = "toc";

      const firstHeading = document.querySelector("h1, h2, h3");
      if (firstHeading) {
        firstHeading.parentNode.insertBefore(toc, firstHeading);
      } else {
        document.body.prepend(toc);
      }
    }

    toc.innerHTML = "<h2>Inhaltsverzeichnis</h2>";

    const list = document.createElement("ul");

    headings.forEach(function (heading) {
      const li = document.createElement("li");
      li.className = heading.tagName.toLowerCase();

      const link = document.createElement("a");
      link.href = "#" + heading.id;
      link.textContent = heading.textContent.trim();

      li.appendChild(link);
      list.appendChild(li);
    });

    toc.appendChild(list);
  }

  function init() {
    injectStyles();
    createTOC();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();