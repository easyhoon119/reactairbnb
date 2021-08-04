import { Map, GoogleApiWrapper } from 'google-maps-react';

function GoogleMap(props) {
    const mapStyle = {
        width: '40%',
        height: '88.7vh'
    }

    return (
        <>
            <Map
                style={mapStyle}
                google={props.google}
                zoom={12}
                center={{ lat: '35.1379222', lng: '129.05562775' }}
                initialCenter={{ lat: '35.1379222', lng: '129.05562775' }}
            ></Map>
        </>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCkVcSiyUDIhCfU6G4NZLtpyOgud7crZiw'
})(GoogleMap)