// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

/* eslint-disable no-new */
var vm = new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  methods: {
    ripple: function() {
      const rippleElements = document.getElementsByClassName(
        "btn-ripple"
      );

      for (
        let i = 0;
        i < rippleElements.length;
        i++
      ) {
        rippleElements[
          i
        ].onclick = function(e) {
          let X =
            e.pageX - this.offsetLeft;
          let Y =
            e.pageY - this.offsetTop;
          let rippleDiv = document.createElement(
            "div"
          );
          rippleDiv.classList.add(
            "ripple"
          );
          rippleDiv.setAttribute(
            "style",
            "top:" +
              Y +
              "px; left:" +
              X +
              "px;"
          );
          let customColor = this.getAttribute(
            "ripple-color"
          );
          if (customColor)
            rippleDiv.style.background = customColor;
          this.appendChild(rippleDiv);
          setTimeout(function() {
            rippleDiv.parentElement.removeChild(
              rippleDiv
            );
          }, 900);
        };
      }
    }
  }
});

vm.ripple();
