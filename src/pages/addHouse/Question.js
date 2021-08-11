import styled from 'styled-components';
import { Route } from 'react-router';
import { useHistory } from 'react-router';

function Question() {

    const history = useHistory();

    const goNext = () => {
        history.push('/hosting/add/1');
    };

    const goPrev = () => {
        history.push('/hosting/add');
    };

    return (
        <QuestionContent>
            <div className="subBtn">
                <div>저장 및 나가기</div>
                <div style={{ marginRight: '1vw' }}>도움말</div>
            </div>
            <Route path="/hosting/add" exact>
                <div className="inputField">
                    <input type="text" id="stayname" placeholder="숙소 이름" />
                    <input type="text" id="address" placeholder="숙소 위치" />
                    <input type="text" id="maxguestnum" placeholder="최대 수용 인원" />
                    <input type="text" id="stayInfo" placeholder="숙소 상세 설명" />
                    <input type="text" id="price" placeholder="1박 당 가격" />
                    <input type="text" id="staytype" placeholder="집 전체" value="공간 전체" disabled />
                </div>
                <div className="mainBtn" style={{ borderTop: '1px solid lightgray', padding: '2vw 2vw', display: 'flex', justifyContent: 'space-between' }}>
                    <div>뒤로</div>
                    <div onClick={goNext}>다음</div>
                </div>
            </Route>
            <Route path="/hosting/add/1" exact>
                <div className="inputField">
                    <input type="text" id="bedcount" placeholder="침대 갯수" />
                    <input type="text" id="bedroomcount" placeholder="침실 갯수" />
                    <input type="text" id="showercount" placeholder="샤워장 갯수" />
                </div>
                <div className="mainBtn" style={{ borderTop: '1px solid lightgray', padding: '2vw 2vw', display: 'flex', justifyContent: 'space-between' }}>
                    <div onClick={goPrev}>뒤로</div>
                    <div>등록</div>
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
`;

export default Question
