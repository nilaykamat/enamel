const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const connection = (closure) => {
	return MongoClient.connect('mongodb://localhost:27017/enamel', (err, db) => {
		if(err)
			return console.log(err);
		closure(db);
	})
};

const sendError = (err,res) => {
	response.status = 501;
	response.message = typeof err == 'object' ? err.message:err;
	res.status(501).json(response);
};


let response  = {
	status:200,
	data:[],
	message:null
};



//-----------------------------


router.get('/test',(req,res) => {
	connection((client) => {
		var db = client.db('enamel');
		db.collection('test')
			.find()
			.toArray()
			.then((test) => {
				response.data = test;
				res.json(response);
			})
			.catch((err) => {
				sendError(err,res);
			})
	})
})


module.exports = router;
