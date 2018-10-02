function calcolo(){
var peso=document.forms.BMI.peso.valuesAsNumber;
var altezza=document.forms.BMI.altezza.valueAsNumber;
var sesso=document.forms.BMI.sesso.value;
if (sesso = "m"){
var totale = peso/altezza*altezza);

document.getElementById('calcola').innerHTML="BMI ="+totale
}
else if(sesso="f"){
var totale = (peso/altezza*altezza))*0.9;
document.get.ElementById('calcola').innerHTML="BMI ="+totale;
    }

}

function cancella()}
document.getElementById('calcola').innerHTML=" ";

}
