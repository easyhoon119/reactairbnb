import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function GoogleMap(props) {
    const searchData = useSelector(state => state.SearchReducer);
    const [marker, setMarker] = useState();
    let lang = '';
    let long = '';

    useEffect(async () => {
        try {
            const url = `https://dev.devsanha.site/search?address=${searchData.address}&checkIn=${searchData.checkin}&checkOut=${searchData.checkout}&guestNum=${searchData.guestnum}&cancelPos=&superHost=&minPrice=&maxPrice=&category=&bedCount=&bedroomCount=&showerCount=&petOk=&smokingOk=`;

            const res = await axios({
                method: 'get',
                url: url
            })

            lang = res.data.result[0].latitude;
            long = res.data.result[0].longitude;

            setMarker(res.data.result.map((item, index) => (
                <Marker key={index} position={{ lat: item.latitude, lng: item.longitude }} />
            )));
        }
        catch (error) {

        }
    }, []);

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
                zoom={props.name === 'detail' ? 17 : 10}
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