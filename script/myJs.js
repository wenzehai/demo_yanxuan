// 基础js文档

//topSiteNav下拉菜单
$(function() {
	$(".m-menu>li").bind('mouseover', function() // 顶级菜单项的鼠标移入操作 
		{
			$(this).children('ul').slideDown(50); //子菜单划出
			$(this).children("a").css({
				"color": "#FFFFFF"
			}); //更改文字颜色，制造hover效果
			$(this).children("a").children("span").attr("class", "fa fa-angle-down"); //更改箭头方向
		}).bind('mouseleave', function() // 顶级菜单项的鼠标移出操作 
		{
			$(this).children('ul').slideUp(50); //鼠标离开时时，子菜单收起
			$(this).children("a").css({
				"color": "#cccccc"
			}); //还原颜色
			$(this).children("a").children("span").attr("class", "fa fa-angle-up"); //还原箭头
		});
	//把整个功能的实现分为两个区域,一个是父级li,一个是子级li
	$('.m-menu>li>ul li').bind('mouseover', function() // 子菜单的鼠标移入操作 
		{
			$(this).children('ul').slideDown(50);
		}).bind('mouseleave', function() // 子菜单的鼠标移出操作 
		{
			$(this).children('ul').slideUp(50);
			$(".m-menu>li").css({
				"color": "#cccccc"
			});
		});
});


//浮动导航条下拉菜单
$(function() {
	$("#j-siteNavMenuTab>li").bind('mouseover', function() // 顶级菜单项的鼠标移入操作 
		{
			$(this).children('ul').slideDown(50); //子菜单划出
		}).bind('mouseleave', function() // 顶级菜单项的鼠标移出操作 
		{
			$(this).children('ul').slideUp(50); //鼠标离开时时，子菜单收起
		});
	//把整个功能的实现分为两个区域,一个是父级li,一个是子级li
	$('#j-siteNavMenuTab>li>ul li').bind('mouseover', function() // 子菜单的鼠标移入操作 
		{
			$(this).children('ul').slideDown(50);
		}).bind('mouseleave', function() // 子菜单的鼠标移出操作 
		{
			$(this).children('ul').slideUp(50);
		});
});

//siteNav下拉菜单
$(function() {
	$(".tab_nav>li").bind("mouseover", function() {
		$(this).children("div").css("display", "block");
		$(this).children("a").css({
			"color": "#b4a078"
		});
		$(this).children("a").attr("class", "active");
	}).bind("mouseleave", function() {
		$(this).children("div").css("display", "none");
		$(this).children("a").css({
			"color": "#000000"
		});
		$(this).children("a").attr("class", "");
	});
	$(".tab_nav>li>div>ul li").bind("mouseover", function() {
		$(this).children("ul").css("display", "block");
		$(this).children("a").css({
			"color": "#b4a078"
		});
	}).bind("mouseleave", function() {
		$(this).children("ul").css("display", "none");
		$(this).children("a").css({
			"color": "#000000"
		});
	})

});

//主轮播图
// 获取所需元素
var images = document.querySelectorAll('.picCon li img');
var spans = document.querySelectorAll('.mainSlide ol span');
var leftBut = document.getElementById('prev');
var rightBut = document.getElementById('next');
// 定义有参函数
function showImage(index) {
	for(var i = 0; i < images.length; i++) {
		spans[i].index = i; //自定义属性，得到对应的下标
		images[i].index = i; //自定义属性，得到对应的下标
		images[i].style.zIndex = 200 - i; //为图片排列顺序
		images[i].style.opacity = '0'; //将图片透明度全部赋值为0
		spans[i].className = ''; //圆点北京色全部设置为黑色
	}
	//将传入参数下标值的图片透明度赋值为 1
	images[index].style.opacity = '1';
	//将传入参数下标值的图片的背景色赋值为white
	spans[index].className = 'active';
}
showImage(0); //初始设置下标为0的图片和圆点的样式

