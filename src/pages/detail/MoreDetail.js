import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import { classes } from 'istanbul-lib-coverage';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

function MoreDetail(props) {

    const [value, onChange] = useState(new Date());

    return (
        <MoreSection>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', paddingBottom: '1.8vw', borderBottom: '1.2px solid lightgray' }}>
                <div>
                    <p style={{ fontSize: '1.8vw', fontWeight: '500' }}>{`Song Myo님이 호스팅하는 ${props.data.stayType.replace("'", '').replace("'", '')}`}</p>
                    <p style={{ marginTop: '1vw', color: 'grey' }}>{`최대 인원 ${props.data.maxGuests}명 · 침실 ${props.data.bedRoomCount}개 · 침대 ${props.data.bedCount}개 · 욕실 ${props.data.showerRoomCount}개`}</p>
                </div>
                <img className="propfile" src="https://a0.muscache.com/im/pictures/user/e9722c98-aef1-4421-8b36-fefbe749a986.jpg?im_w=240" alt="profile" />
            </div>
            <div className="explain">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2.5vw' }}>
                    <i className="fas fa-home"></i>
                    <div style={{ marginLeft: '1.5vw', fontSize: '1.3vw' }}>
                        <p style={{ fontWeight: '500' }}>{props.data.stayType.replace("'", '').replace("'", '')}</p>
                        <p style={{ color: 'gray', fontSize: '1.1vw', marginTop: '0.7vw' }}>아파트 전체를 단독으로 사용하시게 됩니다.</p>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2.5vw' }}>
                    <i className="fas fa-hand-sparkles"></i>
                    <div style={{ marginLeft: '1.5vw', fontSize: '1.3vw' }}>
                        <p style={{ fontWeight: '500' }}>청결 강화</p>
                        <p style={{ color: 'gray', fontSize: '1.1vw', marginTop: '0.7vw' }}>에어비앤비의 강화된 5단계 청소 절차를 준수하겠다고 동의한 호스트입니다.<Link to="#" style={{ color: 'black' }}>더보기</Link></p>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2.5vw' }}>
                    <i className="fas fa-door-open"></i>
                    <div style={{ marginLeft: '1.5vw', fontSize: '1.3vw' }}>
                        <p style={{ fontWeight: '500' }}>셀프 체크인</p>
                        <p style={{ color: 'gray', fontSize: '1.1vw', marginTop: '0.7vw' }}>키패드를 이용해 체크인 하세요.</p>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2.5vw' }}>
                    <i className="fas fa-map-marker-alt"></i>
                    <div style={{ marginLeft: '1.5vw', fontSize: '1.3vw' }}>
                        <p style={{ fontWeight: '500' }}>휼룡한 숙소 위치</p>
                        <p style={{ color: 'gray', fontSize: '1.1vw', marginTop: '0.7vw' }}>최근 숙박한 게스트 중 100%가 위치에 별점 5점을 준 숙소입니다.</p>
                    </div>
                </div>
            </div>
            <div className="hostSpeak">
                <p style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', width: '100%', height: '13.5vw', marginBottom: '1.5vw', lineHeight: '2.4vw' }}>
                    안녕하세요<br />
                    호스트 ‘조이랜드’ 입니다 :D<br /><br />
                    도심속에 정원 "city of Garden"에 오신것을 환영합니다 🪴<br /><br />
                    저희숙소는,<br /><br />
                    1️⃣ 광안리바닷가와 도보 2분거리에 위치<br /><br />
                    2️⃣ 편안하고 안락한 분위기의 정원을 테마로한 감성숙소<br /><br />
                    3️⃣ 숙소 내 공기청정기가 배치<br /><br />
                    4️⃣ 게스트가 직접 매일 침구류 교체, 숙소 청소로 청결함 유지 / 매일 방역,소독도 진행중<br /><br />
                    📌 청소시간은 환기, 소독이후 진행되므로 총2시간정도 소요됩니다.게스트분들은 체크인/ 체크아웃시간을 꼭 엄수해주셔야해요 😜<br /><br />
                </p>
                <Link to="#" style={{ marginTop: '2vw', fontSize: '1.3vw', color: 'inherit' }}>더보기 <i className="fas fa-chevron-right"></i>  </Link>
            </div>
            <MoreContainer>
                <p style={{ fontSize: '1.7vw', fontWeight: '500' }}>숙방 장소</p>
                <div style={{ marginTop: '2vw', width: '16vw', height: '15.5vw', borderRadius: '15px', border: '1px solid lightgray', boxSizing: 'border-box', padding: '2.3vw' }}>
                    <div style={{ display: 'flex', fontSize: '2vw', flexWrap: 'wrap' }} className="bed">
                        <i className="fas fa-bed"></i>
                        <i className="fas fa-bed"></i>
                        <i className="fas fa-bed"></i>
                        <i className="fas fa-bed"></i>
                        <i className="fas fa-bed"></i>
                    </div>
                    <div style={{ marginTop: '1.3vw' }}>
                        <p style={{ fontSize: '1.3vw', fontWeight: '600' }}>1번 침실</p>
                        <p style={{ wordBreak: 'keep-all', fontSize: '1.2vw', marginTop: '1vw', fontWeight: '300' }}>퀸사이즈 침대 1개, 요와 이불 4개</p>
                    </div>
                </div>
            </MoreContainer>
            <MoreContainer>
                <p style={{ fontSize: '1.7vw', fontWeight: '500' }}>숙소 편의 시설</p>
                <div style={{ marginTop: '2.3vw', display: 'flex', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', width: '25vw', marginBottom: '1.9vw' }}>
                        <i className="fas fa-water" style={{ fontSize: '1.6vw', marginRight: '1vw' }}></i>
                        <p>해변과 인접</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', width: '25vw', marginBottom: '1.9vw' }}>
                        <i className="fas fa-utensils" style={{ fontSize: '1.6vw', marginRight: '1vw' }}></i>
                        <p>주방</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', width: '25vw', marginBottom: '1.9vw' }}>
                        <i className="fas fa-wifi" style={{ fontSize: '1.6vw', marginRight: '1vw' }}></i>
                        <p>무선 인터넷</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', width: '25vw', marginBottom: '1.9vw' }}>
                        <i className="fas fa-tv" style={{ fontSize: '1.6vw', marginRight: '1vw' }}></i>
                        <p>TV</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', width: '25vw', marginBottom: '1.9vw' }}>
                        <i className="fas fa-dungeon" style={{ fontSize: '1.6vw', marginRight: '1vw' }}></i>
                        <p>엘리베이터</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', width: '25vw', marginBottom: '1.9vw' }}>
                        <i className="fas fa-wallet" style={{ fontSize: '1.6vw', marginRight: '1vw' }}></i>
                        <p>세탁기</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', width: '25vw', marginBottom: '1.9vw' }}>
                        <i className="fas fa-wind" style={{ fontSize: '1.6vw', marginRight: '1vw' }}></i>
                        <p>에어컨</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', width: '25vw', marginBottom: '1.9vw' }}>
                        <i className="fas fa-suitcase-rolling" style={{ fontSize: '1.6vw', marginRight: '1vw' }}></i>
                        <p>여행용 가방 보관 가능</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', width: '25vw', marginBottom: '1.9vw' }}>
                        <i className="fas fa-fan" style={{ fontSize: '1.6vw', marginRight: '1vw' }}></i>
                        <p>헤어드라이어</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', width: '25vw', marginBottom: '1.9vw' }}>
                        <i className="fas fa-radiation-alt" style={{ fontSize: '1.6vw', marginRight: '1vw' }}></i>
                        <p style={{ textDecoration: 'line-through' }}>일산화탄소 경보기</p>
                    </div>
                </div>
                <div style={{ width: '18vw', height: '4vw', border: '1.9px solid black', marginTop: '2vw', borderRadius: '7px', padding: '1vw', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>편의시설 44개 모두 보기</div>
            </MoreContainer>
            <MoreContainer style={{ border: 'none' }}>
                <p style={{ fontSize: '1.7vw', fontWeight: '500' }}>체크인 날짜를 선택해 주세요.</p>
                <p style={{ marginTop: '1vw', fontSize: '1.17vw', color: '#959595' }}>여행 날짜를 입력하여 정확한 요금을 확인하세요.</p>
                <div style={{ marginTop: '2.5vw', display: 'flex' }}>
                    <Calendar className={classes.calendar} value={value} onChange={onChange} border='none' />
                    <Calendar className={classes.calendar} value={value} onChange={onChange} />
                </div>
                <div style={{ display: 'flex', marginTop: '1vw', justifyContent: 'space-between', width: '94%' }}>
                    <i className="far fa-keyboard" style={{ fontSize: '1.7vw' }}></i>
                    <Link to='#' style={{ fontSize: '1.2vw' }}>날짜 지우기</Link>
                </div>
            </MoreContainer>
        </MoreSection>
    );
}

const MoreSection = styled.div`
    width: 60%;
    padding-top : 5vw;
    padding-right : 5vw;

    img.propfile {
        width : 4.5vw;
        height : 4.5vw;
        border-radius : 50%;
    }

    .explain {
        padding-top : 3vw;
        border-bottom : 1.2px solid lightgray;
        padding-bottom : 1vw;
    }

    .explain i {
        font-size : 2vw;
        width : 2vw;
        text-align: center;
    }

    .hostSpeak {
        padding-top : 4vw;
        border-bottom : 1.2px solid lightgray;
        padding-bottom : 4vw;
    }
`;

const MoreContainer = styled.div`
    padding-top : 4vw;
    border-bottom : 1.2px solid lightgray;
    padding-bottom : 4vw;

    .bed i {
        font-size : 1.7vw;
        margin : 0.3vw;
    }
`;

export default MoreDetail