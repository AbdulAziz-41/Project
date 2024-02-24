document.addEventListener("DOMContentLoaded", function () {
  var selectWrappers = document.querySelectorAll(".custom-select-wrapper");

  selectWrappers.forEach(function (wrapper) {
    var placeholder = wrapper.querySelector(".custom-select-placeholder");
    var selectedDisplay = wrapper.querySelector(".custom-select-selected");
    var optionsList = wrapper.querySelector(".custom-select-options");
    var arrow = wrapper.querySelector(".custom-select-arrow");

    function toggleOptionsDisplay() {
      wrapper.classList.toggle("active");
      if (!selectedDisplay.textContent) {
        placeholder.style.top = wrapper.classList.contains("active")
          ? "-10px"
          : "20px";
        placeholder.style.fontSize = wrapper.classList.contains("active")
          ? "0.75em"
          : "1em";
        placeholder.style.color = wrapper.classList.contains("active")
          ? "#7C7C7C"
          : "#313131";
      }
    }
    placeholder.addEventListener("click", toggleOptionsDisplay);
    selectedDisplay.addEventListener("click", toggleOptionsDisplay);
    arrow.addEventListener("click", toggleOptionsDisplay);

    optionsList.addEventListener("click", function (e) {
      if (e.target.tagName === "LI") {
        var firstOptionContent =
          e.target.querySelector(".option_first").textContent;
        selectedDisplay.textContent = firstOptionContent;
        selectedDisplay.dataset.value = e.target.dataset.value;
        placeholder.style.top = "-10px";
        placeholder.style.fontSize = "0.75em";
        placeholder.style.color = "#7C7C7C";
        wrapper.classList.remove("active");
      }
    });
  });

  document.addEventListener("click", function (e) {
    selectWrappers.forEach(function (wrapper) {
      if (!wrapper.contains(e.target)) {
        wrapper.classList.remove("active");
        var selectedDisplay = wrapper.querySelector(".custom-select-selected");
        var placeholder = wrapper.querySelector(".custom-select-placeholder");
        if (!selectedDisplay.textContent) {
          placeholder.style.top = "20px";
          placeholder.style.fontSize = "1em";
          placeholder.style.color = "#313131";
        }
      }
    });
  });
});
