let input = document.getElementById("input");
let button = document.querySelectorAll("button");





let first="";
let second="";
let operator ="";

button.forEach(element => {
    element.addEventListener("click",(e)=>{
        const clickedButtonm = e.target.textContent;

        if(clickedButtonm === "C"){
            input.textContent="";
            first="";
            second="";
            operator="";
        }
        else if(clickedButtonm === "<"){
            input.textContent= input.textContent.slice(0, -1)
        }
        else if(clickedButtonm === "="){
            if(first!="" && operator!="" && input.textContent!=""){
                second = input.textContent;
                let final;
        
                switch(operator){
                    case "+":
                        final =  parseFloat(first) + parseFloat(second);
                        break;
                        case "-":
                            final =  parseFloat(first) - parseFloat(second);
                            break;
                            case "*":
                                final =  parseFloat(first) * parseFloat(second);
                                break;
                                case "/":
                                    final =  parseFloat(first) / parseFloat(second);
                                    break;
                                    case "%":
                                        final =  parseFloat(first) % parseFloat(second);
                                        break;
                                        default:
                                            final = "Errrorrr!";
                   
                }
                    input.textContent=final;
                    first="";
                    second="";
                    operator="";
        
        
            }
        }
        else if(["+","-","*","/","%"].includes(clickedButtonm)){
            if(input.textContent!=""){
                first = input.textContent;
                operator=clickedButtonm;
                input.textContent="";
            }
        }
        else{
            input.textContent+=clickedButtonm;
        }
        
        input.scrollLeft = input.scrollWidth;
        



    })
})


    
       
                

        
    