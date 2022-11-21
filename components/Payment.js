import React from 'react';
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk';
import { useRouter } from 'next/router';

function Payment({ name, email, quantity, approved, setApproved }) {
  const router = useRouter();

  const fixedPrice = Number(quantity) * 30;
  const finalP = Number(fixedPrice) * 100;

  return (
    <>
      <hr className="mt-4 text-orange-900" />
      <div className={`${approved ? 'hidden' : 'block'} mt-2`}>
        <p className="pt-4 text-2xl uppercase mb-4 text-white">
          Total:{' '}
          <span className="text-lg">
            ${fixedPrice} for {quantity} Ticket(s)
          </span>
        </p>
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
              }).then(async (response) => setApproved(await response.json()));
            } catch {
              alert({
                message:
                  'look like we have an error. Refresh the page and try again',
              });
              router.push('/')
            }
          }}
        >
          <CreditCard />
        </PaymentForm>
      </div>
    </>
  );
}

export default Payment;
