import { Link } from 'react-router-dom';
import styled from 'styled-components';

function StickyDate() {
    return (
        <StickySection>
            <StickySelect>
                <div className="inner">
                    <p style={{ wordBreak: 'keep-all', fontSize: '1.8vw', fontWeight: '400', lineHeight: '2.2vw' }}>요금을 확인하려면 날짜를 입력하세요.</p>
                    <div style={{ display: 'flex', fontSize: '1.1vw', marginTop: '0.7vw', alignItems: 'center' }}>
                        <i className="fas fa-star" style={{ color: 'red', marginRight: '0.3vw', fontSize: '1.1vw' }}></i>
                        <p style={{ marginRight: '0.2vw' }}>4.97</p>
                        <p style={{ color: '#b5b5b5' }}>(후기 161개)</p>
                    </div>
                    <div style={{ marginTop: '2vw', width: '100%' }}>
                        <div style={{ display: 'flex' }}>
                            <div style={{ border: '1px solid lightgray', width: '50%', height: '4.5vw', borderTopLeftRadius: '5px' }}>
                                hih
                            </div>
                            <div style={{ border: '1px solid lightgray', width: '50%', height: '4.5vw', borderTopRightRadius: '5px' }}>
                                hihi
                            </div>
                        </div>
                        <div style={{ border: '1px solid lightgray', width: '99.2%', height: '4.5vw', borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px' }}>
                            hihi
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '3.5vw', background: 'linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)', borderRadius: '7px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1.4vw' }}>예약 가능 여부 보기</div>
                </div>
                <div style={{ display: 'flex', margin: '0 auto', width: '10vw', color: 'gray', fontSize: '1.15vw', paddingTop: '2vw' }}>
                    <i className="fas fa-flag" style={{ marginRight: '2vw' }}></i>
                    <Link to="#">숙소 신고하기</Link>
                </div>
            </StickySelect>
        </StickySection>
    );
}

const StickySection = styled.div`
    width : 40%;
    padding-top : 5vw;
    padding-bottom : 5vw;
`;

const StickySelect = styled.div`
    position : sticky;
    top : 10vw;

    .inner {
        width : 28vw;
        height : 27vw;
        box-sizing : border-box;
        padding : 2.5vw;
        border : 1px solid lightgray;
        box-shadow: 0px 16px 32px rgb(0 0 0 / 15%), 0px 3px 8px rgb(0 0 0 / 10%) !important;
        border-radius  : 15px;
    }
`;

export default StickyDate