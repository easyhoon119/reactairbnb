import styled from "styled-components"
import { CoronaStyle, PageWrap } from "../components/common/styled";
// import Header from "../components/common/header";
import { Link } from 'react-router-dom';
import styles from './main.modules.css';
import logo from '../image/mainlogo.png';


const IndexPage = () => {
    return (
        <PageWrap>
            <CoronaStyle>
                <CoronaText><Link to="#" className={styles.coronaLink}>에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.</Link></CoronaText>
            </CoronaStyle>
            <MainonPicture >
                <Mainnav>
                    <Mainlogo></Mainlogo>
                    <div className={styles.navContainer} style={{ marginLeft: '100px' }}>
                        <ul style={{ display: 'flex' }}>
                            <li style={{ marginRight: '30px', padding: '5px' }}>숙소</li>
                            <li style={{ marginRight: '30px', padding: '5px' }}>체험</li>
                            <li style={{ marginRight: '30px', padding: '5px' }}>온라인 체험</li>
                        </ul>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <span style={{ marginRight: '18px', fontSize: '14.5px' }}> 호스트 되기</span>
                        <i className="fas fa-globe" style={{ marginRight: '18px', fontSize: '16px' }}></i>
                        <ProfileSelect>
                            <i className="fas fa-bars" style={{ color: 'grey', marginRight: '10px' }}></i>
                            <i className="fas fa-user-circle" style={{ color: 'grey', fontSize: '30px' }}></i>
                        </ProfileSelect>
                    </div>
                </Mainnav>
            </MainonPicture>
        </PageWrap >
    )
}

const CoronaText = styled.span`
    color:#A3A3A3;
    font-size:1.1vw;
`;

const MainonPicture = styled.div`
    width: 100%;
    height: 45vw;
    background-image: url("https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=1920");
    background-position: center;
    background-size: cover;
`;

const Mainlogo = styled.div`
    width: 118px;
    height: 64px;
    background-image: url('https://c0.klipartz.com/pngpicture/42/36/gratis-png-logo-de-airbnb-hotel-san-francisco-travel-logo-de-airbnb-thumbnail.png');
    background-position: center;
    background-size: cover;
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
`;

export default IndexPage