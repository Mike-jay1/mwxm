$(function(){
	var i=1;
	$(".dropdown").click(function(){
		i++;
		if(i%2==0){
			$(".mz-nav-lino").addClass("mz-nav-libk");
		}else{
			$(".mz-nav-lino").removeClass("mz-nav-libk");
		}
	})
	var j=0
	$(".mz-cenbox").mouseenter(function(){
		j++;
		$(".mz-cenbox>span").stop().css("transform","rotate("+360*j+"deg)");
	});
	
	// 模态框内轮播图
	$(".mz-modal-imgol>li").click(function(){
		var w = $(".mz-modal-imgul>li").width();
		var b = $(this).index();
		$(this).addClass("bor1").siblings().removeClass("bor1");
		$(".mz-modal-imgul").animate({
			"margin-left":-w*b+"px"
		},200)
	})
	$(".mz-imgbox").click(function(){
		var i = $(this).index();
		var j = $(this).children().children().eq(0).attr('src');
		$(".mz-modal-img").attr('src',j);
		$(".mz-modal-txt1").html($(".mz_imgtxt1").eq(i).html())
		$(".mz-modal-txt2").html($(".mz_imgtxt2").eq(i).html())
	})
	
	var swiper = new Swiper('.swiper-container', {
	  pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
		  return '<span class="' + className + '">' + '</span>';
		},
	  },
	});

	// 下面是点击相对的按钮页面去到相对的位置
	$('.fwjs').click(function(){
		var fw= $(".mz-service").offset().top;
		$("body,html").animate({
		scrollTop: fw
		}, 800);
	});

	$('.zxal').click(function(){
		var zx= $(".product").offset().top;
		$("body,html").animate({
		scrollTop: zx
		}, 800);
	});

	$('.gywm').click(function(){
		var gy= $(".mz-con4").offset().top;
		$("body,html").animate({
		scrollTop: gy
		}, 800);
	});

	$('.lxwm').click(function(){
		var lx= $(".mz-imgmove").offset().top;
		$("body,html").animate({
		scrollTop: lx
		}, 800);
	});

	$('.mz-xman').click(function(){
		var xm= $(".mz-service").offset().top;
		$("body,html").animate({
		scrollTop: xm
		}, 800);
		// console.log('1');
	});
})