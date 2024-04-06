 let TotalTime = document.getElementById("TotalTime");
    let TotalWords = document.getElementById("TotalWords");
    let speed = document.getElementById("speed");
    let error = document.getElementById("error");
    const keydata = document.getElementById("keydata");
    const Console = document.getElementById("console");
    let text;
    let i=0;
    (function StartTyping(){
        keydata.innerHTML=prompt('Insert your text: ');
        text = keydata.innerHTML.split("");
        Start();
    })();

function Start(){
    window.addEventListener("keydown",function (e){
       error.innerHTML="";
       let char = String(text[i]);
       keyCheck(char,e.key);

       console.log(char);
       console.log(i);

        if(e.key===char || e.key==="CapsLock"){

            if(e.key===char){
                Console.innerHTML+=e.key;
                i++;
                if(text.length==i){
                    end();
                }
            }
            Console.style.color='white';
            
        }else{
            if(e.key==='Backspace'){
                    i--;
                    let TEXT = Console.innerHTML.split("");
                    Console.innerHTML='';
                    for(let j=0;j<TEXT.length-1;j++){
                        Console.innerHTML+=TEXT[j];
                    }
                }else{
                    error.innerHTML=`💡:${text[i]}`;
                }
        } 

        }
    );
}

    let words=0;
    function keyCheck(key,KEY){
        if(key==" " && KEY==" "){
            ++words;
            TotalWords.innerHTML=`Total Words:${words}`;
        }
    }
  
function end(){
    keydata.innerHTML='';
    Console.innerHTML='';
    TotalWords.innerHTML='';
    keydata.style.color='white';
    keydata.innerHTML='Congratulations🏆';
}
