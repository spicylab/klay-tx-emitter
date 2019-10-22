klay-tx-emitter
=====
A straightforward server for tx submission in order to re-sign with fee-delegation.

Remarks
----
This repository includes `cred.json` and `config.json` which contains credential and general configurations.<br>
We exposed `privateKey` inside `cred.json` since this is not a mainnet account and harmless. But, it should be hidden(maybe .gitignore) in your production repository.
