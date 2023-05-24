//算術演算子を使った場合の戻り値を出力
console.log(45 + 18);
//比較演算子を使った場合の戻り値を出力
console.log(45>18);
//等価演算子を使った場合の戻り値を出力
console.log('5' == 5);
//厳密等価演算子を使った場合の戻り値を出力
console.log('5' === 5 );

//変数numに０〜４までのランダムな整数を代入する
let num = Math.floor(Math.random()*5);

//変数numの値を出力する（確認用）
console.log(num);

//変数numの値が４であれば、「大当たりです」という文字列を出力する
if(num === 4 ){
	console.log('大当たりです');
}else{
	console.log('はずれです');
}
//変数numに０〜４までのランダムな整数を代入する
num = Math.floor(Math.random()*5);
//変数numの値を出力する（確認用）
console.log(num);

//変数numの値によって出力する文字を切り替える
switch(num){
	case 2:
		console.log('小吉');
		break;
	case 3:
		console.log('中吉');
		break;
	case 4:
		console.log('大吉');
		break;
	default:
		console.log('末吉');
		break;
}

const num = 5;
while (num === 5){
	console.log(num);
}