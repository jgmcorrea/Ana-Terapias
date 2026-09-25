// Ana Terapias & Bem-Estar — interações do site (menu mobile, perguntas frequentes e ano do rodapé)
(function () {
  var ICON_MENU = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
  var ICON_CLOSE = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';

  // Menu mobile
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".main-nav");
  function setMenu(open) {
    nav.classList.toggle("main-nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    toggle.innerHTML = open ? ICON_CLOSE : ICON_MENU;
  }
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(!nav.classList.contains("main-nav-open"));
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setMenu(false); });
    });
  }

  // Perguntas frequentes (abre uma de cada vez)
  var items = document.querySelectorAll(".faq-item");
  items.forEach(function (item) {
    var button = item.querySelector("button");
    button.addEventListener("click", function () {
      var wasOpen = item.classList.contains("faq-open");
      items.forEach(function (other) {
        other.classList.remove("faq-open");
        other.querySelector("button").setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        item.classList.add("faq-open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  // Ano atual no rodapé
  var year = document.getElementById("ano");
  if (year) year.textContent = new Date().getFullYear();
})();
