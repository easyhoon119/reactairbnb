import { PageWrap } from '../../components/common/styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IsLoggedAction } from '../../store/actions/isLogged';
import { UserInfoAction } from '../../store/actions/userinfo';
import NavBar from '../../components/common/NavBar';
import Footer from '../../components/common/Footer';
import Body from './Body';
import { useSelector } from 'react-redux';
import LoginModal from '../../components/common/LoginModal';

function AccountPage() {

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
            }))
        }
    }, [dispatch]);

    return (
        <PageWrap>
            <NavBar name="account" />
            <Body />
            <Footer />
            {isLoginBox.isLoginBox === true ? <LoginModal /> : ''}
        </PageWrap>
    );
};

export default AccountPage