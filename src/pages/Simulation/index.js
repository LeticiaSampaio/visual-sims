import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import VSync from '../../compon../../components/organisms/VSync';

const Simulation = () => {
    let { simulation } = useParams();
    return (
        <div>
            <Suspense fallback={<div>Loading... </div>}>
                {simulation === 'v-sync' && <VSync />}
            </Suspense>
        </div>
    );
}

export default Simulation;