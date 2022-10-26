import {DEPOSIT_MONEY, WITHDRAW_MONEY, ADD_CUSTOMER} from '../../constants/actions';

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
        case ADD_CUSTOMER:{
            return{
                ...state, newData: action.data
            }
        }
        default :{
            return { ...state}
        }
    }

}

export default transaction;