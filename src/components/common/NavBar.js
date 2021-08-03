import styled from "styled-components";
import logo from '../../image/mainlogo.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginBoxAction } from '../../store/actions/loginbox';

function NavBar() {

    const dispatch = useDispatch();
    const [isProfile, setProfile] = useState(false);
    const isLoginBox = useSelector(state => state.LoginBoxReducer);
    const isLogged = useSelector(state => state.IsLoggedReducer);

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

    const showLink = isProfile === true ? <ProfileLink>
        <div style={{ borderBottom: '1px solid #dedede', paddingTop: '1vw' }} onClick={goLoginModal}>
            <p>로그인</p>
            <p>회원 가입</p>
        </div>
        <div style={{ paddingBottom: '1vw', marginTop: '0.5vw' }}>
            <p>숙소 호스팅 되기</p>
            <p>체험 호스팅 하기</p>
            <p>도움말</p>
        </div>
    </ProfileLink> : '';

    return (
        <>
            <Mainnav>
                <Mainlogo></Mainlogo>
                <div style={{ marginLeft: '100px' }}>
                    <ul style={{ display: 'flex' }}>
                        <li style={{ marginRight: '30px', padding: '5px' }}>숙소</li>
                        <li style={{ marginRight: '30px', padding: '5px' }}>체험</li>
                        <li style={{ marginRight: '30px', padding: '5px' }}>온라인 체험</li>
                    </ul>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <span style={{ marginRight: '18px', fontSize: '14.5px' }}> 호스트 되기</span>
                    <i className="fas fa-globe" style={{ marginRight: '18px', fontSize: '16px' }}></i>
                    <ProfileSelect onClick={clickProfile}>
                        <i className="fas fa-bars" style={{ color: 'grey', marginRight: '10px' }}></i>
                        <i className="fas fa-user-circle" style={{ color: 'grey', fontSize: '30px' }}></i>
                        {isLogged.isLogged === true ? <LoggedDot></LoggedDot> : ''}
                        {showLink}
                    </ProfileSelect>
                </div>
            </Mainnav>
        </>
    );
}

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
    background-image: url(${logo});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
`;

const Mainnav = styled.div`
    width:88%;
    padding: 5px;
    margin: 0 auto;
    color:white;
    display: flex;
    justify-content:space-between;
    align-items:center;
    font-size:1.25vw;
    font-weight:350;
`;

const ProfileSelect = styled.div`
    width: 6.6vw;
    height: 3.3vw;
    background-color: white;
    border-radius : 25px;
    display: flex;
    justify-content:center;
    align-items:center;
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