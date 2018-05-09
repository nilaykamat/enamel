const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const connection = (closure) => {
	return MongoClient.connect('mongodb://localhost:27017/enamel', (err, dbb) => {
		if(err)
			return console.log(err);
		closure(db);
	})
};


let response  = {
	status:200,
	data:[],
	message:null
};



//-----------------------------