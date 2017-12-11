export default {
  is_profile_complete,
}

function is_profile_complete($store){
	debugger
	var user = $store.state.logged_user;
  	var is_complete = user && user.firtsName && user.lastName && user.birthDate && user.email && user.cpf && user.cellPhone;
  return is_complete;
}
