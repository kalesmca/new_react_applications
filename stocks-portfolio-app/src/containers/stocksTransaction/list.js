import React from "react";

const StocksTransactionListComponent = () =>{
    return(
        <div>
            TransactionComponent
            <div>
                <table id="customers">
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Date</th>
                            <th>Deposit</th>
                            <th>Withdrawn</th>
                            <th>Available Balance</th>
                        </tr>

                    </thead>
                    <tbody>
                       <td colSpan={5}>No Data Found</td>

                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default StocksTransactionListComponent;