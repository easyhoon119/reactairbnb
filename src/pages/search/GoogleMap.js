import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function GoogleMap(props) {
    const mapStyle = {
        width: '40%',
        height: '88.7vh'
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
                zoom={props.name === 'detail' ? 17 : 12}
                center={{ lat: '35.1379222', lng: '129.05562775' }}
                initialCenter={{ lat: '35.1379222', lng: '129.05562775' }}
            >
                <Marker position={{ lat: '35.1379222', lng: '129.05562775' }} />
                <Marker position={{ lat: '35.1379222', lng: '128.75562775' }} />
            </Map>
        </>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCkVcSiyUDIhCfU6G4NZLtpyOgud7crZiw'
})(GoogleMap)