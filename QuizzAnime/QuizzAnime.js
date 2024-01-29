let Qts = document.getElementById('Questions');
let Rps1 = document.getElementById('Rps1');
let Rps2 = document.getElementById('Rps2');
let Rps3 = document.getElementById('Rps3');
let Rps4 = document.getElementById('Rps4');
let Score = document.getElementById('Score');
let BtnReset = document.getElementById('BtnReset');
let Scorevar = 0;
let Index = 0;

//Question Quizz
let Quizz = [

    {question:'Combien d\'épisode durent l\'arc Whole Cake de One Piece ?',vlr:'95',r1:'95',r2:'103',r3:'111',r4:'123'},
    {question:'Comment s\'appelle la mascotte (le nounours) dans Bleach ?',vlr:'Kon',r1:'Kun',r2:'Kin',r3:'Kan',r4:'Kon'},
    {question:'Comment s\'appelle le pére de Killua dans Hunter x Hunter ?',vlr:'Silva',r1:'Kikyo',r2:'Silva',r3:'Irumi',r4:'Alluka'},
    {question:'Combien il y a de film sur Drangon Ball ?',vlr:'31',r1:'28',r2:'29',r3:'30',r4:'31'},
    {question:'Comment s\'appelle la fille d\'Ichiraku (Naruto) ?',vlr:'Ayame',r1:'Ayame',r2:'Ayami',r3:'Ayamo',r4:'Ayamu'},
    {question:'Quel est le premier combat de Luffy (One Piece) ?',vlr:'Alvida',r1:'Arlong',r2:'Alvida',r3:'Baggy',r4:'Captain Morgan'},
    {question:'Qui est la premiére victime de Light (Death Note) ?',vlr:'Otoharada Kurou',r1:'Otoharada Kurou',r2:'Otoharada Kuron',r3:'Otoharada Kurin',r4:'On ne connait pas son nom'},
    {question:'Combien de membre dans le Taureau Noir (Black Clover) ?',vlr:'13',r1:'12',r2:'13',r3:'14',r4:'15'},
    {question:'Comment s\'ppelle le vice-capitaine de Kenpachi (Bleach) ?',vlr:'Yachiru Kusaijishi', r1:'Yachiru Kusaijishi',r2:'Yachiru Kusaijisho',r3:'Yachiro Kusaijishi',r4:'Yachiro Kusaijisho'},
    {question:'Comment s\'appelle la rival de Zoro enfant (One Piece) ?',vlr:'Shimotsuki Kuina',r1:'Shimotsuku Kuino',r2:'Shimotsuko Kuina',r3:'Shimotsuki Kuino',r4:'Shimotsuki Kuina'}
]
console.log(Quizz);

//Fonction lancement Quizz, Score etc
function DebutQuizz(){
    Qts.innerHTML = Quizz[Index].question
    Rps1.innerHTML = Quizz[Index].r1
    Rps2.innerHTML = Quizz[Index].r2
    Rps3.innerHTML = Quizz[Index].r3
    Rps4.innerHTML = Quizz[Index].r4
}
Rps1.addEventListener('click', function(){
    console.log(Quizz[Index].vlr)
    console.log(this.innerHTML)
    if(this.innerHTML == Quizz[Index].vlr){
        Scorevar++;
        Index++;
        Score.innerHTML = `Bonne réponse : ${Scorevar}/10`;
        
    }
    else{
        Index++;
        
    }
    if(Index > 9){
        Qts.innerHTML = '';
        Qts.innerHTML = `Le quizz est fini !`
        Rps1.disabled = 'true';
        Rps1.innerHTML = ``;
        Rps1.style.backgroundColor = 'grey';
        Rps2.disabled = 'true';
        Rps2.innerHTML = ''
        Rps2.style.backgroundColor = 'grey';
        Rps3.disabled = 'true';
        Rps3.innerHTML = '';
        Rps3.style.backgroundColor = 'grey';
        Rps4.disabled = 'true';
        Rps4.innerHTML = '';
        Rps4.style.backgroundColor = 'grey'
        Score.innerHTML = `Bonne réponse : ${Scorevar}/10`;
        
    }
    DebutQuizz();
});
Rps2.addEventListener('click', function(){
    if(this.innerHTML == Quizz[Index].vlr){
        Scorevar++;
        Index++;
        Score.innerHTML = `Bonne réponse : ${Scorevar}/10`;
    }
    else{
        Index++;
    }
    if(Index > 9){
        Qts.innerHTML = '';
        Qts.innerHTML = `Le quizz est fini !`
        Rps1.disabled = 'true';
        Rps1.innerHTML = ``;
        Rps1.style.backgroundColor = 'grey';
        Rps2.disabled = 'true';
        Rps2.innerHTML = ''
        Rps2.style.backgroundColor = 'grey';
        Rps3.disabled = 'true';
        Rps3.innerHTML = '';
        Rps3.style.backgroundColor = 'grey';
        Rps4.disabled = 'true';
        Rps4.innerHTML = '';
        Rps4.style.backgroundColor = 'grey'
        Score.innerHTML = `Bonne réponse : ${Scorevar}/10`;
        
    }
    DebutQuizz();
});
Rps3.addEventListener('click', function(){
    if(this.innerHTML == Quizz[Index].vlr){
        Scorevar++;
        Index++;
        Score.innerHTML = `Bonne réponse : ${Scorevar}/10`;
    }
    else{
        Index++;
    }
    if(Index > 9){
        Qts.innerHTML = '';
        Qts.innerHTML = `Le quizz est fini !`
        Rps1.disabled = 'true';
        Rps1.innerHTML = ``;
        Rps1.style.backgroundColor = 'grey';
        Rps2.disabled = 'true';
        Rps2.innerHTML = ''
        Rps2.style.backgroundColor = 'grey';
        Rps3.disabled = 'true';
        Rps3.innerHTML = '';
        Rps3.style.backgroundColor = 'grey';
        Rps4.disabled = 'true';
        Rps4.innerHTML = '';
        Rps4.style.backgroundColor = 'grey'
        Score.innerHTML = `Bonne réponse : ${Scorevar}/10`;
        
    }
    DebutQuizz();
});
Rps4.addEventListener('click', function(){
    if(this.innerHTML == Quizz[Index].vlr){
        Scorevar++;
        Index++;
        Score.innerHTML = `Bonne réponse : ${Scorevar}/10`;
    }
    else{
        Index++;
    }
    if(Index > 9){
        Qts.innerHTML = '';
        Qts.innerHTML = `Le quizz est fini !`
        Rps1.disabled = 'true';
        Rps1.innerHTML = ``;
        Rps1.style.backgroundColor = 'grey';
        Rps2.disabled = 'true';
        Rps2.innerHTML = ''
        Rps2.style.backgroundColor = 'grey';
        Rps3.disabled = 'true';
        Rps3.innerHTML = '';
        Rps3.style.backgroundColor = 'grey';
        Rps4.disabled = 'true';
        Rps4.innerHTML = '';
        Rps4.style.backgroundColor = 'grey'
        Score.innerHTML = `Bonne réponse : ${Scorevar}/10`;
        
    }
    DebutQuizz();
});
DebutQuizz();
