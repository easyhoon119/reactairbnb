import styled from 'styled-components';

function LoginModal() {
    return (
        <>
            <LModal>
                <RealModal>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'left', padding: '2vw', borderBottom: '1px solid #dedede', alignItems: 'center', boxSizing: 'border-box' }}>
                        <i className="fas fa-times" style={{ fontSize: '1.7vw', fontWeight: '550', marginRight: '15vw' }}></i>
                        <p style={{ fontSize: '1.4vw', fontWeight: '700' }}>로그인 또는 회원가입</p>
                    </div>
                    <div className="inner">
                        <p style={{ fontSize: '2vw', fontWeight: '600' }}>에어비엔비에 오신것을 환영합니다.</p>
                    </div>
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
`;

const RealModal = styled.div`
    position : absolute;
    top:50%;
    left:50%;
    transform : translate(-50%, -50%);
    width : 50vw;
    max-height: 500px;
    background-color : white;
    border-radius : 15px;
    z-index : 1;

    div.inner {
        width : 92%;
        margin: 0 auto;
        padding : 4vw 1vw;
    }
`;

export default LoginModal