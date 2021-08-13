import styled from "styled-components";
import logo from '../../image/mainlogo.png';
import logo1 from '../../image/mainlogo1.png';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginBoxAction } from '../../store/actions/loginbox';
import { IsLoggedAction } from '../../store/actions/isLogged';
import { SearchAction } from '../../store/actions/search';
import { useHistory } from 'react-router';
import { useRef } from 'react';

function NavBar(props) {

    const dispatch = useDispatch();
    const [isProfile, setProfile] = useState(false);
    const [pos, setPos] = useState(0);
    const logoed = useRef();
    const Headerscroll = useRef();
    const addressInput = useRef();
    const numInput = useRef();
    const isLogged = useSelector(state => state.IsLoggedReducer);
    const searchData = useSelector(state => state.SearchReducer);
    const history = useHistory();

    const updateScroll = () => {
        setPos(Headerscroll.current.getBoundingClientRect());
        if (Headerscroll.current && props.name === 'main') {
            if (pos.top + window.pageYOffset > 0) {
                Headerscroll.current.style.backgroundColor = 'white';
                Headerscroll.current.style.color = 'black';
                Headerscroll.current.style.boxShadow = 'rgb(0 0 0 / 8%) 0px 1px 12px !important';
                logoed.current.style.backgroundImage = `url(${logo1})`;
            }
            else {
                Headerscroll.current.style.backgroundColor = '';
                Headerscroll.current.style.color = 'white';
                Headerscroll.current.style.boxShadow = 'none';
                logoed.current.style.backgroundImage = `url(${logo})`;
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScroll);

        return () => window.removeEventListener('scroll', updateScroll);
    }, [pos]);

    const clickProfile = () => {
        setProfile(!isProfile);
    };

    const goLoginModal = () => {
        document.querySelector('body').classList.add('openlogin');
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

    const goAccount = () => {
        history.push('/account');
    }

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
                <p onClick={goAccount}>계정</p>
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

    const goHost = () => {
        history.push('/hosting');
    };

    const changeSearch = () => {
        dispatch(SearchAction({
            address: addressInput.current.value,
            checkin: searchData.checkin,
            checkout: searchData.checkout,
            guestnum: numInput.current.value
        }));
        history.push('/search');
    };

    const showLink = isProfile === true ? <ProfileLink style={{ zIndex: '200' }}>
        {loggedLink}
    </ProfileLink> : '';

    return (
        <>
            <Mainnav ref={Headerscroll} name={props.name}>
                <div className="inner">
                    <Mainlogo ref={logoed} name={props.name} onClick={goHome}></Mainlogo>
                    {props.name === 'main' ? <div style={{ marginLeft: '14vw' }} className="menu">
                        <ul style={{ display: 'flex', color: 'white' }}>
                            <li style={{ marginRight: '30px', padding: '5px' }}>숙소</li>
                            <li style={{ marginRight: '30px', padding: '5px' }}>체험</li>
                            <li style={{ marginRight: '30px', padding: '5px' }}>온라인 체험</li>
                        </ul>
                    </div> :
                        <SearchForm name={props.name}>
                            <SebuForm action='#' width="33%" borderWidth="95%" pLeft="17px" ppLeft="29px">
                                <input ref={addressInput} type="text" id="checkin" value="부산" autoComplete="off" readOnly required placeholder={searchData.address === '' ? '지도 표시 구역' : searchData.address} style={{ border: 'none' }} />
                            </SebuForm>
                            <SebuForm action='#' width="28%" borderWidth="95%" pLeft="17px" ppLeft="31px">
                                <input type="text" id="checkout" autoComplete="off" required placeholder={searchData.checkin || '날짜 입력'} />
                            </SebuForm>
                            <SebuForm action='#' width="39%" borderWidth="95%" pLeft="17px" ppLeft="29px">
                                <input ref={numInput} type="text" id="person" placeholder={searchData.guestnum || '게스트 추가'} autoComplete="off" required style={{ borderRight: 'none' }} />
                            </SebuForm>
                            <SearchIcon onClick={changeSearch}>
                                <i className="fas fa-search" ></i>
                            </SearchIcon>
                        </SearchForm>
                    }
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="global">
                        <div className="hostMake">
                            <span style={{ fontSize: '14.5px', cursor: 'pointer' }} onClick={goHost}>{isLogged.isLogged === true ? '호스트 모드로 전환' : '호스트 되기'}</span>
                        </div>
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
    ${props => props.name === 'account' ? 'display : none' : ''};
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
    z-index:17;
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
    ${props => props.name === 'main' || props.name === 'account' ? 'position : fixed; top:0; left:0; z-index:13;' : ''};
    width:100%;
    height : 6vw;
    ${props => props.name === 'account' ? 'background-color : #fff;' : ''};
    box-sizing : border-box;
    padding: 5px;
    margin: 0 auto;
    color: ${props => props.name === 'main' ? 'white' : 'black'};
    font-size:1.25vw;
    font-weight:350;
    ${props => props.name === 'main' ? '' : 'box-shadow : rgb(0 0 0 / 8%) 0px 1px 12px !important;'};

    li { 
        cursor : pointer;
    }

    .inner {
        width : ${props => props.name === 'main' || props.name === 'detail' || props.name === 'account' ? '88%' : '95%'};
        display: flex;
        justify-content:space-between;
        align-items:center;
        margin: 0 auto;
    }

    .hostMake {
        display : flex;
        justify-content : center;
        align-items : center;
        width : 11vw;
        height : 3vw;
        border-radius : 15px;
        margin-right : 1vw;
    }

    .hostMake:hover {
        background-color : rgba(125,125,125,0.5);
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
    z-index:200;
`;

const ProfileLink = styled.div`
    position : absolute;
    top: 4vw;
    right:0;
    width : 19vw;
    background-color : white;
    border-radius : 15px;
    z-index : 200000;
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