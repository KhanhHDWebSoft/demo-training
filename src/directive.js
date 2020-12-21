import Vue from "vue";

Vue.directive("tooltip", {
  bind: function(el) {


    el.addEventListener("mouseover", function(evt) {
      let targetEl = evt.target;
      targetEl.style.color = "blue"
    });
  },
});
