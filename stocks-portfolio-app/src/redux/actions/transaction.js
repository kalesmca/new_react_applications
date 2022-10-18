import {DEPOSIT_MONEY } from '../../constants/actions';

export const depositAmount = (data) =>{
    return {type: DEPOSIT_MONEY, payload: data}
}