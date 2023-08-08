### withDefaults

```js
const props = withDefaults(
    defineProps(<{
        info:object
    }>),
    {
        info: ()=>({})
    }
)
```

当我们想要给props标注类型并设置默认值的时候，当我们设置的默认值是一个数组或者对象的时候，
我们需要用函数包裹一下，原因其实和vue2的data为什么要写成一个函数是一样的。由于数组或者对象
都是引用类型，当我们直接赋值的时候其实意味着所有这个组件的props里面的这个属性都是同一个值
这样当然会出问题

