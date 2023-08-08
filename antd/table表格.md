### table 表格设置 key

```jsx
<Table
  columns={columns}
  rowKey={(record) => record._id}
  dataSource={roleData}
/>
```

rowKey 设置表格行的 key 属性

### pagination

```jsx
<Table
  className="mt-4"
  pagination={{ pageSize: 8 }}
  columns={columns}
  rowKey={(record) => record._id}
  dataSource={roleData}
/>
```

设置分页

1. 后端设置一个返回出师一页数据和最大条数的接口
2. 前端可以使用 useRef 将这个最大条数缓存下来，设置初始数据
3. 以后每次点击页数只请求当页的数据

### dataIndex

当我们需要的数据时对象套对象里的某个属性时
官网说支持数组查询嵌套路径，这是什么意思呢,
```js
const columns = [
  {
    title: "用户角色",
    dataIndex: ["roleName", "roleLevel"],
    key: "roleName",
  },
];
```

### fixed
固定表头，可以和**scroll**属性一起配合使用，给每一列都设置width发现没有效果，
这时候宽度值就生效了，目前来看这几个一起配合使用貌似还行
