import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MoreDetail from './MoreDetail';
import StickyDate from './StickyDate';

function Body() {
    return (
        <DetailBody>
            <div className="inner">
                <p style={{ fontSize: '2vw', fontWeight: '600' }}>❥조이랜드(JOY:LAND)_도심속의 정원✿#오픈이벤트#광안리도보2분#갬성숙소#매일소독❥</p>
                <div style={{ display: 'flex', marginTop: '1.3vw', fontSize: '1.15vw' }}>
                    <i className="fas fa-star" style={{ color: 'red', marginRight: '0.3vw', fontSize: '1vw' }}></i>
                    <p style={{ color: '#959595' }}><span style={{ color: 'black' }}>5.0</span> <Link to="#">(후기 5개)</Link> · <Link to="#">Millak-dong, suyeong-gu, 부산, 한국</Link></p>
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
                    <MoreDetail />
                    <StickyDate />
                </div>
                <BodyContent>
                    <div style={{ display: 'flex', fontSize: '1.6vw', fontWeight: '500', alignItems: 'center' }}>
                        <i className="fas fa-star" style={{ color: 'red', marginRight: '0.7vw', fontSize: '1.5vw' }}></i>
                        <p style={{ marginRight: '0.2vw' }}>4.97 · </p>
                        <p>(후기 161개)</p>
                    </div>
                </BodyContent>
                <BodyContent></BodyContent>
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
`;

const BodyContent = styled.div`
    padding-top : 4vw;
    border-bottom : 1.2px solid lightgray;
    width: 100%;
    padding-bottom : 4vw;
`;

export default Body;