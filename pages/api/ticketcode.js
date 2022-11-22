// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Client, Environment } from 'square';
import { randomUUID } from 'crypto';
BigInt.prototype.toJSON = function () {
  return this.toString();
};

const { paymentsApi } = new Client({
  accessToken:
    'EAAAEYUCXum-WzsQZLPAChfx8gXwokN6LiKxOagpuRO_xbUN0jPhICe0CgEPqGmq',
  environment: Environment.Production,
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
