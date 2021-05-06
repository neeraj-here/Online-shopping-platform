import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const Payment = ({ totalPieces, totalPrice, totalItems }) => {

    function handleToken(token, addresses) {
        console.log(token, addresses);
    }
    return (
        <div className="container-payment">
            <div className="payment-description">
                <h1 className="totalPieces">total pieces: {totalPieces}</h1>
            </div>
            <StripeCheckout
                stripeKey="pk_test_51Inxa4SJyqfhpaD0jKSjLrRZuP3cCQ6bqEQT4tG34ybcunC4jcxNnGBQLosm5yQU6Ui0Cmb6YC0NXyaTB7zflZ8500YWabZ77p"
                token={handleToken}
            />
        </div>
    )
}

export default Payment
