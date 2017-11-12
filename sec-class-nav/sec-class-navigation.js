window.onload = function() {

	var uls = document.getElementsByTagName("ul")[0].children;	

	//好处，用一个Javascript就可以任你随便添加下拉列表
	//注释部分，文字注释抛开，有同样的功能
	
	for ( var i = 0, len = uls.length; i < len; i++ ) {

		var liss = uls[ i ].firstElementChild,
			liss2 = uls[ i ].lastElementChild;

			//得到的是节点对象，是uls的每个li的最后一个子节点的节点对象
		
		if ( liss2 !== liss ) {

			uls[ i ].onmouseover = function() {

				this.lastElementChild.style.display = "block";

				// secNav( this, "block" );
				
				//liss2代替this.getElementsByTagName("ul")[0]的话，因为liss2并没有
				//受到判断条件控制，后者是属于调用上下文的值，受到了控制
				//可以用lastElementChild来代替getElementsByTagName("ul")[0]
			}

			uls[ i ].onmouseout = function() {

				this.lastElementChild.style.display = "none";

				// secNav( this, "none" );
			}

		} 
	}

	// function secNav( obj, secClass ) {
	// 	obj.getElementsByTagName("ul")[0].style.display = secClass;
	// }
}
