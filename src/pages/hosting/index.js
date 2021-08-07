import { PageWrap } from '../../components/common/styled';
import styled from 'styled-components';
import logo2 from '../../image/mainlogo2.png'
import { useHistory } from 'react-router';

function HostingPage() {

    const history = useHistory();

    const goHome = () => {
        history.push('/');
    };

    return (
        <PageWrap>
            <MainNav>
                <div className="inner">
                    <Mainlogo onClick={goHome}></Mainlogo>
                    <div style={{ display: 'flex' }}>
                        <div style={{ marginRight: '2vw' }}>
                            투데이
                        </div>
                        <div style={{ marginRight: '2vw' }}>
                            투데이
                        </div>
                        <div style={{ marginRight: '2vw' }}>
                            투데이
                        </div>
                        <div style={{ marginRight: '2vw' }}>
                            투데이
                        </div>
                    </div>
                    <div style={{ width: '4vw', height: '4vw', border: '1px solid lightgray', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src="https://a0.muscache.com/defaults/user_pic-36x36.png?v=3" alt="hosting" style={{ borderRadius: '50%' }} />
                    </div>
                </div>
            </MainNav>
        </PageWrap>
    );
};

const MainNav = styled.div`
    width:100%;
    height : 5.5vw;
    box-sizing : border-box;
    margin: 0 auto;
    color: black;
    font-size:1.25vw;
    font-weight:350;
    border-bottom : 1px solid lightgray;

    li { 
        cursor : pointer;
    }

    .inner {
        width : 97%;
        display: flex;
        justify-content:space-between;
        align-items:center;
        margin: 0 auto;
    }
`;

const Mainlogo = styled.div`
    width: 6.5vw;
    height: 5.5vw;
    padding-bottm : 10vw;
    background-image: url(${logo2});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    cursor: pointer;
`;

export default HostingPage