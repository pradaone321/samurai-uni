// const menu = document.querySelectorAll(".js-menu");

// function toggle() {
//   const content = this.nextElementSibling;
//   this.classList.toggle("is-active");
//   content.classList.toggle("is-open");
// }

// for (let i = 0; i < menu.length; i++) {
//   menu[i].addEventListener("click", toggle);
// }


// hamburger_barsについて
$(".hamburger_bars").click(function () {
	$(this).toggleClass('active'),
	$("#globalMenu").toggleClass('panelactive');
  });
  
  $("#globalMenu").click(function(){
   $(".hamburger_bars").removeClass('active');
   $("#globalMenu").removeClass('panelactive');
  });
  
  //ドロップダウンについて
  function mediaQueriesWin(){
	var width = $(width).width();
	if(width <= 768){
	  $(".has-child>a").off('hover');
	  $(".has-child>a").on('hover',function(){
		  var parentElem = $(this).parent();
		  $(parentElem).toggleClass('active');
		  $(parentElem).children('ul').stop().slideToggle(500);
	  });
	}else{
	  $('has-child').off('click,hover');
	  $('has-child').removeClass('active');
	  $('has-child').children('ul').css("displya","");
	}
  };
  
  
  //ページリサイズがあった場合動かしたい関数
  $(window).resize(function(){
	mediaQueriesWin();/*ドロップダウン関数を呼び出し*/
  });
  
  //ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on('loda',function(){
	mediaQueriesWin();
  });
  