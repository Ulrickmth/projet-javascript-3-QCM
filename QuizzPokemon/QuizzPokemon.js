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

    {question:'Quel est la différence entre un Pikachu mâle et femelles ?',vlr:'La forme de sa queue',r1:'La couleur de la queue',r2:'La forme de ces oreilles',r3:'La couleur de ces oreilles',r4:'La forme de sa queue'},
    {question:'Combien d\'évolution a Evoli ?',vlr:'8',r1:'6',r2:'7',r3:'8',r4:'9'},
    {question:'De quel type est Nidoking ?',vlr:'Poison/Sol',r1:'Poison/Normal',r2:'Poison/Sol',r3:'Poison/Combat',r4:'Poison/Psy'},
    {question:'De quel couleur est Aéromite Shiny ?',vlr:'Bleu',r1:'Vert',r2:'Violet',r3:'Gris',r4:'Bleu'},
    {question:'Quel est le Lengendaire principale de la 1er Gen ?',vlr:'Mewtwo',r1:'Mew',r2:'Artikodin',r3:'Sulfura',r4:'Mewtwo'},
    {question:'Comment evolue Boustiflor ?',vlr:'Pierre Plante',r1:'Amitié',r2:'Niveau',r3:'Pierre Plante',r4:'Il évolue pas'},
    {question:'Ou se trouve Sulfura dans la 1er gen ?',vlr:'Route Victoire',r1:'Grotte Inconnue',r2:'Route Victoire',r3:'Introuvable',r4:'Laboratoire'},
    {question:'De quel niveau sont les pokemon de la 1er arene ?',vlr:'12&14',r1:'12&14',r2:'12&15',r3:'10&12',r4:'12&13'},
    {question:'De quel type est la 5eme arene de la 1er gen ?',vlr:'Poison', r1:'Feu',r2:'Psy',r3:'Glace',r4:'Poison'},
    {question:'Quel est le nom Exact du badge de l\'arene 7 1er gen ?',vlr:'Badge Volcan',r1:'Badge Enflammés',r2:'Badge Lave',r3:'Badge Volcan',r4:'Badge Braise'}
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