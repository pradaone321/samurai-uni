//back-btnというidを持つHTML要素を取得し定数に代入
const backBtn = document.getElementById('back-btn');

//addEventListener()メソッド　イベント実行
window.addEventListener('scroll',()=>{
	//画面のスクロール量をpxで取得
	const scrollvalue = document.scrollingElement.scrollTop;
	//画面のスクロール量が300px以上であれば処理実行
	if(scrollvalue >= 300){
		//取得したHTMLの要素のdisplayプロパティの値をinlineに変更
		backBtn.style.display = 'inline';
	}
		//画面のスクロール量がそれ以外（300px未満）であれば非表示
		else{
			backBtn.style.display = 'none';
		}
	});

	