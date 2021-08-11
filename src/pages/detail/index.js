import NavBar from '../../components/common/NavBar';
import { PageWrap } from '../../components/common/styled';
import LoginModal from '../../components/common/LoginModal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { IsLoggedAction } from '../../store/actions/isLogged';
import { UserInfoAction } from '../../store/actions/userinfo';
import { useEffect } from 'react';
import Body from './Body';
import Footer from '../../components/common/Footer';

function DetailPage() {

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
    }, []);

    return (
        <PageWrap>
            <NavBar name="detail"></NavBar>
            {isLoginBox.isLoginBox === true ? <LoginModal /> : ''}
            <Body />
            <Footer />
        </PageWrap>
    );
};

export default DetailPage