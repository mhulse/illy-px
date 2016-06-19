(function($self, $application, undefined) {
	
	$self.menu = function() {
		
		var zoom = app.activeDocument.activeView.zoom;
		
		app.executeMenuCommand('raster');
		
		app.activeDocument.activeView.zoom = 1
		
		app.activeDocument.activeView.zoom = zoom;
		
		app.redraw();
		
	};
	
}((app.CTX = (app.CTX || {})), app, undefined));
