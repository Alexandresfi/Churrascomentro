document.getElementById("envi").addEventListener("click",calcular)

function calcular (){
    let adu = document.getElementById("adu").value;
    let cri = document.getElementById("cri").value;
    let hora = document.getElementById("hora").value;
    let p = document.getElementById("mostrar");

    if (hora <= 5) {

        const carne = hora*(400*adu + 200*cri)/1000;

        const queijo = hora*(3*adu + 2*cri);

        const pao = hora*(2*adu + 1*cri);

        const cerveja = hora*(1200*adu)/1000;

        const liqui = hora*(1000*adu + 500*cri)/1000;

        p.innerText ="Serão necessários para o seu churrasco: ";
        p.innerHTML+="<br>"+carne+"kg de carne <br>";
        p.innerHTML+= queijo+" espetinhos de queijo <br>";
        p.innerHTML+= pao+" unidades de pães de alho <br>";
        p.innerHTML +=cerveja+" litros de cerveja <br>";
        p.innerHTML +=liqui+" litros de água/refri";

    }else{
        
        const carne = hora*(650*adu + 325*cri)/1000;

        const queijo = hora*(5*adu + 3*cri);

        const pao = hora*(2*adu + 1*cri);

        const cerveja = hora*(2000*adu)/1000;

        const liqui = hora*(1500*adu + 750*cri)/1000;

        p.innerText = "Serão necessários para o seu churrasco: ";
        p.innerHTML+="<br>"+carne+" kg de carne <br>";
        p.innerHTML+= queijo+" espetinhos de queijo <br>";
        p.innerHTML+= pao+" unidades de pães de alho <br>";
        p.innerHTML +=cerveja+" litros de cerveja <br>";
        p.innerHTML +=liqui+" litros de água/refri";
        console.log("funcionou!")
    }

}
//carne - 400 gr por pessoa, se durar + de 6 hr - 650 gr
//cerveja - 1200 ml por pessoa, se durar +6 hr - 2000 ml
//Refrigerante/água - 1000 ml por pessoa, se durar + 6 hr - 1500 ml 