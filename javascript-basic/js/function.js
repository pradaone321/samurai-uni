//朝の挨拶関数定義
const sayGoodMorning = () =>{
	console.log('テスト０１');
	console.log('テスト０２');
	console.log('テスト０３');
}
//夜の挨拶関数定義
const sayGoodEvening = () => {
	console.log('テスト04');
	console.log('テスト05');
	console.log('テスト06');
}

//関数呼び出し
sayGoodMorning();
sayGoodEvening();

const addTwoArguments = (prices,shippingFee) => {
	console.log(prices + shippingFee + '円');
}
addTwoArguments(1200,600);

