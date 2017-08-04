import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

const NoMatchExample = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/old-match">Old Match, to be redirected</Link>
                </li>
                <li>
                    <Link to="/will-match">Will Match</Link>
                </li>
                <li>
                    <Link to="/will-not-match">Will Not Match</Link>
                </li>
                <li>
                    <Link to="/also/will/not/match">Also Will Not Match</Link>
                </li>
            </ul>

            {/*
                只渲染出第一个与当前访问地址匹配的 <Route> 或 <Redirect>。
            */}
            <Switch>
                <Route path="/" exact component={Home} />
                {/*
                    <Redirect> 渲染时将导航到一个新地址，这个新地址覆盖在访问历史信息里面的本该访问的那个地址。

                    to: string
                    重定向的 URL 字符串

                    to: object
                    重定向的 location 对象

                    push: bool
                    若为真，重定向操作将会把新地址加入到访问历史记录里面，并且无法回退到前面的页面。

                    from: string
                    需要匹配的将要被重定向路径。
                */}
                <Redirect from="/old-match" to="/will-match" />
                <Route path="/will-match" component={WillMatch} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>
)

const Home = () => (
    <p>
        A <code>&lt;Switch></code> renders the
        first child <code>&lt;Route></code> that
        matches. A <code>&lt;Route></code> with
        no <code>path</code> always matches.
    </p>
)

const WillMatch = () => (
    <h3>Will Match</h3>
)

const NoMatch =({location}) => (
    <div>
        <h3>No Match for <code>{location.pathname}</code></h3>
    </div>
)

export default NoMatchExample;