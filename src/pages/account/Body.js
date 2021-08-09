import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Body() {

    const userData = useSelector(state => state.UserInfoReducer);

    useEffect(() => {
        console.log(userData.userName);
    }, []);

    return (
        <AccountBody>
            <div className="inner">
                <p style={{ fontSize: '2.5vw', fontWeight: '700' }}>계정</p>
                <div style={{ marginTop: '1vw' }}>
                    <p>{`${userData.userName}, ${userData.userEmail}`} · <Link to="#" style={{ color: 'darkgreen', textDecoration: 'none' }}>프로필로 이동</Link></p>
                </div>
            </div>
        </AccountBody>
    );
};

const AccountBody = styled.div`
    width : 100%;
    height : 100%;
    padding : 5.5vw 0;

    .inner {
        width : 80%;
        margin: 0 auto;
    }
`;

export default Body