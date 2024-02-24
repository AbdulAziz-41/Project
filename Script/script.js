document.addEventListener("DOMContentLoaded", function () {
  var dropdownSelects = document.querySelectorAll(".dropdown_select");

  dropdownSelects.forEach(function (select) {
    select.addEventListener("change", function () {
      this.parentNode.classList.add("option-selected");
    });

    select.addEventListener("focus", function () {
      this.parentNode.classList.add("focused");
    });

    select.addEventListener("blur", function () {
      if (this.value === "") {
        this.parentNode.classList.remove("focused");
      }
    });

    var defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.appendChild(defaultOption);
  });
});

document.querySelectorAll(".password__input-text").forEach((element) => {
  element.addEventListener("input", function () {
    const password = this.previousElementSibling; // Assuming .password__input is a sibling
    let passwordString = "";
    let del;

    if (password.value.length < this.value.length) {
      password.value = password.value + this.value[this.value.length - 1];
      passwordString = password.value;
    } else {
      del = password.value.length - this.value.length;
      passwordString = password.value.substring(0, password.value.length - del);
      password.value = passwordString;
    }

    this.value = this.value.replace(/[\s\S]/g, this.getAttribute("data-sign"));
  });
});
document.querySelectorAll(".tab_link").forEach((element) => {
  element.addEventListener("click", function () {
    this.classList.add("Active_tab");
    this.siblings().forEach((sib) => sib.classList.remove("Active_tab")); // See Note below
  });
});

// Note: Vanilla JS doesn't have a direct siblings method, so you'd need to implement one or adjust the logic.
// For simplicity, here's a workaround that removes the class from all and adds it back to the clicked one.
document.querySelectorAll(".tab_link").forEach((element) => {
  element.addEventListener("click", function () {
    document.querySelectorAll(".tab_link").forEach((el) => {
      el.classList.remove("Active_tab");
    });
    this.classList.add("Active_tab");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".side_button_link");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor action

      // Remove "active" class from all buttons and reset their icons
      buttons.forEach((btn) => {
        btn.classList.remove("active");
        const icon = btn.querySelector("img");
        // Assuming your naming convention is consistent, replace 'Active' with ''
        if (icon.src.includes("Active")) {
          icon.src = icon.src.replace("Active", "");
        }
      });

      // Add "active" class to clicked button
      this.classList.add("active");

      // Change the icon for the clicked button to its active state
      const icon = this.querySelector("img");
      const iconName = icon.src.split("/").pop(); // Get the filename of the icon
      if (!iconName.includes("Active")) {
        // Construct the new icon name assuming the active icon ends with 'Active.svg'
        const newIconName = iconName.replace(".svg", "Active.svg");
        icon.src = icon.src.replace(iconName, newIconName);
      }
    });
  });
});
