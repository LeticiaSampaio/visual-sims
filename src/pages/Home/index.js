import './style.css';
import IntroductionCard from '../../components/atoms/IntroductionCard';
import { Stars, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

function Camera() {
    // This one makes the camera move in and out
    useFrame(({ clock, camera }) => {
        camera.position.z = 50 + Math.sin(clock.getElapsedTime()) * 30
    })
    return null
}

const Home = () => {
    return (
        <div className="App">
            <Canvas>
                <OrbitControls />
                <Stars />
                <Camera />
            </Canvas>
            <div class="card-introduction">
                <h1>Visual Sims</h1>
                <IntroductionCard />
            </div>
        </div>
    );
}

export default Home;