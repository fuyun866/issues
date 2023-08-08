## 设置存储
```js
const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname,"../public/imgs/avatar") )
    },
    filename: function (req, file, cb) {
      // 解决中文乱码问题
      file.originalname = Buffer.from(file.originalname,"latin1").toString("utf-8")
      const uniqueSuffix = Date.now() + '-' + file.originalname;
      cb(null,  uniqueSuffix)
    }
  })
  
  //   注意single后面的字段要和前端的字段一样萌骑士报错也有提示
  //   注意报错中不希望是这个子段，而且下面有写正确的字段名称  
  const upload = multer({ storage: storage }).single("avatar")

  module.exports = {
    upload
  }

//   MulterError: Unexpected field
//     at wrappedFileFilter ("******") {
//   code: 'LIMIT_UNEXPECTED_FILE',
//   field: 'avatar',
//   storageErrors: []

```

## 返回前端设置好的图片路径
```js
const {upload} = require("../plugins/upload.js")
const multer = require("multer")

const handerUploadImg = (req,res)=>{
    // console.log(req);
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          
        } else if (err) {
            
        }
        // 注意，这里直接返回req.file,前端就可以获取存储的图片地址
        res.send({code:1,value:"上传成功",data:req.file})
    })
}

module.exports = {
    handerUploadImg
}
```