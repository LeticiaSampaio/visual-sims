import Cylinder from '../../atoms/Cylinder';

const CylinderFlow = (props) => {
    let speed = 0.01;
    if (props.speed > 0) {
        speed = 0.001 * props.speed;
    }
    return (
        <>
            <Cylinder rotation-z={Math.PI / 2} position={props.position} size={props.size} color='white' />
            <Cylinder rotation-z={Math.PI / 2} position={props.position} size={[props.size[0], props.size[1], props.size[2] / 3, props.size[3]]} color={props.color} movement={[speed, props.size[2]]} />
        </>
    )
}

export default CylinderFlow;
