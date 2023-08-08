vue3 专门为自己准备的组件库，但是使用起来我的评价是不如 element

## icon 图标库引入

我是老老实实按照官网的操作来全局引入的，但不知道为啥那样引入的图标直接占满了屏幕，
size 属性设置无效，后来在网上搜了一个博主的部分引入的解决办法，但比较麻烦

```js
import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { Search } from "@element-plus/icons-vue"; // 引入 Edit 图标
import App from "./App.vue";
import router from "./router";
import "./assets/css/index.css";
import axios from "./tools/axios";

const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.component(Search.name, Search); // 全局注册 Edit 图标

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

app.mount("#app");
```

这样在组件内就可以直接使用了

### 循环渲染图标

```js
<el-icon>
  <component is="CaretBottom" />
</el-icon>
// is后面的就是你要使用的图标名称,记得要提前引入就OK了
```


### icon图标点击有黑框
```css
:deep(.el-tooltip__trigger) {
  outline: none !important;
}
```
找到对应的元素给它去一下outline
