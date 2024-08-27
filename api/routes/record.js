import express from 'express';
import db from '../db/connection';
import { ObjectId } from 'mongodb';

const router = express.Router();

router.get('/', async (req, res) => {
  let collection = await db.collection('records');
  let results = await collection.find({}).toArray();

  res.send(results).status(200);
});

router.get('/:id', async (req, res) => {
  // let collection = await db.collection('records');
  // let query = { _id: new ObjectId(toString(req.params.id)) };
  // let result = await collection.findOne(query);
  // if (!result) {
  //   res.send('Not found').status(404);
  // } else {
  //   res.send(result).status(200);
  // }
});
router.post('/', async (req, res) => {
  // TODO: Add POST logic when DB/data structure is fleshed out
});

router.put('/:id', async (req, res) => {
  // TODO: Add PUT logic when DB/data structure is fleshed out
});

router.delete('/:id', async (req, res) => {
  // TODO: Add DELETE logic when DB/data structure is fleshed out
});
