import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
// 元件
import Header from './components/header';
import Home from './components/home';
import Login from './components/login';
import Member from './components/member';
import Board from './components/board';
import Article from './components/article';
import NewActive from './components/newActive';
import myActive from './components/myActive';
import googelMap from './components/googlemap';
// 活動清單
import BoardgameList from './components/listActive/boardgameList';
import MovieList from './components/listActive/movieList';
import MahjongList from './components/listActive/mahjongList';
import StreetDanceLst from './components/listActive/streetDanceLst';
import RunningList from './components/listActive/runningList';
import BasketballList from './components/listActive/basketballList';
import BadmintonList from './components/listActive/badmintonList';
import DrinkList from './components/listActive/drinkList';
// 內部函式
import { getUserAuth } from './lib/api/auth';
import { userCheckedLoginStatus } from './store/slices/users';

const fetchUserStatus = async (props) => {
    const { data } = await getUserAuth();
    props.userCheckedLoginStatus(data);
};

const App = (props) => {
    useEffect(() => {
        fetchUserStatus(props);
    }, []);
    return (
        <Router>
            <Header />
            <Main>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/login" component={Login} />
                    <Route path="/member" component={Member} />
                    <Route path="/article" component={Article} />
                    <Route path="/newactive" component={NewActive} />
                    <Route path="/myactive" component={myActive} />
                    <Route path="/googlemap/test" component={googelMap} />
                    <Route
                        path="/entertainment/boardgame"
                        component={BoardgameList}
                    />
                    <Route path="/entertainment/movie" component={MovieList} />
                    <Route
                        path="/entertainment/mahjong"
                        component={MahjongList}
                    />
                    <Route
                        path="/entertainment/streetDance"
                        component={StreetDanceLst}
                    />
                    <Route path="/sport/running" component={RunningList} />
                    <Route
                        path="/sport/basketball"
                        component={BasketballList}
                    />
                    <Route path="/sport/badminton" component={BadmintonList} />
                    <Route path="/free/drink" component={DrinkList} />
                </Switch>
            </Main>
        </Router>
    );
};

const mapStateToProps = (state) => ({
    users: state.users,
});

const mapDispatchToProps = { userCheckedLoginStatus };

export default connect(mapStateToProps, mapDispatchToProps)(App);

const Main = styled.div`
    width: 100%;
`;
