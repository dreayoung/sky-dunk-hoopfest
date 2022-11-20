// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })

  async function getTickets() {
    const response = await fetch(
      'https://apis.ticket-generator.com/client/v1/ticket/image/?eventId=637a7abb6d72432799b08460',
      {
        body: 'header_1=Name&value_1=Dwe&header_2=Quant&value_2=3',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-Api-Key': '1f0b3f7124cd553fbb9cc2fbd0bc5ec9d3c44c8240de8f14',
        },
        method: 'POST',
      }
    );
    console.log('response', await response.json());
  }
}
