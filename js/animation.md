## js操作animation
```js
const element = document.querySelector('.animate');
const webAnimation = element.animate(keyframes, options);
// 动画效果
const keyframes = [
    { opacity: 1 },
    { opacity: 0.7, offset: 0.1 },
    { opacity: 0.3, offset: 0.4 },
    { opacity: 0.7, offset: 0.7 },
    { opacity: 0 },
]
const options = {
    // 动画执行次数
    iterations: Infinity,
    // 动画开始时间点
    iterationStart: 0,
    // 动画开始之前的延迟
    delay: 0,
    // 动画结束之后的延迟
    endDelay: 0,
    // 动画是否在下一周期逆向播放
    direction: 'alternate',
    // 动画时长(必须)
    duration: 1000,
    // 动画前后保持的状态(必须) 这个很重要，得加，不然一次动画就又回去了
    fill: 'forwards',
    // 动画缓动类型(必须)
    easing: 'ease-in-out',
}
// 动画暂停
webAnimation.pause();
// 动画开始
webAnimation.play();

```
之前测试了一下，当有两个动画想做切换的时候有问题，暂时别用