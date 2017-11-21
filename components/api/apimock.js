var logged_user = null;


export default {
  list_professores: _mockasync(list_professores),
  whoami: _mockasync(whoami),
  login: _mockasync(login),
  logout: _mockasync(logout),
};

function list_professores(){
  var professores = [{nome: "Albert Einstein" , disciplina: "Física", avatar: '/images/einstein.jpeg' },
                     {nome: "Rene", disciplina: "Matematica", avatar: '/images/rene.jpg' },
                     {nome: "Platão", disciplina: "Filosofia", avatar: '/images/platao.jpeg' },
                     {nome: "Pasquale Cipro Neto", disciplina: "Português", avatar: '/images/pasquale.jpeg' },
  ];
  var professores = _clone(professores)

  return professores;

}

function login(username, password) {
  if (password){
    if(username == 'Leonardo'){
      logged_user = {
        username: username,
        first_name: 'Leonardo',
        last_name: 'Lobato',
        birth_date: '14/03/1985',
        email: 'leo@leo.com',
        cpf: '1234567890-1',
        telefone: '(12)91234-0909'
      };
    }else {
      logged_user = {
        username: username,
        first_name: 'Fulano',
        last_name: 'da Silva',
        birth_date: '',
        email: '',
        cpf: '',
        telefone: ''
      }
    }
  }
  return logged_user
}

function logout() {
  this.logged_user = null;
}

function whoami(){
    return logged_user ? {authenticated: true,
                          user: logged_user} :
                          {authenticated: false};
}

function _mockasync(f){
    function mocked(){
        var res = f.apply(this, arguments);
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve({data: res});
            }, 600);
        });
    }
    return mocked;
}

function _clone(obj){
    return JSON.parse(JSON.stringify(obj));
}
