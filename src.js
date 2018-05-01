document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("imdbfilm").addEventListener("click", imdbfilm);
	document.getElementById("imdbepisood").addEventListener("click", imdbepisood);
	document.getElementById("imdbnaitleja").addEventListener("click", imdbnaitleja);
});
function imdbfilm(){
		var d = document.getElementById("navbar-query").value;
		var webpage = "https://www.imdb.com/find?ref_=nv_sr_fn&q="+ d +"&s=tt"
		webpage.replace(/\s/g, '+');
		window.open(webpage);
	}
	function imdbepisood(){
		var d = document.getElementById("navbar-query").value;
		var webpage = "https://www.imdb.com/find?ref_=nv_sr_fn&q="+ d +"&s=ep"
		webpage.replace(/\s/g, '+');
		window.open(webpage);
	}
	function imdbnaitleja(){
		var d = document.getElementById("navbar-query").value;
		var webpage = "https://www.imdb.com/find?ref_=nv_sr_fn&q="+ d +"&s=nm"
		webpage.replace(/\s/g, '+');
		window.open(webpage);
	}
		