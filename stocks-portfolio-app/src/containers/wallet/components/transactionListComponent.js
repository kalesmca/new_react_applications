import React from 'react';
import './transactionList.css';
import { useSelector, useDispatch } from "react-redux";


const TransactionListComponent = () => {
    const transaction = useSelector((state) => state.transaction);
    console.log('transaction :', transaction)
    return (
        <div>
            TransactionComponent
            <div>
                <table id="customers">
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Date</th>
                            <th>Deposit Amount</th>
                            <th>Available Balance</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            transaction.transactionList && transaction.transactionList.length ? transaction.transactionList.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.date}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.currentBalance}</td>
                                    </tr>
                                )
                            }) : (
                                <tr>
                                    <td colSpan={4}>No Data Found</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TransactionListComponent;