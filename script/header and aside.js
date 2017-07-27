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

