#!/bin/bash
RESTORE='\033[0m'
RED='\033[00;31m'
GREEN='\033[00;32m'
YELLOW='\e[0;33m'

HOST=ec2-52-14-161-15.us-east-2.compute.amazonaws.com


export PROJ_BASE="$(dirname ${BASH_SOURCE[0]})"
CD=$(pwd)
cd $PROJ_BASE
export PROJ_BASE=$(pwd)
cd $CD



#. ci/funcs.sh

function devhelp {
    echo -e "${GREEN}devhelp${RESTORE}           Imprime este ${RED}help${RESTORE}"
    echo -e ""
    echo -e "${GREEN}dkbuild${RESTORE}           Cria a imagem docker desse projeto"
    echo -e ""
    echo -e "${GREEN}dkrun${RESTORE}           	 Roda a imagem docker desse projeto"
    echo -e ""    
    echo -e "${GREEN}sendcode${RESTORE}          Envia o codigo pro servidor de produção"
    echo -e ""    
}

function dkbuild {
    CD=$(pwd)
    cd $PROJ_BASE
    dorun "docker build -t queroestudarfront ." "Build docker image"
    exitcode=$?
    cd $CD
    return $exitcode
}

function dkrun {
    CD=$(pwd)
    cd $PROJ_BASE
    dorun "docker run -it -p 3000:3000 queroestudarfront start.sh" "Build docker image"
    exitcode=$?
    cd $CD
    return $exitcode
}


function sendcode {
    CD=$(pwd)
    cd $PROJ_BASE
    rsync -a --progress --delete --exclude=.git --exclude=node_modules . ubuntu@$HOST:./queropassar_front
    exitcode=$?
    cd $CD
    return $exitcode
}

function echo_red {
    echo -e "\e[31m$1\e[0m";
}

function echo_green {
    echo -e "\e[32m$1\e[0m";
}

function echo_yellow {
    echo -e "${YELLOW}$1${RESTORE}";
}

function now_milis {
    date +%s%N | cut -b1-13
}

function dorun {
    cmd="$1"
    name="$2"
    echo ----------------------------------
    echo_green "STARTING $name ..."
    echo "$cmd"
    t1=$(now_milis)
    $cmd
    exitcode=$?
    t2=$(now_milis)
    delta_t=$(expr $t2 - $t1)
    if [ $exitcode == 0 ]
    then
        echo_green "FINISHED $name in $delta_t ms"
        echo ----------------------------------
    else
        echo_red "ERROR! $name (status: $exitcode, time: $delta_t ms)"
        echo ----------------------------------
        return $exitcode
    fi
}

echo_green "Bem vindo ao ambiente de desenv. do buser_front:"
echo_green "Dica: autocomplete funciona pros comandos abaixo ;)"
echo_red   "------------------------------------------------------------------------"
devhelp