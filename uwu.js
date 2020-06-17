document.title="UwU"

if (window.location.href == "https://www.google.com/"){
	var oldLogo = document.getElementById('hplogo');
	var newLogo = document.createElement('img');
	newLogo.id = "User-Logo";
	newLogo.border = 'no'
	newLogo.src = "https://i.ibb.co/6Pjt3CQ/icon.png"
	oldLogo.parentNode.replaceChild(newLogo, oldLogo);
}
{/* <a href="https://ibb.co/Z8qgnD9"><img src="https://i.ibb.co/6Pjt3CQ/icon.png" alt="icon" border="0" /></a> */}
{/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/TLs5Ksv/icon-128.png" alt="icon-128" border="0" /></a> */}
if (window.location.href.substring(0,30) == "https://www.google.com/search?"){
	var oldLogo = document.getElementById('logo');
	var newLogo = document.createElement('img');
	newLogo.id = "User-Logo";
	newLogo.border = 'no'
	newLogo.src = "https://i.ibb.co/TLs5Ksv/icon-128.png"
	oldLogo.parentNode.replaceChild(newLogo, oldLogo);
}

var replaceArry = [
	[/google/gi,'UwU'],
	[/Google/gi,'UwU'],
  [/Gmail/gi,'UwUmail'],
];
var numTerms = replaceArry.length;
var txtWalker = document.createTreeWalker (
	document.body,
	NodeFilter.SHOW_TEXT,
	{acceptNode: function (node) {
		if (node.nodeValue.trim() )
		return NodeFilter.FILTER_ACCEPT;
		return NodeFilter.FILTER_SKIP;
	}
	},
false
);

var txtNode = null;

while (txtNode = txtWalker.nextNode () ) {
	var oldTxt = txtNode.nodeValue;

	for (var J = 0; J < numTerms; J++) {
		oldTxt = oldTxt.replace (replaceArry[J][0], replaceArry[J][1]);
	}
	txtNode.nodeValue = oldTxt;
}

var observer = new MutationObserver(function(mutations) {
	// For the sake of...observation...let's output the mutation to console to see how this all works
	mutations.forEach(function(mutation) {
		walk(document.body);
	});
});

// Notify me of everything!
var observerConfig = {
	attributes: true,
	childList: true,
	characterData: true
};

// Node, config
// In this case we'll listen to all changes to body and child nodes
var targetNode = document.body;
observer.observe(targetNode, observerConfig);


function walk(node)
{
	var ignore = { "STYLE":0, "SCRIPT":0, "NOSCRIPT":0, "IFRAME":0, "OBJECT":0, "PRE":0 };

	var child, next;

if (node.nodeName.toLowerCase() == 'input' || node.nodeName.toLowerCase() == 'textarea' || (node.classList && node.classList.contains('ace_editor'))) { return; }

	if (node.tagName in ignore) return;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

var faces=["(・`ω´・)",";;w;;","owo","UwU",">w<","^w^"];

function handleText(textNode)
{

	var v = textNode.nodeValue;

	v = v.replace(/(?:r|l)/g, "w");
	v = v.replace(/(?:R|L)/g, "W");
	v = v.replace(/n([aeiou])/g, 'ny$1');
	v = v.replace(/N([aeiou])/g, 'Ny$1');
	v = v.replace(/N([AEIOU])/g, 'Ny$1');
	v = v.replace(/ove/g, "uv");
	v = v.replace(/\!+/g, " "+ faces[Math.floor(Math.random()*faces.length)]+ " ");

	textNode.nodeValue = v;
}