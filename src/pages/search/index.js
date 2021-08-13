import NavBar from '../../components/common/NavBar';
import { PageWrap } from '../../components/common/styled';
import LoginModal from '../../components/common/LoginModal';
import { useSelector } from 'react-redux';
import Body from './Body';
import Footer from '../../components/common/Footer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IsLoggedAction } from '../../store/actions/isLogged';
import { UserInfoAction } from '../../store/actions/userinfo';

function SearchPage() {

    const isLoginBox = useSelector(state => state.LoginBoxReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        const useremail = localStorage.getItem('userEmail');
        const username = localStorage.getItem('userName');
        const usersex = localStorage.getItem('userSex');
        const userbirth = localStorage.getItem('userBirth');

        if (jwt && useremail && username) {
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
    }, [dispatch]);

    return (
        <PageWrap>
            <NavBar name="search" />
            {isLoginBox.isLoginBox === true ? <LoginModal /> : ''}
            <Body />
            <Footer />
        </PageWrap>
    );
}

export default SearchPage