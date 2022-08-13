

let score = 20;
let secret_number = Math.trunc(Math.random()*20)+1;
 //document.querySelector('.the_number span').textContent = secret_number;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.input_number').value)
    console.log(document.querySelector('.input_number').value) ;
    if(!guess){
        document.querySelector('.bool').textContent='invalid input ❌';
    }
    if(guess){
    if(guess === secret_number){
           document.querySelector('body').style.backgroundColor='#FFFF00';
           document.querySelector('.bool').textContent = "ypeee right ❤😄"
           document.querySelector('.the_number span').textContent = secret_number;
           document.querySelector('h1').textContent="Winner Winner Chicken Dinner🦃🐓"
    }
    if(score > 1){
    if(guess > secret_number){
        document.querySelector('.bool').textContent = "too high 📈";  
        score--; 
        document.querySelector('.score span').textContent = score ;
    }  
    else if(guess < secret_number){
        document.querySelector('.bool').textContent = "too low 📉";
        score--;
        document.querySelector('.score span').textContent = score ;
    } 
}
else{
    document.querySelector('.bool').textContent = "OoOoOoOoh you lost!🙁";  
    document.querySelector('.score span').textContent = 0 ;
}  
    }
});
document.querySelector('.aga').addEventListener
('click', function(){
    document.querySelector('.bool').textContent= "Start Guessing ....";
    score = 20;
    secret_number =  Math.trunc(Math.random()*20)+1;
    document.querySelector('.nScore').textContent = score;
    document.querySelector('.the_number span').textContent = "??";
    documen.querySelector('body').style.backgroundColor='green';
    document.querySelector('.input_number').value ='';
 });



