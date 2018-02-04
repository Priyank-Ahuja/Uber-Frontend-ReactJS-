import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

let x = localStorage.getItem('latitude');
let y = localStorage.getItem('longitude');

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDHkfxmHjJeuhS55oLcrlmaPUtdPgBVszM&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `550px`, width: '70%', marginLeft:'30%', position:'fixed' }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: x-0.00000001, lng:y-0.0000001 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 28.644800, lng: 77.216721 }} onClick={props.onMarkerClick} />}
    <Marker
    position={{ lat:x-0.0001, lng:y-0.0003 }}
    />
    <Marker
    position={{ lat:x-0.002, lng:y-0.002 }}
    />
    <Marker
    position={{ lat:x-0.0005, lng:y-0.006 }}
    />
    <Marker
    position={{ lat:x-0.001, lng:y-0.003 }}
    />
    <Marker
    position={{ lat:x-0.005, lng:y-0.0021 }}
    />
    <Marker
    position={{ lat:x-0.002, lng:y-0.005 }}
    />
    </GoogleMap>
)

// class MyFancyComponent extends React.PureComponent {
//   state = {
//     isMarkerShown: false,
//   }

//   componentDidMount() {
//     this.delayedShowMarker()
//   }

//   delayedShowMarker = () => {
//     setTimeout(() => {
//       this.setState({ isMarkerShown: true })
//     }, 3000)
//   }

//   handleMarkerClick = () => {
//     this.setState({ isMarkerShown: false })
//     this.delayedShowMarker()
//   }

//   render() {
//     return (
//       <MyMapComponent
//         isMarkerShown={this.state.isMarkerShown}
//         onMarkerClick={this.handleMarkerClick}
//       />
//     )
//   }
// }

export default MyMapComponent;