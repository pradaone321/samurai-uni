/* よくあるご質問 */

/* 全てに適用：タブ切り替え */
$(function(){
	$(".tab-eltax").on("click", function() {
	  $(this).addClass('active');
	  $(".tab-suido").removeClass('active');
	  $(".faq-suido").hide();
	  $(".tab-tax").removeClass('active');
	  $(".faq-tax").hide();
	  $(".faq-eltax").show();
	  //$('div.accordion-item:nth-child(n+2):nth-child(-n+6)').css('display','none');
	  $(".container-fluid.nav").css('background-color','#CED7F5');
	  $(".container-fluid.nav").css('padding','1.0625rem 15.9375rem');
  
	});
	$(".tab-tax").on("click", function() {
	  $(this).addClass('active');
	  $(".tab-suido").removeClass('active');
	  $(".faq-suido").hide();
	  $(".tab-eltax").removeClass('active');
	  $(".faq-eltax").hide();
	  $(".faq-tax").show();
	  $(".container-fluid.nav").css('background-color','#B6E1DD');
	  $(".container-fluid.nav").css('padding','1.0625rem 0rem');
  
	});
	$(".tab-suido").on("click", function() {
	  $(this).addClass('active');
	  $(".tab-tax").removeClass('active');
	  $(".faq-tax").hide();
	  $(".tab-eltax").removeClass('active');
	  $(".faq-eltax").hide();
	  $(".faq-suido").show();
	  $(".container-fluid.nav").css('background-color','#DCF2FF');
	  $(".container-fluid.nav").css('padding','1.0625rem 15.9375rem');
  
	});
  });
  
  //ナビゲーションhover
  $('.navB01').hover(function () {
	  // over
	  //$('.navbur').css('display', 'none');
	  $('img.el_icon1_off').css('display', 'none');
	  $('img.el_icon1_on').css('display', 'block');
	  //console.log("きた");
	}, function () {
	  // out
	  //$('navbur').css('background-color','none;');
	  $('img.el_icon1_off').css('display', 'block');
	  $('img.el_icon1_on').css('display', 'none');
	  //console.log("離れた");
	}
  );
  $('.navB02').hover(function () {
	// over
	//$('.navbur').css('display', 'none');
	$('img.el_icon2_off').css('display', 'none');
	$('img.el_icon2_on').css('display', 'block');
	//console.log("きた");
  }, function () {
	// out
	//$('navbur').css('background-color','none;');
	$('img.el_icon2_off').css('display', 'block');
	$('img.el_icon2_on').css('display', 'none');
	//console.log("離れた");
  }
  );
  $('.navB03').hover(function () {
	// over
	//$('.navbur').css('display', 'none');
	$('img.el_icon3_off').css('display', 'none');
	$('img.el_icon3_on').css('display', 'block');
	//console.log("きた");
  }, function () {
	// out
	//$('navbur').css('background-color','none;');
	$('img.el_icon3_off').css('display', 'block');
	$('img.el_icon3_on').css('display', 'none');
	//console.log("離れた");
  }
  );
  
  
  
  //全てに適用：subtitleのbutをクリック時、該当コンテンツが全て表示される
  $('button.tab-eltax').on('click', function(){
	$('.faq_list').show();
	$('.faq_list h3').show();
	$('#eltax_faq_02 div.accordion-item').css('display','block');
	$('#eltax_faq_03 div.accordion-item').css('display','none');
	$('#eltax_faq_04 div.accordion-item').css('display','none');
	$('#eltax_faq_05 div.accordion-item').css('display','none');
	$('#eltax_faq_06 div.accordion-item').css('display','none');
	$('#eltax_faq_07 div.accordion-item').css('display','none');
  });
  
  $('button.tab-tax').on('click', function(){
	$('.faq_list').show();
	$('.faq_list h3').show();
	$('#tax_faq_01 div.accordion-item').css('display','block');
	$('#tax_faq_02 div.accordion-item').css('display','none');
	$('#tax_faq_03 div.accordion-item').css('display','none');
	$('#tax_faq_04 div.accordion-item').css('display','none');
	$('#tax_faq_05 div.accordion-item').css('display','none');
	$('#tax_faq_06 div.accordion-item').css('display','none');
	$('#tax_faq_07 div.accordion-item').css('display','none');
  });
  
  $('button.tab-suido').on('click', function(){
	$('.faq_list').show();
	$('.faq_list h3').show();
	$('#sui_faq_01 div.accordion-item').css('display','block');
	$('#sui_faq_02 div.accordion-item').css('display','none');
	$('#sui_faq_03 div.accordion-item').css('display','none');
	$('#sui_faq_04 div.accordion-item').css('display','none');
	$('#sui_faq_05 div.accordion-item').css('display','none');
	$('#sui_faq_06 div.accordion-item').css('display','none');
  });
  
  
  
  
  
  //PC：ナビゲーションクリックイベント
  // $(function() {
  //   // リンクのクリックイベント
  //   $('.navWrapQA a').on('click', function(e){
  //       e.preventDefault();
  //       $(this).addClass('active');
  //       var targetId = $(this).attr('href');
  //       console.log(targetId);
  //       $('.faq_list').hide(); // 全てのFAQセクションを非表示にする
  //       $(targetId).show(); // クリックされたリンクのhrefに対応するFAQセクションを表示する
  //       $('h3.step').addClass('active');
  //       $('div.accordion-item').css('display','block');
  //   });
  // });
  
  
  // ヘッダーの高さを取得しています。（固定しない場合は = 0）
  const headerHeight = document.querySelector('#headerH').offsetHeight + 0;
  
  console.log(headerHeight);
  // ハッシュリンクはhref属性に#を含むリンク）をすべて取得
  for (const link of document.querySelectorAll('a[href*="#"]')) {

	//各リンクにクリックイベントリスナーを追加します。リンクがクリックされると、以下の関数が実行されます。
	link.addEventListener('click', (e) => {
		//クリックされたリンクのハッシュ部分を取得します。例えば、href="#section1"ならhashは"#section1"になります。
	  const hash = e.currentTarget.hash;
	  //hash.slice(1)でハッシュ記号（#）を取り除いた部分を取得し、そのIDを持つ要素を探
	  const target = document.getElementById(hash.slice(1));
  
	  // ハッシュが空または#topの場合、ページのトップへスムーススクロールします。
	  if (!hash || hash === '#top') {
		//e.preventDefault();でリンクのデフォルトの動作（ページ遷移）を防ぎ、window.scrollToでトップへスムーススクロールします。
		e.preventDefault();
		window.scrollTo({
		  top: 1, // iOSのChromeで固定ヘッダーが動くバグがあるため0ではなく1に
		  behavior: 'smooth',
		});
  
	  // ターゲット要素が存在する場合、その要素へスムーススクロールします。 アンカーへ
	  } else if (target) {
		//でデフォルトの動作を防ぎ
		e.preventDefault();
		//target.getBoundingClientRect().topでターゲット要素の上辺位置を取得し、ページのスクロール位置を計算します。window.scrollYで現在のスクロール位置を取得し、ヘッダーの高さを引いた位置までスムーススクロールします。
		const position = target.getBoundingClientRect().top + window.scrollY - headerHeight;
		window.scrollTo({
		  top: position,
		  behavior: "smooth",
		});
  
		// history.pushState(null, '', hash);でURLのハッシュ部分を更新します。
		history.pushState(null, '', hash);
	  }
	});
  };
  
  
  
  
  
  //SP：セレクトボックス
  $(function() {
	// セレクトボックスの変更イベント
	$('.tax_select').on('change', function(){
		// 全てのFAQのセクションを非表示
		$('.faq_list').hide();
  
		// 選択されたオプションのvalueを取得
		var selectedValue = $(this).val();
		console.log(selectedValue);
		// valueに対応するFAQセクションを表示
		if(selectedValue){
			var selectedSection = $('#' + selectedValue);
			selectedSection.show();
			//selectedSection.find('h3').show(); // h3だけを表示
			//selectedSection.find('div').hide(); // h3以外を非表示
			$('h3.step').addClass('active');
			$('div.accordion-item').css('display','block');
			// アクティブなh3にクラスを追加
			selectedSection.find('h3').addClass('active');
		}
	});
  // タブのクリックイベント
	//$('button.tab-tax').on('click', function(){
		// 全てのFAQセクションを表示し、h3だけを表示
		//$('.faq_list').show(); // FAQセクションを表示
		//$('.faq_list h3').show(); // 全てのh3を表示
		//$('.faq_list div').hide(); // h3の下のコンテンツを非表示
  
		// 全てのh3からアクティブクラスを削除
		//$('h3.step').removeClass('active');
	//});
  });
  
  $(function() {
	// セレクトボックスの変更イベント
	$('.faq_select').on('change', function(){
		// 全てのFAQのセクションを非表示
		$('.faq_list').hide();
  
		// 選択されたオプションのvalueを取得
		var selectedValue = $(this).val();
		console.log(selectedValue);
		// valueに対応するFAQセクションを表示
		if(selectedValue){
			var selectedSection = $('#' + selectedValue);
			selectedSection.show();
			//selectedSection.find('h3').show(); // h3だけを表示
			//selectedSection.find('div').hide(); // h3以外を非表示
			$('h3.step').addClass('active');
			$('div.accordion-item').css('display','block');
			// アクティブなh3にクラスを追加
			selectedSection.find('h3').addClass('active');
		}
	});
  });
  
  
  
  
  
  
  
  
  
  
  
  // $(window).on('load', function(){
  // })
  
  // $(function(){
  //   $(".tab-tax").on("click", function() {
  //     $(this).addClass('active');
  //     $(".tab-suido").removeClass('active');
  //     $(".faq-suido").hide();
  //     $(".faq-tax").show();
  //   });
  //   $(".tab-suido").on("click", function() {
  //     $(this).addClass('active');
  //     $(".tab-tax").removeClass('active');
  //     $(".faq-tax").hide();
  //     $(".faq-suido").show();
  //   });
  // });
  
  /* QA開閉 */
  $(function(){
	$(".faq_list h3").on("click", function() {
	  $(this).nextAll().slideToggle(100);
	  $(this).toggleClass("active");
	});
  });
  
  /* アンカーリンクに応じて開閉 */
  // $(function(){
  //   var urlHash = location.hash;
  //   if(urlHash.length){
  //     var urlHashnum = urlHash.replace(/[^0-9^\.]/g,"");
  //     var i = parseInt(urlHashnum, 10);
  //     var x = urlHashnum - 1;
  //     $(".faq-tax .accordion-collapse").eq(x).slideDown();
  //   }
  //   if(urlHash.match("-s")) {
  //     $(".tab-suido").addClass('active');
  //     $(".tab-tax").removeClass('active');
  //     $(".faq-tax").hide();
  //     $(".faq-suido").show();
  //     var urlHashnum = urlHash.replace(/[^0-9^\.]/g,"");
  //     var i = parseInt(urlHashnum, 10);
  //     var x = urlHashnum - 1;
  //     $(".faq-suido .accordion-collapse").eq(x).slideDown();
  //   }
  //   if(urlHash.match("suido")) {
  //     $(".tab-suido").addClass('active');
  //     $(".tab-tax").removeClass('active');
  //     $(".faq-suido").show();
  //     $(".faq-tax").hide();
  //   }
  // });
  