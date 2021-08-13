import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function GoogleMap(props) {
    const searchData = useSelector(state => state.SearchReducer);
    const stayid = useSelector(state => state.SearchIdReducer);
    const [marker, setMarker] = useState();

    useEffect(() => {
        async function fetchData() {
            if (props.name === 'detail') {
                try {
                    const url = `https://prod.devsanha.site/search-stay?stayId=${stayid.searchId}&address=부산&checkIn=2021-08-20&checkOut=&guestNum=1&cancelPos=&superHost=&minPrice=&maxPrice=&category=&bedCount=&bedroomCount=&showerCount=&petOk=&smokingOk=`;
                    console.log(stayid.searchId);
                    const res = await axios({
                        method: 'get',
                        url: url
                    });

                    if (res.data.code === 1000) {
                        console.log(res.data.result[0]);
                        setMarker(<Marker position={{ lat: res.data.result[0].latitude, lng: res.data.result[0].longitude }} />)
                    }

                    else {
                        console.log(res.data.message);
                    }
                }
                catch (error) {
                    console.log(error);
                }
            }
            else {
                try {
                    const url = `https://prod.devsanha.site/search?address=${searchData.address}&checkIn=${searchData.checkin}&checkOut=${searchData.checkout}&guestNum=${searchData.guestnum}&cancelPos=&superHost=&minPrice=&maxPrice=&category=&bedCount=&bedroomCount=&showerCount=&petOk=&smokingOk=`;

                    const res = await axios({
                        method: 'get',
                        url: url
                    })

                    if (res.data.code === 1000) {

                        setMarker(res.data.result.map((item, index) => (
                            <Marker key={index} position={{ lat: item.latitude, lng: item.longitude }} />
                        )));
                    }
                }
                catch (error) {
                    console.log(error);
                }
            }
        }
        fetchData();

    }, [searchData, props.name, stayid.searchId]);

    const mapStyle = {
        width: '40%',
        height: '90vh'
    }

    const detailStyle = {
        width: '87%',
        height: '70%'
    }

    return (
        <>
            <Map
                style={props.name === 'detail' ? detailStyle : mapStyle}
                google={props.google}
                zoom={props.name === 'detail' ? 11 : 10}
                center={{ lat: '35.1379222', lng: '129.05562775' }}
                initialCenter={{ lat: '35.1379222', lng: '129.05562775' }}
            >
                {marker}
            </Map>
        </>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCkVcSiyUDIhCfU6G4NZLtpyOgud7crZiw'
})(GoogleMap)