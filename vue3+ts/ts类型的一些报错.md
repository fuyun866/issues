### vue3挂载全局变量
和vue2不一样，vue3没有了prototype可以挂载全局变量和方法
取而代之的是**app.config.globalProperties.$axios = axios**
但要注意的是这个全局方法的获取
```js
import {getCurrentInstance} from "vue"
//注意这个需要单独引入，一起引入会报错，他会提示你类型参数需要单独引入
import type {ComponentInternalInstance} from "vue" 

export default function useCurrentInstance(){
    const {appContext}  = getCurrentInstance() as ComponentInternalInstance;
    const proxy = appContext?.config.globalProperties;
    return {
        proxy
    }
}
```


### 报错这个上面没这个属性
最简单粗暴的办法是直接加上any
```js
    // 报错，他可能会提示没有这个方法或属性
    let dom = listIcon.value 
    dom.classList.remove("fold")
    // 就好了
    let dom:any = listIcon.value 
    dom.classList.remove("fold")

```