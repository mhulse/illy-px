(function () {
	
	'use strict';
	
	var csi = new CSInterface();
	
	// Reloads extension panel
	function reloadPanel() {
		
		location.reload();
		
	}
	
	function closePanel() {
		
		csi.closeExtension();
		
	}
	
	// Loads / executes a jsx file
	function loadJSXFile(pPath) {
		
		var scriptPath = csi.getSystemPath(SystemPath.EXTENSION) + pPath;
		
		console.log(scriptPath)
		
		try {
			
			csi.evalScript('$.evalFile("' + scriptPath + '")');
			
		} catch(error) {
			
			alert('error ' + error);
			
		}
		
	}
	
	function init() {
		
		var close = window.document.getElementById('close');
		var reload = window.document.getElementById('reload');
		var pxgrid = window.document.getElementById('pxgrid');
		var pxpreview = window.document.getElementById('pxpreview');
		
		close.addEventListener('click', function() {
			
			closePanel();
			
		});
		
		reload.addEventListener('click', function() {
			
			reloadPanel();
			
		});
		
		pxgrid.addEventListener('click', function() {
			
			csi.evalScript('app.CTX.preference()');
			
		});
		
		pxpreview.addEventListener('click', function() {
			
			// https://forums.adobe.com/thread/1405101
			csi.evalScript('app.CTX.menu()');
			
		});
		
		//loadJSXFile("/scripts/jsx/preference.jsx");
		
		//csi.evalScript('app.preferences.getBooleanPreference("Guide/ShowPixelGrid")', function(result) {
		//	console.log(typeof result)
		//});
		
		// https://github.com/ten-A/Extend_Script_experimentals/blob/master/preferencesKeeper.jsx
		//csi.evalScript('app.preferences.setBooleanPreference("Guide/ShowPixelGrid", !app.preferences.getBooleanPreference("Guide/ShowPixelGrid"));');
		// https://forums.adobe.com/message/6854872#6854872
		//var units = 0; //(0 to 6)
		//app.preferences.setIntegerPreference("rulerType", units);
		/*Unit list
		0 : point
		1 : pica
		2 : inch
		3 : mm
		4 : cm
		5 : H/Q
		6 : px
		*/
		
		
		//csi.evalScript('app.activeDocument.activeView.zoom = 1');
		
		//csi.evalScript('app.redraw()');
		
	}
	
	init();
	
}());
