import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import { useHistory } from 'react-router';
import ChangeAccount from './ChangeAccount';

function Body() {

    const userData = useSelector(state => state.UserInfoReducer);
    const history = useHistory();
    const selectData = [{
        icon: <i className="far fa-address-card"></i>,
        title: '개인정보',
        name: 'accountInfo',
        comment: '개인정보 및 연락처를 알려주세요'
    },
    {
        icon: <i className="fas fa-shield-alt"></i>,
        title: '로그인 및 보안',
        name: 'loginSecure',
        comment: '비밀번호를 변경하고 계정을 안전하게 보호하세요'
    },
    {
        icon: <i className="fas fa-money-bill-wave"></i>,
        title: '결제 및 대금수령',
        name: 'credit',
        comment: '결제, 대금 수령, 쿠폰, 기프트카드 및 세금 검토하기'
    },
    {
        icon: <i className="fas fa-volume-up"></i>,
        title: '알림',
        name: 'alarm',
        comment: '알림 환경설정 및 연락 방식을 선택하세요'
    },
    {
        icon: <i className="far fa-eye"></i>,
        title: '개인정보 및 공개설정',
        name: 'generalSet',
        comment: '연결된 앱, 공유하는 정보 및 공개 대상관리하기'
    },
    {
        icon: <i className="fas fa-sliders-h"></i>,
        title: '글로벌 환경 설정',
        name: 'globalSet',
        comment: '기본 언어, 통화, 시간대 설정하기'
    },
    {
        icon: <i className="far fa-building"></i>,
        title: '출장',
        name: 'meeting',
        comment: '회사 이메일을 입력하면 출장에서 혜택을 누리실 수 있습니다.'
    },
    {
        icon: <i className="fas fa-house-user"></i>,
        title: '전문 호스팅 도구',
        name: 'hostingEle',
        comment: '에어비엔비에서 여러 숙소를 관리하신다면 전문 도구를 이용해 보세요.'
    },
    {
        icon: <i className="fas fa-gift"></i>,
        title: '추천 크레딧 및 쿠폰',
        name: 'coupon',
        comment: '₩0의 추천 크레딧과 쿠폰이 있습니다. 자세히 알아보기'
    }]

    useEffect(() => {
        console.log(userData.userName);
    }, []);

    const goChangeAccount = (e) => {
        if (e.target.className === 'accountInfo') {
            history.push('/account/personal-info');
        }
    };

    const selectCompo = selectData.map((item, index) => (
        <div key={index} onClick={goChangeAccount} style={{ cursor: 'pointer' }} className={item.name}>
            {item.icon}
            <div style={{ margin: '1.5vw 0', fontSize: '1.4vw', fontWeight: '600' }} className={item.name}>
                <p className={item.name}>{item.title} <i className="fas fa-chevron-right"></i></p>
            </div>
            <p className={item.name} style={{ color: 'gray', wordBreak: 'keep-all', lineHeight: '1.8vw' }}>{item.comment}</p>
        </div>
    ));

    return (
        <AccountBody>
            <Route path="/account" exact>
                <div className="maininner">
                    <p style={{ fontSize: '2.5vw', fontWeight: '700' }}>계정</p>
                    <div style={{ marginTop: '1vw' }}>
                        <p>{`${userData.userName}, ${userData.userEmail}`} · <Link to="#" style={{ color: 'darkgreen', textDecoration: 'none' }}>프로필로 이동</Link></p>
                    </div>
                    <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }} className="accountSelect">
                        {selectCompo}
                    </div>
                    <div style={{ width: '16vw', margin: '0 auto' }}>
                        <p>계정을 비활성화하셔야 하나요?</p>
                        <p style={{ width: '7vw', margin: '0 auto', marginTop: "1vw", fontSize: '1.1vw' }}><Link to="#" style={{ color: 'lightgreen', textDecoration: 'none' }}>지금 처리하기</Link></p>
                    </div>
                </div>
            </Route>
            <Route path="/account/personal-info" exact>
                <ChangeAccount />
            </Route>
        </AccountBody>
    );
};

const AccountBody = styled.div`
    width : 100%;
    height : 100%;
    margin-top : 6vw;

    .maininner {
        padding : 5.5vw 0;
        width : 80%;
        margin: 0 auto;
    }

    .personalinner {
        padding : 3vw 0;
        width : 82%;
        margin: 0 auto;
    }

    .accountSelect {
        padding : 5vw 0;
    }

    .accountSelect > div > i {
        font-size : 2vw;
        color : darkgreen;
    }

    .accountSelect > div{
        padding : 2vw;
        width : 21.3vw;
        height : 10.2vw;
        margin-right : 1vw;
        margin-bottom : 1vw;
        border-radius : 8px;
        box-shadow: rgb(0 0 0 / 16%) 0px 2px 8px !important
    }
`;

export default Body