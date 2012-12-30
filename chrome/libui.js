// Copyright (c) 2012 Jonas Kuemmerlin <rgcjonas@gmail.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

//user interface components for loadall
function showui(/* string */ title, /* string */ line0, /* string */ line1, /* function */ cancel) {
	$ui = $("#loadall-ui-div");
	
	//no ui div? create it!
	if ($ui.length < 1) {
		//create the div
		$ui = $("<div>");
		$ui.attr("id", "loadall-ui-div");
		$ui.css({
			"background-color": "#efefef",
			"position": "fixed",
			"top": "50%",
			"left": "50%",
			"font": "20px sans-serif",
			"padding": "20px",
			"box-shadow": "0 0 5px 5px #888"
		});
		$("body").append($ui);
		
	};
	
	//in case it was hidden before
	$ui.css("display", "block");
	
	//FIXME: this is really ugly
	$ui.html("<strong>"+title+"</strong><br />"+line0+"<br />"+line1+
			 ((typeof cancel == "function") ? "<br /><div style='text-align: right'><a href='#'>Cancel</a></div>" : ""));
	
	//center it
	$ui.css({
		"margin-left": "-"+($ui.width()/2+20)+"px",
		"margin-top": "-"+($ui.height()/2+20)+"px"
	});
	
	//register click handler
	$("a", $ui).on('click', cancel);
}

function hideui() {
	$("#loadall-ui-div").fadeOut(1000);
}