var count = 1; //获取计数器
// 定义自动轮播函数
function imageMove() {
	// 判断count的值如果能被5整除，则将count重新赋值为0；
	if(count % 5 == 0) {
		count = 0;
	}
	// 将count值当做参数传给函数showImage();
	showImage(count);
	count++; //执行一次 ＋1
}
// 设置两秒调用一次函数imageMove()，并且赋值给imageInitailMove
var timer = setInterval('imageMove()', 5000);
// 向左点击事件
leftBut.onclick = function() {
	// 先清除定时器
	clearInterval(timer);
	// 由于和自动轮方向相反所以要判断count的值当值为0时，重新赋值为4，继续循环
	if(count == 0) {
		count = 5;
	}
	count--;
	showImage(count); //调用函数count先自－
	timer = setInterval('imageMove()', 5000);
}
// 向右的点击事件
rightBut.onclick = function() {
	clearInterval(timer);
	imageMove(); //由于和自动轮播的方向相同所以直接调用
	// 重新为定时器赋值
	timer = setInterval('imageMove()', 5000);
}
// 圆点的点击事件
for(var i = 0; i < spans.length; i++) {
	spans[i].onclick = function(event) {
		clearInterval(timer);
		// 将当前点击的圆点的下标值赋值给count
		count = event.target.index;
		// 调用函数
		showImage(count);
		this.className = "active";
		timer = setInterval('imageMove()', 5000);
	}
}
//鼠标悬停，停止自动播放
var jMainSlide = document.getElementsByClassName("picCon");
jMainSlide[0].onmouseover = function(){
	clearInterval(timer);
}
jMainSlide[0].onmouseleave = function(){
	imageMove(); //由于和自动轮播的方向相同所以直接调用
	// 重新为定时器赋值
	timer = setInterval('imageMove()', 5000);
}


//新品推荐轮播图
$(document).ready(function(e) {
//	/***不需要自动滚动，去掉即可***/
//	time = window.setInterval(function(){
//		$('#rightBtn').click();	
//	},5000);
//	/***不需要自动滚动，去掉即可***/
	linum = $('#newArrival_slide li').length;//图片数量
	w = linum * 270;//ul宽度
	$('.mainlist').css('width', w + 'px');//ul宽度
	$('.swaplist').html($('.mainlist').html());//复制内容
	
	$('#rightBtn').click(function(){
		
		if($('.swaplist,.mainlist').is(':animated')){
			$('.swaplist,.mainlist').stop(true,true);
		}
		
		if($('.mainlist li').length>4){//多于4张图片
			ml = parseInt($('.mainlist').css('left'));//默认图片ul位置
			sl = parseInt($('.swaplist').css('left'));//交换图片ul位置
			if(ml<=0 && ml>w*-1){//默认图片显示时
				$('.swaplist').css({left: '1080px'});//交换图片放在显示区域右侧
				$('.mainlist').animate({left: ml - 1080 + 'px'},'slow');//默认图片滚动				
				if(ml==(w-1080)*-1){//默认图片最后一屏时
					$('.swaplist').animate({left: '0px'},'slow');//交换图片滚动
				}
			}else{//交换图片显示时
				$('.mainlist').css({left: '1080px'})//默认图片放在显示区域右
				$('.swaplist').animate({left: sl - 1080 + 'px'},'slow');//交换图片滚动
				if(sl==(w-1080)*-1){//交换图片最后一屏时
					$('.mainlist').animate({left: '0px'},'slow');//默认图片滚动
				}
			}
		}
	})
	$('#leftBtn').click(function(){
		
		if($('.swaplist,.mainlist').is(':animated')){
			$('.swaplist,.mainlist').stop(true,true);
		}
		
		if($('.mainlist li').length>4){
			ml = parseInt($('.mainlist').css('left'));
			sl = parseInt($('.swaplist').css('left'));
			if(ml<=0 && ml>w*-1){
				$('.swaplist').css({left: w * -1 + 'px'});
				$('.mainlist').animate({left: ml + 1080 + 'px'},'slow');				
				if(ml==0){
					$('.swaplist').animate({left: (w - 1080) * -1 + 'px'},'slow');
				}
			}else{
				$('.mainlist').css({left: (w - 1080) * -1 + 'px'});
				$('.swaplist').animate({left: sl + 1080 + 'px'},'slow');
				if(sl==0){
					$('.mainlist').animate({left: '0px'},'slow');
				}
			}
		}
	})    
});

