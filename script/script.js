var menu = {
	underlineBlock: document.querySelector('.underline'),
	
	home: document.querySelector('.home'),

	moving: function(e) {
		var eLeft = e.target.offsetLeft;
		var eWidth = e.target.offsetWidth;
		menu.underlineBlock.style.left = eLeft + "px";
		menu.underlineBlock.style.width = eWidth + "px";
	}
}

var menuLinks = document.querySelectorAll('.menu_links');
for (var i = 0; i < menuLinks.length; i++) {
	(function(i) {
		menuLinks[i].addEventListener('mouseover', menu.moving)
	})(i);
};
