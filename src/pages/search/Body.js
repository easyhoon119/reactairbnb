import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DisplaySearch from './DisplaySearch';
import AroundRoom from './AroundRoom';
import GoogleMap from './GoogleMap';

function Body() {

    const nearPicture = [
        {
            name: '서울시',
            image: 'https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720',
            dist: '차로 1시간 거리'
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
            name: '대구시',
            image: 'https://a0.muscache.com/im/pictures/76e5f1c6-a788-418c-a28b-f0ee29cffd41.jpg?im_q=medq&im_w=720',
            dist: '차로 3.5시간 거리'
        },
        {
            name: '고성군',
            image: 'https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?im_q=medq&im_w=720',
            dist: '차로 3시간 거리'
        }];

    const otherTour = nearPicture.map((item, index) => (
        <div style={{ display: 'flex', alignItems: 'center', width: '16vw', margin: '0.8vw' }} key={index}>
            <img src={item.image} alt="other" />
            <p>{item.name}</p>
        </div>
    ));

    return (
        <SearchBody>
            <div className="content">
                <div className="inner">
                    <p>300개 이상의 숙소</p>
                    <p style={{ marginTop: '1vw', fontSize: '2.5vw', fontWeight: '700' }}>지도에서 선택한 지역의 숙소</p>
                    <div className="selectButton">
                        <SButton>취소 가능</SButton>
                        <SButton>숙소 유형</SButton>
                        <SButton>요금</SButton>
                        <SButton>즉시 예약</SButton>
                        <SButton>필터 추가하기</SButton>
                    </div>
                    <p style={{ marginTop: '3vw', fontSize: '1.15vw', color: '#6d6b6b' }}>여행하기 전에 코로나19 관련 여행 제한 사항을 확인하세요. <Link to="#" style={{ color: 'inherit' }}>자세히 알아보기</Link></p>
                    <div className="display">
                        <DisplaySearch top="2" where="부산" />
                        <DisplaySearch top="4.5" where="오사카" />
                        <DisplaySearch top="4.5" where="전주시" />
                    </div>
                    <div className="other" style={{ marginTop: '6vw' }}>
                        <p style={{ fontSize: '1.8vw' }}>기타 인기 여행지</p>
                        <div style={{ display: 'flex', marginTop: '1.3vw', flexWrap: 'wrap' }}>
                            {otherTour}
                        </div>
                    </div>
                    <div className="roomaround" style={{ marginTop: '6vw', marginBottom: '8vw' }}>
                        <p style={{ fontSize: '1.8vw' }}>300개 이상의 숙소 둘러보기</p>
                        <AroundRoom />
                    </div>
                    <div className="paging" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '70%', margin: '0 auto' }}>
                        <i className="fas fa-chevron-left"></i>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <p style={{ width: '100%', textAlign: 'center', marginTop: '2vw' }}>숙소 300개 이상 중 1 - 20</p>
                    <p style={{ width: '100%', textAlign: 'center', marginTop: '2vw', fontSize: '1vw', color: '#959595', paddingBottom: '2vw' }}>전체 요금을 보려면 날짜를 입력하세요. 추가 요금이 적용되고 세금이 추가될 수 있습니다.</p>
                </div>
            </div>
            <GoogleMap />
        </SearchBody>
    );
}

const SearchBody = styled.div`
    display: flex;
    width : 100%;
    height : 90vh;

    .content {
        width: 60%;
        padding-top : 4vw;
        overflow : scroll;
        -ms-overflow-style : none;
    }

    .content::-webkit-scrollbar {
        display : none;
    }

    .content .inner {
        width : 90%;
        height : 100%;
        margin : 0 auto;
    }

    .map {
        width : 40%;
        height : 10vw;
        overflow: hidden;
    }

    .selectButton {
        display : flex;
        margin-top : 2vw;
    }

    .other img {
        width : 5vw;
        height : 5vw;
        border-radius : 7px;
        margin-right : 1vw;
    }
`;

const SButton = styled.div`
    border-radius : 20px;
    padding : 0.7vw 1.2vw;
    border : 0.5px solid lightgrey;
    font-size : 1.2vw;
    display : flex;
    font-weight : 400;
    color : #545454;
    justify-content : center;
    align-items : center;
    margin-right : 0.7vw;
    cursor : pointer;

    &:hover {
        border : 0.5px solid black;
    }
`;

export default Body