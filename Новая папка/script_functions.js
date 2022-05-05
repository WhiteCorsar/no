let Sb = 'Вы не проголосовали';
let al = 'Вы не проголосовали';
let tin = 'Вы не проголосовали';
let ro = 'Вы не проголосовали';
let vt = 'Вы не проголосовали';

 
 
function first_Sber() {
 
    switch (this.value){
        case 1:            
            localStorage.setItem('Sb', 1);
             break;
        case 2:
            localStorage.setItem('Sb', 2);
             break;
        case 3:
            localStorage.setItem('Sb', 3);
             break;
        case 4:
            localStorage.setItem('Sb', 4);
             break;
        case 5:
            localStorage.setItem('Sb', 5);
             break;
        default:
         Sb='Вы не проголосовали'
    }
    
};
 
function second_alpha() {
 
    switch (this.value){
        case 1:
            localStorage.setItem('al', 1);
        break;
        case 2:
            localStorage.setItem('al', 2);
        break;
        case 3:
            localStorage.setItem('al', 3);
        break;
        case 4:
            localStorage.setItem('al', 4);
        break;
        case 5:
            localStorage.setItem('al', 5);
        break;
        default:
            al='Вы не проголосовали'
    }
    

};
 
function thrid_tincoff() {
 
    switch (this.value){
        case 1:
            localStorage.setItem('tin', 1);
        break;
        case 2:
            localStorage.setItem('tin', 2);
        break;
        case 3:
            localStorage.setItem('tin', 3);
        break;
        case 4:
            localStorage.setItem('tin', 4);
        break;
        case 5:
            localStorage.setItem('tin', 5);
        break;
        default:
            tin='Вы не проголосовали'
    }
    

};
 
function four_ros() {
 
    switch (this.value){
        case 1:
           localStorage.setItem('ro', 1);
        break;
        case 2:
            localStorage.setItem('ro', 2);
        break;
        case 3:
           localStorage.setItem('ro', 3);
        break;
        case 4:
           localStorage.setItem('ro', 4);
        break;
        case 5:
           localStorage.setItem('ro', 5);
        break;
        default:
            ro='Вы не проголосовали'
    }
    

};
 
function five_vtb() {
 
    switch (this.value){
        case 1:
          localStorage.setItem('vt', 1);
        break;
        case 2:
           localStorage.setItem('vt', 2);
        break;
        case 3:
             localStorage.setItem('vt', 3);
        break;
        case 4:
            localStorage.setItem('vt', 4);
        break;
        case 5:
             localStorage.setItem('vt', 5);
        break;
        default:
            vt='Вы не проголосовали'
    }
    

};
 



 Exodus.addEventListener('click', function(){
    let a = localStorage.getItem('Sb');
    let b = localStorage.getItem('al');
    let c = localStorage.getItem('tin');
    let d = localStorage.getItem('ro');
    let e = localStorage.getItem('vt');

    p11.innerHTML = 'Рейтинг сбербанка = ' + a;
    p22.innerHTML = 'Рейтинг альфа-банка = ' + b;
    p33.innerHTML = 'Рейтинг Тинькофф = ' + c;
    p44.innerHTML = 'Рейтинг РОСБАНК = ' + d;
    p55.innerHTML = 'Рейтинг ВТБ = ' + e;
    return;
});
 

 
 
 