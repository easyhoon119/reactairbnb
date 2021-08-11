import { PageWrap } from '../../components/common/styled';
import styled from 'styled-components';
import logo2 from '../../image/mainlogo2.png'
import { useHistory } from 'react-router';
import Body from './Body';
import Footer from '../../components/common/Footer';
import { useState } from 'react';

function HostingPage() {

    const history = useHistory();
    const [ismenu, setIsmenu] = useState(false);

    const goHome = () => {
        history.push('/');
    };

    const goInsight = () => {
        history.push('/hosting/insight');
    };

    const menuToggle = () => {
        setIsmenu(!ismenu);
    }

    return (
        <PageWrap>
            <MainNav>
                <div className="inner">
                    <Mainlogo onClick={goHome}></Mainlogo>
                    <div style={{ display: 'flex', color: 'gray', fontSize: '1.1vw' }}>
                        <div style={{ marginRight: '1vw', borderRadius: '20px', width: '5vw', height: '3vw' }} className="hosnav">
                            투데이
                        </div>
                        <div style={{ marginRight: '1vw', borderRadius: '20px', width: '5vw', height: '3vw' }} className="hosnav">
                            메세지
                        </div>
                        <div style={{ marginRight: '1vw', borderRadius: '20px', width: '5vw', height: '3vw' }} className="hosnav">
                            달력
                        </div>
                        <div style={{ marginRight: '1vw', borderRadius: '20px', width: '5vw', height: '3vw' }} className="hosnav" onClick={goInsight}>
                            인사이트
                        </div>
                        <div onClick={menuToggle} style={{ position: 'relative', marginRight: '1vw', borderRadius: '20px', width: '5vw', height: '3vw' }} className="hosnav">
                            <form action="#" onClick={menuToggle}>
                                <input type="checkbox" id="menu" />
                                <label htmlFor="menu"><span style={{ marginRight: '0.5vw' }}>메뉴</span><i style={{ fontSize: '1vw' }} className="fas fa-chevron-down"></i></label>
                                <div className="menutoggle">
                                    <div style={{ borderBottom: '1px solid lightgray', padding: '0vw 0vw', color: 'black', fontSize: '1.2vw', fontWeight: '500' }}>
                                        <p>숙소</p>
                                        <p>새로운 숙소 등록하기</p>
                                    </div>
                                    <div style={{ padding: '0vw 0vw', color: 'black', fontSize: '1.2vw', fontWeight: '500' }}>
                                        <p>가이드북</p>
                                        <p>대금 수령 내역</p>
                                        <p>호스팅 자료 둘러보기</p>
                                        <p>커뮤니티 포럼 방문하기</p>
                                    </div>
                                </div>
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

    input[id="menu"]:checked + label + div.menutoggle {
        display : block;
    }

    .menutoggle {
        position : absolute;
        top : 3.8vw;
        left : 1vw;
        width : 18vw;
        display: none;
        background-color : #fff;
        box-shadow: 0px 16px 32px rgb(0 0 0 / 15%), 0px 3px 8px rgb(0 0 0 / 10%) !important;
        border-radius : 10px;
        padding : 2vw 0vw;
    }

    .menutoggle p {
        padding : 1vw 1vw;
    }

    .menutoggle p:hover {
        background-color : lightgray;
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