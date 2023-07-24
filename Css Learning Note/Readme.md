# 项目说明

这是自己在学习css过程中的学习笔记，

+ 使用了Flask进行前后端的交互
+ 使用bootstrap进行组件的渲染
+ 大部分功能使用原生Javascrpt写成

# 设计思路

## Css 部分

### running-box

对于每一段演示的代码，和代码的作用域，可以将其看作一个running-box

running=box上方有一个函数描述

+ div.running-box(展示一整个盒子)

  + div.function-group（代码部分)
    + div,function-buttons（展示一个/多个可切换的函数按钮）
    + Run && ResetButton
    + pre （展示函数部分的代码）
      + code-content （真正的函数）

  + control-space（具体问题具体分析）

## Javascript 部分

## running-box

在html中，function-group内容是自动化生成的

+ 生成function-button,并关联对应的onclick

+ 生成pre.code

  + 生成Run / Reset 风格的按钮
  + 生成 code-content

  