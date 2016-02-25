var parseQuery = {
	
getPeople: function(str){
	return str.match(/@\w+/g) || ''
},

getTimeIn: function(str){

}


}

module.exports = parseQuery;