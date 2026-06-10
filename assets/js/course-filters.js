(function () {
  function normalize(value) {
    return (value || "").toString().trim().toLowerCase();
  }

  function applyFilters(browser) {
    var query = normalize(browser.querySelector("[data-course-search]").value);
    var language = browser.querySelector("[data-course-filter='language']").value;
    var credits = browser.querySelector("[data-course-filter='credits']").value;
    var reviewed = browser.querySelector("[data-course-filter='reviewed']").value;
    var rows = browser.querySelectorAll("[data-course-row]");
    var visibleCount = 0;

    rows.forEach(function (row) {
      var matchesQuery = !query || row.dataset.search.indexOf(query) !== -1;
      var matchesLanguage = !language || row.dataset.language === language;
      var matchesCredits = !credits || row.dataset.credits === credits;
      var matchesReviewed = !reviewed || row.dataset.reviewed === reviewed;
      var isVisible = matchesQuery && matchesLanguage && matchesCredits && matchesReviewed;

      row.hidden = !isVisible;

      if (isVisible) {
        visibleCount += 1;
      }
    });

    var empty = browser.querySelector("[data-course-empty]");
    if (empty) {
      empty.hidden = visibleCount > 0;
    }
  }

  function initCourseBrowser(browser) {
    var controls = browser.querySelectorAll("[data-course-search], [data-course-filter]");

    controls.forEach(function (control) {
      control.addEventListener("input", function () {
        applyFilters(browser);
      });
      control.addEventListener("change", function () {
        applyFilters(browser);
      });
    });
  }

  document.querySelectorAll("[data-course-browser]").forEach(initCourseBrowser);
})();
