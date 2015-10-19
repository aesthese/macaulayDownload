chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		
		
		
		var actualCode = ['function insertAfter(referenceNode, newNode) {',
		                  '    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);',
		                  '}',
		                  'var dl = document.createElement(\'a\');',
		                  ' dl.href = jwplayer(\'mlp\').getPlaylistItem()[\'file\'];',
		                  'dl.innerHTML = \'Download\'',
		                  'dl.download = \'Download\'',
		                  'var div = document.getElementById(\'mlp\');',
		                  'insertAfter(div, dl);'].join('\n');
		
		
		var script = document.createElement('script');
		script.textContent = actualCode;
		(document.head||document.documentElement).appendChild(script);
		script.parentNode.removeChild(script);
		
		
		
		

	}
	}, 10);
});