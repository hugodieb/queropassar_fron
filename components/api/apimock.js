var logged_user = null;

export default {
  list_professores: _mockasync(list_professores),
  whoami: _mockasync(whoami),
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
