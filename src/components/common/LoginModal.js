import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loginBoxAction } from '../../store/actions/loginbox';
import { IsLoggedAction } from '../../store/actions/isLogged';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
import { useState, useRef } from 'react';

function LoginModal() {

    const emailInput = useRef();
    const passwordInput = useRef();
    const nameInput = useRef();
    const firstNameInput = useRef();
    const birthInput = useRef();
    const newEmailInput = useRef();
    const newPasswordInput = useRef();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [birth, setBirth] = useState('');
    const [rightMargin, setRightMargin] = useState(15);
    const [whatModal, setWhatModal] = useState('email');
    const [title, setTitle] = useState('로그인 또는 회원가입');
    const dispatch = useDispatch();

    const closeModal = () => {
        document.querySelector('body').classList.remove('openlogin');
        dispatch(loginBoxAction({
            isLoginBox: false
        }));
    };

    const goPassword = () => {
        if (emailInput.current.childNodes[1].childNodes[0].value === 'gil@gmail.com') {
            setEmail(emailInput.current.childNodes[1].childNodes[0].value);
            setWhatModal('password');
            setRightMargin(20);
            setTitle('로그인');
        }

        else {
            setEmail(emailInput.current.childNodes[1].childNodes[0].value);
            setWhatModal('makenewId');
            setTitle('회원가입 완료하기');
        }
    }

    const goLogin = () => {
        console.log(email, passwordInput.current.childNodes[1].childNodes[0].value);
        if (passwordInput.current.childNodes[1].childNodes[0].value === 'abcd1234') {
            setPassword(passwordInput.current.childNodes[1].childNodes[0].value);
            dispatch(IsLoggedAction({
                isLogged: true
            }));
            closeModal();
        }
    };

    const returnEmail = () => {
        setWhatModal('email');
        setEmail('');
        setTitle('로그인 또는 회원가입');
    }

    const goMakeId = () => {
        setName(nameInput.current.childNodes[1].childNodes[0].value);
        setFirstName(firstNameInput.current.childNodes[1].childNodes[0].value);
        setBirth(birthInput.current.childNodes[0].childNodes[0].value);
        setEmail(newEmailInput.current.childNodes[1].childNodes[0].value);
        setPassword(newPasswordInput.current.childNodes[1].childNodes[0].value);
        alert('회원가입이 완료되었습니다. 다시 로그인 해주세요.');
        console.log(name, firstName, birth, email, password);
        setWhatModal('email');
    };

    const selectModal = () => {
        if (whatModal === 'email') {
            return (
                <div className="inner">
                    <p style={{ fontSize: '2vw', fontWeight: '600' }}>에어비엔비에 오신것을 환영합니다.</p>
                    <EmailForm>
                        <TextField ref={emailInput} type="email" id="outlined-basic" color="secondary" fullWidth label="이메일" variant="outlined" placeholder="이메일" />
                        <SubmitButton onClick={goPassword}>계속</SubmitButton>
                        <div style={{ width: '100%', display: 'flex', marginTop: '1.2vw', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ width: '44%', height: '1px', backgroundColor: '#d5d5d5' }}></div>
                            <p style={{ fontSize: '1vw', color: 'rgb(97, 97, 97)' }}>또는</p>
                            <div style={{ width: '44%', height: '1px', backgroundColor: '#d5d5d5' }}></div>
                        </div>
                    </EmailForm>
                    <div>
                        <SocialButton><i className="fab fa-facebook"></i>페이스북으로 로그인하기</SocialButton>
                        <SocialButton><i style={{ marginRight: '16.5vw' }} className="fab fa-google"></i>구글로 로그인하기</SocialButton>
                        <SocialButton><i style={{ marginRight: '15.5vw' }} className="fab fa-apple"></i>Apple 계정으로 계속하기</SocialButton>
                        <SocialButton><i style={{ marginRight: '16.5vw' }} className="fas fa-mobile-alt"></i>전화번호로 로그인하기</SocialButton>
                    </div>
                </div>
            );
        }

        else if (whatModal === 'password') {
            return (
                <div className="inner">
                    <TextField ref={passwordInput} id="outlined-basic1" type="password" color="secondary" fullWidth label="비밀번호" variant="outlined" placeholder="비밀번호" />
                    <SubmitButton style={{ marginBottom: '2vw' }} onClick={goLogin}>로그인</SubmitButton>
                    <Link to='#' style={{ fontSize: '1.1vw' }}>비밀번호를 잊으셨나요?</Link>
                </div>
            );
        }

        else if (whatModal === 'makenewId') {
            return (
                <div className="inner">
                    <TextField ref={nameInput} style={{ marginBottom: '1vw' }} id="outlined-basic2" color="secondary" fullWidth label="이름(예: 길동)" variant="outlined" placeholder="이름(예: 길동)" />
                    <TextField ref={firstNameInput} style={{ marginBottom: '1vw' }} id="outlined-basic3" color="secondary" fullWidth label="성(예: 홍)" variant="outlined" placeholder="성(예: 홍)" />
                    <p style={{ color: 'grey', fontSize: '1vw', marginBottom: '1.5vw' }}>정부 발급 신분증에 표시된 이름과 일치하는지 확인하세요.</p>
                    <TextField ref={birthInput} style={{ marginBottom: '1vw' }} id="outlined-basic4" type="date" color="secondary" fullWidth variant="outlined" />
                    <p style={{ color: 'grey', fontSize: '1vw', marginBottom: '1.5vw' }}>만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 에어비엔비의 다른 회원에게 공개되지 않습니다.</p>
                    <TextField ref={newEmailInput} style={{ marginBottom: '1vw' }} id="outlined-basic5" type="email" color="secondary" fullWidth label="이메일" variant="outlined" value={email} />
                    <p style={{ color: 'grey', fontSize: '1vw', marginBottom: '1.5vw' }}>예약 확인과 영수증을 이메일로 보내드립니다.</p>
                    <TextField ref={newPasswordInput} style={{ marginBottom: '1vw' }} id="outlined-basic6" type="password" color="secondary" fullWidth label="비밀번호" variant="outlined" placeholder="비밀번호" />
                    <p style={{ color: 'grey', fontSize: '1vw' }}>아래의 <span>동의 및 계속하기</span> 버튼을 선택하면, 에어비엔비의 <Link to="#">서비스 약관,</Link> <Link to="#">결제 서비스 약관,</Link> <Link to="#">개인정보 처리 방침,</Link> <Link to="#">차별 금지 정책</Link>에 동의하는 것입니다.</p>
                    <SubmitButton style={{ marginBottom: '2vw' }} onClick={goMakeId}>동의 및 계속하기</SubmitButton>
                </div>
            );
        }
    }

    const selectWhere = () => {
        if (whatModal === 'email') {
            return (
                <>
                    <i className="fas fa-times" onClick={closeModal} style={{ fontSize: '1.7vw', fontWeight: '550', marginRight: `${rightMargin}vw` }}></i>
                </>
            );
        }

        else if (whatModal === 'password' || whatModal === 'makenewId') {
            return (
                <>
                    <i className="fas fa-angle-left" onClick={returnEmail} style={{ fontSize: '1.7vw', fontWeight: '550', marginRight: `${rightMargin}vw` }}></i>
                </>
            );
        }
    };


    const goWhere = selectWhere();
    const displayModal = selectModal();

    return (
        <>
            <LModal>
                <RealModal>
                    <div style={{ display: 'flex', cursor: 'pointer', width: '100%', justifyContent: 'left', padding: '2vw', borderBottom: '1px solid #dedede', alignItems: 'center', boxSizing: 'border-box' }}>
                        {goWhere}
                        <p style={{ fontSize: '1.4vw', fontWeight: '700' }}>{title}</p>
                    </div>
                    {displayModal}
                </RealModal>
            </LModal>
        </>
    );
}

