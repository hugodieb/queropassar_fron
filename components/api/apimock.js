var logged_user = null;


export default {
  list_professores: _mockasync(list_professores),
  list_academys: _mockasync(list_academys),  
  whoami: _mockasync(whoami),
  login: _mockasync(login),
  logout: _mockasync(logout),
  savePerfilUserCurrent: _mockasync(savePerfilUserCurrent),

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

function list_academys(){
  var academys = [
            {titulo: "EPCAR", descricao: "Colégio militar Cadetes do Ar",
             avatar: 'epcar.png', date: "04/01/2018", vagas: 200, salario: ""
            },
            {titulo: "EEAR", descricao: "Escola de Especialistas da Aeronática",
             avatar: 'eear.png', date: "02/05/2018", vagas: 180, salario: ""

            },
            {titulo: "COLÉGIO NAVAL", descricao: "Colégio militar da Marinha",
             avatar: 'colegionaval.png', date: "sem data", vagas: 80, salario: ""
            },
            {titulo: "APMBB", descricao: "Academia de Polícia Militar SP",
             avatar: 'barrobranco.jpg', date: "04/01/2018", vagas: 250, salario: "R$ 5768,90"
            },
        ];
    var academys = _clone(academys)

    return academys;

}


function login(username, password) {
  if (password){
    if(username == 'Leonardo'){
      logged_user = {
        username: username,
        firtsName: 'Leonardo',
        lastName: 'Lobato',
        birthDate: '14031985',
        cpf: '82567053298',
        email: 'leo@leo.com',
        cellPhone: '12912340909'
      };
    }else {
      logged_user = {
        username: username,
        firtsName: 'Fulano',
        lastName: 'da Silva',
        birthDate: '',
        cpf: '',
        email: '',
        cellPhone: ''
      }
    }
  }
  return logged_user
}

function savePerfilUserCurrent(userPerfil){
  Object.assign(logged_user, userPerfil);
  return logged_user;
}

function logout() {
  return logged_user = null;
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
