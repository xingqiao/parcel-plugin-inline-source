# parcel-plugin-inline-source

[![NPM Version](https://img.shields.io/npm/v/parcel-plugin-inline-source.svg?style=flat-square)](https://www.npmjs.com/package/parcel-plugin-inline-source)

> 基于 [inline-source](https://github.com/popeindustries/inline-source) 实现，在需要内联的 `<script>`、`<link>` 标签上添加 `inline="inline"` 属性，编译时会自动进行内联操作

## Install

```bash
$ npm install parcel-plugin-inline-source --save-dev
```

## How it works

### Source:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>parcel-plugin-inline-source</title>
        <link rel="stylesheet" href="./style.css" inline="inline" />
    </head>
    <body>
        <script src="https://cdn.jsdelivr.net/npm/preact/dist/preact.min.js"></script>
        <script src="./index.js" inline="inline"></script>
    </body>
</html>
```

```css
/* style.css */
header,
footer {
    padding: 2em;
    background: #16f;
    color: #fff;
}

section {
    padding: 2em;
    background: #fff;
    color: #16f;
}
```

```js
// index.js
import { render, Component } from 'preact';

class App extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        setInterval(this.update.bind(this), 1000);
        this.update();
    }
    update() {
        this.setState({ time: new Date() });
    }
    render() {
        let { time } = this.state;
        return (
            <article>
                <header>parcel-plugin-inline-source</header>
                <section>
                    <span>{time ? time.toLocaleString() : ''}</span>
                </section>
                <footer>
                    <a href="https://github.com/xingqiao">@xingqiao</a>
                </footer>
            </article>
        );
    }
}

render(<App />, document.body);
```

### Build:

执行命令 `parcel build index.html`

> 只有在 `parcel build` 操作或者生产环境（`NODE_ENV = 'production'`） 的情况下会自动进行内联操作

### Output:

```html
<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>parcel-plugin-inline-source</title><style>footer,header{padding:2em;background:#16f;color:#fff}section{padding:2em;background:#fff;color:#16f}</style></head><body> <script src="https://cdn.jsdelivr.net/npm/preact/dist/preact.min.js"></script> <script>parcelRequire=function(e,t,n,r){/* 代码太长，省略…… */},{"@babel/runtime/helpers/classCallCheck":"0fcM","@babel/runtime/helpers/createClass":"P8NW","@babel/runtime/helpers/possibleConstructorReturn":"0421","@babel/runtime/helpers/getPrototypeOf":"UJE0","@babel/runtime/helpers/inherits":"d4H2",preact:"OmAK"}]},{},["Focm"]);</script> </body></html>
```
