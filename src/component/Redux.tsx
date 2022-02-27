import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators, State} from '../state';

function Redux() {
    const dispatch = useDispatch();
    const {depositMoney, withdrawMoney, bankrupt} = bindActionCreators(
        actionCreators,
        dispatch,
    );
    const amount = useSelector((state: State) => state.bank);
    return (
        <>
            <div>
                <h1> {amount} </h1>
                <button onClick={() => depositMoney(10)}> Deposite </button>
                <button onClick={() => withdrawMoney(5)}> Withdraw </button>
                <button onClick={() => bankrupt()}> Bankrupt </button>
            </div>
        </>
    );
}

export default Redux;