$(document).ready(function(){
	$('#leftBtn,#rightBtn').hover(function(){
			$(this).fadeTo('fast',1);
		},function(){
			$(this).fadeTo('fast',0.7);
	})

})
	




//人气推荐选项卡
//面向对象编程方式
function tab(obj) {
	var lis = obj.querySelectorAll('.tab_menu li');
	var contents = obj.querySelectorAll('.tab_con');
	for(var i = 0; i < lis.length; i++) {
		lis[i].index = i;
		lis[i].onclick = function() {
			for(var i = 0; i < lis.length; i++) {
				lis[i].className= '';
				contents[i].style.display = 'none';
			}
			this.className = 'active';
			contents[this.index].style.display = 'block';
		};
	};

};

//大家说轮播图
$(document).ready(function(e) {
	/***不需要自动滚动，去掉即可***/
	time = window.setInterval(function(){
		$('#next1').click();	
	},5000);
	/***不需要自动滚动，去掉即可***/
	linum = $('.mainlist1 li').length;//图片数量
	w = linum * 270;//ul宽度
	$('.mainlist1').css('width', w + 'px');//ul宽度
	$('.swaplist1').html($('.mainlist1').html());//复制内容
	
	$('#next1').click(function(){
		
		if($('.swaplist1,.mainlist1').is(':animated')){
			$('.swaplist1,.mainlist1').stop(true,true);
		}
		
		if($('.mainlist1 li').length>4){//多于4张图片
			ml = parseInt($('.mainlist1').css('left'));//默认图片ul位置
			sl = parseInt($('.swaplist1').css('left'));//交换图片ul位置
			if(ml<=0 && ml>w*-1){//默认图片显示时
				$('.swaplist1').css({left: '1080px'});//交换图片放在显示区域右侧
				$('.mainlist1').animate({left: ml - 1080 + 'px'},'slow');//默认图片滚动				
				if(ml==(w-1080)*-1){//默认图片最后一屏时
					$('.swaplist1').animate({left: '0px'},'slow');//交换图片滚动
				}
			}else{//交换图片显示时
				$('.mainlist1').css({left: '1080px'})//默认图片放在显示区域右
				$('.swaplist1').animate({left: sl - 1080 + 'px'},'slow');//交换图片滚动
				if(sl==(w-1080)*-1){//交换图片最后一屏时
					$('.mainlist1').animate({left: '0px'},'slow');//默认图片滚动
				}
			}
		}
	})
	$('#prev1').click(function(){
		
		if($('.swaplist1,.mainlist1').is(':animated')){
			$('.swaplist1,.mainlist1').stop(true,true);
		}
		
		if($('.mainlist1 li').length>4){
			ml = parseInt($('.mainlist1').css('left'));
			sl = parseInt($('.swaplist1').css('left'));
			if(ml<=0 && ml>w*-1){
				$('.swaplist1').css({left: w * -1 + 'px'});
				$('.mainlist1').animate({left: ml + 1080 + 'px'},'slow');				
				if(ml==0){
					$('.swaplist1').animate({left: (w - 1080) * -1 + 'px'},'slow');
				}
			}else{
				$('.mainlist1').css({left: (w - 1080) * -1 + 'px'});
				$('.swaplist1').animate({left: sl + 1080 + 'px'},'slow');
				if(sl==0){
					$('.mainlist1').animate({left: '0px'},'slow');
				}
			}
		}
	})    
});

$(document).ready(function(){
	$('#leftBtn,#rightBtn').hover(function(){
			$(this).fadeTo('fast',1);
		},function(){
			$(this).fadeTo('fast',0.7);
	})

})

