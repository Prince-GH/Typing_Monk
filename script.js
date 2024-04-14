const form = document.querySelector('form');
    const data = document.getElementById('data');
    const Restart = document.querySelector('.reset');
    const a_type = document.getElementById('a_type');
    const a_back = document.getElementById('a_back');
    const a_error = document.getElementById('a_error');
    const a_done = document.getElementById('a_done');
    const a_next = document.getElementById('a_next');
    const a_wait = document.getElementById('a_wait');
    let TotalWords = document.getElementById("TotalWords");
    const keydata = document.getElementById("keydata");
    const Console = document.getElementById("console");
    let error = document.getElementById("error");
    let text;
    let i=0;
    
    Restart.addEventListener('click',(e)=>{
        a_type.currentTime=0;
        a_type.play();
        form.style.display='flex';
        Restart.style.display='none';
    });
    
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        if(data.value===""){
            form.style.display='flex';
            data.style.borderRight='5px solid #f32013';
            a_error.currentTime='0';
            a_error.play();
        }else{
            keydata.innerHTML=data.value;
            text=keydata.innerHTML.split("");
            data.value='';
            a_type.play();
            form.style.display='none';
            Start();
        }
    });

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
                a_type.currentTime=0;
                a_type.play();
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
                    a_back.currentTime=0;
                    a_back.play();
                }else{
                    error.innerHTML=`💡:${text[i]}`;
                    a_error.currentTime=0;
                    a_error.play();
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
    i=0;
    keydata.innerHTML='';
    Console.innerHTML='';
    TotalWords.innerHTML='';
    keydata.style.color='white';
    keydata.innerHTML='Congratulations🏆';
    a_done.currentTime=0;
    a_done.play();
    
    window.addEventListener('keydown',(e)=>{
        a_back.pause();
        a_error.pause();
        a_type.pause();
        a_done.pause();
    });
    

    let m = document.querySelector('i');
    m.innerHTML='wait';
    let j=0;
    setInterval(()=>{
        
        if(j==0){
            m.innerHTML='wait.';
            j=1;
        }else if(j==1){
            m.innerHTML='wait..<BR>New Game';
            j=2;
        }else if(j==2){
            m.innerHTML='wait...<br>New Game<br>Reset All Data<br>Done:30%';
            j=3;
        }else if(j==3){
            m.innerHTML='wait..<br>New Game<br>Reset All Data<br>Done:60%';
            j=4;
        }else if(j==4){
            m.innerHTML='wait.<br>New Game<br>Almost Complete<br>Done:80%';
            j=5;
        }else if(j==5){
            m.innerHTML='Done 100%';
            m.style.width='100px';
            m.style.borderColor='#074242';
            m.style.background='#3b7a60';
            j=0;
        }
    },2000);

    setTimeout(()=>{
    a_next.play();
   },12000);
   
    setTimeout(()=>{
        Restart.style.display='block';
        window.location.reload();
    },13500)
}
