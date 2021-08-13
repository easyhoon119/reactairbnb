import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { UserInfoAction } from '../../store/actions/userinfo';

function ChangeAccount() {

    const userData = useSelector(state => state.UserInfoReducer);
    const [nameContent, setNameContent] = useState(<p style={{ color: 'gray', marginTop: '1.3vw' }}>{userData.userName}</p>);
    const [nameCnt, setNameCnt] = useState(0);
    const [sexContent, setSexContent] = useState(<p style={{ color: 'gray', marginTop: '1.3vw' }}>{userData.userSex || '제공되지 않음'}</p>);
    const [sexCnt, setSexCnt] = useState(0);
    const [birthContent, setBirthContent] = useState(<p style={{ color: 'gray', marginTop: '1.3vw' }}>{userData.userBirth || '제공되지 않음'}</p>);
    const [birthCnt, setBirthCnt] = useState(0);
    const [emailContent, setEmailContent] = useState(<p style={{ color: 'gray', marginTop: '1.3vw' }}>{userData.userEmail}</p>);
    const [emailCnt, setEmailCnt] = useState(0);
    const dispatch = useDispatch();
    const nameInput = useRef();
    const firstNameInput = useRef();
    const sexInput = useRef();
    const yearInput = useRef();
    const monthInput = useRef();
    const dayInput = useRef();
    const emailInput = useRef();


    const realChangeName = async () => {
        const name1 = `${firstNameInput.current.value}${nameInput.current.value}`;
        console.log(name1);
        try {
            const url = 'https://propd.devsanha.site/users/name';

            const res = await axios({
                method: 'patch',
                url: url,
                headers: {
                    'x-access-token': localStorage.getItem('jwt')
                },
                data: {
                    'name': name1
                }
            });

            if (res.data.code === 1000) {
                alert('이름 변경이 완료 됬습니다.');
                dispatch(UserInfoAction({
                    userName: name1,
                    userEmail: userData.userEmail,
                    userSex: userData.userSex,
                    userBirth: userData.userBirth,
                }));
                localStorage.setItem('userName', name1);
            }

            else {
                alert(res.data.message);
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    const realChangeSex = async () => {
        try {
            const url1 = 'https://prod.devsanha.site/users/sex';

            const res1 = await axios({
                method: 'patch',
                url: url1,
                headers: {
                    'x-access-token': localStorage.getItem('jwt')
                },
                data: {
                    'sex': sexInput.current.value
                }
            });

            if (res1.data.code === 1000) {
                alert('성별 변경이 완료 되었습니다.');
                dispatch(UserInfoAction({
                    userName: userData.userName,
                    userEmail: userData.userEmail,
                    userSex: sexInput.current.value,
                    userBirth: userData.userBirth,
                }));
                localStorage.setItem('userSex', sexInput.current.value);
            }

            else {
                alert(res1.data.message);
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    const realChangeBirth = async () => {
        const birth1 = `${yearInput.current.value}/${monthInput.current.value}/${dayInput.current.value}`;
        try {
            const url2 = 'https://prod.devsanha.site/users/birth';

            const res2 = await axios({
                method: 'patch',
                url: url2,
                headers: {
                    'x-access-token': localStorage.getItem('jwt')
                },
                data: {
                    'birth': birth1
                }
            });

            if (res2.data.code === 1000) {
                alert('생일이 변경 되었습니다.');
                dispatch(UserInfoAction({
                    userName: userData.userName,
                    userEmail: userData.userEmail,
                    userSex: userData.userSex,
                    userBirth: birth1
                }));
                localStorage.setItem('userBirth', birth1);
            }
            else {
                alert(res2.data.message);
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    const realChangeEmail = async () => {
        try {
            const url3 = 'https://prod.devsanha.site/users/email';

            const res3 = await axios({
                method: 'patch',
                url: url3,
                headers: {
                    'x-access-token': localStorage.getItem('jwt')
                },
                data: {
                    'email': emailInput.current.value
                }
            });

            if (res3.data.code === 1000) {
                alert('이메일 변경 되었습니다.');
                dispatch(UserInfoAction({
                    userName: userData.userName,
                    userEmail: emailInput.current.value,
                    userSex: userData.userSex,
                    userBirth: userData.userBirth
                }));
                localStorage.setItem('userEmail', emailInput.current.value);
            }
            else {
                alert(res3.data.message);
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    const nameEdit = (e) => {
        e.preventDefault();
        if (nameCnt % 2 === 0) {
            setNameContent(<div>
                <p style={{ color: 'gray', marginTop: '1.3vw' }}>허가증이나 여권 등 여행 서류에 기재되어 있는 이름을 말합니다.</p>
                <div style={{ display: 'flex', marginTop: '2.5vw', fontSize: '1.3vw', color: 'gray' }}>
                    <div>
                        <label htmlFor="name">이름</label><br />
                        <input ref={nameInput} style={{ width: '21.2vw', paddingLeft: '1vw', fontSize: '1.3vw', marginTop: '0.8vw', height: '3.2vw', marginRight: '1.5vw', borderRadius: '5px', border: '1px solid lightgray' }} type="text" id="name" placeholder="이름" />
                    </div>
                    <div>
                        <label htmlFor="fname">성</label><br />
                        <input ref={firstNameInput} style={{ width: '21.2vw', paddingLeft: '1vw', fontSize: '1.3vw', marginTop: '0.8vw', height: '3.2vw', marginRight: '1.5vw', borderRadius: '5px', border: '1px solid lightgray' }} type="text" id="fname" placeholder="성" />
                    </div>
                </div>
                <div onClick={realChangeName} style={{ marginTop: '2vw', backgroundColor: 'green', width: '6vw', height: '3.7vw', borderRadius: '5px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    저장
                </div>
            </div>);
        }
        else {
            setNameContent(<p style={{ color: 'gray', marginTop: '1.3vw' }}>{userData.userName}</p>);
        }
        setNameCnt(nameCnt + 1);
    };

    const sexChange = (e) => {
        e.preventDefault();
        if (sexCnt % 2 === 0) {
            setSexContent(
                <div>
                    <select ref={sexInput} style={{ marginTop: '1vw', width: '46.4vw', height: '4.2vw', borderRadius: '5px', border: '1px solid lightgray', fontSize: '1.3vw', paddingLeft: '1vw', color: 'gray' }} name="sex">
                        <option value="남자">남자</option>
                        <option value="여자">여자</option>
                        <option value="기타">기타</option>
                    </select>
                    <div onClick={realChangeSex} style={{ marginTop: '2vw', backgroundColor: 'green', width: '6vw', height: '3.7vw', borderRadius: '5px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        저장
                    </div>
                </div>
            );
        }
        else {
            setSexContent(<p style={{ color: 'gray', marginTop: '1.3vw' }}>{userData.userSex || '제공되지 않음'}</p>);
        }
        setSexCnt(sexCnt + 1);
    }

    const birthChange = (e) => {
        e.preventDefault();
        if (birthCnt % 2 === 0) {
            setBirthContent(
                <div>
                    <div style={{ display: 'flex', marginTop: '1vw', width: '47.4vw' }}>
                        <select ref={monthInput} style={{ width: '26vw', height: '3.8vw', borderRadius: '5px', border: '1px solid lightgray', fontSize: '1.3vw', paddingLeft: '0.2vw', color: 'gray', marginRight: '1vw' }} placeholder="7월" name="month">
                            <option value="01">1월</option>
                            <option value="02">2월</option>
                            <option value="03">3월</option>
                            <option value="04">4월</option>
                            <option value="05">5월</option>
                            <option value="06">6월</option>
                            <option value="07">7월</option>
                            <option value="08">8월</option>
                            <option value="09">9월</option>
                            <option value="10">10월</option>
                            <option value="11">11월</option>
                            <option value="12">12월</option>
                        </select>
                        <select ref={dayInput} style={{ width: '15vw', height: '3.8vw', borderRadius: '5px', border: '1px solid lightgray', fontSize: '1.3vw', paddingLeft: '0.2vw', color: 'gray', marginRight: '1vw' }} name="day">
                            <option value="01">1</option>
                            <option value="02">2</option>
                            <option value="03">3</option>
                            <option value="04">4</option>
                            <option value="05">5</option>
                            <option value="06">6</option>
                            <option value="07">7</option>
                            <option value="08">8</option>
                            <option value="09">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                        </select>
                        <select ref={yearInput} style={{ width: '18vw', height: '3.8vw', borderRadius: '5px', border: '1px solid lightgray', fontSize: '1.3vw', paddingLeft: '0.2vw', color: 'gray', marginRight: '1vw' }} name="year">
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                        </select>
                    </div>
                    <div onClick={realChangeBirth} style={{ marginTop: '2vw', backgroundColor: 'green', width: '6vw', height: '3.7vw', borderRadius: '5px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        저장
                    </div>
                </div>
            );
        }
        else {
            setBirthContent(<p style={{ color: 'gray', marginTop: '1.3vw' }}>{userData.userBirth || '제공되지 않음'}</p>);
        }
        setBirthCnt(birthCnt + 1);
    };

    const emailChange = (e) => {
        e.preventDefault();
        if (emailCnt % 2 === 0) {
            setEmailContent(
                <div>
                    <p style={{ marginTop: '1.3vw', color: 'gray' }}>언제든지 확인하실 수 있는 주소를 사용하세요</p>
                    <input ref={emailInput} style={{ width: '45.8vw', height: '3.2vw', borderRadius: '5px', border: '1px solid lightgray', fontSize: '1.3vw', paddingLeft: '1vw', color: 'gray', marginTop: '2vw' }} type="email" placeholder={userData.userEmail} />
                    <div onClick={realChangeEmail} style={{ marginTop: '2vw', backgroundColor: 'green', width: '6vw', height: '3.7vw', borderRadius: '5px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        저장
                    </div>
                </div>
            );
        }
        else {
            setEmailContent(<p style={{ color: 'gray', marginTop: '1.3vw' }}>{userData.userEmail}</p>);
        }
        setEmailCnt(emailCnt + 1);
    }

    return (
        <div className="personalinner">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '9vw', fontSize: '1.1vw' }}>
                <p>계정</p>
                <i className="fas fa-chevron-right"></i>
                <p>개인정보</p>
            </div>
            <p style={{ fontSize: '2.5vw', fontWeight: '700', marginTop: '1.5vw' }}>개인정보</p>
            <div style={{ marginTop: '4vw', display: 'flex' }}>
                <div style={{ width: '58%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2vw 0', borderBottom: '1px solid lightgray' }}>
                        <div style={{ width: '90%' }}>
                            <p style={{ fontWeight: '500' }}>실명</p>
                            {nameContent}
                        </div>
                        <Link to="#" style={{ color: '#42C1DB', textDecoration: 'none' }} onClick={nameEdit}>수정</Link>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2vw 0', borderBottom: '1px solid lightgray' }}>
                        <div style={{ width: '90%' }}>
                            <p style={{ fontWeight: '500' }}>성별</p>
                            {sexContent}
                        </div>
                        <Link to="#" style={{ color: '#42C1DB', textDecoration: 'none' }} onClick={sexChange}>수정</Link>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2vw 0', borderBottom: '1px solid lightgray' }}>
                        <div style={{ width: '90%' }}>
                            <p style={{ fontWeight: '500' }}>생년월일</p>
                            {birthContent}
                        </div>
                        <Link to="#" style={{ color: '#42C1DB', textDecoration: 'none' }} onClick={birthChange}>수정</Link>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2vw 0', borderBottom: '1px solid lightgray' }}>
                        <div style={{ width: '90%' }}>
                            <p style={{ fontWeight: '500' }}>이메일 주소</p>
                            {emailContent}
                        </div>
                        <Link to="#" style={{ color: '#42C1DB', textDecoration: 'none' }} onClick={emailChange}>수정</Link>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2vw 0', borderBottom: '1px solid lightgray' }}>
                        <div>
                            <p style={{ fontWeight: '500' }}>전화번호</p>
                            <p style={{ color: 'gray', marginTop: '1.3vw' }}>제공되지 않음</p>
                        </div>
                        <Link to="#" style={{ color: '#42C1DB', textDecoration: 'none' }}>추가</Link>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2vw 0', borderBottom: '1px solid lightgray' }}>
                        <div>
                            <p style={{ fontWeight: '500' }}>정부 발급 신분증</p>
                            <p style={{ color: 'gray', marginTop: '1.3vw' }}>제공되지 않음</p>
                        </div>
                        <Link to="#" style={{ color: '#42C1DB', textDecoration: 'none' }}>추가</Link>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2vw 0', borderBottom: '1px solid lightgray' }}>
                        <div>
                            <p style={{ fontWeight: '500' }}>주소</p>
                            <p style={{ color: 'gray', marginTop: '1.3vw' }}>제공되지 않음</p>
                        </div>
                        <Link to="#" style={{ color: '#42C1DB', textDecoration: 'none' }}>추가</Link>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2vw 0', borderBottom: '1px solid lightgray' }}>
                        <div>
                            <p style={{ fontWeight: '500' }}>비상 연락처</p>
                            <p style={{ color: 'gray', marginTop: '1.3vw' }}>제공되지 않음</p>
                        </div>
                        <Link to="#" style={{ color: '#42C1DB', textDecoration: 'none' }}>추가</Link>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2vw 0', borderBottom: '1px solid lightgray' }}>
                        <div>
                            <p style={{ fontWeight: '500' }}>중국 여행에 필요한 여권 정보</p>
                            <p style={{ color: 'gray', marginTop: '1.3vw' }}>제공되지 않음</p>
                        </div>
                        <Link to="#" style={{ color: '#42C1DB', textDecoration: 'none' }}>추가</Link>
                    </div>
                </div>
                <div style={{ width: '42%', padding: '0 0 0 7vw', boxSizing: 'border-box' }}>
                    <div style={{ width: '98%', border: '1px solid lightgray', padding: '2.5vw 2vw', boxSizing: 'border-box' }}>
                        <i style={{ fontSize: '2.8vw', color: '#42C1DB' }} className="fas fa-unlock-alt"></i>
                        <p style={{ fontSize: '1.4vw', fontWeight: '700', marginTop: '1.5vw' }}>수정할 수 있는 세부 정보는 무엇인가요?</p>
                        <p style={{ marginTop: '1.5vw', color: 'gray', wordBreak: 'keep-all', lineHeight: "1.8vw" }}>
                            에어비앤비에서 본인 인증 시 사용하는 세부 정보는 변경할 수 없습니다. 연락처 정보와 일부 개인정보는 수정할 수 있지만, 다음번 예약 또는 숙소를 등록할 때 본인 인증 절차를 거쳐야 할 수도 있습니다.
                        </p>
                        <div style={{ marginTop: '2.5vw', borderTop: '0.2px solid lightgray', width: '18%' }}></div>
                        <i style={{ fontSize: '2.8vw', color: '#42C1DB', marginTop: '2.5vw' }} className="fas fa-id-card"></i>
                        <p style={{ fontSize: '1.4vw', fontWeight: '700', marginTop: '1.5vw' }}>다른 사람에게 어떤 정보가 공개되나요?</p>
                        <p style={{ marginTop: '1.5vw', color: 'gray', wordBreak: 'keep-all', lineHeight: "1.8vw" }}>
                            에어비앤비는 예약이 확정된 후에만 호스트 및 게스트의 연락처 정보를 공개합니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangeAccount