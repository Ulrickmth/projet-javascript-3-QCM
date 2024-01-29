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

    {question:'Quel club a remporté le plus de LDC (League des Champions) ?',vlr:'Real Madrid',r1:'AC Milan',r2:'Paris Saint-Germain',r3:'Real Madrid',r4:'FC Bayern'},
    {question:'Quel est le premier pays a avoir remporter la toute premiere coupe du monde ?',vlr:'Uruguay',r1:'Bresil',r2:'Uruguay',r3:'France',r4:'Allemagne'},
    {question:'En quel année le Real Madrid a gagner sa 1er LDC ?',vlr:'1956',r1:'1968',r2:'1956',r3:'2000',r4:'1989'},
    {question:'En quel année l\'equipe de france a remporter ces 2 coupe du monde ?',vlr:'1998 & 2018',r1:'2018 & 2022',r2:'1994 & 2006',r3:'1998 & 2002',r4:'1998 & 2018'},
    {question:'Quel club d\'Italie a le plus de LDC ?',vlr:'AC Milan',r1:'AC Milan',r2:'Inter Milan',r3:'Juventus',r4:'Naples'},
    {question:'Quel pays est le plus titré en coupe du monde ?',vlr:'Brésil',r1:'Uruguays',r2:'Brésil',r3:'France',r4:'Allemagne'},
    {question:'Quel est le vainqueur de la derniere LDC (2023) ?',vlr:'Manchester City',r1:'Real Madrid',r2:'Paris Saint-Germain',r3:'Manchester City',r4:'Inter Milan'},
    {question:'Quel est le plus jeune buteur en coupe du monde ?',vlr:'Pelé',r1:'Pelé',r2:'Cristiano Ronaldo',r3:'Kyllian Mbappé',r4:'Lionel Messi'},
    {question:'Quel est le plus jeune buteur en LDC ?',vlr:'Warren Zaire-Emery', r1:'Kyllian Mbappé',r2:'Lionel Messi',r3:'Warren Zaire-Emery',r4:'Cristiano Ronaldo'},
    {question:'Quel est le vainqueur de la derniere coupe du monde ?',vlr:'Argentine',r1:'France',r2:'Brésil',r3:'Croatie',r4:'Argentine'}
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