import React, {useContext} from 'react';
import {Fname, Lname} from './CompA';

function CompD() {
    const fname = useContext(Fname);
    const lname = useContext(Lname);
    return (
        <>
            <h1>
                Hello World {fname} {lname}
            </h1>
        </>
    );
}

export default CompD;
