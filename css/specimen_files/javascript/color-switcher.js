(function() {
	var btnSwitchColor = document.getElementsByClassName("fs-section_color_button");
	var boxSwitchColor = document.getElementsByClassName("fs-section_switch-color-box");

	for(var i = 0; i < btnSwitchColor.length; i++) {
		btnSwitchColor[i].addEventListener("click", function() {
			var colorOne = this.getAttribute("data-color-one");
			var fontColor = this.getAttribute("data-font-color");
			var boxID = this.getAttribute("data-color-id");
			boxSwitchColor[boxID].style.backgroundColor = colorOne;

			// Add color to the font
			var fontColorSwitchBox = boxSwitchColor[boxID].querySelectorAll(".fs-switch-box_font-color");
			for(var j = 0; j < fontColorSwitchBox.length; j++) {
				fontColorSwitchBox[j].style.setProperty("color", fontColor, "important")
			}
		})
	}

})();