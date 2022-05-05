let capDiv;
let data;
let hr;
let mnt;
let sg;
let ano;
let dia;
let mes;
let exibirHrAtual = () =>{
    capDiv = document.getElementById("hr");
    data = new Date();
    
    hr = data.getHours();
    mnt = data.getMinutes();
    sg = data.getSeconds();
    ano = data.getFullYear();
    dia = data.getDate();
    mes = data.getMonth();

    if(hr < 10){
        hr = "0"+hr;
    }
    if(mnt < 10){
        mnt = "0"+mnt;
    }
    if(sg < 10){
        sg = "0"+sg;
    }
    if(dia < 10){
        dia = "0"+dia;
    }
    if(mes < 10){
        mes = mes+1;
        mes = "0"+mes;
    }

    capDiv.innerHTML = "Hora " + hr + ":" + mnt + ":" + sg + "<br>" + "Data " + dia + "/"+ mes + "/"+ano;
}


setInterval(exibirHrAtual,1000);