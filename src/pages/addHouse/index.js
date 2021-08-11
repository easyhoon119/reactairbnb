import { PageWrap } from '../../components/common/styled';
import Introduce from './Introduce';
import Question from './Question';

function AddHouse() {
    return (
        <PageWrap>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '50%', height: '100vh' }}>
                    <Introduce />
                </div>
                <div style={{ width: '50%', height: '100vh' }}>
                    <Question />
                </div>
            </div>
        </PageWrap>
    );
};

export default AddHouse