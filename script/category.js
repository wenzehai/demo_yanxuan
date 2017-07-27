//主轮播图
// 获取所需元素
var images = document.querySelectorAll('.picCon li img');
var spans = document.querySelectorAll('.categorySlideBox ol span');
var prev = document.getElementById('prev1');
var next = document.getElementById('next1');
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
	if(count % 2 == 0) {
		count = 0;
	}
	// 将count值当做参数传给函数showImage();
	showImage(count);
	count++; //执行一次 ＋1
}
// 设置两秒调用一次函数imageMove()，并且赋值给imageInitailMove
var timer = setInterval('imageMove()', 5000);
// 向左点击事件
prev.onclick = function() {
	// 先清除定时器
	clearInterval(timer);
	// 由于和自动轮方向相反所以要判断count的值当值为0时，重新赋值为4，继续循环
	if(count == 0) {
		count = 2;
	}
	count--;
	showImage(count); //调用函数count先自－
	timer = setInterval('imageMove()', 5000);
}
// 向右的点击事件
next.onclick = function() {
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
//var lis = document.querySelectorAll(".picCon li");
//for(var i= 0; i < lis.length; i++) {
//	lis[i].onmousenter = function(){
//		prev.style.display = "block";
//		next.style.display = "block";
//		clearInterval(timer);
//	}
//	lis[i].onmouseout = function(){
//		prev.style.display = "";
//		next.style.display = "";
//		imageMove(); //由于和自动轮播的方向相同所以直接调用
//		// 重新为定时器赋值
//		timer = setInterval('imageMove()', 5000);
//	}
//}
