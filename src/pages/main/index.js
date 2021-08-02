import styled from "styled-components"
import { CoronaStyle, PageWrap } from "../../components/common/styled";
// import Header from "../components/common/header";
import { Link } from 'react-router-dom';
import styles from '../main.modules.css';
import logo from '../../image/mainlogo.png';


const IndexPage = () => {

    const nearPicture = [
        {
            name: '서울',
            image: 'https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720',
            dist: '차로 1시간 거리'
        },
        {
            name: '부산',
            image: 'https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=720',
            dist: '차로 4.5시간 거리'
        },
        {
            name: '양양군',
            image: 'https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=720',
            dist: '차로 2.5시간 거리'
        },
        {
            name: '속초시',
            image: 'https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&im_w=720',
            dist: '차로 3시간 거리'
        },
        {
            name: '제주도(jeju)',
            image: 'https://a0.muscache.com/im/pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg?im_q=medq&im_w=720',
            dist: '차로 7시간 거리'
        },
        {
            name: '대구',
            image: 'https://a0.muscache.com/im/pictures/76e5f1c6-a788-418c-a28b-f0ee29cffd41.jpg?im_q=medq&im_w=720',
            dist: '차로 3.5시간 거리'
        },
        {
            name: '고성군',
            image: 'https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?im_q=medq&im_w=720',
            dist: '차로 3시간 거리'
        },
        {
            name: '완주군',
            image: 'https://a0.muscache.com/im/pictures/ca3737ef-0faf-46ba-b055-b4a2d99e2cea.jpg?im_q=medq&im_w=720',
            dist: '차로 2.5시간 거리'
        }];

    const tourPicture = [{
        explain: '자연생활을 만끽할 수 있는 장소',
        image: 'https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720'
    },
    {
        explain: '독특한 공간',
        image: 'https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720'
    },
    {
        explain: '집 전체',
        image: 'https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720'
    },
    {
        explain: '반려동물 동반 가능',
        image: 'https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720'
    }];

    const especiallyPicture = [{
        title: '추천 컬랙션: 여행 본능을 깨우는 체험',
        explain: '온라인 체험으로 집에서 랜선 여행을 즐기세요.',
        image: 'https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=720'
    },
    {
        title: '온라인 체험',
        explain: '호스트와 실시간으로 소통하면서 액티비티를 즐겨보세요.',
        image: 'https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=720'
    },
    {
        title: '체험',
        explain: '가끼운 곳에서 즐길 수 있는 잊지 못할 체험을 찾아보세요.',
        image: 'https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=720'
    }];

    const recommendNear = nearPicture.map((item, index) => (
        <div style={{ display: 'flex', alignItems: 'center', width: '20vw', padding: '0.7vw' }} key={index}>
            <img src={item.image} alt="nearimage" />
            <div>
                <span>{item.name}</span>
                <p style={{ marginTop: '0.5vw', color: '#5b5b5b' }}>{item.dist}</p>
            </div>
        </div>
    ));

    const recommendTour = tourPicture.map((item, index) => (
        <div key={index}>
            <img src={item.image} alt="temaImg" />
            <p style={{ marginTop: '1vw' }}>{item.explain}</p>
        </div>
    ));

    const especiallyTour = especiallyPicture.map((item, index) => (
        <div key={index} style={{ marginRight: '0.5vw' }}>
            <img src={item.image} alt="especiallImg" />
            <div style={{ marginTop: '0.7vw' }}>
                <h1>{item.title}</h1>
                <p style={{ marginTop: '0.7vw', fontSize: '1.1vw' }}>{item.explain}</p>
            </div>
        </div>
    ));

    return (
        <PageWrap>
            <CoronaStyle>
                <CoronaText><Link to="#" className={styles.coronaLink}>에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.</Link></CoronaText>
            </CoronaStyle>
            <MainonPicture >
                <Mainnav>
                    <Mainlogo></Mainlogo>
                    <div className={styles.navContainer} style={{ marginLeft: '100px' }}>
                        <ul style={{ display: 'flex' }}>
                            <li style={{ marginRight: '30px', padding: '5px' }}>숙소</li>
                            <li style={{ marginRight: '30px', padding: '5px' }}>체험</li>
                            <li style={{ marginRight: '30px', padding: '5px' }}>온라인 체험</li>
                        </ul>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <span style={{ marginRight: '18px', fontSize: '14.5px' }}> 호스트 되기</span>
                        <i className="fas fa-globe" style={{ marginRight: '18px', fontSize: '16px' }}></i>
                        <ProfileSelect>
                            <i className="fas fa-bars" style={{ color: 'grey', marginRight: '10px' }}></i>
                            <i className="fas fa-user-circle" style={{ color: 'grey', fontSize: '30px' }}></i>
                        </ProfileSelect>
                    </div>
                </Mainnav>
                <SearchForm >
                    <SebuForm action='#' width="35%" borderWidth="100%" pLeft="25px" ppLeft="24px">
                        <input type="text" id="city" placeholder="어디로 여행가세요?" autoComplete="off" required />
                        <label htmlFor="city">위치</label>
                    </SebuForm>
                    <SebuForm action='#' width="23%" borderWidth="95%" pLeft="2px" ppLeft="5px">
                        <input type="text" id="checkin" placeholder="날짜 입력" autoComplete="off" required />
                        <label htmlFor="checkin">체크인</label>
                    </SebuForm>
                    <SebuForm action='#' width="23%" borderWidth="95%" pLeft="17px" ppLeft="20px">
                        <input type="text" id="checkout" placeholder="날짜 입력" autoComplete="off" required />
                        <label htmlFor="checkout">체크아웃</label>
                    </SebuForm>
                    <SebuForm action='#' width="24%" borderWidth="95%" pLeft="2px" ppLeft="5px">
                        <input type="text" id="person" placeholder="게스트 추가" autoComplete="off" required style={{ borderRight: 'none' }} />
                        <label htmlFor="person">인원</label>
                    </SebuForm>
                    <SearchIcon>
                        <i className="fas fa-search"></i>
                    </SearchIcon>
                </SearchForm>
                <div style={{ position: 'absolute', top: '18vw', left: '7vw' }}>
                    <MainSpan>
                        <p>올림픽/패럴림픽 출전 선수와 함께하는 온라인&nbsp;체험</p>
                    </MainSpan>
                    <SpanButton>지금 둘러보기</SpanButton>
                </div>
            </MainonPicture>
            <BodySection>
                <div>
                    <p style={{ fontSize: '2.6vw', fontWeight: '640' }}>가까운 여행지 둘러보기</p>
                </div>
                <NearKorea>
                    {recommendNear}
                </NearKorea>
                <AnywhereSearch>
                    <div style={{ position: 'absolute', top: '50%', left: '7vw', transform: 'translateY(-50%)' }}>
                        <AnywhereSpan>
                            <p>
                                어디든 상관없이
                                떠나고 싶을 때에어비앤비가 도와드립니다!
                            </p>
                        </AnywhereSpan>
                        <AnywhereButton>유연한 검색</AnywhereButton>
                    </div>
                </AnywhereSearch>
                <div style={{ marginTop: '6vw' }}>
                    <p style={{ fontSize: '2.6vw', fontWeight: '640' }}>어디에서나, 여행은 살아 보는 거야!</p>
                </div>
                <TemaTour>
                    {recommendTour}
                </TemaTour>
                <div style={{ marginTop: '6vw' }}>
                    <p style={{ fontSize: '2.6vw', fontWeight: '640' }}>특별한 즐길거리를 찾아보세요</p>
                </div>
                <EspeciallyTour>
                    {especiallyTour}
                </EspeciallyTour>
                <HostingSearch>
                    <div style={{ position: 'absolute', top: '50%', left: '7vw', transform: 'translateY(-50%)' }}>
                        <h1>호스팅 시작하기</h1>
                        <p style={{ fontSize: '1.6vw', fontWeight: '350', width: '32vw', marginTop: '1vw' }}>숙소를 공유하여 부수입을 올리고 새로운 가능성을 만나세요.</p>
                        <HostingButton>자세히 알아보기</HostingButton>
                    </div>
                </HostingSearch>
            </BodySection>
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
        </PageWrap >
    )
}

