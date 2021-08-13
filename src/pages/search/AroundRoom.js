import styled from 'styled-components';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SearchIdAction } from '../../store/actions/searchid';

function AroundRoom() {

    const searchData = useSelector(state => state.SearchReducer);
    const [spread, setSpread] = useState();
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(async () => {

        try {
            const url = `https://dev.devsanha.site/search?address=${searchData.address}&checkIn=${searchData.checkin}&checkOut=${searchData.checkout}&guestNum=${searchData.guestnum}&cancelPos=&superHost=&minPrice=&maxPrice=&category=&bedCount=&bedroomCount=&showerCount=&petOk=&smokingOk=`;
            let prevId = 0;
            console.log(1);
            const res = await axios({
                method: 'get',
                url: url
            })
            let i = -1;
            if (res.data.code === 2025) {
                history.push('/');
            }
            else if (res.data.code === 1000) {
                console.log(res.data.result);
                setSpread(res.data.result.map((item, index) => {
                    if (prevId !== item.stayId) {
                        prevId = item.stayId;
                        const rooms = [{
                            image: 'https://a0.muscache.com/im/pictures/miso/Hosting-50331547/original/c9310791-aeee-4ae3-91da-c0c404bdb5d9.jpeg?im_w=480',
                            where: 'Gwangan-dong, Suyeong-gu의 주거용 공간 전체',
                            explain: '🚪문을열고 들어오면 : 낭만실조자를 위한 집'
                        },
                        {
                            image: 'https://a0.muscache.com/im/pictures/6b6d22c1-47ac-4e2e-beea-0917a49d48a6.jpg?im_w=480',
                            where: 'Gwangan 2(i)-dong, Suyeong-gu의 공동주택(콘도) 전체',
                            explain: '"숲" #광안리파노라마뷰 #광안리10초 #Netflix #최대3명'
                        },
                        {
                            image: 'https://a0.muscache.com/im/pictures/miso/Hosting-50331547/original/c9310791-aeee-4ae3-91da-c0c404bdb5d9.jpeg?im_w=480',
                            where: 'Gwangan 2(i)-dong, Suyeong-gu의 공동 주택 전체',
                            explain: '✔️New/Gwangan Beach/넷플릭스/파노라마 정면 뷰/청결/광안대교오션뷰/일출'
                        },
                        {
                            image: 'https://a0.muscache.com/im/pictures/727e75f2-bab8-4f32-aa23-313f8a3976b0.jpg?im_w=480',
                            where: 'U-dong, Haeundae의 레지던스 전체',
                            explain: '⁂ OPEN  ⁂ 해운대 벡스코 앞 시원한 뷰 ! 최근 리모델링한 호텔객실~'
                        },
                        {
                            image: 'https://a0.muscache.com/im/pictures/miso/Hosting-50331547/original/c9310791-aeee-4ae3-91da-c0c404bdb5d9.jpeg?im_w=480',
                            where: 'Gwangan 2(i)-dong의 공동 주택 전체',
                            explain: 'New/광안오션뷰/정면뷰/도보1초/살균청소/오픈특가/광안리바닷가/일출'
                        },
                        {
                            image: 'https://a0.muscache.com/im/pictures/6b6d22c1-47ac-4e2e-beea-0917a49d48a6.jpg?im_w=480',
                            where: '부산광역시의 공동 주택 전체',
                            explain: '#태종대 바다뷰 하우스#Ocean view#Sunrise#Taejongdae'
                        },
                        {
                            image: 'https://a0.muscache.com/im/pictures/727e75f2-bab8-4f32-aa23-313f8a3976b0.jpg?im_w=480',
                            where: '수영구의 공동 주택 전체',
                            explain: '바다 1분, 오션뷰, 영화 감상까지'
                        },
                        {
                            image: 'https://a0.muscache.com/im/pictures/miso/Hosting-50331547/original/c9310791-aeee-4ae3-91da-c0c404bdb5d9.jpeg?im_w=480',
                            where: 'Gwangan 2(i)-dong, Suyeong-gu의 공동 주택 전체',
                            explain: '광안대교 오션뷰♥테라스♥코로나 방역소독!!'
                        }];
                        i = i + 1;
                        if (i > 7) i = 0;
                        return (
                            <SpreadRoom key={index} onClick={goDetail} className={item.stayId}>
                                <img src={rooms[i].image} alt="around" className={item.stayId} />
                                <div style={{ width: '100%' }} className={item.stayId}>
                                    <div className={item.stayId} style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                                        <div className={item.stayId}>
                                            <p className={item.stayId} style={{ fontSize: '1.15vw', color: '#959595' }}>{`${item.address}의 ${item.stayType.replace("'", '').replace("'", '')}`}</p>
                                            <p className={item.stayId} style={{ marginTop: '1vw', fontSize: '1.4vw', width: '25vw', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', height: '2vw' }}>{item.stayName}</p>
                                        </div>
                                        <i className="far fa-heart" style={{ fontSize: '2.2vw' }}></i>
                                    </div>
                                    <div className={item.stayId} style={{ width: '2vw', border: '1px solid lightgrey', marginTop: '1vw' }}></div>
                                    <div className={item.stayId} style={{ marginTop: '1vw', fontSize: '1.1vw', color: '#959595' }}>
                                        <p className={item.stayId} >{`최대 인원 ${item.maxGuests}명 · 침실 ${item.bedRoomCount}개 · 침대 ${item.bedCount}개 · 욕실 ${item.showerRoomCount}개`}</p>
                                        <p className={item.stayId} >에어컨 · 주방 · 무선 인터넷 · 헤어 드라이어</p>
                                    </div>
                                    <div className={item.stayId} style={{ display: 'flex', fontSize: '1.1vw', marginTop: '6vw', alignItems: 'center' }}>
                                        <i className="fas fa-star" style={{ color: 'red', marginRight: '0.3vw' }}></i>
                                        <p className={item.stayId} style={{ marginRight: '0.2vw' }}>{item.avgRate === null ? '0.0' : item.avgRate}</p>
                                        <p className={item.stayId} style={{ color: '#b5b5b5' }}>{`(후기 ${item.cntRate === null ? '0' : item.cntRate}개)`}</p>
                                    </div>
                                </div>
                            </SpreadRoom>
                        );
                    }
                }))
            }
        }
        catch (error) {
            console.log(error);
        }
    }, [searchData]);

    const goDetail = (e) => {
        dispatch(SearchIdAction({
            searchId: e.target.className
        }))
        history.push('/detail');
    };

    return (
        <>
            {spread}
        </>
    );
}

const SpreadRoom = styled.div`
    padding : 1.7vw 0;
    border-bottom : 1px solid #d5d5d5;
    display : flex;
    cursor: pointer;

    img {
        width : 24vw;
        height : 15.5vw;
        border-radius : 10px;
        margin-right : 1vw;
    }
`;

export default AroundRoom