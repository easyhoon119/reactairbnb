import NavBar from '../../components/common/NavBar';
import { PageWrap } from '../../components/common/styled';
import LoginModal from '../../components/common/LoginModal';
import { useSelector } from 'react-redux';
import Body from './Body';
import Footer from '../../components/common/Footer';

function SearchPage() {

    const isLoginBox = useSelector(state => state.LoginBoxReducer);

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