1. 在popover的content里面写HTML
```js
  <el-popover
        placement="top"
        width="40"
        trigger="hover"
        content=""

      >
        <template #reference>
          <Root />
        </template>
        <template #default>
          <p>后台管理</p>
        </template>
      </el-popover>
```
default里面的是弹框里面内容
reference是触发弹框他的组件
2. 设置visiable:true就可以F12检察元素了
3. 注意设置它的样式需要全局设置，因为这个弹框和组件肯定是不在一级的