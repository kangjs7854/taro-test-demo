# Taro

## 介绍
Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发微信/京东/百度/支付宝/字节跳动/ QQ 小程序/H5 等应用。
现如今市面上端的形态多种多样，Web、React Native、微信小程序等各种端大行其道，当业务要求同时在不同的端都要求有所表现的时候，
针对不同的端去编写多套代码的成本显然非常高，这时候只编写一套代码就能够适配到多端的能力就显得极为需要。


## 业务
网络科技的业务主要是做 ```h5``` 及 ```小程序```，如果不是限制于大部分的页面使用的是```jsp```开发，其实使用跨端开发，对于开发者是最为方便，
给与用户的体验是最好的。


## 特点
- 支持现代前端框架```React```、```Vue```,可以使用```TypeScript```提供静态类型检查，可选链、装饰器等新特性，提高开发效率。
- 样式方面使用传统的```px```及```百分比```单位，在编译时会对所有单位进行默认转换;开发时即可通过设计稿进行1：1的开发  
  在编译成小程序时转成成```rpx```的单位；  编译成h5时转换成```rem```的单位
- 支持```小程序```代码和```taro```代码混写
- ```taro```已经通过二次封装，解决了小程序api回调嵌套过深的问题，通过```async await```调用api,不需要开发者自行去封装
- 状态管理，可以使用```mobx```维护应用状态
