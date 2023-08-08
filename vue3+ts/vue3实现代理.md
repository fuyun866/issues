vue2 实现代理是在 vue.config.js 中导出一个 devserver 对象来实现的
前段时间刚写 vu3 的时候试了一下同样的办法，发现没啥用，可能是我写的问题
现在提供另一种方式的代理

## vite 配置代理

```js
server: {
    proxy: {
    // 接口地址代理
        '/api': {
            target: 'http://localhost:4000/', // 接口的域名
            secure: false, // 如果是https接口，需要配置这个参数
            changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
            rewrite: path => path.replace(/^\/api/, '')//这个后面要把它替换成空字符串
        },
    }
},
```
