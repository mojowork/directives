
import demo from "./demo";
import debounce from "./debounce";
const directives = {
  demo,
  debounce,
};
export default {
  install (Vue) {
    // 2. 添加全局指令
    Object.entries(directives).forEach(([name, directive]) => {
      Vue.directive(name, directive);
    });
  },
};
  // 使用方式
  // import directives from '@chaoshuai/directives'
  // Vue.use(directives)