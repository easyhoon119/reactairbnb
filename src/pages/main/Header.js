import styled from "styled-components";
import NavBar from '../../components/common/NavBar';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { SearchAction } from '../../store/actions/search';
import { useRef } from 'react';
import { useEffect, useState } from 'react';


function Header() {

    const history = useHistory();
    const dispatch = useDispatch();
    const adrressed = useRef();
    const checkined = useRef();
    const checkouted = useRef();
    const guestnumed = useRef();
    const [pos, setPos] = useState(0);
    const search = useRef();
    const icon = useRef();
    const [searchContent, setSearchContent] = useState(<>
        <SebuForm width="35%" borderWidth="100%" pLeft="25px" ppLeft="31px">
            <input type="text" ref={adrressed} id="city" placeholder="어디로 여행가세요?" autoComplete="off" style={{ border: 'none' }} required />
            <label htmlFor="city">위치</label>
        </SebuForm>
        <SebuForm width="23%" borderWidth="100%" pLeft="17px" ppLeft="27px">
            <input type="date" ref={checkined} id="checkin" name="checkin" min="2021-01-01" max="2022-12-31" />
            <label htmlFor="checkin">체크인</label>
        </SebuForm>
        <SebuForm width="23%" borderWidth="100%" pLeft="17px" ppLeft="29px">
            <input type="date" ref={checkouted} id="checkout" name="checkout" min="2021-01-01" max="2022-12-31" />
            <label htmlFor="checkout">체크아웃</label>
        </SebuForm>
        <SebuForm width="24%" borderWidth="95%" pLeft="17px" ppLeft="29px">
            <input type="text" ref={guestnumed} id="person" placeholder="게스트 추가" autoComplete="off" required style={{ borderRight: 'none' }} />
            <label htmlFor="person">인원</label>
        </SebuForm>
    </>);

    const updateScroll = () => {
        if (search.current) {
            setPos(search.current.getBoundingClientRect());

            console.log(window.pageYOffset);
            if (window.pageYOffset > 0) {
                search.current.style.zIndex = '13';
                search.current.childNodes[0].style.width = '40%';
                search.current.childNodes[0].style.height = '4vw';
                icon.current.style.width = '3vw';
                icon.current.style.height = '3vw';

                search.current.style.transform = 'translateY(-6vw)';
                // search.current.style.transform = 'scaleX(0.5)';
                setSearchContent(<>
                    <p style={{ fontSize: '1.3vw', marginLeft: '2vw' }}>검색 시작하기</p>
                </>);
            }

            else {

                search.current.childNodes[0].style.width = '100%';
                search.current.childNodes[0].style.height = '5vw';
                icon.current.style.width = '4vw';
                icon.current.style.height = '4vw';
                search.current.style.zIndex = '0';

                search.current.style.transform = 'translateY(0vw)';
                // search.current.style.transform = 'scaleX(1)';
                setSearchContent(<>
                    <SebuForm width="32%" borderWidth="100%" pLeft="25px" ppLeft="31px">
                        <input type="text" ref={adrressed} id="city" placeholder="어디로 여행가세요?" autoComplete="off" style={{ border: 'none' }} required />
                        <label htmlFor="city">위치</label>
                    </SebuForm>
                    <SebuForm width="23%" borderWidth="100%" pLeft="17px" ppLeft="27px">
                        <input type="date" ref={checkined} id="checkin" name="checkin" min="2021-01-01" max="2022-12-31" />
                        <label htmlFor="checkin">체크인</label>
                    </SebuForm>
                    <SebuForm width="23%" borderWidth="100%" pLeft="17px" ppLeft="29px">
                        <input type="date" ref={checkouted} id="checkout" name="checkout" min="2021-01-01" max="2022-12-31" />
                        <label htmlFor="checkout">체크아웃</label>
                    </SebuForm>
                    <SebuForm width="24%" borderWidth="95%" pLeft="17px" ppLeft="29px">
                        <input type="text" ref={guestnumed} id="person" placeholder="게스트 추가" autoComplete="off" required style={{ borderRight: 'none' }} />
                        <label htmlFor="person">인원</label>
                    </SebuForm>
                </>);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScroll);

        return () => window.removeEventListener('scroll', updateScroll);
    }, [pos]);

    const goSearch = () => {
        console.log(adrressed.current.value);

        dispatch(SearchAction({
            address: adrressed.current.value,
            checkin: checkined.current.value,
            checkout: checkouted.current.value,
            guestnum: guestnumed.current.value + '명'
        }));
        history.push('/search');
    };

    return (
        <>
            <MainonPicture >
                <NavBar name="main" />
                <div style={{ marginTop: '6vw', transition: 'all 0.3s', position: 'fixed', top: '1vw', left: '18vw', width: '64vw', zIndex: '12' }} ref={search}>
                    <SearchForm >
                        {searchContent}
                        <SearchIcon ref={icon} onClick={goSearch}>
                            <i className="fas fa-search" ></i>
                        </SearchIcon>
                    </SearchForm>
                </div>
                <div style={{ position: 'absolute', top: '18vw', left: '7vw' }}>
                    <MainSpan>
                        <p>올림픽/패럴림픽 출전 선수와 함께하는 온라인&nbsp;체험</p>
                    </MainSpan>
                    <SpanButton>지금 둘러보기</SpanButton>
                </div>
            </MainonPicture>
        </>
    );
}

