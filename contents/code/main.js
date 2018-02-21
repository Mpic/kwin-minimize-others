registerShortcut("Minimize all but active.",
		"Minimize all but active.",
		"Meta+Ctrl+,",
		function() {
			var clients = workspace.clientList();
			for (var i=0; i<clients.length; i++) {
				if(clients[i].desktop == workspace.currentDesktop)
				{
					if( true != clients[i].active ) 
					{
						clients[i].minimized = true;
					}
				}
			}
		});

