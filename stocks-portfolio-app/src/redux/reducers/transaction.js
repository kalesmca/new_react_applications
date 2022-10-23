import {DEPOSIT_MONEY, WITHDRAW_MONEY} from '../../constants/actions';

const initState = {
    date: new Date(),
    availableAmount : 0,
    transactionList : [],
}

const transaction = (state=initState, action) =>{
    switch(action.type) {
        case DEPOSIT_MONEY :{
            console.log('acton :', action)
            return {
                ...state, ...action.data
            }
        }
        case WITHDRAW_MONEY:{
            return {...state,
                date: action.date,
                availableAmount: action.availAmount,
                transactionList: [...state.transactionList, [...action.transaction]]
            }
        }
        default :{
            return { ...state}
        }
    }

}

export default transaction;