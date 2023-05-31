console.log(document.head);
console.log(document.body);
console.log(window);
console.log(document.getElementById('first-list'));
console.log(document.getElementsByClassName('heading'));

//複数のHTML要素を取得し、定数に代入する
const cssheadings = document.getElementsByClassName('heading');
const cssLists = document.querySelectorAll('li');

//複数の要素を１つずつ取得し中身を出す
for(let i = 0;  i < headings.length;  i++){
	console.log(cssheadings[i]);
}
for (let i =0;  i< cssLists.length;  i++){
	console.log(cssLists[i]);
}
// 新しくli要素を作成し、定数に代入する
const li = document.createElement('li');

// 作成したli要素にテキストを追加する
li.textContent = 'JavaScriptで新しく作成したリスト3';
li.innerHTML = '<a href="#">JavaScriptで新しく作成したリスト3</a>';

// ul要素の末尾にli要素を追加する
document.querySelector('ul').appendChild(li);

