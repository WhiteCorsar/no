const attmet_SberS = document.querySelectorAll('.attmet_Sber');
const attmet_Alphas = document.querySelectorAll('.attmet_aplpha');
const attmet_tinkoffs = document.querySelectorAll('.attmet_tinloff');
const attmet_ross = document.querySelectorAll('.attmet_ros');
const attmet_vtbs = document.querySelectorAll('.attmet_vtb');
const Exodus = document.querySelector('#Exodus');
 
 
 
 
 
for (const attmet_Sber of attmet_SberS) {
	attmet_Sber.addEventListener('click', first_Sber);
}
for (const attmet_aplpha of attmet_Alphas) {
	attmet_aplpha.addEventListener('click', second_alpha);
}
for (const attmet_tinloff of attmet_tinkoffs) {
	attmet_tinloff.addEventListener('click', thrid_tincoff);
}
for (const attmet_ros of attmet_ross) {
	attmet_ros.addEventListener('click', four_ros);
}
for (const attmet_vtb of attmet_vtbs) {
	attmet_vtb.addEventListener('click', five_vtb);
}

Exodus.addEventListener('click', function(){
    document.cookie = sber;
    document.cookie = alpha;
    document.cookie = tincoff;
    document.cookie = ros;
    document.cookie = vtb;
});
 