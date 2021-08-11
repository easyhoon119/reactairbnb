import styled from "styled-components"
import { CoronaStyle, PageWrap } from "../../components/common/styled";
import { Link } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Footer from '../../components/common/Footer';
import LoginModal from '../../components/common/LoginModal';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IsLoggedAction } from '../../store/actions/isLogged';
import { UserInfoAction } from '../../store/actions/userinfo';

const IndexPage = () => {

    const isLoginBox = useSelector(state => state.LoginBoxReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        const username = localStorage.getItem('userName');
        const useremail = localStorage.getItem('userEmail');

        if (jwt && username && useremail) {
            dispatch(IsLoggedAction({
                isLogged: true
            }));
            dispatch(UserInfoAction({
                userName: username,
                userEmail: useremail
            }));
        }
    }, [])

    return (
        <PageWrap>
            <Header />
            <Body />
            <Footer />
            {isLoginBox.isLoginBox === true ? <LoginModal /> : ''}
        </PageWrap>
    )
}

const CoronaText = styled.span`
    color:#A3A3A3;
    font-size:1.1vw;

    a {
        color: inherit;
    }
`;

export default IndexPage