import styled from "styled-components"

function Body() {

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
        <>
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
                                떠나고 싶을 때 에어비앤비가 도와드립니다!
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
        </>
    );
}

const BodySection = styled.div`
    width : 88%;
    margin: 0 auto;
    margin-top : 5vw;
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
    margin-bottom : 5vw;
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

export default Body