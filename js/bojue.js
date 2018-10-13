$(function(){
	//顶部小图标点击展示
	(function(){
		//小图标点击下拉
		$(".icon-wrap").click(function(){
			$(".dropdown").css("display","block").animate({left: "0"},500);
		})
		//点击其他区域收起
		$(document).click(function(){
			$(".dropdown").animate({left: "-100%"},500,function(){
				$(".dropdown").css("display","none")
			});
		});
		$(".icon-wrap").click(function(event){
			event.stopPropagation();
		});
		$(".dropdown").click(function(event){
			event.stopPropagation();
		});
	})();

	//tab选项卡切换
	(function(){
		//载入页面默认显示国内基地列表
		$(".city-list").css("display","none")
		$(".city-list").eq(0).css("display","block")
		//点击切换功能
		$(".tab-title a").each(function(index){
			$(".tab-title a").eq(index).click(function(){
				$(".city-list").hide()
				$(".city-list").eq(index).show(200)
				$(".tab-title a").css("background-color","#444444")
				$(this).css("background-color","#222222")
			});
		})
	})();

	//轮播图插件初始化
	(function(){
		//第一个轮播图
		var mySwiper = new Swiper ('#swiper1', {
			// 循环模式选项
		    loop: true, 
		    autoplay:{
			    delay: 3000,
			    disableOnInteraction: false,
			},
		    // 如果需要分页器
		    pagination: {
		      el: '.swiper-pagination',
		      clickable :true,
		    }
	  	});

		//第二个轮播图
		var textList = ["TOP PHOTO / 客照展示","点击获取最新报价","铂爵旅拍，明星的选择"]
	  	var mySwiper2 = new Swiper ('#swiper2', {
			// 循环模式选项
		    loop: true,
		    autoplay:{
			    delay: 3000,
			    disableOnInteraction: false,
			},
		    navigation: {
		      nextEl: '.exhibition-right',
		      prevEl: '.exhibition-left',
		    },
		    //监听图片切换，改变文本内容
		    on:{
			    slideChange: function(){
			    	$(".exhibition-text").text(textList[this.realIndex])
			    }
			 }
	  	});

	  	//第三个轮播图
	  	var mySwiper3 = new Swiper ('#swiper3', {
		    slidesPerView: 2,
		    spaceBetween : 10,
	  	});
	})()
})
