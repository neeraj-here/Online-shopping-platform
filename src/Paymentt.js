import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import "./Payment.css";
import StripeCheckout from 'react-stripe-checkout'

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const ProductDisplay = ({ handleClick }) => (
  <section className="payment-section">
    <div className="product">
        <img
        className="payment-img"        
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
        />
        <div className="description">
            description
        </div>
    </div>
    <button type="button" id="checkout-button" role="link" onClick={handleClick}>
      Checkout
    </button>
  </section>
);

const Message = ({ message }) => (
  <section className="payment-section">
    <p className="payment-msg">{message}</p>
  </section>
);

const Payment = ({ totalPieces, totalPrice, totalItems }) => {
    
 const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const handleClick = async (event) => {
    const stripe = await stripePromise;

    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

    return <main className="payment-main">
    {message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay handleClick={handleClick} />
  )}
        </main>
}

export default Payment


