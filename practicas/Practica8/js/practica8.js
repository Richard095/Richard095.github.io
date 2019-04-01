
var option = prompt("Introduzca un numero mayor o igual a 20");
var memory = [];
var NPrimos = [];

    let multiplos_2 = document.getElementById("btn2");
    let multiplos_3 = document.getElementById("btn3");
    let multiplos_4 = document.getElementById("btn4");
    let multiplos_5 = document.getElementById("btn5");
    let multiplos_6 = document.getElementById("btn6");
    let multiplos_7 = document.getElementById("btn7");
    let multiplos_8 = document.getElementById("btn8");
    let multiplos_9 = document.getElementById("btn9");
    let num_primos = document.getElementById("btn_num_pri");
    let clear = document.getElementById("btn_clear");
    
    
function entrada(){
    if(option==null || option=="") {
            alert("Introduce un numero");
        }else if(option < 20){
            alert("Ingrese un numero mayor que 20");
        }else if(option >= 20){
          
            for (let a = 1; a <= option; a++) {
                const h6 = document.createElement('h6');
                h6.type = 'h6';
                h6.id = 'box'+a;
                h6.value = ""+a;
                h6.innerText = a;
                h6.style.height = "50px";
                h6.style.width = "50px";
                h6.style.background = "#e91e63";
                h6.style.padding = "5px";
                h6.style.margin = "2px";
                h6.style.textAlign = "center";
                h6.style.color = "#ffffff";
               
                document.getElementById("content").appendChild(h6);
            }
        } 
    }

    entrada();
    
    btn2.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 2 ==0 && memory.includes(a)==false){
                document.getElementById("box"+a).style.background= "#0091ea";
                memory.push(a);
            }
        }
    }   
    

    btn3.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 3 == 0 && memory.includes(a)==false){
                document.getElementById("box"+a).style.background= "#673ab7";
                memory.push(a);
            }
        }
    }


    btn4.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 4 ==0 && memory.includes(a)==false){
                document.getElementById("box"+a).style.background= "#3f51b5";
                memory.push(a);
            }
        }
    } 

    btn5.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 5 ==0 && memory.includes(a)==false){
                document.getElementById("box"+a).style.background= "#d32f2f";
                memory.push(a);
            }
        }
    }


    btn6.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 6 ==0 && memory.includes(a)==false){
                document.getElementById("box"+a).style.background= "#f44336";
                memory.push(a);
            }
        }
    }

  
    btn7.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 7 ==0 && memory.includes(a)==false){
                document.getElementById("box"+a).style.background= "#4a148c";
                memory.push(a);
            }
        }
    }


    btn8.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 8 ==0 && memory.includes(a)==false){
                document.getElementById("box"+a).style.background= "#03a9f4";
                memory.push(a);
            }
        }
    }


    btn8.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 9 ==0 && memory.includes(a)==false){
                document.getElementById("box"+a).style.background= "#009688";
                memory.push(a);
            }
        }
    }

   
    btn_num_pri.onclick = function() {
        var count=0;
        for(let k=2; k<=option; k++){
            for (let r = 2; r<=option; r++) {
               if (k%r==0) {
                   count++;
            }
        }
        if(count==1){
            count=0;
            document.getElementById("box"+k).style.background = "#ff5722";
            memory.push(k);

        }else if(count>1){
            count=0;
        }
    }
}
  
    btn_clear.onclick = function() {
        for(let a=2; a<= option; a++){
            document.getElementById("box"+a).style.background= "#e91e63";
            memory=[];
        }
    }
