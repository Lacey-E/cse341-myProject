const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db('Test').collection('profile').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid contact id to find a contact.');
  }
  const userId = new ObjectId(req.params.id);
  mongodb.getDb().db('Test').collection('profile').find({ _id: userId }).toArray((err, result) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(result[0]);
    });
  };


  
  const createEditor= async (req, res) => {
    const editorProfile = {
      editorName: req.body.editorName,
      position: req.body.position,
      category: req.body.id

    };
    const response = await mongodb.getDb().db('Test').collection('profile').insertOne(editorProfile);
    if (response.acknowledged) {
      res.status(201).json(response) + 'created successfully';
    } else {
      res.status(500).json(response.error || 'Some error occurred while creating the contact.');
    }
  };
   
  const deleteEditor = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid contact id to delete a contact.');
    }
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db('Test').collection('profile').deleteOne({_id: userId}, true);
    
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(200).json(response) + 'deleted';
    } else {
      res.status(500).json('Some error occurred while deleting the contact.');
    }
  };

  const updateEditor = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid contact id to update a contact.');
    }
    const userId = new ObjectId(req.params.id);
    // be aware of updateOne 
    const editorProfile = {
      editorName: req.body.editorName,
      position: req.body.position,
      category: req.body.id

    };
    const response = await mongodb.getDb().db('Test').collection('profile').replaceOne({ _id: userId }, headline);
    console.log(response);

    if (response.modifiedCount > 0) {
      res.status(204).json(response) + 'Sucessfully Updated';
    } else {
      res.status(500).json(response.error || 'Some error occurred while updating the editor Profile.');
    }
  };


  module.exports = {
    getAll,
    getSingle,
    createEditor,
    updateEditor,
  deleteEditor};