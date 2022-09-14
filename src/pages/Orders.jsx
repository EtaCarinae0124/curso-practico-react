import React from 'react';
import { OrderItem } from '../components/OrderItem';
import '../styles/Orders.scss';

function Orders() {
  return (
    <div className='Orders'>
        <div className='Orders-container'>
            <h1 className='title'>
                My Orders
            </h1>
            <div className='Orders-content'>
                <OrderItem />
            </div>
        </div>
    </div>
  );
}

export { Orders };