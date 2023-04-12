import clientPromise from '../../lib/mongo/index';

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db('basketball_event');

    const tickets = await db
      .collection('tickets_2024')
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    res.json(tickets);
  } catch (e) {
    console.error(e);
  }
};
