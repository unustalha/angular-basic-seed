app.factory('LocalFunction', ['$window', LocalFunction]);

function LocalFunction($window) {
    
    var calls = {
        showLoader: showLoader
    };

    function showLoader(Show) {
        if(Show==1)
        	$('.loader').css('display', 'block');
       	else
       		$('.loader').css('display', 'none');
    }
    return calls;
}