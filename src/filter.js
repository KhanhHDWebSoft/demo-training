import Vue from "vue";

Vue.filter('truncateText', (value,length) => {
  return value.length > length ? value.substring(0,length) + '...' : value;
})