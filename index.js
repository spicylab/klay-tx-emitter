const Caver = require('caver-js');
const caver = new Caver('https://api.baobab.klaytn.net:8651/');
const cred = require('./cred.json');
const config = require('./config.json');

const express = require('express');
const cors = require('cors');
const asyncHandler = require('express-async-handler');
const app = express();

app.use(cors());

caver.klay.getNodeInfo().then(console.log);
caver.klay.accounts.wallet.add(cred.privateKey);

const contract = new caver.klay.Contract(require('./abi.json'), config.contractAddress, {
    from: cred.address,
    gasPrice: config.gasPrice
});

app.get('/sendTx', asyncHandler(async (req, res) => {
    const input = req.params.input;

    const resp = await caver.klay.sendTransaction({
        senderRawTransaction: input,
        feePayer: cred.address,
    });

    console.log(resp);

    res.send({
        success: true,
        data: resp
    });
}));

app.listen(3001, function () {
});