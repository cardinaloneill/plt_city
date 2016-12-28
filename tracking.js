function dcsMultiTrack() { 
	if (arguments.length != 0) { 
		//for testing
		for (var i=0;i<arguments.length;i+=2) { 
			try {
				console.log(arguments[i] + " = " + arguments[i+1]);
			} catch(e) {}

			// alert(arguments[i] + " = " + arguments[i+1]);
		}
	}	
} 
