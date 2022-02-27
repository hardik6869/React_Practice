import {ActionType} from '../action-type/index';

interface DepositeAction {
    type: ActionType.DEPOSIT;
    payload: number;
}
interface WithdrawAction {
    type: ActionType.WITHDRAW;
    payload: number;
}
interface BanckruotAction {
    type: ActionType.BANKRUPT;
}

export type Action = DepositeAction | WithdrawAction | BanckruotAction;
