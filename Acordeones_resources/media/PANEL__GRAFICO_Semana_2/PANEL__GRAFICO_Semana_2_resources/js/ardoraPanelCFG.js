//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=12; attempts=0; attemptsMax=1;
var score=0; scoreMax=12; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFFFF"; colorButton="#800000"; colorText="#000000"; colorSele="#FF8080";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICITACIONES"; messageTime="TU TIEMPO SE ACABO"; messageError="LOSENTIMOS"; messageAttempts="INTENTALO DENUEVO"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0","0","0","0","0","0","0","0"];
var posX=[75,250,312,418,279,347,360,97,-1,384,469,-11]; var posY=[358,353,294,195,2,49,94,58,21,144,219,304];
var coorx=["OTM=", "MTM5", "MjI4", "Mzg0", "MjUz", "Mjk4", "Mjk1", "MjMx", "MTE4", "MzEy", "MzUw", "MTAy"]; var coory=["MjE0", "MjEw", "MTkz", "MjM1", "NjM=", "MTEx", "MTI3", "MTAz", "MTYx", "MTQ0", "MjIz", "MjE1"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["", "", "", "", "", "", "", "", "", "", "", ""]; var al2=["", "", "", "", "", "", "", "", "", "", "", ""]; var al3=["", "", "", "", "", "", "", "", "", "", "", ""]; var al4=["", "", "", "", "", "", "", "", "", "", "", ""]; answers=["CADENA", "ESCAPE", "MOTOR", "RUEDAS", "ACELERADOR", "MANILLAS", "CHASIS", "TANQUE PARA GASOLINA", "AMORTIGUADOR", "AMORTIGUADOR DELANTEROS", "FRENO DE DISCO", "FRENO EN TAMBORES"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="UEFORUxfX0dSQUZJQ09fU2VtYW5hXzI="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
