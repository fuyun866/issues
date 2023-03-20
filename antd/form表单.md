### initalValues：表单默认值，只有初始化以及重置时生效
   因此在页面中只有第一次渲染时生效，如果初始值是一个异步数据
   可以使用
   ```js
   data?(<div>表单</div>):(<div>空</div>)
   ```
   如果你想监听数据变化等他再次渲染时不可能实现的

### form配合upload
   ```js
   <Form.Item
     label="头像"
     name="userAvatar"
     valuePropName="fileList"
     getValueFromEvent={normFile}
   >
     <Upload
       name="avatar"
       listType="picture-circle"
       className="avatar-uploader"
       showUploadList={false}
       action="http://localhost:4000/person/uploadImg"
       beforeUpload={beforeUpload}
       onChange={handleChange}
     >
       {imageUrl ? (
         <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
       ) : (
         <PlusOutlined />
       )}
     </Upload>
   </Form.Item>
   ```
  需要注意的是：
  - valuePropName 表单中值的类型
  - getValueFromEvent 我的理解正常作为上传图片值的fileList需要经过处理一下，就是用过这个处理
    加上这两个属性表单中的上传图片就不会报错


### resetFields:清空表单
   ```js
   const [form] = Form.useForm()
   //将这个form挂到表单组件的属性上
   <Form form={form} />
   // 就可以清空了
   form.resetFields();
   ```
