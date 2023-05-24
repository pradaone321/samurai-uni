//オブジェクトの宣言と値の代入を行う
const personalDate = {
	name:'太郎',
	age:36,
	gender:'男性'
};

//オブジェクトの値を出力する
console.log(personalDate);

//'age'というキーの値を更新
personalDate.age = 37;

//新しくプロパティを追加する
personalDate.address = '東京都';

//オブジェクトの値を出力する
console.log(personalDate);
console.log(personalDate.gender);