var logged_user = null;


export default {
  list_professores: _mockasync(list_professores),
  list_academys: _mockasync(list_academys),
  list_freeVideos: _mockasync(list_freeVideos),  
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
           avatar: 'epcar.png', date: "04/01/2018", vagas: 200,
           requisitos: "Estar cursando ou ter concluído o último ano do Ensino Fundamental",
           idade: "de 14 a 17 anos", sexo: "masculino e feminino",
           disciplinas: "Português, Matematica e Inglês"
          },
          {titulo: "EEAR", descricao: "Escola de Especialistas da Aeronática",
           avatar: 'eear.png', date: "02/05/2018", vagas: 180,
           requisitos: "Estar cursando ou ter concluído o 3º ano do Ensino Médio",
           idade: "Máximo de 24 anos", sexo: "masculino e feminino",
           disciplinas: "Português, Matematica, Física e Inglês"

          },
          {titulo: "COLÉGIO NAVAL", descricao: "Colégio militar da Marinha",
           avatar: 'colegionaval.png', date: "sem data", vagas: 80,
           requisitos: "Estar cursando ou ter concluído o último ano do Ensino Fundamental",
           idade: "de 14 a 17 anos", sexo: "masculino e feminino",
           disciplinas: "Português, Matematica, Inglês, Estudos Sociais e Redação"
          },
          {titulo: "APMBB", descricao: "Academia de Polícia Militar SP",
           avatar: 'barrobranco.jpg', date: "04/01/2018", vagas: 250,
           requisitos: "Estar cursando ou ter concluído o 3º ano do Ensino Médio",
           idade: "máxima de 30 anos", sexo: "masculino e feminino",
           disciplinas: "Português, Matemática, História, Geografia, Sociologia, Filosofia, Inglês e Redação"
          },
        ];
    var academys = _clone(academys)

    return academys;

}

function list_freeVideos(){
  var demoVideos = [        
        {demoVideo: "https://www.youtube.com/embed/XySESQb3TWE",
         title: "Matematica - Polinômios", professor: "Jairo Luis da Silva"
        },
        {demoVideo: "https://www.youtube.com/embed/MBRmFHUi-ak",
         title: "Fisica - Cinematica", professor: "Rodrigo Buchfink"
        },
        {demoVideo: "https://www.youtube.com/embed/YZpQqZ14GI8",
         title: "Português - Ortografia", professor: "Aline Ferraz"
        },
        {demoVideo: "https://www.youtube.com/embed/NxTVJwxsdU8",
         title: "Geografia - Vegetação", professor: "Giordano Bombardelli"
        },
      ];
  var demoVideos = _clone(demoVideos);

  return demoVideos;
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
