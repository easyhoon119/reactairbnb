import styled from "styled-components";
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <>
            <FooterInfo>
                <div className="inner">
                    <div style={{ display: 'flex', marginTop: '4vw' }}>
                        <FooterLink>
                            <h1>소개</h1>
                            <ul>
                                <li><Link to="#">에어비엔비 이용 방법</Link></li>
                                <li><Link to="#">뉴스룸</Link></li>
                                <li><Link to="#">에어비엔비 2021</Link></li>
                                <li><Link to="#">투자자 정보</Link></li>
                                <li><Link to="#">에어비엔비 플러스</Link></li>
                                <li><Link to="#">에어비엔비 Luxe</Link></li>
                                <li><Link to="#">호텔투나잇</Link></li>
                                <li><Link to="#">에어비엔비 비지니스 프로그램</Link></li>
                                <li><Link to="#">호스트 분들이 있기에 가능합니다</Link></li>
                                <li><Link to="#">채용정보</Link></li>
                                <li><Link to="#">창립자 편지</Link></li>
                            </ul>
                        </FooterLink>
                        <FooterLink>
                            <h1>커뮤니티</h1>
                            <ul>
                                <li><Link to="#">다양성 및 소속감</Link></li>
                                <li><Link to="#">접근성</Link></li>
                                <li><Link to="#">에어비엔비 어소시에이트</Link></li>
                                <li><Link to="#">구호 인력을 위한 숙소</Link></li>
                                <li><Link to="#">게스트 추천</Link></li>
                                <li><Link to="#">Airbnb.org</Link></li>
                            </ul>
                        </FooterLink>
                        <FooterLink>
                            <h1>호스팅하기</h1>
                            <ul>
                                <li><Link to="#">숙소 호스팅</Link></li>
                                <li><Link to="#">온라인 체험 호스팅하기</Link></li>
                                <li><Link to="#">체험 호스팅하기</Link></li>
                                <li><Link to="#">책임감 있는 호스팅</Link></li>
                                <li><Link to="#">자료 센터</Link></li>
                                <li><Link to="#">커뮤니티 센터</Link></li>
                            </ul>
                        </FooterLink>
                        <FooterLink>
                            <h1>에어비엔비 지원</h1>
                            <ul>
                                <li><Link to="#">에어비엔비의 코로나19 대응 방안</Link></li>
                                <li><Link to="#">도움말 센터</Link></li>
                                <li><Link to="#">예약 취소 옵션</Link></li>
                                <li><Link to="#">에어비엔비의 이웃 민원 지원</Link></li>
                                <li><Link to="#">신뢰와 안전</Link></li>
                            </ul>
                        </FooterLink>
                    </div>
                    <FooterRight>
                        <ul style={{ display: 'flex' }} className="underline">
                            <li><Link to="#">© 2021 Airbnb, Inc.</Link></li>
                            <li><Link to="#">개인정보 처리방침</Link></li>
                            <li><Link to="#">이용약관</Link></li>
                            <li><Link to="#">사이트맵</Link></li>
                            <li><Link to="#">한국의 변경된 환불 정책</Link></li>
                            <li><Link to="#">회사 세부정보</Link></li>
                        </ul>
                        <ul style={{ display: 'flex' }}>
                            <li><i className="fas fa-globe"></i></li>
                            <li><Link to="#">한국어 (KR)</Link></li>
                            <li><i className="fas fa-won-sign"></i></li>
                            <li><Link to="#">KRW</Link></li>
                        </ul>
                        <ul style={{ display: 'flex' }} className="underline">
                            <li><i className="fab fa-facebook-f"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                            <li><i className="fas fa-camera-retro"></i></li>
                            <li><i className="fab fa-blogger"></i></li>
                            <li><i className="fas fa-pencil-alt"></i></li>
                        </ul>
                    </FooterRight>
                </div>
            </FooterInfo>
        </>
    );
}

const FooterInfo = styled.div`
    background-color: #F7F7F7;
    border-top: 1px solid #DDDDDD;
    margin-top : 5vw;
    width:100%;

    .inner {
        width : 88%;
        margin: 0 auto;
    }
`;

const FooterLink = styled.div`
    width:27vw;
    padding : 0.5vw;
    font-size : 1.15vw;

    a {
        text-decoration : none;
        color : inherit;
    }

    h1 {
        font-weight : 450;
        margin-bottom : 2.2vw;
    }

    li {
        color : #222222;
        font-weight : 350;
        margin-bottom : 2vw;
    }
`;

const FooterRight = styled.div`
    padding : 2vw 0;
    display: flex;  
    border-top: 1px solid #DDDDDD; 
    justify-content: space-between; 
    align-items: center;
    font-size : 1.15vw; 

    .underline a {
        text-decoration : none;
    }

    a {
        color : inherit;
    }

    li {
        margin-right : 1vw;
    }
`;

export default Footer