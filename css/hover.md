### hover效果
1. hover元素可以触发兄弟元素
```css
.div:hover~ .div1{
    background:red
}
```
2. 也可以触发子元素
```css
.div:hover .div1{
    background:red
}
```
3. **但有一点很重要，不要像下面这样**
```html
 <div class="flex items-center listIcons">
    <el-icon size="24" class="cursor-pointer listIcons"><Expand /><el-icon>
</div>
<div class="fold_list" ref="listIcon"></div>
<style>
.listIcons:active ~ .fold_list {
  animation: listHeight 2s ease;
} 
</style>
```
你的这个前面的触发一定不能是他兄弟元素的子级