const MainonPicture = styled.div`
    overflow : visible;
    width: 100%;
    height: 47.5vw;
    background-image: url("https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=1920");
    background-position: center;
    background-size: cover;
    position: relative;
`;

const SearchForm = styled.div`
    width : 100%;
    height: 5vw;
    box-sizing : border-box;
    background-color : white;
    margin: 0 auto;
    border-radius: 30px;
    transition : width 0.3s, height 0.3s;
    display : flex;
    position : relative;
    align-items : center;
    box-shadow: 0px 16px 32px rgb(0 0 0 / 15%), 0px 3px 8px rgb(0 0 0 / 10%) !important;
`;

const SearchIcon = styled.div`
    width : 4vw;
    height : 4vw;
    background-color : #FF385C;
    border-radius : 50%;
    position: absolute;
    right : 8px;
    display: flex;
    font-size : 16px;
    justify-content : center;
    align-items : center;
    color : white;
    cursor : pointer;
    z-index : 2;
`;

const SebuForm = styled.form`
    display: flex;
    width: ${props => props.width};
    height : 100%;
    justify-content : center;
    align-items: center;
    flex-direction : column;
    box-sizing: border-box;
    position: relative;
    border-radius : 30px;
    padding : 0px ${props => props.pLeft};

    &:hover {
        background-color: #dedede;
    }

    &:hover input{
        background-color: #dedede;
    }

    input {
        width:${props => props.borderWidth};
        height:40%;
        color: #595959;
        margin-top: 0px;
        border: none;
        font-size : 15px;
        border-left : 1px solid #dedede;
        display: flex;
        padding-top: 20px;
        padding-left : 17px;
        outline-style: none;
        z-index : 1;
    }

    label {
        position: absolute;
        bottom: 35px;
        left: ${props => props.ppLeft};
        width:100%;
        font-size : 12px;
        font-weight : 700;
        height: fit-content;
        z-index : 3;
    }
`;

const MainSpan = styled.div`
    width:26vw;
    text-align : start;
    word-break: keep-all;
    line-height : 4.5vw;
    font-size: 3.8vw;
    color: white;
    font-weight : 700;
`;

const SpanButton = styled.div`
    margin-top : 1vw;
    width : 9vw;
    height : 3vw;
    font-weight : 600;
    padding : 0.3vw 1.3vw;
    background-color : white;
    font-size : 1.1vw;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius : 5px;
    box-sizing : border-box;
`;

export default Header