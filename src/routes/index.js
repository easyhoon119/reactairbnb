import { BrowserRouter, Route, Switch } from "react-router-dom"
import IndexPage from "../pages/main"
// import HomePage from "../pages/home"
import NoMatchPage from "../pages/noMatch"
import SearchPage from '../pages/search'
import DetailPage from '../pages/detail'

const RootRoute = () => {

    return (
        <BrowserRouter>
            <Switch>

                {/* 기본 루트페이지 */}
                <Route path='/' component={IndexPage} key="index" exact />
                {/* 추가되는 페이지 */}
                <Route path='/search' component={SearchPage} exact key="search" />
                <Route path='/detail' component={DetailPage} exact key="detail" />
                {/* 경로가 유효하지 않을 때 */}
                <Route path='*' component={NoMatchPage} key="noMatch" />

            </Switch>
        </BrowserRouter>
    )
}

export default RootRoute