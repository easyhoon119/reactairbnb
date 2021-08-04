import styled from "styled-components"
import { CoronaStyle, PageWrap } from "../../components/common/styled";
import { Link } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Footer from '../../components/common/Footer';
import LoginModal from '../../components/common/LoginModal';
import { useSelector } from 'react-redux';

const IndexPage = () => {

    const isLoginBox = useSelector(state => state.LoginBoxReducer);

    return (
        <PageWrap>
            <CoronaStyle>
                <CoronaText><Link to="#">에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.</Link></CoronaText>
            </CoronaStyle>
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