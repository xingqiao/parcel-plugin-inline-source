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