const CoronaText = styled.span`
    color:#A3A3A3;
    font-size:1.1vw;

    a {
        color: inherit;
    }
`;

const MainonPicture = styled.div`
    width: 100%;
    height: 47.5vw;
    background-image: url("https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=1920");
    background-position: center;
    background-size: cover;
    position:relative;
`;

const Mainlogo = styled.div`
    width: 100px;
    height: 64px;
    background-image: url(${logo});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
`;

const Mainnav = styled.div`
    width:88%;
    padding: 5px;
    margin: 0 auto;
    color:white;
    display: flex;
    justify-content:space-between;
    align-items:center;
    font-size:1.25vw;
    font-weight:350;
`;

const ProfileSelect = styled.div`
    width: 6.6vw;
    height: 3.3vw;
    background-color: white;
    border-radius : 25px;
    display: flex;
    justify-content:center;
    align-items:center;
`;

const SearchForm = styled.div`
    width : 66%;
    height: 65px;
    box-sizing : border-box;
    background-color : white;
    margin: 0 auto;
    border-radius: 30px;
    display : flex;
    position : relative;
    align-items : center;
    box-shadow: 0px 16px 32px rgb(0 0 0 / 15%), 0px 3px 8px rgb(0 0 0 / 10%) !important;
`;

const SearchIcon = styled.div`
    width : 50px;
    height : 50px;
    background-color : #FF385C;
    border-radius : 50%;
    position: absolute;
    right : 8px;
    display: flex;
    font-size : 16px;
    justify-content : center;
    align-items : center;
    color : white;
`;

