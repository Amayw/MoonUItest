
# MoonUI --一个vue组件

作者：moonwanger
## 介绍
这是我做的一个UI框架，简单易上手，希望你能喜欢！
[![Build Status](https://travis-ci.org/Amayw/MoonUI.svg?branch=master)](https://travis-ci.org/Amayw/MoonUI)
## 开始使用
1. 添加CSS样式<br>
    使用本框架前，请在在CSS中开启border-box
    ```
    *,*::before,*::after{box-sizing:border-box}
    ```
    IE8及以上浏览器都支持此样式
    
    你还需要设置默认颜色等变量（后续会改为SCSS变量）
    ```
    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
      }
    ```
    IE15及以上浏览器都支持此样式
2. 安装
```
npm install --save moonwangerui
or
yarn add moonwangerui
```
3. 引用moonwangerui
```
import {
    Button,ButtonGroup,Icon
} from "moonwangerui";
import "moonwangerui/dist/index.css";
export default {
    name: "App",
    components: {
        "m-button": Button,
    },
};
```
4. 引入svg symbols
```
<script src="//at.alicdn.com/t/font_2072028_1hp2e2q8sml.js"></script>
```
## 文档

## 提问

## 变更记录

## 联系方式


