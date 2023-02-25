import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

    const addCash = () => {
        dispatch({type:"ADD_CASH", payload: 10})
    }

    const getCash = () => {
        dispatch({type:"GET_CASH", payload: 3})
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch({type:"ADD_CUSTOMER", payload: customer})
    }

    const removeCustomer = (customer) => {
        dispatch({type:"REMOVE_CUSTOMER", payload: customer.id})
    }

    return (
        <div className='app'>
            <div style={{fontSize:"3rem"}}>{cash}</div>
            <div style={{display:"flex"}}>
                <button onClick={() => addCash()}>Пополнить счет</button>
                <button onClick={() => getCash()}>Снять со счета</button>
                <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
                <button onClick={() => removeCustomer(prompt())}>Удалить клиента</button>
            </div>
        
            {customers.length > 0 ?
                <div>   
                    {customers.map(customer => 
                    <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
                    )}
                </div>
                :
                <div style={{fontSize:"2rem", marginTop:20}}>
                    Клиенты отсутствуют!
                </div>

            }
        </div>
    );
};

export default App;