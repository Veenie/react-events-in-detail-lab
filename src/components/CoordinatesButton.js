// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
    coordinates = event => {this.props.onReceiveCoordinates([event.clientX, event.clientY])}

    render(){
        return (
            <div>
                <button
                onClick={this.coordinates}
                >
                    'Co!'
                </button>
            </div>
        )
    }

}

export default CoordinatesButton