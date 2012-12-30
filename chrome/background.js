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

var facebookUrls = [
	"http://*.facebook.com/*",
	"https://*.facebook.com/*"
];

var injectMultipleScripts = function(tabid, scripts, callback) {
	console.log("injecting: "+scripts);
	async.forEachSeries(scripts, function(file, clb){
		console.log("injecting "+file);
		chrome.tabs.executeScript(tabid, { "file": file }, function() {
			//simply passing clb doesn't work because async treats the argument given to this function as error
			clb();
		});
	}, callback);
};

var handleContextMenuClick = function(info, tab) {
	console.log("Clicked "+info.menuItemId);
	if (info.menuItemId == "loadolder") {
		injectMultipleScripts(tab.id, ["jquery.js", "underscore.js", "libui.js", "loadolder.js"]);
	} else if (info.menuItemId == "loadcomments") {
		injectMultipleScripts(tab.id, ["jquery.js", "underscore.js", "libui.js", "loadcomments.js"]);
	}
};

chrome.contextMenus.onClicked.addListener(handleContextMenuClick);

// Set up context menus at install time.
chrome.runtime.onInstalled.addListener(function() {
	console.log("installed extension, now setting up");
	chrome.contextMenus.create({
		type: "normal",
		id: "loadolder",
		title: "Load all older posts",
		documentUrlPatterns: facebookUrls
	});
	chrome.contextMenus.create({
		type: "normal",
		id: "loadcomments",
		title: "Load all comments",
		documentUrlPatterns: facebookUrls
	});
});