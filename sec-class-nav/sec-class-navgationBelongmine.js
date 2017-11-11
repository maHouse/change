window.onload = function() {
//当JS的外链放在文档的上面的时候，这个必须加的，放到下面可不用加，
//意思是当文档加载完毕时候再执行
	var uls = document.getElementsByTagName("ul")[0].children;//完全得到了子元素节点，不是后代节点，不是携带文本节点哟
	//children和childNodes的区别，前者是元素的节点，后者还包括文本节点和注释，
	//不过都是子节点，不是后代节点
	//详细的知识，下次着重补充(已经获得了需要的li节点，元素节点)
		classhall = document.getElementById("classhall"),
		studycenter = document.getElementById("studycenter"),
		classhallJs = classhall.getElementsByTagName("ul")[0],
		studycenterJs = studycenter.getElementsByTagName("ul")[0];

	console.log( liss );
	classhall.onmouseover = function() {
		classhallJs.style.display = "block";
	};
	classhall.onmouseout = function() {
		classhallJs.style.display = "none";
	}

	studycenter.onmouseover = function() {
		studycenterJs.style.display = "block";
	}
	studycenter.onmouseout = function() {
		studycenterJs.style.display = "none";
	}
}
