// Lightbox: links work without JS (open the full image); with JS they open a dialog.
(function () {
  var dlg = document.getElementById("lightbox");
  if (!dlg || typeof dlg.showModal !== "function") return;

  var img = dlg.querySelector("img");
  var title = dlg.querySelector("[data-title]");
  var desc = dlg.querySelector("[data-desc]");
  var links = Array.prototype.slice.call(document.querySelectorAll("a.shot"));
  var index = 0;
  var opener = null;

  function show(i) {
    index = (i + links.length) % links.length;
    var a = links[index];
    img.src = a.getAttribute("href");
    img.alt = a.getAttribute("data-alt") || "";
    title.textContent = a.getAttribute("data-title") || "";
    desc.textContent = a.getAttribute("data-desc") || "";
  }

  links.forEach(function (a, i) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      opener = a;
      show(i);
      dlg.showModal();
    });
  });

  dlg.querySelector("[data-prev]").addEventListener("click", function () { show(index - 1); });
  dlg.querySelector("[data-next]").addEventListener("click", function () { show(index + 1); });
  dlg.querySelector("[data-close]").addEventListener("click", function () { dlg.close(); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener("close", function () { if (opener) opener.focus(); });
  dlg.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });
})();
