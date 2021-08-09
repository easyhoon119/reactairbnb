import { PageWrap } from '../../components/common/styled';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IsLoggedAction } from '../../store/actions/isLogged';
import NavBar from '../../components/common/NavBar';
import Footer from '../../components/common/Footer';
import Body from './Body';

function AccountPage() {

    const dispatch = useDispatch();

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');

        if (jwt) {
            dispatch(IsLoggedAction({
                isLogged: true
            }));
        }
    }, []);

    return (
        <PageWrap>
            <NavBar name="account" />
            <Body />
            <Footer />
        </PageWrap>
    );
};

export default AccountPage