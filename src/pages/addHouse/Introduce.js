import { fontSize } from '@material-ui/system';
import styled from 'styled-components';
import logo from '../../image/mainlogo.png'

function Introduce() {
    return (
        <IntroContent>
            <div className="logo"></div>
            <div style={{ color: 'white', fontSize: '3.7vw', fontWeight: '500', marginTop: '25%' }}>
                <p style={{ padding: '0 12vw 0 4vw', lineHeight: '4.3vw', wordBreak: 'keep-all' }}>
                    게스트가 머무르게 될 숙소의 정보가 무엇인가요?
                </p>
            </div>
        </IntroContent>
    );
};

const IntroContent = styled.div`
    width : 100%;
    height : 100vh;
    background-image : url('https://a0.muscache.com/im/pictures/Hosting/Gradient/original/4abb91ab-2c70-46d7-80a5-9c83ef0221ef.png');
    background-size : 100% 100%;
    background-position : center;
    background-repeat : no-repeat;

    .logo {
        width : 9vw;
        height : 6vw;
        background-image : url('${logo}');
        background-size : 100%;
        background-position : center;
        background-repeat : no-repeat;
        margin-left : 2vw;
        padding-top : 3vw;
    }
`;

export default Introduce