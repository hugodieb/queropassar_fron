export default {
  is_profile_complete,
}

function is_profile_complete($store){
  var user = $store.state.logged_user;
  is_complete = user && user.first_name && user.last_name && user.birth_date && user.email && user.cpf && user.cell_phone;
  return is_complete;
}
