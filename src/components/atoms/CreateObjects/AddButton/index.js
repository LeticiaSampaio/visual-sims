import React from 'react';
import NewPlane from '../NewPlane';

const AddButton = (props) => {

    return (
        <>
            <NewPlane position={props.position} size={[0.1, 0.5]} color={props.color} action={props.action} />
            <NewPlane position={props.position} size={[0.5, 0.1]} color={props.color} action={props.action} />
        </>
    )
}

export default AddButton;