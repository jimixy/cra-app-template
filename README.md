# cra-app-template

> ⚛ 基于 create-react-app 脚手架搭建的 react app 快速模板

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## ✨ 特性

- [x] 支持 styled-jsx
- [x] 支持 scss, less css-module
- [x] 支持 react 热重载(无需刷新页面)
- [x] 支持 自动生成 css-module 的类型定义(即使用类名时自动提示)
- [x] 支持 git commit 规范校验(规则基于 angular 团队规范基础上)
- [x] 配置推荐的 prettier 风格
- [x] 显示 webpack 构建进度提示条
- [x] 可自定义 eslint 规范
- [x] 支持添加 postcss 插件

## ⚠️ 注意事项

自动生成 css-module 的类型定义无效？

> [配置参考链接](https://github.com/mrmckeb/typescript-plugin-css-modules)

如何修改 commitlint 规则？

> [查看 commitlint 文档](https://commitlint.js.org/#/)

添加 postcss 插件无效？

> 根目录的 postcss 配置文件是给 styled-jsx 用的，如果需要给 less, sass 等预处理添加 postcss 插件需要在 config-overrides.js 文件里进行添加.

如果支持多平台的环境变量注入？

> 我的建议是： 额外添加启动命令，例如 package.json 的 start:h5 命令，单独注入平台变量，而开发测试预发等环境变量通过.env.\*文件进行配置

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
