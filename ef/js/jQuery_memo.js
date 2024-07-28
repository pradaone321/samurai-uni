/*^*^*クラス名があるかどうか判定・追加・削除 *^*^*/
//hasClass  クラスの有無を調べる
if ($(' li ').hasClass('close'){ //  liにクラス名closeがあれば
 $(' li ').removeClass('close')  //  liのクラス名を除去する
});

//addClass  指定した要素にクラスを追加する
$(".openbtn").click(function(){ //openbtnというクリック名
	$(this).addClass("active"); //openbtnにactiveクラスを追加する
});

 //removeClass  指定した要素からクラスを削除する
 $(" .navigation ").click(function(){ //navigationというクラス名をクリックしたら
	$(" .bnavi ").removeClass("acrive") //bnaviクラスにあるactiveを削除する
 });

 //toggleClass  指定したクラスが要素になければ追加し、あれば削除する
 $(" .openbtn ").click(function(){ //openbtnというクラスclickしたら
	$(this).toggleClass("active"); //openbtnにactiveクラスがついてなければ追加し、あれば削除する
 });


 /*^*^*要素を取得する・見つける *^*^*/
 //parent  指定した要素の親要素を取得する
 $('.acordion').parent().addClass('active'); //.acordionの親要素を取得してactive
 
 //children 指定した要素の子要素を取得する
 $('.acordion').children().addClass('active'); //.acordionの子要素を取得してactive

 //find  指定した子要素から条件に合致するものを見つける
 $(".forcus-btn").click(function(){ //forcus-btnをクリックしたら
	$("table").find(".forcus").css("backgroundColor","#ccc"); //tableの中にある.forcusクラスがついている要素の背景を灰色にする
 });


  /*^*^*要素を動かす・変化を加える *^*^*/
  //fadeIn  時間をかけて表示する
  $('.article-list').fadeIn(900); //article-listが0.9秒かけてフェードイン
  //fadeOut 時間をかけて非表示にする
  $('article-list').fadeOut(1200);//article-listを1.2秒でフェイドアウト

  //show 表示する
  //hide 非表示

  //slideDown スライドしながら非表示
  $('title').on('click', function(){
	$('.box').slideDown(500); //.boxが0.5秒かけてスライドしながら表示
  });

  //slide Toggle スライドしながら非表示・表示を切り替える
  $('.title').on('click',function(){ //titleをクリックしたら
	$('.box').slideToggle(500); // boxが0.5秒かけてスライドを表示・非表示
  });

  //animate 値を指定してアニメーション
  $('#page-top').click(function(){
	$('body,html').animate({ scrollTop: 0}, 500); 
	///スクロール位置を０にするアニメーションを実行　ページトップスクロールの速さは0.5秒
		return false; //リンク自体は無効化
	});

	//css  jQ
	ueryを使いCSSを操作する
	$('.has-child').children('ul').css('display','block');

  /*^*^*値を設定・追加する *^*^*/
	//attr 要素に値を設定、または
	$('#page-link a').click(function(){
		var elmHash = $(this).attr( 'href' ); //ページ内のリンクのhrefからリンクされているエリアのidの値を取得
		var pos = $(elmHash).offset().top; //idの上部の距離を取得
		$('body , html').animate({scrollTop:pos}, 500); //取得した位置に0.5秒でスクロール
		return false; //リンク自体は無効化
	});

	//append 要素に値を追加する
	$('#box').append(' <ul class="pagination"> '); //boxの中身の最後に追加
	<div id="box">
		<ul class="pagination"></ul>
	</div>

	//appendTo 要素の中身を他の要素に追加する
	$('.navigation').appendTo('.wrapper') //navigationの内容全てをwrapperの中身の最後に追加
	//<div class="wrapper navigation"></div>


	  /*^*^*値を取得する *^*^*/
	  $(window).width( );
	  var winw = $(window).width(); //ウィンドウの横幅を取得

	  $(window).height( ); //ウィンドウの縦幅を取得する

	  outerHeight() //border,paddingを含む要素の外部の高さを取得する
	  var headerH = $('#header').outerHeight(true); //headerの高さを取得してheaderHという変数に格納する

	  scrollTop //スクロール位置を取得・設定
	  var scroll = $(window).scrollTop(); //スクロール値を取得

	  offset() //画面上に配置したHTML要素の表示位置を座標（上からの距離と左からの距離）で取得する
	  var offsetTop = $('#area-2').offset().top; //#area-2のtopの位置を取得し、offsetTopという変数に格納する
	  var offsetTop = $('#area-2').offset().left; //#area-2のleftの位置を取得し、offsetLeftという変数に格納する 

	  Math.round() //小数点以下を四捨五入する
	  var contentsTop = Math.round($('#area-3').offset().top); //#area-3までの高さを四捨五入した値で取得してcontentsTopという変数に格納する
	  
	  text //HTML要素内にあるテキスト情報を取得・追加・変更
	  var counter = $('.count-up').text(); //.count-upのテキスト情報を変数に格納

	  prop //HTML要素内のid class nameなどの属性やフォームなどで使われるchecked selectedなどのプロパティを取得
	  $('#join-btn').prop('disabled', true); //#oin-btnがついたタグの操作を無効にする

	  split //文字列を分割する
	  var className = $('btn li').attr('class'); //liのclass名を取得して格納
	  className = className.split(''); //クラス名を分割して配列にする
	  $('.'+className[0].addClass('active')); //上記で取得した配列の０番目にactiveクラスを付与

	  	  /*^*^*処理の実行・中止 *^*^*/
	  each //繰り返し処理実行
	  var headerH = $(#header).outerHeight(true); //headerの高さを取得
	  $('.scroll-point').each(function(i){ //.scroll-pointクラスがついたエリアからトップまでの距離を計算して設定
		elemTop[i] = Math.round(parseInt($(this).offset().top-headerH)); //追従するheader分の高さ(70px)を引き小数点を四捨五入
	  });

	  delay //遅延して実行する
	$('#splash-logo').delay(1500).fadeOut('slow');//#splash-logoを1.5秒遅延させてフェードアウト

	return false //処理を止める
	$('#page-top').click(function(){ //#page-topをクリックしたら
		$('body,html').animate({ //bodyとhtmlの
			scrollTop:0; //スクロール位置を０にするアニメーションを実行
		}, 500); //ページトップスクロールの速さは0.5秒
		return false; //リンク自体は無効化
	});

	//条件分岐 条件を比較し、処理を分岐する
	if{
		//条件比較
	} else if{
		//さらに条件比較
	}
	else{
		//それ以外
	}
	if(scroll >= 100) { //上から100pxスクロールしたら
		$('#page-top').removeClass('DownMove'); //#page-topについているDownMoveというクラス名を除く
		$('#page-top').addClass('upMove'); //#page-topについているupMoveというクラス名を付与する
	}else{
		if($('#page-top').hasClass('UpMove')){ //すでに#page-topにUpMoveというクラス名がついていたら
			$('#page-top').removeClass('UpMove'); //UpMoveというクラス名を除き
			$('#page-top').addClass('DownMove'); //DownMoveというクラス名を#page-topに付与
		}
	}

	//ウィンドウの横幅を取得し、画面サイズに合わせて処理を条件分岐する
	function mediaQueriesWin(){
	var width = $(window).width();
		if (width <= 768){
			//横幅が768px以下の場合
			$('.navi').addClass('active'); //横幅が768px以下の場合 naviというクラスにactiveを追加
		}else{
			//横幅が768pxより大きい場合
			$('.navi').removeClass('active'); //横幅が768pxより大きい場合 naviというクラスについている activeを削除
		}
	}

	//画面がリサイズされたら動かす
	$(window).resize(function(){
		mediaQueriesWin(); //関数を呼ぶ
	});

	//画面が読み込まれたらすぐに動かす
	$(window).on('load',function(){
		mediaQueriesWin(); //関数を呼ぶ
	});

	
	//計算や比較をする
	/*
	= 値を変数に代入
	+= 値を加算して変数に代入
	++ 変数の値を１つ増やす
	> 大なり
	< 小なり
	>= 以上
	<= 以下
	== 等しい
	=== 厳密に等しい
	!= 等しくない
	!== 厳密に等しくない
	&& ２つとも一致すればtrue
	|| どちらかが一致すればtrue
	! ●●ではない否定
	
	
	*/ 





