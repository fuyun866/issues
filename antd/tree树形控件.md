### 清空选中的节点

    ```js
    const [treeVal, setTreeVal] = useState({treeKeyArr:[],treeNodeArr:[]});
    <Tree
        checkable
        treeData={items1}
        onCheck={onCheck}
        checkedKeys={treeVal.treeKeyArr}
    />

    // checkable 出现复选框，不设就没框
    // treeData 树形控件的数据源
    // onCheck 选中复选框时触发
    // checkedKeys 清空复选框是可以用它，但注意
    里面需要是一个响应值，即useState构造出的，这样值改变后页面更新才能清空
    ```
