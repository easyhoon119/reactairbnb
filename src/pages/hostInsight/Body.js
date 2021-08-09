import styled from 'styled-components';
import { Route } from 'react-router';
import { useHistory } from 'react-router';
import { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

function Body() {

    const history = useHistory();
    const develop = useRef();
    const numof = useRef();
    const rev = useRef();
    const inco = useRef();

    const numofdata = [{
        num: '0',
        text: '지난 30일간의 조회 수'
    },
    {
        num: '0',
        text: '지난 3일간 받은 새 예약'
    },
    {
        num: '0%',
        text: '예약률'
    }]

    const developdata = [{
        image: 'https://images.contentstack.io/v3/assets/bltb428ce5d46f8efd8/blt9eb218e60cd5c4fd/5e79062cfb0b8254963c835c/2UV4082WB2K9.jpg?crop=65p,100p,x31p,y0&width=144&height=144&auto=webp',
        text: '요즘 같은 시기, 유연한 환불 정책을 제공하는 것이 현명한 이유'
    },
    {
        image: 'https://images.contentstack.io/v3/assets/bltb428ce5d46f8efd8/blt320dff26e67b0d77/5ebc656870d3551b3c6637b3/color_SUB01_prepare_1920x1080.jpg?crop=56.31p,100p,x22.98p,y0&width=144&height=144&auto=webp',
        text: '에어비앤비 청결 강화 기준 준수를 시작해보세요'
    },
    {
        image: 'https://images.contentstack.io/v3/assets/bltb428ce5d46f8efd8/blt9dbecfa9bdb7d4a2/5f0774165d2aac609a336bf7/2UV9LO7P97QP.jpg?crop=100p,66.66p,x0,y33.33p&width=144&height=144&auto=webp',
        text: '셀프 체크인 제공 시 해야 할 것과 하지 말아야 할 것'
    },
    {
        image: 'https://images.contentstack.io/v3/assets/bltb428ce5d46f8efd8/blt80cc33ff9a705fc5/5f07739a2c573e7f04e7cc1a/2UV408PJAI5MH.jpg?crop=66.66p,100p,x23.5p,y0&width=144&height=144&auto=webp',
        text: '가족 단위 여행객 및 반려동물 동반 여행객 호스팅 시 알아두어야 할 사항'
    },
    {
        image: 'https://images.contentstack.io/v3/assets/bltb428ce5d46f8efd8/blt51bf8d36a542f03d/5f0772f755c7a40486617c60/2UV408P43D5YC.jpg?crop=66.66p,100p,x21.92p,y0&width=144&height=144&auto=webp',
        text: '출장자를 위한 편안한 숙소 준비 방법'
    },
    {
        image: 'https://images.contentstack.io/v3/assets/bltb428ce5d46f8efd8/blt3b9034773f581845/5ee790ce3ed6ab53e03a290e/2UV408L92Z3WU.jpg?crop=66.66p,100p,x33.33p,y0&width=144&height=144&auto=webp',
        text: '현재 게스트가 가장 선호하는 편의시설'
    }];

    const data = {
        labels: ["09", "11", "13", "15", "17", "19", '21', '23', '25', '27', '29', '31', '02', '04', '06'],
        datasets: [
            {
                label: '조회수',
                data: [],
                fill: false,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
            }
        ]
    };

    const data1 = {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        datasets: [
            {
                label: '지급 완료',
                data: [],
                fill: false,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
            },
            {
                label: '지급 예정',
                data: [],
                fill: false,
                backgroundColor: "rgba(0,0,0,0.2)",
                borderColor: "rgba(0,0,0,1)",
            }
        ]
    };

    const option = {

        maintainAspectRatio: false,

        scale: {
            yAxes: [{
                display: false,
            }]
        },

        plugin: {
            legend: {
                display: false
            }
        }
    }

    const developCompo = developdata.map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '3vw', marginBottom: '2vw' }}>
            <img style={{ width: '5.7vw', height: '5.7vw', borderRadius: '10px', marginRight: '1.3vw' }} src={item.image} alt="insight" />
            <p style={{ width: '20vw', lineHeight: '1.8vw', fontWeight: '300' }}>{item.text}</p>
        </div>
    ));

    const numofCompo = numofdata.map((item, index) => (
        <div style={{ marginRight: '4vw' }} key={index}>
            <p style={{ fontSize: '3.5vw', fontWeight: '700', marginBottom: '1vw' }}>{item.num}</p>
            <p style={{ fontWeight: '300' }}>{item.text}</p>
        </div>
    ));

    const goDevelope = () => {
        history.push('/hosting/insight');
        numof.current.classList.remove('clicked');
        develop.current.classList.add('clicked');
        rev.current.classList.remove('clicked');
        inco.current.classList.remove('clicked');
    };

    const goNumreview = () => {
        history.push('/hosting/insight/numofreivew');
        numof.current.classList.add('clicked');
        develop.current.classList.remove('clicked');
        rev.current.classList.remove('clicked');
        inco.current.classList.remove('clicked');
    };

    const goReivew = () => {
        history.push('/hosting/insight/reivew');
        numof.current.classList.remove('clicked');
        develop.current.classList.remove('clicked');
        rev.current.classList.add('clicked');
        inco.current.classList.remove('clicked');
    };

    const goIncome = () => {
        history.push('/hosting/insight/income');
        numof.current.classList.remove('clicked');
        develop.current.classList.remove('clicked');
        rev.current.classList.remove('clicked');
        inco.current.classList.add('clicked');
    };

    return (
        <InsightContent>
            <div className="inner">
                <div style={{ display: 'flex', width: '100%', borderBottom: '1px solid lightgray', marginTop: '2.5vw', fontSize: '1.15vw' }} className="selectoption">
                    <p ref={develop} className="clicked" onClick={goDevelope}>발전 기회</p>
                    <p ref={rev} onClick={goReivew}>후기</p>
                    <p ref={inco} onClick={goIncome}>수입</p>
                    <p ref={numof} onClick={goNumreview}>조회수</p>
                    <p>슈퍼호스트</p>
                    <p>청소</p>
                </div>
                <Route path="/hosting/insight" exact>
                    <div style={{ marginTop: '7vw', marginBottom: '2vw' }}>
                        <p style={{ fontSize: '1.7vw', fontWeight: '500' }}>호스팅에 도움이 되는 자료</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', marginTop: '2vw' }}>
                            {developCompo}
                        </div>
                    </div>
                </Route>
                <Route path="/hosting/insight/numofreivew" exact>
                    <div style={{ marginTop: '5.5vw' }}>
                        <div style={{ display: 'flex' }}>
                            {numofCompo}
                        </div>
                        <div style={{ width: '90%', marginTop: '1vw' }}>
                            <Line data={data} width={200} height={250} options={option} />
                        </div>
                        <div style={{ marginTop: '3vw' }}>
                            <div style={{ display: 'flex', alignItems: 'center', fontSize: '1.7vw', fontWeight: '300' }}>
                                <i style={{ marginRight: '1vw' }} className="fas fa-chevron-left"></i>
                                <p style={{ fontSize: '1.2vw' }}>7월</p>
                            </div>
                            <p style={{ marginTop: '2vw', marginBottom: '2vw', fontSize: '1.2vw', color: 'gray' }}>최신 데이터가 반영되기까지 최대 3일이 걸릴 수 있습니다</p>
                            <div style={{ marginBottom: "4vw" }}>
                                <Link style={{ color: 'inherit', fontSize: "1.15vw" }} to="#"><p>피드백 보내기</p></Link>
                            </div>
                        </div>
                    </div>
                </Route>
                <Route path="/hosting/insight/reivew" exact>
                    <div style={{ display: 'flex', paddingBottom: '3vw' }}>
                        <div style={{ width: '63%' }}>
                            <div style={{ marginTop: '4.5vw' }}>
                                <div style={{ display: 'flex' }} className="starFillter">
                                    <div className="clicked">모두</div>
                                    <div>5<i className="fas fa-star"></i></div>
                                    <div>4<i className="fas fa-star"></i></div>
                                    <div>3<i className="fas fa-star"></i></div>
                                    <div>2<i className="fas fa-star"></i></div>
                                    <div>1<i className="fas fa-star"></i></div>
                                </div>
                            </div>
                            <div style={{ marginTop: '2.3vw' }}>
                                <p style={{ fontSize: '1.8vw', fontWeight: '500' }}>아직 후기 없음</p>
                                <p style={{ marginTop: '0.5vw', fontSize: '1.1vw', color: 'gray' }}>첫 번째 후기를 받으면 여기에 표시됩니다.</p>
                            </div>
                            <div className="reviewBox" style={{ marginTop: '2vw' }}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div style={{ width: '37%', marginTop: '15vw', display: 'flex', paddingLeft: '5vw' }}>
                            <div style={{ marginRight: '8vw' }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0,5vw' }}>
                                    <p style={{ fontSize: '3.5vw', fontWeight: '600', marginRight: '0.3vw' }}>0</p>
                                    <i style={{ fontSize: '1.7vw', color: 'gold', paddingBottom: '0.8vw' }} className="fas fa-star"></i>
                                </div>
                                <p>전체 평점</p>
                            </div>
                            <div>
                                <p style={{ fontSize: '3.5vw', fontWeight: '600' }}>0</p>
                                <p>총 후기수</p>
                            </div>
                        </div>
                    </div>
                </Route>
                <Route path="/hosting/insight/income" exact>
                    <div style={{ marginTop: '4vw' }}>
                        <p style={{ fontSize: '1.3vw' }}>월 선택</p>
                        <div style={{ marginTop: '1vw' }}>
                            <select name="month" className="monthSelect">
                                <option value="">월 선택</option>
                                <option value="">English</option>
                            </select>
                        </div>
                        <div style={{ marginTop: '5vw' }}>
                            <div style={{ display: 'flex', alignItems: 'center', fontSize: '2.8vw', fontWeight: '600', marginBottom: '1vw' }}>
                                <i style={{ paddingBottom: '0.5vw', marginRight: '0.2vw' }} className="fas fa-won-sign"></i>
                                <p style={{ fontSize: '3.5vw' }}>0</p>
                            </div>
                            <p style={{ color: 'gray', fontSize: '1.3vw' }}>2021 예약 수입</p>
                        </div>
                        <div style={{ marginTop: '3vw', width: '67%' }}>
                            <Line data={data1} width={200} height={250} options={option} />
                        </div>
                        <div style={{ marginTop: '4vw' }} className="incomedetail">
                            <div>
                                <p style={{ fontSize: '1.8vw', fontWeight: '700', color: 'black' }}>2021 세부정보</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p>현재 등록된 속소가 없습니다.</p>
                            </div>
                            <div>
                                <p>숙소비</p>
                            </div>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <p>청소비</p>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <i style={{ paddingBottom: '0.3vw', marginRight: '0.1vw' }} className="fas fa-won-sign"></i>
                                        <p style={{ fontSize: '1.5vw' }}>0</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{ display: 'flex', marginBottom: '1vw', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <p>취소 수수료</p>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <i style={{ paddingBottom: '0.3vw', marginRight: '0.1vw' }} className="fas fa-won-sign"></i>
                                        <p style={{ fontSize: '1.5vw' }}>0</p>
                                    </div>
                                </div>
                                <p style={{ fontSize: '1.15vw' }}>2021에 발생</p>
                            </div>
                            <div>
                                <Link to="#" style={{ color: 'darkgreen', textDecoration: 'none' }}>대금 수령 내역 보기</Link>
                            </div>
                            <div style={{ border: 'none' }}>
                                <Link to="#" style={{ color: 'darkgreen', textDecoration: 'none' }}>세금 정보 보기</Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ margin: '2vw 0 7vw 0' }}>
                        <Link to="#" style={{ color: 'inherit', fontSize: '1.1vw' }}>피드백 보내기</Link>
                    </div>
                </Route>
            </div>
        </InsightContent>
    );
};

