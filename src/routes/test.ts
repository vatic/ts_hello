import express from 'express';
import folktale from 'folktale';

const testRouter: express.Router = express.Router();
const testData = {
    date: new Date(),
    identity: folktale.core.lambda.identity(1),
};

const testHandler = async (req: express.Request, res: express.Response) => {
    res.json(testData);
};

testRouter.get('/', testHandler);

export default testRouter;
