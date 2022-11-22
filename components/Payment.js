import React from 'react';
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk';
import { useRouter } from 'next/router';

function Payment({ name, email, quantity, approved, setApproved }) {
  const router = useRouter();

  const fixedPrice = Number(quantity) * 30;
  const finalP = Number(fixedPrice) * 100;

  return (
    <>
      <div className={`${approved ? 'hidden' : 'block'} mt-2`}>
        <p className="pt-4 text-xl uppercase mb-4 text-white font-bold">
          Total:{' '}
          <span>
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
              alert({
                message:
                  'look like we have an error. Refresh the page and try again',
              });
              router.push('/');
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
