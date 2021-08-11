import styled from 'styled-components';
import { useHistory } from 'react-router';

function Body() {

    const history = useHistory();

    const updatedata = [{
        image: 'https://a0.muscache.com/im/pictures/fff5a5e8-3ab3-4970-a5fc-c51e301a9acb.jpg?im_w=720',
        sub: '호스팅 대금을 수령하는 방법'
    },
    {
        image: 'https://a0.muscache.com/im/pictures/1caeb016-a2ad-4c00-86a3-4cafc77431e0.jpg?im_w=720',
        sub: '멋진 숙소 설명 작성하기'
    },
    {
        image: 'https://a0.muscache.com/im/pictures/57d04174-24ab-4a42-a1d7-989d5b1dda47.jpg?im_w=720',
        sub: '요금 책정 전략 수집'
    },
    {
        image: 'https://a0.muscache.com/im/pictures/c8c24577-9079-4af8-b64b-200feb855d33.jpg?im_w=720',
        sub: '가이드북을 통해 게스트에게 유용한 현지 정보 알려주기'
    }]

    const updateCompo = updatedata.map((item, index) => (
        <div key={index} style={{ width: '21vw', marginRight: '1.5vw', height: '24.5vw', borderRadius: '10px', backgroundColor: '#222222' }}>
            <img style={{ width: '100%', height: '65%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} src={item.image} alt="hosting" />
            <div style={{ padding: '1.8vw' }}>
                <p style={{ fontSize: '1vw', marginBottom: '0.7vw' }}>게시글</p>
                <p style={{ wordBreak: 'keep-all', lineHeight: '1.8vw' }}>{item.sub}</p>
            </div>
        </div>
    ));

    const goAddHouse = () => {
        history.push('/hosting/add');
    };

    return (
        <BodyContainer>
            <div className="today">
                <div className="inner">
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}>
                        <div>
                            <p style={{ fontSize: '2.8vw', fontWeight: '500', marginBottom: '2.8vw' }}>
                                투데이
                            </p>
                            <p>
                                숙소 등록 절차가 거의 완료되었습니다! 숙소 페이지에 누락된 세부정보 몇 가지를 입력해주세요.
                            </p>
                        </div>
                        <div onClick={goAddHouse} style={{ cursor: 'pointer', backgroundColor: 'white', borderRadius: '10px', width: '11vw', height: '2.8vw', color: 'black', fontSize: '1.15vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            숙소 등록 완료하기
                        </div>
                    </div>
                </div>
            </div>
            <div className="reserve">
                <div className="inner">
                    <p style={{ fontSize: '2.3vw', fontWeight: '500', marginBottom: '1vw' }}>예약</p>
                    <p style={{ width: '14vw', lineHeight: '1.7vw', color: 'gray' }}>게스트가 숙소를 예약하면 여기에 표시됩니다.</p>
                </div>
            </div>
            <div className="update">
                <div className="inner" style={{ color: 'white' }}>
                    <p style={{ fontSize: '2.3vw', fontWeight: '500', marginBottom: '2.2vw' }}>
                        호스팅 관련 팁과 업데이트
                    </p>
                    <div style={{ display: 'flex' }}>
                        {updateCompo}
                    </div>
                </div>
            </div>
        </BodyContainer>
    );
};

const BodyContainer = styled.div`
    width : 100%;
    height : 100%;

    .today {
        width : 100%;
        height : 18.5vw;
        background-image : url('data:image/webp;base64,UklGRoQCAABXRUJQVlA4WAoAAAAgAAAAHQAAHQAASUNDUAwCAAAAAAIMbGNtcwIQAABtbnRyUkdCIFhZWiAH3AABABkAAwApADlhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAAF5jcHJ0AAABXAAAAAt3dHB0AAABaAAAABRia3B0AAABfAAAABRyWFlaAAABkAAAABRnWFlaAAABpAAAABRiWFlaAAABuAAAABRyVFJDAAABzAAAAEBnVFJDAAABzAAAAEBiVFJDAAABzAAAAEBkZXNjAAAAAAAAAANjMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAEZCAABYWVogAAAAAAAA9tYAAQAAAADTLVhZWiAAAAAAAAADFgAAAzMAAAKkWFlaIAAAAAAAAG+iAAA49QAAA5BYWVogAAAAAAAAYpkAALeFAAAY2lhZWiAAAAAAAAAkoAAAD4QAALbPY3VydgAAAAAAAAAaAAAAywHJA2MFkghrC/YQPxVRGzQh8SmQMhg7kkYFUXdd7WtwegWJsZp8rGm/fdPD6TD//1ZQOCBSAAAAUAMAnQEqHgAeAD7ZYKpOtiWooygKqsAbCWQAnTLfAiGYXfAA/uw/rDUG/ySry930W5TklUCdPGwZvhShkxmlA5XTMUKtCBVuol3YS6MrvY4AAA==');
        background-size : cover;
        background-position : center;
    }

    .reserve {
        width : 100%;
        height : 35vw;
        background-image : url('https://a0.muscache.com/im/pictures/cd29ad57-8934-4075-9d5c-6578863fb1dd.jpg?im_w=2560');
        background-size : cover;
        background-position : center;
    }

    .update {
        width : 100%;
        background-color : black;
    }

    .inner {
        width : 87%;
        margin: 0 auto;
        padding : 5.5vw 0;
    }
`;

export default Body