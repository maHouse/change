childNodes与children、firstChild与firstElementChild、lastChild与lastElementChild、nextSibling与nextElementSibling、previousSibling与previousElementSibling的区别

相同之处
1.自身是属性，最终得到的都是节点对象，是个对象哟！

不同之处
1.IE6、7、8的使用中，firstChild、lastChild、nextSibling、previousSibling得到的均是相应的元素节点，
但在非此版本浏览器中，得到的是相应的节点对象，可能是元素节点、也可能是文本节点。

2.firstElementChild、lastElementChild、nextElementChild、previousElementChild  IE6、7、8不支持，
除此之外，得到的是相应的元素节点，没有文本节点。

判断方法：

function( obj ) {
	
	if ( obj.firstElementChild ) {
		
		return obj.firstElementChild;
	} else {
	
		return obj.firstChild;
	}
}

3.childNodes在IE中获取到元素节点，非IE中得到的是元素节点和文本节点，children获取元素节点没有浏览器差异。

解决方案：
if ( childNode.nodeName == "#text" ) continue;

nodeName document.body.nodeName;

如果是元素节点，返回的是元素的标签名

如果是属性，返回属性名称

如果是其他类型的，返回相应的不同节点类型的名称

或者

if ( childNode.nodeType != "3" ) continue; //如果是元素或文本内容，继续执行，否则跳出

Element 元素的nodeType 是1

Attr   属性的nodeType 是 2

Text   文本或元素的内容 的nodeType  是 3

Document 文档的根节点，代表整个文档  是 9

DocumentFragment  轻量级的Document  是 11

DocumentFragment的介绍https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment

4.parentNode 获取父元素，，没有浏览器兼容差异
