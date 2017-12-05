var logged_user = null;


export default {
  list_professores: _mockasync(list_professores),
  list_courses: _mockasync(list_courses),
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

function list_courses(){
  var academias = [
            {titulo: "EPCAR", descricao: "A Epcar possui o Curso Preparatório de Cadetes do Ar (CPCAr),\
                         que tem como uma de suas finalidades a preparação de alunos,\
                         sob o regime de internato, para ingressar no Curso de Formação de Oficiais Aviadores\
                         (CFOAV) da Academia da Força Aérea (AFA).",
                         avatar: 'epcar.png'
            },
            {titulo: "EEAR", descricao: "A Academia da Força Aérea (AFA), situada na cidade de Pirassununga-SP,\
                                é um estabelecimento de ensino superior, que integra o Sistema de Formação e\
                                Aperfeiçoamento do Comando da Aeronáutica. Sua finalidade é formar Oficiais Aviadores,\
                                Intendentes e de Infantaria da Força Aérea Brasileira, incentivando e aprimorando em cada\
                                Cadete os atributos intelectuais, morais e físicos, essenciais ao Oficial da Aeronáutica.",
                                avatar: 'eear.png'

            },
            {titulo: "COLÉGIO NAVAL", descricao: "Situado num recanto de invejável beleza do litoral do Estado do Rio de Janeiro,\
                                     na Enseada Batista das Neves, cidade de Angra dos Reis, e localizado a poucas horas\
                                     dos dois maiores centros urbanos brasileiros – Rio de Janeiro e São Paulo – encontra-se\
                                     o Colégio Naval, incrustado entre montanhas e o mar. Preparar seus alunos para a Escola Naval,\
                                     onde são formados os Oficiais da Marinha, despertando-lhe o interesse pela carreira naval é a sua finalidade. ",
                                     avatar: 'colegionaval.png'
            },
            {titulo: "APMBB", descricao: "A Academia de Polícia Militar do Barro Branco tem como objetivo formar,\
                                      por meio do Curso de Formação de Oficiais (CFO), com embasamento teórico e prático,\
                                      o profissional, cujo posto inicial é o de aspirante a oficial, a fim de que o mesmo\
                                      esteja capacitado à comandar, instruir, capacitar e especializar os membros das\
                                      fileiras da Polícia Militar do Estado de São Paulo.",
                                      avatar: 'barrobranco.jpg'
            },
        ];
    var academias = _clone(academias)

    return academias;

}

function login(username, password) {
  if (password){
    if(username == 'Leonardo'){
      logged_user = {
        username: username,
        first_name: 'Leonardo',
        last_name: 'Lobato',
        birth_date: '14031985',
        cpf: '82567053298',
        email: 'leo@leo.com',
        cell_phone: '12912340909'
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
