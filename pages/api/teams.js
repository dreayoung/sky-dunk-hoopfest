import clientPromise from '../../lib/mongo/index';

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db('basketball_event');

    const teams = await db
      .collection('teams')
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    res.json(teams);
  } catch (e) {
    console.error(e);
  }
};
