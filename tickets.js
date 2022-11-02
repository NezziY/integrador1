let total = document.getElementById("bigb");
total.addEventListener("click", totalFinal);

function resumen(){
    let cant = document.getElementsByClassName("cantidad").value;
    const categ = document.getElementsByClassName("form-select").value;
    let precio = 200;

    if  (categ === "estudiante"){
        return 200

     /*   let xyz = cant * (precio - (precio*0.8));
    }
    

    else if (categ === "trainee"){
        let xyz = cant * (precio -(precio*0.5));
    }

    else if (categ === "junior"){
        let xyz = cant * (precio - (precio*0.15));
    }

    else {
         xyz = cant * precio;
    }
}
*/


function totalFinal(xyz) {
        
    document.getElementById("pagar").innerHTML = xyz;
}

