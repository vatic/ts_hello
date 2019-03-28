const express = require('express');
const folktale = require('folktale');

const testRouter = express.Router();
const testData = {
    date: new Date(),
    identity: folktale.core.lambda.identity(1),
};

const testHandler = async (req, res) => {
    res.json(testData);
}

testRouter.get('/', testHandler);

module.exports = {
    testRouter,
};
