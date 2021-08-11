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
    const SearchData = useSelector(state => state.SearchReducer);

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        const useremail = localStorage.getItem('userEmail');
        const username = localStorage.getItem('userName');

        if (jwt && useremail && username) {
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
            <NavBar name="search" />
            {isLoginBox.isLoginBox === true ? <LoginModal /> : ''}
            <Body />
            <Footer />
        </PageWrap>
    );
}

export default SearchPage