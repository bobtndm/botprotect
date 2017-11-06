const LineConnect = require('./connect');
let LINE = require('./main.js');

const auth = {
	authToken: 'Em8288SMrk7camU6G5B5.dKLCtEUQje5FyFtGKjupDq.H4UaYOPD+hA6mY8v5bJ7F0Vj3chbPDMuFJZwsC8rYmg=',
	certificate: '41875798725e6f910fd2ab2942480c312e09b49081b577493d249762d9fe2d8f',
}
// let client =  new LineConnect(auth);
let client =  new LineConnect();

client.startx().then(async (res) => {
	
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
	}
});
