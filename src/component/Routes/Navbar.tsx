import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import ConApi from '../ConApi';
import Redux from '../Redux';
import UseCon from '../UseCon';

function Navbar() {
    return (
        <>
            <Router>
                <nav className="p-2 bg-dark d-flex">

                    <div className="container  ">
                        <Link to={'/'} className="btn btn-outline-primary m-2">
                            Context Api
                        </Link>
                        <Link
                            to={'/UseCon'}
                            className="btn btn-outline-primary m-2">
                            UseContext
                        </Link>
                        <Link
                            to={'/Redux'}
                            className="btn btn-outline-primary m-2">
                            Redux
                        </Link>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<ConApi />} />
                    <Route path="/usecon" element={<UseCon />} />
                    <Route path="/redux" element={<Redux />} />
                </Routes>
            </Router>
        </>
    );
}

export default Navbar;
