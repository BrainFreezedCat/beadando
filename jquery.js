$(".gallery-wrap a").click(function(event){
   var pop_img = $(this).attr('href');
    $('body').append('<div class="pop_img_wrap"><div class="pop_img"><img src="'+pop_img+'"></div></div>');
   $(".pop_img_wrap").click(function(event){
    setTimeout(function(){
        $(".pop_img_wrap").remove()
    })
   }
);
$(".pop_img").click(function(event){
    return false
});   
    return false
})