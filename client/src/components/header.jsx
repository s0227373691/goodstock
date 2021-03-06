import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './login';
import Register from './register';

import { ButtonClearDefault } from './styles/buttons';

import { userCheckedLoginStatus } from '../store/slices/users';
import { getUserLogout } from '../lib/api/users/logout';

import { IconLogo, IconUser } from '../assets/config/imageUrl';

const Header = (props) => {
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    const { loggedIn } = props.users;
    if (loggedIn)
        var { name: accountName, type: accountType } = props.users.user;

    const handleClickLogout = async () => {
        const { data } = await getUserLogout();
        props.userCheckedLoginStatus(data);
        setLogin(false);
    };
    return (
        <Contener>
            <Head>
                <Logo>
                    <Link to="/">
                        <img src={IconLogo} alt="image load fail..." />
                    </Link>
                </Logo>

                {loggedIn ? (
                    <Account>
                        <BtnAccount>
                            <Icon src={IconUser} />
                            <AccountName>{accountName}</AccountName>
                        </BtnAccount>
                        <AccountActionList className="show-user-dropdown">
                            {accountType === 'admin' ? (
                                <AccountAction>
                                    <a
                                        href="http://localhost:1000/"
                                        target="_blank"
                                    >
                                        後台管理
                                    </a>
                                </AccountAction>
                            ) : null}
                            <AccountAction>
                                <Link to="/personalinformation">個人資料</Link>
                            </AccountAction>
                            <AccountAction>
                                <Link to="/member">個人檔案</Link>
                            </AccountAction>
                            <AccountAction>
                                <Link to="/newactive">新增活動</Link>
                            </AccountAction>
                            <AccountAction>
                                <Link to="/myactive">我的活動</Link>
                            </AccountAction>
                            <AccountAction>
                                <Link to="/googlemap/test">googlemap</Link>
                            </AccountAction>
                            <AccountAction onClick={handleClickLogout}>
                                登出
                            </AccountAction>
                        </AccountActionList>
                    </Account>
                ) : (
                    <ButtonGroup>
                        <BtnLogin onClick={() => setLogin(true)}>登入</BtnLogin>
                        <BtnRegister onClick={() => setRegister(true)}>
                            加入
                        </BtnRegister>
                    </ButtonGroup>
                )}
            </Head>
            {loggedIn ? null : (
                <>
                    <Login login={login} setLogin={setLogin} />
                    <Register register={register} setRegister={setRegister} />
                </>
            )}
        </Contener>
    );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = { userCheckedLoginStatus };

export default connect(mapStateToProps, mapDispatchToProps)(Header);

const Contener = styled.div`
    height: 80px;
`;

const Head = styled.header`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 1000;
    box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%),
        0 2px 4px -1px rgb(0 0 0 / 20%);
    padding: 0 15px;
    transition: 0.5s;
`;

const Logo = styled.h1`
    display: flex;
    a {
        display: block;
        img {
            height: 80px;
        }
    }
`;

const Account = styled(ButtonClearDefault)`
    width: 150px;
    padding: 10px;
    color: #2d3436;
    font-size: 16px;
    &:hover {
        color: #0984e3;
    }
    .show-user-dropdown {
        visibility: hidden;
    }
    &:hover .show-user-dropdown {
        visibility: visible;
    }
`;

const BtnAccount = styled.div`
    padding: 5px 12px;
    display: flex;
    align-items: center;
`;

const Icon = styled.img`
    width: 30px;
    margin: 0 10px;
`;

const AccountName = styled.div``;

const AccountActionList = styled.ul`
    padding: 0 10px;
    position: absolute;
    box-sizing: border-box;
    background-color: #c4c4c4;
`;

const AccountAction = styled.li`
    &:hover {
        color: #0984e3;
    }
`;

const ButtonGroup = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        color: #ffffff;
        padding: 8px 15px;
        margin-left: 15px;
        font-size: 18px;
        background-color: #99c5eb;
        border-radius: 5px;
        &:hover {
            background-color: #76a9d7;
        }
    }
`;

const BtnRegister = styled(ButtonClearDefault)``;
const BtnLogin = styled(ButtonClearDefault)``;
