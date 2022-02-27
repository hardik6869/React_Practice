import React from 'react';
import {Fname, Lname} from './CompA';
import CompD from './CompD';

function CompC() {
    return (
        <>
            <Fname.Consumer>
                {(fname) => {
                    return (
                        <Lname.Consumer>
                            {(lname) => {
                                return (
                                    <h1>
                                        Hello World {fname} {lname}
                                        <CompD />
                                    </h1>
                                );
                            }}
                        </Lname.Consumer>
                    );
                }}
            </Fname.Consumer>
        </>
    );
}

export default CompC;
