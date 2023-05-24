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

//戻り値を返す関数を定義する
const isPurchased = () =>{
	if (商品が購入されているならば){
		return true;
	}
	else{
		return false;
	}
}
//戻り値を返す関数を条件式に使う（trueであれば処理が実行される）
if (isPurchased()) {
	console.log(''購入済みです);
}
//与えられた引数numを2倍にし、その値を戻り値として返す関数を定義
const double = (num) => {
	return num * 2;
}
console.log(double(30));
