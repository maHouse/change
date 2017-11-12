var flag1 = false, flag2 = false;

if ( relatedTarget !== null ) {
	var parented = relatedTarget.parentNode;
	do{
		if ( parented === outerList1 || relatedTarget === outerList1 ) {
			flag1 = true;
			break;
		} else if ( parented === outerList2 || relatedTarget === outerList2 ) {
			flag2 = true;
			break;
		} else {
			parented = parented.parentNode;
		}
	} while( parented !== null );
}

var untilEvent = {
	addEvent:function( element, type, handler ) {
		if ( element.addEventListener ) {
			element.addEventListener( type, handler,false );
		} else if ( element.attachEvent ) {
			element.attachEvent( "on" + type, handler );
		} else {
			element[ 'on' + type ] = handler;
		}
	},
	getEvent:function( event ) {
		return event ? event : window.event;
	},
	getTarget:function( event ) {
		return event.target || event.srcElement;
	},
	getRelated:function( event ) {
		if ( event.relatedTarget ) {
			return event.relatedTarget;
		} else if ( event.toElement ) {
			return event.toElement;
		} else if ( event.fromElement ) {
			return event.fromElement;
		} else {
			return null;
		}
	}
};

var timeDec1, timeAdd1, timeAdd2, timeDec2;

function getOuter() {
	var outer = document.getElementById("outer");
	untilEvent.addEvent( outer, "mouseover", callBackOver );
	untilEvent.addEvent( outer, "mouseout", callBackOut );
}

function callBackOut( event ) {
	var event = untilEvent.getEvent( event ),
		relatedTarget = untilEvent.getRelated( event ),
		outerList1 = document.getElementById("outerList1"),
		inter1 = document.getElementById("inter1"),
		outerList2 = document.getElementById("outerList2"),
		inter2 = document.getElementById("inter2"),
		flag1 = false,
		flag2 = false;

	if ( relatedTarget !== null ) {
		var parented = relatedTarget.parentNode;
		do{
			if ( parented === outerList1 || relatedTarget === outerList1 ) {
				flag1 = true;
				break;
			} else if ( parented === outerList2 || relatedTarget === outerList2 ) {
				flag2 = true;
				break;
			} else {
				parented = parented.parentNode;
			}
		} while( parented !== null );
	}

	if ( !flag1 ) {
		
	}
}