const InsightContent = styled.div`
    width : 100%;
    height : 100%;

    .inner {
        width : 93%;
        margin : 0 auto;
    }

    .selectoption p{
        margin-right : 1.8vw;
        cursor : pointer;
        height : 100%;
        padding : 1.5vw 0;
    }

    .selectoption p.clicked {
        border-bottom : 1.5px solid black;
    }

    .starFillter div {
        border : 1px solid #eeeeee;
        width : 3.8vw;
        height : 2.6vw;
        display : flex;
        font-size : 1.1vw;
        justify-content : center;
        align-items : center;
        color : #eeeeee;
    }

    .starFillter div.clicked {
        border-bottom : 2px solid green;
        color : green;
    }

    .starFillter i {
        font-size : 1vw;
        padding-bottom : 0.2vw;
    }

    .reviewBox div {
        width : 100%;
        height : 12vw;
        background-color : #eeeeee;
        border-radius : 2px;
        margin-bottom : 2vw;
    }

    .monthSelect {
        width : 66%;
        height : 3.7vw;
        padding : 0 1vw;
        font-size : 1.3vw;
        color : gray;
        border-radius : 5px;
        border-color : green;
    }

    .incomedetail > div {
        width : 67%;
        padding : 2vw 0;
        color : gray;
        font-size : 1.3vw;
        border-bottom : 1px solid lightgray;
    }
`;

export default Body