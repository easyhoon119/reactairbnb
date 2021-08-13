import { PageWrap } from "../../components/common/styled";
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
        const usersex = localStorage.getItem('userSex');
        const userbirth = localStorage.getItem('userBirth');

        if (jwt && username && useremail) {
            dispatch(IsLoggedAction({
                isLogged: true
            }));
            dispatch(UserInfoAction({
                userName: username,
                userEmail: useremail,
                userSex: usersex,
                userBirth: userbirth
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

export default IndexPage