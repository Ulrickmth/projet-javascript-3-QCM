let Qts = document.getElementById('Questions');
let Rps1 = document.getElementById('Rps1');
let Rps2 = document.getElementById('Rps2');
let Rps3 = document.getElementById('Rps3');
let Rps4 = document.getElementById('Rps4');
let Score = document.getElementById('Score');
let Scorevar = 0;
let Index = 0;

//Question Quizz
let Quizz = [

    {question:'Quel est le joueurs le plus titré de Rocket League ?',vlr:'TurboPolsa',r1:'Fairy Peak',r2:'Kaydop',r3:'TurboPolsa',r4:'Chausette45'},
    {question:'Quel est l\'équipe la plus titré de Rocket League ?',vlr:'Vitality',r1:'Vitality',r2:'Bds',r3:'Karmine Corp',r4:'Faze'},
    {question:'Quel boost est le plus cher ?',vlr:'Alpha Boost',r1:'Neuro Boost',r2:'Alpha Boost',r3:'Azi Boost',r4:'Punde Boost'},
    {question:'Quel voiture est la plus populaire parmis ces choix ?',vlr:'Fennec',r1:'Nissan Skyline',r2:'Fennec',r3:'Takumi',r4:'Batmobile'},
    {question:'Quel move n\'existe pas ?',vlr:'Poregin',r1:'Flep reset',r2:'Psyko',r3:'Musty',r4:'Poregin'},
    {question:'Avec combien de boost spawn t\'on ?',vlr:'33',r1:'0',r2:'22',r3:'44',r4:'33'},
    {question:'Quel rang est le plus haut du jeu ?',vlr:'SSL',r1:'Challenger',r2:'SSL',r3:'Champion',r4:'Légende'},
    {question:'Quel rang est le plus bas du jeu ?',vlr:'Bronze',r1:'Bronze',r2:'Fer',r3:'Cuivre',r4:'Argent'},
    {question:'En quel année est sortie Rocket League ?',vlr:'2015', r1:'2013',r2:'2016',r3:'2020',r4:'2015'},
    {question:'Quel est l\'ancêtre de Rocket League ?',vlr:'Battle Cars',r1:'Il n\'en n\'a pas',r2:'Battle Cars',r3:'Jump Cars',r4:'Quick Cars'}
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