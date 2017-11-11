window.onload = function() {

	var uls = document.getElementsByTagName("ul")[0].children;	

	for ( var i = 0, len = uls.length; i < len; i++ ) {

		var liss = uls[ i ].firstElementChild,
			liss2 = uls[ i ].lastElementChild;

		if ( liss != liss2 ) {
			
			uls[ i ].onmouseover = function() {
				liss2.style.display = "block";
			}

			uls[ i ].onmouseout = function() {
				liss2.style.display = "none";
			}

		} else {
			function stopHandler( event ) {
				window.event ? window.event.cancleBubble = true : event.stopPropagation();
			}
		}
	}
}
