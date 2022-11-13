import React from 'react';
import TransactionListComponent from './components/transactionListComponent';
import MoneyTransactionComponent from './components/moneyTransaction';
import { useSelector, useDispatch } from "react-redux";
import {getWalletData} from '../../redux/actions/transaction';

const WalletContainer =() =>{
    const dispatch = useDispatch();
    const transactionState = useSelector((state)=> state.transaction)
    React.useEffect(() =>{
        dispatch(getWalletData());
    },[])
    return(
        <div>
            <div>My Wallet</div>
            <div>
                <span>Available Amount</span>
                <span>{transactionState.availableBalance}</span>
            </div>
            <MoneyTransactionComponent/>

            <TransactionListComponent/>
        </div>
    )
}

export default WalletContainer;