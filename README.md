# gulp-inline-source

[![NPM Version](https://img.shields.io/npm/v/gulp-inline-source.svg?style=flat-square)](https://www.npmjs.com/package/parcel-plugin-inline-source)

> Inline all `<script>`, `<link>` and `<img>` tags that contain the `inline` attribute with [inline-source](https://github.com/popeindustries/inline-source).

## Install

```bash
$ npm install parcel-plugin-inline-source --save-dev
```

## How it works

```html
<!-- located at src/html/index.html -->
<html>
    <head>
        <!-- inline src/js/inlineScript.js -->
        <script src="../js/inlineScript.js" inline="inline"></script>
    </head>
    <body></body>
</html>
```

```js
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

Output:

```html
<html>
    <head>
        <script>
            function test() {
                var a = 'lorem ipsum';
                return a;
            }
        </script>
    </head>
    <body></body>
</html>
```
