//common
/* ページトップへ戻る */
$(function() {
    var pagetop = $('#page_top');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 0); //0秒かけてトップへ移動
        return false;
    });
});



/* よくあるご質問 */

/* タブ切り替え */
$(function(){
  $(".tab-eltax").on("click", function() {
    $(this).addClass('active');
    $(".tab-suido").removeClass('active');
    $(".faq-suido").hide();
    $(".tab-tax").removeClass('active');
    $(".faq-tax").hide();
    $(".faq-eltax").show();
  });
  $(".tab-tax").on("click", function() {
    $(this).addClass('active');
    $(".tab-suido").removeClass('active');
    $(".faq-suido").hide();
    $(".tab-eltax").removeClass('active');
    $(".faq-eltax").hide();
    $(".faq-tax").show();
  });
  $(".tab-suido").on("click", function() {
    $(this).addClass('active');
    $(".tab-tax").removeClass('active');
    $(".faq-tax").hide();
    $(".tab-eltax").removeClass('active');
    $(".faq-eltax").hide();
    $(".faq-suido").show();
  });
});

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
