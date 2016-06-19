(function($self, $application, undefined) {
	
	$self.preference = function() {
		
		var zoom = app.activeDocument.activeView.zoom;
		
		app.preferences.setBooleanPreference(
			'Guide/ShowPixelGrid',
			( ! app.preferences.getBooleanPreference('Guide/ShowPixelGrid'))
		);
		
		app.activeDocument.activeView.zoom = 1
		
		app.activeDocument.activeView.zoom = zoom;
		
		app.redraw();
		
	};
	
}((app.CTX = (app.CTX || {})), app, undefined));
