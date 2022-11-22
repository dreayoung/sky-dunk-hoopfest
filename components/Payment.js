import React, { useState } from 'react';
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk';

function Payment({ name, email, quantity, approved, setApproved }) {
  const fixedPrice = Number(quantity) * 30;
  const finalP = Number(fixedPrice) * 100;

  const [errors, setErrors] = useState(false);
  // const [loader, setLoader] = useState(false);

  return (
    <>
      <div className={`${approved ? 'hidden' : 'block'} mt-2`}>
        <p className="pt-4 text-xl uppercase mb-4 text-white font-bold fj">
          Total:{' '}
          <span className="fj">
            ${fixedPrice} for {quantity} Ticket(s)
          </span>
        </p>
        <PaymentForm
          applicationId="sq0idp-FHyz8NyPnFe2c5g4dzbTHQ"
          locationId="LPCAYPZBND7AN"
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
                  note: email,
                }),
              }).then(async (response) => setApproved(await response.json()));
            } catch {
              setErrors(true);
            }
          }}
        >
          <CreditCard />
        </PaymentForm>
        {errors ? (
          <div className="mt-8 text-center mb-10 px-2">
            <h2 className="uppercase text-white text-3xl">
              ⚠️ Payment failure. Refresh the page and try again
            </h2>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Payment;
