import { BrowserRouter, Route, Switch } from "react-router-dom"
import IndexPage from "../pages/main"
// import HomePage from "../pages/home"
import NoMatchPage from "../pages/noMatch"
import SearchPage from '../pages/search'
import DetailPage from '../pages/detail'
import HostingPage from '../pages/hosting'
import InsightPage from '../pages/hostInsight'
import AccountPage from '../pages/account'

const RootRoute = () => {

    return (
        <BrowserRouter>
            <Switch>

                {/* 기본 루트페이지 */}
                <Route path='/' component={IndexPage} key="index" exact />
                {/* 추가되는 페이지 */}
                <Route path='/search' component={SearchPage} exact key="search" />
                <Route path='/detail' component={DetailPage} exact key="detail" />
                <Route path='/account' component={AccountPage} exact key="detail" />
                <Route path='/hosting' component={HostingPage} exact key="hosting" />
                <Route path='/hosting/insight' component={InsightPage} key="insight" />
                {/* 경로가 유효하지 않을 때 */}
                <Route path='*' component={NoMatchPage} key="noMatch" />

            </Switch>
        </BrowserRouter>
    )
}

export default RootRoute