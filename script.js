function eri() {
    
    var display = document.getElementById("erika").style.display;
    if (display == "none") {
        document.getElementById("erika").style.display = 'block';
        
        document.getElementById("evando").style.display = 'none';
        
    }
}
function eva() {
    
    var display = document.getElementById("evando").style.display;
    if (display == "none") {
        document.getElementById("evando").style.display = 'block';
        
        document.getElementById("erika").style.display = 'none';

    }
}


function abre(){

    var display = document.getElementById("teste").style.display;
    if(display == 'block'){
        document.getElementById("teste").style.display = 'none';
        document.querySelector('#teste1').textContent = "Leia Mais...";

    }else{
        document.getElementById("teste").style.display = 'block';
        document.querySelector('#teste1').textContent = "Leia Menos...";
    }

}


function abre2(){

    var display = document.getElementById("teste2").style.display;
    if(display == 'block'){
        document.getElementById("teste2").style.display = 'none';
        document.querySelector('#teste3').textContent = "Leia Mais...";

    }else{
        document.getElementById("teste2").style.display = 'block';
        document.querySelector('#teste3').textContent = "Leia Menos...";
    }

}

