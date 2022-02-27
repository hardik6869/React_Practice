import React, {createContext} from 'react';
import CompB from './CompB';

const Fname = createContext();
const Lname = createContext();
function CompA() {
    return (
        <>
            <Fname.Provider value={'Hardik'}>
                <Lname.Provider value={'Prajapati'}>
                    <CompB />
                </Lname.Provider>
            </Fname.Provider>
        </>
    );
}

export default CompA;
export {Fname, Lname};

// Learned Prop Drilling, createContext and useContext also I have Practiced
// Continue with Redux (progress 20%)
