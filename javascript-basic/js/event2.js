var btn = document.getElementById('btn');
btn.addEventListener('click', function(){
	setTimeout(()=>{
		//console.log('ボタンをクリックしました');
		document.getElementById('text').innerText = 'ボタンをクリックしました';
	}, 2000);
});
