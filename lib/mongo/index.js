import { MongoClient } from 'mongodb';

const URI = process.env.MONGODB_URI;
const options = {};

if (!URI) throw new Error('Please add your Mongo URI to .env');

let client = new MongoClient(URI, options);
let clientPromise = client.connect();

export default clientPromise;