import styled from 'styled-components';
import { Route } from 'react-router';
import { useHistory } from 'react-router';
import { useState } from 'react';
import { useRef } from 'react';

function Question() {

    const history = useHistory();
    const [stayName, setStayName] = useState('');
    const [address, setAddress] = useState('');
    const [guestNum, setGuestNum] = useState('');
    const [stayInfo, setStayInfo] = useState('');
    const [price, setPrice] = useState('');
    const [stayType, setStayType] = useState('');
    const [bedCount, setBedCount] = useState('');
    const [bedroomCount, setBedroomCount] = useState('');
    const [showerCount, setShowerCount] = useState('');
    const [petOk, setPetOk] = useState('');
    const [smokingOk, setSmokingOk] = useState('');
    const [cancelPos, setCancelPos] = useState('');
    const pet = useRef();
    const smoking = useRef();
    const cancel = useRef();

    const goNext = () => {
        history.push('/hosting/add/1');
    };

    const goPrev = () => {
        history.push('/hosting/add');
    };

    const goPrev1 = () => {
        history.push('/hosting/add/1');
    }

    const goPicture = () => {
        if (pet.current.checked === true) {
            setPetOk(pet.current.value);
        }
        else {
            setPetOk('0');
        }
        if (smoking.current.checked === true) {
            setSmokingOk(smoking.current.value);
        }
        else {
            setSmokingOk('0');
        }
        if (cancel.current.checked === true) {
            setCancelPos(cancel.current.value);
        }
        else {
            setCancelPos('0');
        }
        history.push('/hosting/add/2');
    };

    const goHost = () => {
        console.log(stayName, address, guestNum, stayInfo, price, stayType, bedCount, bedroomCount, showerCount, petOk, smokingOk, cancelPos);
        history.push('/hosting');
    }

    const whatName = (e) => {
        setStayName(e.target.value);
    }

    const whatAddress = (e) => {
        setAddress(e.target.value);
    }

    const whatMax = (e) => {
        setGuestNum(e.target.value);
    };

    const whatInfo = (e) => {
        setStayInfo(e.target.value);
    };

    const whatPrice = (e) => {
        setPrice(e.target.value);
    };

    const whatType = (e) => {
        setStayType(e.target.value);
    };

    const whatBedCount = (e) => {
        setBedCount(e.target.value);
    };

    const whatBroomCount = (e) => {
        setBedroomCount(e.target.value);
    };

    const whatShower = (e) => {
        setShowerCount(e.target.value);
    };

    return (
        <QuestionContent>
            <div className="subBtn">
                <div>저장 및 나가기</div>
                <div style={{ marginRight: '1vw' }}>도움말</div>
            </div>
            <Route path="/hosting/add" exact>
                <div className="inputField">
                    <input type="text" id="stayname" onChange={whatName} placeholder="숙소 이름" />
                    <input type="text" id="address" onChange={whatAddress} placeholder="숙소 위치" />
                    <input type="text" id="maxguestnum" onChange={whatMax} placeholder="최대 수용 인원" />
                    <input type="text" id="stayInfo" onChange={whatInfo} placeholder="숙소 상세 설명" />
                    <input type="text" id="price" onChange={whatPrice} placeholder="1박 당 가격" />
                    <input type="text" id="staytype" onChange={whatType} placeholder="집 전체" value="공간 전체" disabled />
                </div>
                <div className="mainBtn" style={{ borderTop: '1px solid lightgray', padding: '2vw 2vw', display: 'flex', justifyContent: 'space-between' }}>
                    <div>뒤로</div>
                    <div onClick={goNext}>다음</div>
                </div>
            </Route>
            <Route path="/hosting/add/1" exact>
                <div className="inputField">
                    <input type="text" id="bedcount" onChange={whatBedCount} placeholder="침대 갯수" />
                    <input type="text" id="bedroomcount" onChange={whatBroomCount} placeholder="침실 갯수" />
                    <input type="text" id="showercount" onChange={whatShower} placeholder="샤워장 갯수" />
                    <div className="check">
                        <label htmlFor="petok">애완동물 가능 유무</label>
                        <input type="checkbox" ref={pet} id="petok" value="1" />
                    </div>
                    <div className="check">
                        <label htmlFor="smokingok">실내흡연 가능 유무</label>
                        <input type="checkbox" ref={smoking} id="smokingok" value="1" />
                    </div>
                    <div className="check">
                        <label htmlFor="cancelpos">예약취소 가능 유무</label>
                        <input type="checkbox" ref={cancel} id="cancelpos" value="1" />
                    </div>
                </div>
                <div className="mainBtn" style={{ borderTop: '1px solid lightgray', padding: '2vw 2vw', display: 'flex', justifyContent: 'space-between' }}>
                    <div onClick={goPrev}>뒤로</div>
                    <div onClick={goPicture}>다음</div>
                </div>
            </Route>
            <Route path="/hosting/add/2" exact>
                <p style={{ fontSize: '2vw', fontWeight: '600', width: '80%', margin: '0 auto', padding: '2vw 0' }}>3개의 이미지를 넣어주세요!</p>
                <div className="inputField">
                    <input type="file" id="image1" />
                    <input type="file" id="image1" />
                    <input type="file" id="image1" />
                </div>
                <div className="mainBtn" style={{ borderTop: '1px solid lightgray', padding: '2vw 2vw', display: 'flex', justifyContent: 'space-between' }}>
                    <div onClick={goPrev1}>뒤로</div>
                    <div onClick={goHost}>등록</div>
                </div>
            </Route>
        </QuestionContent>
    );
};

const QuestionContent = styled.div`
    width : 100%;
    height : 100vh;
    position : relative;

    .subBtn {
        padding : 2.5vw 5vw;
        width : 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row-reverse;
        align-items : center;
    }

    .subBtn > div {
        font-size : .95vw;
        font-weight : 500;
        background-color : #eeeeee;
        padding : .7vw 1vw;
        border-radius : 15px;
    }

    .inputField {
        width : 75%;
        margin : 0 auto;
    }

    .inputField > input[type='text'] {
        width : 100%;
        height : 5.3vw;
        border-radius : 10px;
        font-size : 1.5vw;
        padding-left : 1vw;
        color : black;
        margin-bottom : 1vw;
    }

    .inputField > input[type='file'] {
        font-size : 1.5vw;
        margin-bottom : 1vw;
    }

    .inputField > input:focus {
        border : 2px solid purple;
        outline : none;
    }

    .inputField > input:disabled {
        border : 2px solid black;
        outline : none;
    }

    .mainBtn {
        position : absolute;
        bottom : 0;
        width : 100%;
        box-sizing : border-box;
    }

    .mainBtn > div {
        background-color : black;
        color : white;
        padding : 1.5vw 2vw;
        border-radius : 7px;
        cursor : pointer;
    }

    .check {
        width :100%;
        padding-right : .3vw;
        padding-left: 1vw;
        height : 5.3vw;
        border-radius : 10px;
        font-size : 1.5vw;
        border : 2px solid black;
        margin-bottom : 1vw;
        display : flex;
        justify-content : space-between;
        align-items : center;
    }

    .check input {
        width : 10vw;
        heigth : 3vw;
    }
`;

export default Question
