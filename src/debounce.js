import { debounce } from '@chaoshuai/utils'
  
  export default {
    inserted (el, binding) {
      // Console.log(binding);
      if ("function" !== typeof binding.value) {
        throw new TypeError("binding value is not function");
      }
      const eventType = "click";
      const waitTime = 500;
      el.callback = binding.value;
      el.addEventListener(eventType, debounce(el.callback, waitTime));
    },
    update (el, binding) {
      if ("function" !== typeof binding.value) {
        throw new TypeError("binding value is not function");
      }
      el.callback = binding.value;
    },
  };