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

var timeout;

function handleCancel() {
	clearTimeout(timeout);
	hideui();
}

function loadComments(icount_, beginTime_) {
	var icount = icount_ || 0;
	var beginTime = beginTime_ || new Date();
	
	showui("Loading all comments...", "Iteration "+icount, 
	       "Time elapsed: "+Math.floor((new Date() - beginTime)/1000)+"s", handleCancel);
	
	//find .UFIPagerRow
	$pagers = $(".UFIPagerRow");
	if ($pagers.length > 0) {
		$pagers.each(function(i, e){
			//search child links
			$("a:link", e).each(function(j, e) {
				//click it
				e.click();
			});
		});
		//retry in 0.5 seconds
		timeout = setTimeout(_.bind(loadComments, window, icount + 1, beginTime), 500);
	} else {
		showui("Loading all comments...", "Done.", "Total time: "+Math.floor((new Date() - beginTime)/1000)+"s");
		setTimeout(hideui, 1000);
	}
}

loadComments();
