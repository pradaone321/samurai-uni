//クラスを定義する
class product {
	//インスタンス化すると同時に処理を実行する
	constructor(){
		this.name = 'シャンプー';
		this.price = 500;
		this.category = '生活雑貨';
		//console.log('敏感肌にも優しい100%天然由来です')
	}
}
//インスタンス化する
const shampoo = new product();
//インスタンス（オブジェクト）値を出す
console.log(shampoo);


class product2{
	constructor(name,price,category){
		this.name = name;
		this.price = price;
		this.category = category;
	}
}
const shampoo2 = new product2('メリット', 500,'生活雑貨');
const coffee = new product2('ジャマイカコーヒー',800,'飲料');
console.log(shampoo2);
console.log(coffee);
