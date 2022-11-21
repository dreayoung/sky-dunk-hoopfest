import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk';
import { BsCheck2Circle } from 'react-icons/bs';

function Payment({ name, email, quantity, approved, setApproved }) {
  const fixedPrice = Number(quantity) * 30;
  const finalP = Number(fixedPrice) * 100;

  console.log('approved', approved);

  return (
    <>
      <span className={`${approved ? 'hidden' : 'block'} pt-4`}>
        You are paying ${fixedPrice} for {quantity} Tickets
      </span>
      <div className={`${approved ? 'hidden' : 'block'} mt-8`}>
        <PaymentForm
          applicationId="sandbox-sq0idb-8ypAyI05UH7aFbagoCGOTA"
          locationId="L6B6VEVVCDMBX"
          cardTokenizeResponseReceived={async (token, buyer) => {
            try {
              await fetch('/api/ticketcode', {
                method: 'POST',
                headers: {
                  'Content-type': 'application/json',
                },
                body: JSON.stringify({
                  sourceId: token.token,
                  amount: finalP,
                  buyer_email_address: email,
                }),
              }).then((response) => setApproved(response));
            } catch {
              console.log('omg error');
            }
          }}
        >
          <CreditCard />
        </PaymentForm>
        {approved ? <div className="text-white text-2xl">gucccc</div> : null}
      </div>
    </>
  );
}

export default Payment;
