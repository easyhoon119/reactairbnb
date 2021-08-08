import { PageWrap } from '../../components/common/styled';
import styled from 'styled-components';
import logo2 from '../../image/mainlogo2.png'
import { useHistory } from 'react-router';
import Body from './Body';
import Footer from '../../components/common/Footer';

function HostingPage() {

    const history = useHistory();

    const goHome = () => {
        history.push('/');
    };

    return (
        <PageWrap>
            <MainNav>
                <div className="inner">
                    <Mainlogo onClick={goHome}></Mainlogo>
                    <div style={{ display: 'flex', color: 'gray', fontSize: '1.25vw' }}>
                        <div style={{ marginRight: '1vw', borderRadius: '20px', width: '5vw', height: '3vw' }} className="hosnav">
                            투데이
                        </div>
                        <div style={{ marginRight: '1vw', borderRadius: '20px', width: '5vw', height: '3vw' }} className="hosnav">
                            메세지
                        </div>
                        <div style={{ marginRight: '1vw', borderRadius: '20px', width: '5vw', height: '3vw' }} className="hosnav">
                            달력
                        </div>
                        <div style={{ marginRight: '1vw', borderRadius: '20px', width: '5vw', height: '3vw' }} className="hosnav">
                            인사이트
                        </div>
                        <div style={{ marginRight: '1vw', borderRadius: '20px', width: '5vw', height: '3vw' }} className="hosnav">
                            <form action="#">
                                <input type="checkbox" id="menu" />
                                <label htmlFor="menu"><span style={{ marginRight: '0.5vw' }}>메뉴</span><i style={{ fontSize: '1vw' }} className="fas fa-chevron-down"></i></label>
                            </form>
                        </div>
                    </div>
                    <div style={{ width: '4vw', height: '4vw', border: '1px solid lightgray', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src="https://a0.muscache.com/defaults/user_pic-36x36.png?v=3" alt="hosting" style={{ borderRadius: '50%' }} />
                    </div>
                </div>
            </MainNav>
            <Body />
            <Footer />
        </PageWrap>
    );
};

const MainNav = styled.div`
    width:100%;
    height : 5.5vw;
    box-sizing : border-box;
    margin: 0 auto;
    color: black;
    font-size:1.25vw;
    font-weight:350;
    border-bottom : 1px solid lightgray;

    li { 
        cursor : pointer;
    }

    .inner {
        width : 97%;
        display: flex;
        justify-content:space-between;
        align-items:center;
        margin: 0 auto;
    }

    .hosnav {
        display : flex;
        justify-content : center;
        align-items : center;
    }

    .hosnav:hover {
        background-color : rgba(225,225,225,0.5);
    }

    input[id="menu"] {
        display:none;
    }
`;

const Mainlogo = styled.div`
    width: 6.5vw;
    height: 5.5vw;
    padding-bottm : 10vw;
    background-image: url(${logo2});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    cursor: pointer;
`;

export default HostingPage