const LModal = styled.div`
    position : fixed;
    top:0;
    left:0;
    width :100%;
    height : 100%;
    background-color : rgba(0,0,0, 0.5);
    display : flex;
    justify-content : center;
    align-items : center;
    pointer-events:auto;

    a {
        color : inherit;
    }
`;

const RealModal = styled.div`
    position : absolute;
    top:50%;
    left:50%;
    transform : translate(-50%, -50%);
    width : 50vw;
    min-height : 40vw;
    background-color : white;
    border-radius : 15px;
    z-index : 1;

    div.inner {
        width : 92%;
        margin: 0 auto;
        padding : 3vw 3vw 2vw 2vw;
    }
`;

const EmailForm = styled.form`
    width : 100%;
    padding-top : 2.5vw;
`;

const SubmitButton = styled.div`
    width : 100%;
    height : 4.3vw;
    background-color : rgb(208, 95, 95);
    color : white;
    border-radius : 5px;
    display : flex;
    justify-content : center;
    align-items : center;
    margin-top : 1.8vw;
    font-size : 1.4vw;
    cursor: pointer;
`;

const SocialButton = styled.div`
    width : 100%;
    height : 4vw;
    margin-top : 1vw;
    border-radius : 5px;
    border : 2px solid darkgrey;
    display : flex;
    align-items : center;
    font-size : 1.2vw;
    cursor: pointer;

    i {
        font-size : 1.7vw;
        margin-right : 15vw;
        margin-left : 1vw;
    }
`;

export default LoginModal