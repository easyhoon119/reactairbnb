import styled from "styled-components";
import logo from '../../image/mainlogo.png';
import logo1 from '../../image/mainlogo1.png';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginBoxAction } from '../../store/actions/loginbox';
import { IsLoggedAction } from '../../store/actions/isLogged';
import { useHistory } from 'react-router';

function NavBar(props) {

    const dispatch = useDispatch();
    const [isProfile, setProfile] = useState(false);
    const isLoginBox = useSelector(state => state.LoginBoxReducer);
    const isLogged = useSelector(state => state.IsLoggedReducer);
    const history = useHistory();

    useEffect(() => {
        console.log(props.name);
    });

    const clickProfile = () => {
        setProfile(!isProfile);
    };

    const goLoginModal = () => {
        document.querySelector('body').classList.add('openlogin');
        console.log(isLoginBox.isLoginBox);
        console.log(isLogged.isLogged);
        dispatch(loginBoxAction({
            isLoginBox: true
        }));
    };

    const goLogout = () => {
        localStorage.clear();
        dispatch(IsLoggedAction({
            isLogged: false
        }));
    };

    const loggedLink = isLogged.isLogged === true ?
        <>
            <div style={{ borderBottom: '1px solid #dedede', paddingTop: '1vw' }}>
                <p>메세지</p>
                <p>알림</p>
                <p>여행</p>
                <p>위시 리스트</p>
            </div>
            <div style={{ borderBottom: '1px solid #dedede', paddingTop: '1vw' }}>
                <p>숙소 관리</p>
                <p>체험 호스팅하기</p>
                <p>호스트 추천하기</p>
                <p>계정</p>
            </div>
            <div style={{ paddingBottom: '1vw', marginTop: '0.5vw' }}>
                <p>도움말</p>
                <p onClick={goLogout}>로그아웃</p>
            </div>
        </>
        :
        <>
            <div style={{ borderBottom: '1px solid #dedede', paddingTop: '1vw' }} onClick={goLoginModal}>
                <p>로그인</p>
                <p>회원 가입</p>
            </div>
            <div style={{ paddingBottom: '1vw', marginTop: '0.5vw' }}>
                <p>숙소 호스팅 되기</p>
                <p>체험 호스팅 하기</p>
                <p>도움말</p>
            </div>
        </>
        ;

    const goHome = () => {
        history.push('/');
    };

    const showLink = isProfile === true ? <ProfileLink>
        {loggedLink}
    </ProfileLink> : '';

    return (
        <>
            <Mainnav name={props.name}>
                <div className="inner">
                    <Mainlogo name={props.name} onClick={goHome}></Mainlogo>
                    {props.name === 'main' ? <div style={{ marginLeft: '100px' }} className="menu">
                        <ul style={{ display: 'flex' }}>
                            <li style={{ marginRight: '30px', padding: '5px' }}>숙소</li>
                            <li style={{ marginRight: '30px', padding: '5px' }}>체험</li>
                            <li style={{ marginRight: '30px', padding: '5px' }}>온라인 체험</li>
                        </ul>
                    </div> :
                        <SearchForm>
                            <SebuForm action='#' width="33%" borderWidth="95%" pLeft="17px" ppLeft="29px">
                                <input type="text" id="checkin" autoComplete="off" required placeholder="지도 표시 지역" style={{ border: 'none' }} />
                            </SebuForm>
                            <SebuForm action='#' width="28%" borderWidth="95%" pLeft="17px" ppLeft="31px">
                                <input type="text" id="checkout" autoComplete="off" required placeholder="날짜 입력" />
                            </SebuForm>
                            <SebuForm action='#' width="39%" borderWidth="95%" pLeft="17px" ppLeft="29px">
                                <input type="text" id="person" placeholder="게스트 추가" autoComplete="off" required style={{ borderRight: 'none' }} />
                            </SebuForm>
                            <SearchIcon>
                                <i className="fas fa-search" ></i>
                            </SearchIcon>
                        </SearchForm>
                    }
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="global">
                        <span style={{ marginRight: '18px', fontSize: '14.5px', cursor: 'pointer' }}>{isLogged.isLogged === true ? '호스트 모드로 전환' : '호스트 되기'}</span>
                        <i className="fas fa-globe" style={{ marginRight: '18px', fontSize: '16px', cursor: 'pointer' }}></i>
                        <ProfileSelect onClick={clickProfile}>
                            <i className="fas fa-bars" style={{ color: 'grey', marginRight: '10px' }}></i>
                            <i className="fas fa-user-circle" style={{ color: 'grey', fontSize: '30px' }}></i>
                            {isLogged.isLogged === true ? <LoggedDot></LoggedDot> : ''}
                            {showLink}
                        </ProfileSelect>
                    </div>
                </div>
            </Mainnav>
        </>
    );
}

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

    input {
        width:${props => props.borderWidth};
        height:50%;
        color: #595959;
        margin-top: 0px;
        border: none;
        font-size : 15px;
        border-left : 1px solid #dedede;
        display: flex;
        padding-top: 0px;
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

const SearchForm = styled.div`
    width : 35%;
    height: 4vw;
    box-sizing : border-box;
    background-color : white;
    margin: 0 auto;
    border-radius: 30px;
    border : 1px solid lightgrey;
    display : flex;
    position : relative;
    align-items : center;
    box-shadow: 0px 16px 32px rgb(0 0 0 / 15%), 0px 3px 8px rgb(0 0 0 / 10%) !important;
`;

const SearchIcon = styled.div`
    width : 3vw;
    height : 3vw;
    background-color : #FF385C;
    border-radius : 50%;
    position: absolute;
    right : 8px;
    display: flex;
    font-size : 16px;
    justify-content : center;
    align-items : center;
    color : white;
    cursor : pointer;
`;

const LoggedDot = styled.div`
    width: 1vw;
    height : 1vw;
    border-radius : 50%;
    border:2px solid white;
    background-color: red;
    position: absolute;
    right : 1vw;
    top : 0vw;
`;


const Mainlogo = styled.div`
    width: 100px;
    height: 64px;
    background-image: url(${props => props.name === 'main' ? logo : logo1});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    cursor: pointer;
`;

const Mainnav = styled.div`
    // position : sticky;
    // top : 0;
    // left : 0;
    width:100%;
    height : 6vw;
    box-sizing : border-box;
    padding: 5px;
    margin: 0 auto;
    color: ${props => props.name === 'main' ? 'white' : 'black'};
    // display: flex;
    // justify-content:space-between;
    // align-items:center;
    font-size:1.25vw;
    font-weight:350;
    ${props => props.name === 'main' ? '' : 'box-shadow: 0px 16px 32px rgb(0 0 0 / 15%), 0px 3px 8px rgb(0 0 0 / 10%) !important;'};

    li { 
        cursor : pointer;
    }

    .inner {
        width : ${props => props.name === 'main' || props.name === 'detail' ? '88%' : '95%'};
        display: flex;
        justify-content:space-between;
        align-items:center;
        margin: 0 auto;
    }
`;

const ProfileSelect = styled.div`
    width: 6.6vw;
    height: 3.3vw;
    background-color: white;
    border-radius : 25px;
    display: flex;
    justify-content:center;
    align-items:center;
    border : 1px solid lightgrey;
    cursor : pointer;
    position: relative;
`;

const ProfileLink = styled.div`
    position : absolute;
    top: 4vw;
    right:0;
    width : 19vw;
    background-color : white;
    border-radius : 15px;
    z-index : 1;
    color : black;
    font-size : 1.1vw;
    box-shadow: 0px 16px 32px rgb(0 0 0 / 15%), 0px 3px 8px rgb(0 0 0 / 10%) !important;

    p {
        width : 87.5%;
        padding : 1.2vw;
    }

    p:hover {
        background-color : #eeeeee;
    }
`;

export default NavBar