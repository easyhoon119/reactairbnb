import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

function DisplaySearch(props) {

    const history = useHistory();

    const goDetail = () => {
        history.push('/detail');
    };

    return (
        <ContentSearch top={props.top}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ fontSize: '1.8vw' }}>{props.where}</p>
                <div className="title">
                    <Link to="#" style={{ color: 'inherit', marginRight: '1vw', fontSize: '1.1vw' }}>보기(300+개)</Link>
                    <i className="fas fa-chevron-left" style={{ marginRight: '0.7vw' }}></i>
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
            <div style={{ marginTop: '1vw', display: 'flex' }}>
                <div style={{ marginRight: '1vw', cursor: 'pointer' }} onClick={goDetail}>
                    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-45108659/original/6986de8c-d3ae-4ba4-aebb-14830bdb00bb.jpeg?im_w=480" alt="search" />
                    <div style={{ display: 'flex', fontSize: '1.1vw', marginTop: '0.5vw', alignItems: 'center' }}>
                        <i className="fas fa-star" style={{ color: 'red', marginRight: '0.3vw' }}></i>
                        <p style={{ marginRight: '0.2vw' }}>4.97</p>
                        <p style={{ color: '#b5b5b5' }}>(후기 161개)</p>
                    </div>
                    <p style={{ marginTop: '0.8vw' }}>공동 주택(콘도) 전체...</p>
                    <p style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', width: '17.5vw', padding: '0.5vw 0' }}>'숲' #광안리파노라마뷰 #광안리10초 #Netflix #최대3명</p>
                </div>
                <div style={{ marginRight: '1vw', cursor: 'pointer' }} onClick={goDetail}>
                    <img src="https://a0.muscache.com/im/pictures/f6d20fef-f708-4ff1-823f-5dcc07b001f5.jpg?im_w=480" alt="search" />
                    <div style={{ display: 'flex', fontSize: '1.1vw', marginTop: '0.5vw', alignItems: 'center' }}>
                        <i className="fas fa-star" style={{ color: 'red', marginRight: '0.3vw' }}></i>
                        <p style={{ marginRight: '0.2vw' }}>4.97</p>
                        <p style={{ color: '#b5b5b5' }}>(후기 161개)</p>
                    </div>
                    <p style={{ marginTop: '0.8vw' }}>공동 주택 전체...</p>
                    <p style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', width: '17.5vw', padding: '0.5vw 0' }}>✔️New/Gwangan Beach/넷플릭스/파노라마 정면 뷰/청결/광안대교오션뷰/일출</p>
                </div>
                <div style={{ cursor: 'pointer' }} onClick={goDetail}>
                    <img src="https://a0.muscache.com/im/pictures/9f84bcf7-4acb-4d00-9c96-c5794cc9048f.jpg?im_w=480" alt="search" />
                    <div style={{ display: 'flex', fontSize: '1.1vw', marginTop: '0.5vw', alignItems: 'center' }}>
                        <i className="fas fa-star" style={{ color: 'red', marginRight: '0.3vw' }}></i>
                        <p style={{ marginRight: '0.2vw' }}>4.97</p>
                        <p style={{ color: '#b5b5b5' }}>(후기 161개)</p>
                    </div>
                    <p style={{ marginTop: '0.8vw' }}>공동 주택 전체...</p>
                    <p style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', width: '17.5vw', padding: '0.5vw 0' }}>New/광안오션뷰/정면뷰/도보1초/살균청소/오픈특가/광안리바닷가/일출</p>
                </div>
            </div>
        </ContentSearch>
    );
}

const ContentSearch = styled.div`
    margin-top : ${props => props.top}vw;

    img {
        width : 16vw;
        height : 11.5vw;
        border-radius : 10px;
    }

    .title i.fas {
        border : 1px solid lightgrey;
        border-radius : 50%;
        padding : 0.5vw 0.7vw;
        text-align : center;
        cursor : pointer;
    }
`;

export default DisplaySearch