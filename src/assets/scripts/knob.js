const selectors = document.querySelectorAll(".selector");

selectors.forEach((selector) => {
  const knob = selector.querySelector(".knob");
  const ul = selector.querySelector("ul");
  const radios = selector.querySelectorAll('input[type="radio"]');

  function handleClick() {
    selector.classList.toggle("active");

    if (selector.classList.contains("active")) {
      selector.style.removeProperty("--angle");
    } else {
      selector.style.setProperty("--angle", "-90deg");

      // Check the first one on close
      radios.forEach((radio, index) => {
        if (index !== 0) {
          radio.checked = false;
        } else {
          radio.checked = true;
        }
      });
    }
  }
  knob.addEventListener("click", handleClick);
});

const isBodyBackgroundDark = () => {
  const bodyBackgroundColor = window.getComputedStyle(document.body).backgroundColor;
  const bodyBackgroundRGB = bodyBackgroundColor.match(/\d+/g);
  const brightness = ((bodyBackgroundRGB[0] * 299) + (bodyBackgroundRGB[1] * 587) + (bodyBackgroundRGB[2] * 114)) / 1000;

  if (brightness >= 128) {
    document.documentElement.dataset.isDark="false";
  } else {
    document.documentElement.dataset.isDark="true";
  }
}

const appendBox = () => {
  let toggled = false;
  const getButtonIcon = () => {
    return toggled ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-x"><path d="M18 6 6 18M6 6l12 12"/></svg>'
  }
  const infoBoxBase = document.getElementById("info-box");
  const {
    infoChrome,
    infoSafari,
    infoFirefox,
    inspiration,
    presentationHeight,
    presentationWidth,
    presentationTitle,
    hiddenOnload,
    theme,
  } = infoBoxBase.dataset;
  const infoBox = document.createElement("div");
  infoBox.dataset.infoChrome = infoChrome;
  infoBox.dataset.infoSafari = infoSafari;
  infoBox.dataset.infoFirefox = infoFirefox;
  infoBox.classList.add("info-box");
  const creditWrapper = document.createElement("div");
  const toggleButton = document.createElement("button");
  const p_maker = document.createElement("p");
  const p_inspiration = document.createElement("p");
  const a_maker = document.createElement("a");
  const a_inspiration = document.createElement("a");
  toggleButton.innerHTML= getButtonIcon();
  a_maker.href = "https://twitter.com/lukyvj";
  a_maker.target = "_blank";
  a_maker.textContent = "@LukyVj";
  a_inspiration.href = inspiration;
  a_inspiration.target = "_blank";
  a_inspiration.textContent = inspiration;
  p_maker.appendChild(document.createTextNode("Made by "));
  p_maker.appendChild(a_maker);
  p_inspiration.appendChild(document.createTextNode("Inspired by "));
  p_inspiration.appendChild(a_inspiration);
  creditWrapper.appendChild(p_maker);
  creditWrapper.appendChild(p_inspiration);
  creditWrapper.classList.add("credits");
  infoBox.appendChild(creditWrapper);

  // Create the checkbox element
  const controls_wrapper = document.createElement("div");
  const checkbox_presentation = document.createElement("input");
  const checkbox_debug = document.createElement("input");
  const debug_hint = document.createElement("div");
  const wrapper_presentation = document.createElement('div');
  const wrapper_debug = document.createElement('div');

  controls_wrapper.classList.add("controls");
  checkbox_presentation.type = "checkbox";
  checkbox_debug.type = "checkbox";
  checkbox_presentation.id = "presentation-mode";
  checkbox_debug.id = "debug-mode";

  // Create the label element
  const presentation_label = document.createElement("label");
  const debug_hint_label = document.createElement("label");
  debug_hint_label.innerHTML = "<kbd class='info-box-key'>d</kbd> to debug";
  debug_hint_label.htmlFor = "debug-mode";
  presentation_label.htmlFor = "presentation-mode";
  presentation_label.innerHTML = "<kbd class='info-box-key'>p</kbd> Presentation";

  
  // Append the checkbox and label elements to the infoBox
  wrapper_presentation.appendChild(checkbox_presentation);
  wrapper_presentation.appendChild(presentation_label);
  wrapper_debug.appendChild(checkbox_debug);
  wrapper_debug.appendChild(debug_hint_label);
  wrapper_debug.appendChild(debug_hint);
  
  controls_wrapper.appendChild(wrapper_debug);
  controls_wrapper.appendChild(wrapper_presentation);

  infoBox.appendChild(controls_wrapper);
  infoBox.appendChild(toggleButton);
  
  document.documentElement.dataset.presentation="false";
  document.documentElement.dataset.debug="false";
  document.documentElement.dataset.theme=theme;
  
  const hide = (state) => {
    toggled = state;
    infoBox.dataset.toggled=toggled;
    toggleButton.innerHTML= getButtonIcon();
  }
  
  if (presentationTitle === "true" ) document.body.dataset.title=document.title;
  if (hiddenOnload === "true") {
    hide(true)
  };
  
  toggleButton.addEventListener('click', () => {
    if (toggled) {
      hide(false)
    } else {
      hide(true)
    }
  })

  // Add an event listener to the checkbox
  checkbox_presentation.addEventListener("change", function () {
    if (this.checked) {
      document.documentElement.dataset.presentation="true";
      checkbox_presentation.checked = true
    } else {
      document.documentElement.dataset.presentation="false";
      checkbox_presentation.checked = false
    }
  });
  checkbox_debug.addEventListener("change", function () {
    if (this.checked) {
      document.documentElement.dataset.debug = "true";
      checkbox_debug.checked = true
      
    } else {
      document.documentElement.dataset.debug = "false";
      checkbox_debug.checked = false
      
    }
  });

  // If window.location contains presentation=true, set the presentation mode
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const presentation = urlParams.get("presentation");
  const debug = urlParams.get("debug");

  if (presentation === "true") {
    document.documentElement.dataset.presentation = "true";
    checkbox_presentation.checked = true;
  }

  if (debug === "true") {
    document.documentElement.dataset.debug = "true";
    checkbox_debug.checked = true;
  }

  document.body.style.setProperty("--presentation-width", presentationWidth);
  document.body.style.setProperty("--presentation-height", presentationHeight);
  infoBoxBase.appendChild(infoBox);


  const logKey = (e) => {
    if (e.key === "d") {
      if (JSON.parse(document.documentElement.dataset.debug) === false) {
        document.documentElement.dataset.debug = "true";
        checkbox_debug.checked = true
      } else {
        document.documentElement.dataset.debug = "false";
        checkbox_debug.checked = false
      }
    }
    
    if (e.key === "p") {
      if (JSON.parse(document.documentElement.dataset.presentation) === false) {
        document.documentElement.dataset.presentation = "true";
        checkbox_presentation.checked = true
      } else {
        document.documentElement.dataset.presentation = "false";
        checkbox_presentation.checked = false
      }
    }
    
    if (e.key === "h") {
      hide(!toggled)
    }
  }
  
  document.addEventListener("keypress", logKey);
};



const addBrowserClass = () => {
  const root = document.querySelector("#info-box");
  const userAgent = window.navigator.userAgent.toLowerCase();

  if (userAgent.indexOf("chrome") > -1) {
    root.classList.add("chrome");
  } else if (userAgent.indexOf("firefox") > -1) {
    root.classList.add("firefox");
  } else if (userAgent.indexOf("safari") > -1) {
    root.classList.add("safari");
  } else {
    root.classList.add("other");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  isBodyBackgroundDark()
  addBrowserClass();
  appendBox();
});