// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Client, Environment } from 'square';
import { randomUUID } from 'crypto';
BigInt.prototype.toJSON = function () {
  return this.toString();
};

const { paymentsApi } = new Client({
  accessToken:
    'EAAAEOiqkSJL-TYa2Mnn-SPKk3aaToxJcMD5rPOqOJyLXb29PuvqaMxesTN8iWon',
  environment: Environment.Sandbox,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId: req.body.sourceId,
      amountMoney: {
        currency: 'USD',
        amount: req.body.amount,
      },
      note: req.body.note,
    });
    console.log(result);
    res.status(200).json(result);
  } else {
    res.status(500).send();
  }
}
