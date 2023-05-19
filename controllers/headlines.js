const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db('Test').collection('headlines').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('Test').collection('headlines').find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  };
  
  const createContact = async (req, res) => {
    const headline = {
      headlineName: req.body.headlineName,
      category: req.body.category,
      id: req.body.id,
      catchPhrase: req.body.catchPhrase,
      date: req.body.date
    };
    const response = await mongodb.getDb().db('Test').collection('headlines').insertOne(headline);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'Some error occurred while creating the contact.');
    }
  };
   
  module.exports = {
    getAll,
    getSingle,
    createContact};