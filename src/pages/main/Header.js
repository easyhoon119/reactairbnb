import styled from "styled-components";
import NavBar from '../../components/common/NavBar';

function Header() {
    return (
        <>
            <MainonPicture >
                <NavBar />
                <SearchForm >
                    <SebuForm action='#' width="32%" borderWidth="100%" pLeft="25px" ppLeft="31px">
                        <input type="text" id="city" placeholder="어디로 여행가세요?" autoComplete="off" style={{ border: 'none' }} required />
                        <label htmlFor="city">위치</label>
                    </SebuForm>
                    <SebuForm action='#' width="23%" borderWidth="95%" pLeft="17px" ppLeft="29px">
                        <input type="text" id="checkin" placeholder="날짜 입력" autoComplete="off" required />
                        <label htmlFor="checkin">체크인</label>
                    </SebuForm>
                    <SebuForm action='#' width="23%" borderWidth="95%" pLeft="17px" ppLeft="29px">
                        <input type="text" id="checkout" placeholder="날짜 입력" autoComplete="off" required />
                        <label htmlFor="checkout">체크아웃</label>
                    </SebuForm>
                    <SebuForm action='#' width="24%" borderWidth="95%" pLeft="17px" ppLeft="29px">
                        <input type="text" id="person" placeholder="게스트 추가" autoComplete="off" required style={{ borderRight: 'none' }} />
                        <label htmlFor="person">인원</label>
                    </SebuForm>
                    <SearchIcon>
                        <i className="fas fa-search"></i>
                    </SearchIcon>
                </SearchForm>
                <div style={{ position: 'absolute', top: '18vw', left: '7vw' }}>
                    <MainSpan>
                        <p>올림픽/패럴림픽 출전 선수와 함께하는 온라인&nbsp;체험</p>
                    </MainSpan>
                    <SpanButton>지금 둘러보기</SpanButton>
                </div>
            </MainonPicture>
        </>
    );
}

const MainonPicture = styled.div`
    width: 100%;
    height: 47.5vw;
    background-image: url("https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=1920");
    background-position: center;
    background-size: cover;
    position:relative;
`;

const SearchForm = styled.div`
    width : 66%;
    height: 65px;
    box-sizing : border-box;
    background-color : white;
    margin: 0 auto;
    border-radius: 30px;
    display : flex;
    position : relative;
    align-items : center;
    box-shadow: 0px 16px 32px rgb(0 0 0 / 15%), 0px 3px 8px rgb(0 0 0 / 10%) !important;
`;

const SearchIcon = styled.div`
    width : 50px;
    height : 50px;
    background-color : #FF385C;
    border-radius : 50%;
    position: absolute;
    right : 8px;
    display: flex;
    font-size : 16px;
    justify-content : center;
    align-items : center;
    color : white;
`;

const SebuForm = styled.form`
    display: flex;
    width: ${props => props.width};
    height : 100%;
    justify-content : center;
    align-items: center;
    flex-direction : column;
    box-sizing: border-box;
    position: relative;
    border-radius : 30px;
    padding : 0px ${props => props.pLeft};

    &:hover {
        background-color: #dedede;
    }

    &:hover input{
        background-color: #dedede;
    }

    input[type='text'] {
        width:${props => props.borderWidth};
        height:20%;
        color: #595959;
        margin-top: 0px;
        border: none;
        font-size : 15px;
        border-left : 1px solid #dedede;
        display: flex;
        padding-top: 20px;
        padding-left : 17px;
        outline-style: none;
    }

    label {
        position: absolute;
        bottom: 0px;
        left: ${props => props.ppLeft};
        width:100%;
        font-size : 12px;
        font-weight : 700;
        height:75%;
    }
`;

const MainSpan = styled.div`
    width:26vw;
    text-align : start;
    word-break: keep-all;
    line-height : 4.5vw;
    font-size: 3.8vw;
    color: white;
    font-weight : 700;
`;

const SpanButton = styled.div`
    margin-top : 1vw;
    width : 9vw;
    height : 3vw;
    font-weight : 600;
    padding : 0.3vw 1.3vw;
    background-color : white;
    font-size : 1.1vw;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius : 5px;
    box-sizing : border-box;
`;

export default Header