 // output-btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('output-btn');
// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
console.log('クリックされました！');
});　

//add-btn取得
const addBtn = document.getElementById('add-btn');
//parent-list取得
const parentList = document.getElementById('parent-list');

//HTML要素がクリックされた時にイベント処理を実行
addBtn.addEventListener('click', () => {
	const childList = document.createElement('li');
	childList.textContent = 'これはリスト要素です';
	parentList.appendChild(childList);
});

//count-btnというidを持つHTML要素を取得し、定数に代入
const countBtn = document.getElementById('count-btn');
//HTML要素がクリックされたときにイベント処理を実行する
countBtn.addEventListener('click' , ()=>{
	//テキストボックスに入力された文字列を取得する
	const text = document.forms.textForm.textBox.value;
	//取得した文字数を出力
	console.log( text.length + '文字' );
});

//area-btnというidをもつHTML
const areaBtn = document.getElementById('area-btn');
areaBtn.addEventListener('click' , ()=>{
	const area = document.forms.areaForm.area.value;
	//取得した値
	console.log(area);
});

//os-btnの値の取得を行う
const osBtn = document.getElementById('os-btn');
osBtn.addEventListener('click', ()=>{
	//すべてのチェックボックスの値をとる
	const items = document.forms.osForm.os;
	// 繰り返し処理でチェックボックスを1つずつ取り出し、もし選択されていれば値を出力する
	for (let i = 0;  i<items.length;  i++){
		if(items[i].checked){
			console.log(items[i].value);
		}
	}
});