const SebuForm = styled.form`
    display: flex;
    width: ${props => props.width};
    height : 100%;
    justify-content : center;
    align-items: center;
    flex-direction : column;
    box-sizing: border-box;
    position: relative;
    border-radius : 30px;
    padding : 0px ${props => props.pLeft};

    &:hover {
        background-color: #dedede;
    }

    &:hover input{
        background-color: #dedede;
    }

    input[type='text'] {
        width:${props => props.borderWidth};
        height:20%;
        color: #595959;
        margin-top: 0px;
        border: none;
        font-size : 15px;
        border-right : 1px solid lightgray;
        display: flex;
        padding-top: 20px;
        outline-style: none;
    }

    label {
        position: absolute;
        bottom: 0px;
        left: ${props => props.ppLeft};
        width:100%;
        font-size : 12px;
        font-weight : 700;
        height:75%;
    }
`;

const MainSpan = styled.div`
    width:26vw;
    text-align : start;
    word-break: keep-all;
    line-height : 4.5vw;
    font-size: 3.8vw;
    color: white;
    font-weight : 700;
`;

const SpanButton = styled.div`
    margin-top : 1vw;
    width : 9vw;
    height : 3vw;
    font-weight : 600;
    padding : 0.3vw 1.3vw;
    background-color : white;
    font-size : 1.1vw;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius : 5px;
    box-sizing : border-box;
`;

const BodySection = styled.div`
    width : 88%;
    margin: 0 auto;
    margin-top : 7vw;
`;

const NearKorea = styled.div`
    font-size : 1.3vw;
    display : flex;
    margin-top : 2vw;
    flex-wrap: wrap;

    img {
        width:5.5vw;
        height:5.5vw;
        border-radius : 8px;
        margin-right : 1vw;
    }
`;

const AnywhereSearch = styled.div`
    background-image : url('https://a0.muscache.com/im/pictures/a915ff27-6062-436d-a7a9-007685423f7b.jpg?im_w=1440');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: 100% 35vw;
    width : 100%;
    height : 30vw;
    margin : 0 auto;
    margin-top : 4vw;
    border-radius : 8px;
    position : relative;
`;

const AnywhereSpan = styled.div`
    font-size : 3.8vw;
    font-weight : 610;
    width : 28vw;
    line-height : 4.5vw;
    text-align : start;
    word-break: keep-all;
`;

const AnywhereButton = styled.div`
    color : white;
    width : 10vw;
    margin-top : 2vw;
    font-weight : 520;
    padding : 1.2vw 2.2vw;
    background-color : #2e2e2e;
    font-size : 1.2vw;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius : 5px;
    box-sizing : border-box;
`;

const TemaTour = styled.div`
    font-size : 1.5vw;
    display : flex;
    font-weight : 500;
    margin-top : 2vw;

    img {
        width:21vw;
        height:21vw;
        border-radius : 8px;
        margin-right : 1vw;
    }
`;

const EspeciallyTour = styled.div`
    font-size : 1.4vw;
    display : flex;
    margin-top : 2vw;

    img {
        width:28vw;
        height:28vw;
        border-radius : 8px;
        margin-right : 1vw;
    }
`;

const HostingSearch = styled.div`
    background-image : url('https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    font-size : 4vw;
    color : white;
    width : 100%;
    height : 30vw;
    margin : 0 auto;
    margin-top : 4vw;
    border-radius : 8px;
    position : relative;
`;

const HostingButton = styled.div`
    color : #000;
    width : 13vw;
    height : 4.1vw;
    margin-top : 4vw;
    font-weight : 520;
    padding : 1.2vw 2.2vw;
    background-color : white;
    font-size : 1.3vw;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius : 5px;
    box-sizing : border-box;
`;

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

export default IndexPage