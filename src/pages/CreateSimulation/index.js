import React, { Suspense } from 'react';
import NewSimulation from '../../components/organisms/NewSimulation';

const CreateSimulation = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading... </div>}>
                <NewSimulation />
            </Suspense>
        </div>
    );
}

export default CreateSimulation;