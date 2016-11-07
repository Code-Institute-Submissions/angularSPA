//helper function for checking a postcode against a json postcode list
function checkPostcode (postcodes, client_pcode){
  for (var i = 0; i < postcodes.length; i++) {    
    if(postcodes[i].postcode==client_pcode.toUpperCase()){ 
    	return true;
    };          
  };           
  return false;
};