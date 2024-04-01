var opr = " "
var On = false
function allumer(val){
    if(val){
        document.getElementById('resultat').innerHTML = '0'
        document.getElementById('operation').innerHTML = ' '
        opr = " "
        On = true
    }else{
        document.getElementById('resultat').innerHTML = ''
        document.getElementById('operation').innerHTML = ' '
        On = false
    }
    return val
}
function ajout(champ){
    if(On){
        opr +=  champ
        document.getElementById('operation').innerHTML = opr
    }
}

function calcule(){
    if(On){
        var valeur = document.getElementById('operation').textContent
        document.getElementById('resultat').innerHTML = eval(valeur)
    }
}

function AC(){
    opr = " "
    document.getElementById('operation').innerHTML = opr
    if(On){
        document.getElementById('resultat').innerHTML = '0'
    }
}

function DEL(){
    if(On){
        var valeur = document.getElementById('operation').textContent
        opr = valeur.slice(0,-1)
        document.getElementById('operation').innerHTML = opr
    }
}