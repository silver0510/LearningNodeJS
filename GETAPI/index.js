var request = require("request");

function printCoinsData(coins) {
	for (let i = 0; i < coins.length; i++) {
		let no = i + 1;
		console.log(no + '.' + coins[i].name + '('+ coins[i].symbol + ')');
		console.log('Price: ' + coins[i].price_usd + '(USD)');
		console.log('===========================');
	}
	//console.log('=======================================');
}

function getData(){
	return new Promise(function(resolve, reject) {
		request("https://api.coinmarketcap.com/v1/ticker/?limit=10", (error, response, body) => {
    	if (error) return reject(error);
    	resolve(JSON.parse(body));
	}); 
	});
}

/*async function getData(){
	var coins;
	await request.get("https://api.coinmarketcap.com/v1/ticker/bitcoin/", (error, response, body) => {
    	if (error) return null;
    	coins = JSON.parse(body);
    	console.log(coins);
    	//console.log(body);
    	//console.log('++++++++');
		return coins;
	}); 	
} */

//getData().then(result => {
//	printCoinsData(result);
//})

async function Main(){
	var coins = await getData();
	printCoinsData(coins);
}
Main();
console.log('Coins Data:');