import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MoreDetail from './MoreDetail';
import StickyDate from './StickyDate';
import GoogleMap from '../search/GoogleMap';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';

function Body() {

    const stayid = useSelector(state => state.SearchIdReducer);
    const [stayName, setStayName] = useState('');
    const [avgRate, setAvgRate] = useState('');
    const [address, setAddress] = useState('');
    const [searchData, setSearchData] = useState({
        "stayId": 4,
        "superHost": 1,
        "stayName": "yoon이네",
        "address": "부산 동감동",
        "imageURL": "guestroom.png",
        "maxGuests": 4,
        "bedRoomCount": 1,
        "bedCount": 1,
        "showerRoomCount": 1,
        "cancelPos": 1,
        "stayType": "'집 전체'",
        "avgRate": "5.0",
        "cntRate": 1,
        "totalPrice": "$125",
        "latitude": "35.157624",
        "longitude": "129.125522"
    });

    const expoint = [{
        name: '청결도',
        point: '5'
    },
    {
        name: '정확성',
        point: '5'
    },
    {
        name: '의사소통',
        point: '5'
    },
    {
        name: '위치',
        point: '5'
    },
    {
        name: '체크인',
        point: '5'
    },
    {
        name: '가격 대비 만족도',
        point: '5'
    }];

    const realreivew = [{
        image: 'https://a0.muscache.com/im/pictures/user/780cdf7c-34df-4286-832e-b51f337456b3.jpg?im_w=240',
        name: 'Jiwoo',
        where: '2021년 8월',
        message: '너무 예쁘고 향기롭고 완벽한 숙소입니다! 광안리 바다와도 가깝고, 슈퍼라던지 편의점도 가까워서 정말 편리했어요. 화장솜부터 시작해서 샴푸, 치약, 칫솔까지 어매니티를 다 챙겨주셔서 너무 좋았구요! 정말 부산 오면 꼭 다시 묵고 싶은 곳입니다 :) 식물들이 많아서 그것도 좋았어요. 마음마저 쉬는 느낌을 받을 수 있었습니다!',
        margin: '3.5'
    },
    {
        image: 'https://a0.muscache.com/im/pictures/user/45a53b49-f1be-4ad3-9d1d-5e10f545674f.jpg?im_w=240',
        name: '예린',
        where: '2021년 5월',
        message: '오늘의집에 나오는 원룸같아요  깨끗하고 곳곳에 식물까지! 제 생각에는 사진보다 더 커서 쾌적하게 지냈어요 좌식소파도 편하고 넷플릭스되는 티비도 좋고 침대도 편했어요 곳곳에 선풍기랑 디퓨저도 있고 넉넉한 수건까지~ 호스트님의 센스와 배려로 가득한 숙소였어요!남편이랑 급 휴가로 온건데 너무 잘왔다고 부산오면 또 여기로 오고싶다구 그랬어요ㅋㅋ 호스트님 선물로 주신 수세미도 넘 귀여워요 잘쓰겠습니다! 가성비 좋은 예쁜숙소 넘 잘있다갑니당 ',
        margin: '3.5'
    },
    {
        image: 'https://a0.muscache.com/im/pictures/user/45a53b49-f1be-4ad3-9d1d-5e10f545674f.jpg?im_w=240',
        name: '예린',
        where: '2021년 5월',
        message: '오늘의집에 나오는 원룸같아요  깨끗하고 곳곳에 식물까지! 제 생각에는 사진보다 더 커서 쾌적하게 지냈어요 좌식소파도 편하고 넷플릭스되는 티비도 좋고 침대도 편했어요 곳곳에 선풍기랑 디퓨저도 있고 넉넉한 수건까지~ 호스트님의 센스와 배려로 가득한 숙소였어요!남편이랑 급 휴가로 온건데 너무 잘왔다고 부산오면 또 여기로 오고싶다구 그랬어요ㅋㅋ 호스트님 선물로 주신 수세미도 넘 귀여워요 잘쓰겠습니다! 가성비 좋은 예쁜숙소 넘 잘있다갑니당 ',
        margin: '3.5'
    },
    {
        image: 'https://a0.muscache.com/im/pictures/user/780cdf7c-34df-4286-832e-b51f337456b3.jpg?im_w=240',
        name: 'Jiwoo',
        where: '2021년 8월',
        message: '너무 예쁘고 향기롭고 완벽한 숙소입니다! 광안리 바다와도 가깝고, 슈퍼라던지 편의점도 가까워서 정말 편리했어요. 화장솜부터 시작해서 샴푸, 치약, 칫솔까지 어매니티를 다 챙겨주셔서 너무 좋았구요! 정말 부산 오면 꼭 다시 묵고 싶은 곳입니다 :) 식물들이 많아서 그것도 좋았어요. 마음마저 쉬는 느낌을 받을 수 있었습니다!',
        margin: '3.5'
    },
    {
        image: 'https://a0.muscache.com/im/pictures/user/780cdf7c-34df-4286-832e-b51f337456b3.jpg?im_w=240',
        name: 'Jiwoo',
        where: '2021년 8월',
        message: '너무 예쁘고 향기롭고 완벽한 숙소입니다! 광안리 바다와도 가깝고, 슈퍼라던지 편의점도 가까워서 정말 편리했어요. 화장솜부터 시작해서 샴푸, 치약, 칫솔까지 어매니티를 다 챙겨주셔서 너무 좋았구요! 정말 부산 오면 꼭 다시 묵고 싶은 곳입니다 :) 식물들이 많아서 그것도 좋았어요. 마음마저 쉬는 느낌을 받을 수 있었습니다!',
        margin: '0'
    }];

    useEffect(async () => {
        console.log(stayid.searchId);
        try {
            const url = `https://prod.devsanha.site/search-stay?stayId=${stayid.searchId}&address=부산&checkIn=2021-08-20&checkOut=&guestNum=1&cancelPos=&superHost=&minPrice=&maxPrice=&category=&bedCount=&bedroomCount=&showerCount=&petOk=&smokingOk=`;

            const res = await axios({
                method: 'get',
                url: url
            });

            if (res.data.code === 1000) {
                setSearchData(res.data.result[0]);
                setStayName(res.data.result[0].stayName);
                setAvgRate(res.data.result[0].avgRate);
                setAddress(res.data.result[0].address);
            }

            else {
                console.log(res.data.message);
            }
        }
        catch (error) {
            console.log(error);
        }
    }, [])

    const progress = expoint.map((item, index) => (
        <div key={index} style={{ display: 'flex', marginRight: '8vw', marginBottom: '2vw', justifyContent: 'space-between', width: '40%', alignItems: 'center' }}>
            <p>{item.name}</p>
            <div style={{ display: 'flex' }}>
                <progress value={item.point} max="5" style={{ marginRight: '1vw' }} />
                <span>{item.point}.0</span>
            </div>
        </div>
    ));

    const reivewCopy = realreivew.map((item, index) => (
        <div style={{ width: '50%', marginBottom: `${item.margin}vw` }} key={index}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img style={{ width: '4.5vw', marginRight: '1vw', height: '4.5vw', borderRadius: '50%' }} src={item.image} alt="reivew" />
                <div>
                    <p style={{ fontWeight: '500', fontSize: '1.45vw' }}>{item.name}</p>
                    <p style={{ fontSize: '1.1vw', color: 'gray', marginTop: '0.5vw' }}>{item.where}</p>
                </div>
            </div>
            <p style={{ wordBreak: 'keep-all', marginTop: '1vw', width: '80%', height: '6vw', fontSize: '1.3vw', lineHeight: '2vw', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {item.message}
            </p>
            <div style={{ marginTop: '0.7vw' }}>
                <Link to="#">더 보기 <i className="fas fa-chevron-right"></i></Link>
            </div>
        </div>
    ));

    return (
        <DetailBody>
            <div className="inner">
                <p style={{ fontSize: '2vw', fontWeight: '600' }}>{stayName || '❥조이랜드(JOY:LAND)_도심속의 정원✿ #광안리도보2분#넷플릭스#갬성숙소#매일소독❥'}</p>
                <div style={{ display: 'flex', marginTop: '1.3vw', fontSize: '1.15vw' }}>
                    <i className="fas fa-star" style={{ color: 'red', marginRight: '0.3vw', fontSize: '1vw' }}></i>
                    <p style={{ color: '#959595' }}><span style={{ color: 'black' }}>{avgRate || '0.0'}</span> <Link to="#">(후기 5개)</Link> · <Link to="#">{`${address}, 한국`}</Link></p>
                </div>
                <div style={{ display: 'flex', marginTop: '2vw' }} className="introimg">
                    <div className="main" style={{ marginRight: '0.7vw' }}>
                        <img src="https://a0.muscache.com/im/pictures/cd4ce9b2-da8a-478e-a750-28fae6a1d954.jpg?im_w=720" alt="detail" />
                    </div>
                    <div className="sub">
                        <img style={{ marginRight: '0.7vw' }} src="https://a0.muscache.com/im/pictures/b2080218-4d18-438e-907e-2598c5f4cb5a.jpg?im_w=720" alt="detail" />
                        <img style={{ borderTopRightRadius: '8px' }} src="https://a0.muscache.com/im/pictures/4bb44368-62cf-4abf-8d88-b20284b2a160.jpg?im_w=720" alt="detail" />
                        <img style={{ marginRight: '0.7vw', marginTop: '0.7vw' }} src="https://a0.muscache.com/im/pictures/962971de-f155-495c-9bbf-7d7513559cd2.jpg?im_w=720" alt="detail" />
                        <img style={{ borderBottomRightRadius: '8px', marginTop: '0.7vw' }} src="https://a0.muscache.com/im/pictures/0ef314b2-d2f9-4a16-9d2b-c508ac8df2c6.jpg?im_w=720" alt="detail" />
                    </div>
                </div>
                <div style={{ display: 'flex', borderBottom: '1px solid lightgray' }}>
                    <MoreDetail data={searchData} />
                    <StickyDate data={searchData} />
                </div>
                <BodyContent>
                    <div style={{ display: 'flex', fontSize: '1.6vw', fontWeight: '500', alignItems: 'center' }}>
                        <i className="fas fa-star" style={{ color: 'red', marginRight: '0.7vw', fontSize: '1.5vw' }}></i>
                        <p style={{ marginRight: '0.2vw' }}>{avgRate || '0.0'} · </p>
                        <p>후기 161개</p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '3.5vw' }}>
                        {progress}
                    </div>
                    <div style={{ marginTop: '1.5vw', display: 'flex', flexWrap: 'wrap' }}>
                        {reivewCopy}
                    </div>
                </BodyContent>
                <BodyContent>
                    <p style={{ fontSize: '1.6vw', fontWeight: '500' }}>호스팅 지역</p>
                    <div style={{ marginTop: '2vw', width: '100%', height: '40vw' }}>
                        <GoogleMap name="detail" stayId={stayid.searchId} />
                    </div>
                    <div style={{ marginTop: '3vw' }}>
                        <p style={{ fontSize: '1.5vw', fontWeight: '500' }}>{`${address}, 한국`}</p>
                        <p style={{ marginTop: '1.5vw', textOverflow: 'ellipsis', lineHeight: '1.8vw', whiteSpace: 'nowrap', width: '21%', overflow: 'hidden', height: '5vw' }}>
                            - 민락 회센터 도보 20초<br />
                            - 24시 마트 건물 1층에 위치<br />
                            - 광안리 해수욕장 도보 2분에 위치하여 인접
                        </p>
                    </div>
                    <div style={{ marginTop: '1.5vw' }}>
                        <Link to="#">더 보기 <i className="fas fa-chevron-right"></i></Link>
                    </div>
                </BodyContent>
                <BodyContent style={{ border: 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img style={{ width: '6vw', marginRight: '1.3vw', height: '6vw', borderRadius: '50%' }} src="https://a0.muscache.com/im/pictures/user/e9722c98-aef1-4421-8b36-fefbe749a986.jpg?im_w=240" alt="reivew" />
                        <div>
                            <p style={{ fontSize: '1.9vw', fontWeight: '500' }}>호스트 : Song Myo님</p>
                            <p style={{ fontSize: '1.1vw', color: 'gray', marginTop: '1vw' }}>회원 가입일: 2019년 4월</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginTop: '2vw' }}>
                        <div style={{ width: '50%' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1vw', fontSize: '1.3vw' }}>
                                <i className="fas fa-star" style={{ color: 'red', paddingBottom: '0.5vw', marginRight: '1vw', fontSize: '1.3vw' }}></i>
                                <p style={{ marginRight: '2vw' }}>후기 161개</p>
                                <i className="fas fa-shield-alt" style={{ color: 'red', paddingBottom: '0.5vw', fontSize: '1.3vw', marginRight: '1vw' }}></i>
                                <p>본인 인증 완료</p>
                            </div>
                            <div style={{ fontSize: '1.3vw', width: '80%', marginTop: '1.8vw', lineHeight: '2vw', height: '9.8vw', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                <p>
                                    #OPEN) JOY LAND 8월예약마감직전!!(취소로인한2일예약가능) 조이랜드를 예약해주신 게스트분들께 진심으로 머리숙여 감사드립니다^^ 9월10월 황금연휴! 시원한계절 부산의 가을여행~지금 예약 서두르세요!! *특가할인는 계속됩니다 SOON* );조이랜드는 광안리해변과 민락수변공원 중간에 위치해있습니다(해안산책로, 광안대교,영화의 전당 등 이국적인야경) 개성있는 인테리어와 반려식물들로 편안한 휴식공간으로 꾸며보았습니다 (미니정원) 호스트가 직접 청소와 방역을 하고있으니 안심하고 이용하셔도 됩니다 가성비GOOD/GREEN인테리어/위치(코로나로인해오픈테라스까페,레스토랑등으로 외국에 온 느낌)/청결/신속/정확/편리 (숙소건물 1층 24시간 대형할인마트와 편의점,은행,빨래방등) ):조이랜드는 제 첫 호스팅이라서 게스트분들의 객관적인 후기를 간절히 원합니다!!! 게스트분들의 후기를 참고삼아 더욱 개선,보완되어진 조이랜드로 거듭 나겠습니다 ^^ 실속파여행자분들을 환영합니다^^(장기숙박20%할인적용) 무더운날씨 건강(코로나) 조심하세요~~ 감사합니다 :)
                                </p>
                            </div>
                            <Link to="#">더 읽기</Link>
                            <div style={{ marginTop: '2.8vw', fontSize: '1.3vw' }}>
                                <p style={{ fontWeight: 500 }}>공동 호스트</p>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img style={{ width: '3.5vw', marginTop: '1.1vw', marginRight: '1.3vw', height: '3.5vw', borderRadius: '50%' }} src="https://a0.muscache.com/im/pictures/user/3d6280d3-45aa-450b-99d3-83e6a5af09eb.jpg?im_w=240" alt="reivew" />
                                    <p style={{ marginTop: '1vw' }}>지현</p>
                                </div>
                                <div style={{ marginTop: '1.5vw', width: '82%' }}>
                                    <p style={{ fontWeight: '500' }}>숙박 중 게스트와의 교류</p>
                                    <p style={{ marginTop: '1.3vw', lineHeight: '2vw' }}>문의사항이 있으면 언제든지 메세지를 보내주세요!! 빠른 답변을 위해 최선을 다하겠습니다</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '40%', fontSize: '1.35vw' }}>
                            <p>언어: English</p>
                            <p style={{ marginTop: '1.7vw' }}>응답률: 100%</p>
                            <p style={{ marginTop: '1.7vw' }}>응답시간: 1시간 이내</p>
                            <div className="hostcall">
                                호스트에게 연락하기
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '2.2vw', fontSize: '1.6vw' }}>
                                <i className="fas fa-shield-virus" style={{ marginRight: '1.2vw' }}></i>
                                <p style={{ fontSize: '1vw', width: '22vw' }}>안전한 결제를 위해 에어비앤비 웹사이트나 앱 외부에서 송금하거나 대화를 나누지 마세요.</p>
                            </div>
                        </div>
                    </div>
                </BodyContent>
            </div>
        </DetailBody>
    );
};

const DetailBody = styled.div`
    width : 100%;

    .inner {
        width : 87%;
        margin: 0 auto;
        padding-top : 3vw;
    }

    a {
        color : inherit;
    }

    .main img {
        width : 44vw;
        height : 29vw;
        border-top-left-radius: 10px;
        border-bottom-left-radius : 10px;
        transition: all 0.5s;
    }

    .sub {
        display : flex;
        flex-wrap : wrap;
    }

    .sub img {
        width : 20.1vw;
        height : 14vw;
        transition: all 0.5s;
    }

    .introimg img:hover {
        transform : scale(1.01);
    }

    .hostcall {
        width : 15vw;
        height : 3.9vw;
        border-radius : 7px;
        box-sizing : border-box;
        font-weight : 500;
        padding : 0.6vw;
        border : 1px solid black;
        display : flex;
        justify-content : center;
        align-items : center;
        margin-top : 3vw;
    }
`;

const BodyContent = styled.div`
    padding-top : 4vw;
    border-bottom : 1.2px solid lightgray;
    width: 100%;
    padding-bottom : 4vw;
`;

export default Body;