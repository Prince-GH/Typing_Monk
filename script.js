const typing={
    Beginner:"asdf jkl; asdf jkl; asdf jkl; asdf jkl; qwer poiu ty zxcv .,mn b gh",
    intermediate:"The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. Jinxed wizards pluck ivy from the big quilt.",
    advanced:"Photosynthesis occurs in the chloroplasts of plant cells, which contain the pigment chlorophyll. Chlorophyll absorbs light energy, primarily in the blue and red wavelengths, and converts it into chemical energy through a series of reactions known as the light-dependent and light-independent Calvin cycle reactions. This process is crucial for life on Earth."
};
const form = document.querySelector('form');
    const data = document.getElementById('data');
    //Game  mode
    const Restart = document.querySelector('.reset');
    const Back = document.querySelector('.back');
    let dropdownMenu = document.querySelector('.dropdown-menu');
    let dropup = document.querySelector('.dropup');
    let dropdown = document.querySelector('.dropdown');
    const Level1 = document.querySelector('.Level1');
    const Level2 = document.querySelector('.Level2');
    const Level3 = document.querySelector('.Level3');
    const a_type = document.getElementById('a_type');
    const a_back = document.getElementById('a_back');
    const a_error = document.getElementById('a_error');
    const a_done = document.getElementById('a_done');
    const a_next = document.getElementById('a_next');
    const a_wait = document.getElementById('a_wait');

    let TotalWords = document.getElementById("TotalWords");
    let TotalTime = document.getElementById("TimeCount");
    let TotalSpeed = document.getElementById("SpeedCount");

    const keydata = document.getElementById("keydata");
    const Console = document.getElementById("console");
   
    const info = document.querySelector('.info');
    let error = document.getElementById("error");
    let text; //text is an array that store text char
    let i=0;
    let isOpen = false;//to level dropup/dropdown
    let words=0;
    let Time = 0;
    let Speed = 0;
    
//Back to previous action
Back.addEventListener('click',()=>{
    a_type.currentTime=0;
    a_type.play();
    setTimeout(()=>{
        window.location.reload();
        Back.style.display='none';
    },220);

})

    //Restarting the game
    Restart.addEventListener('click',(e)=>{
        a_type.currentTime=0;
        a_type.play();
        form.style.display='flex';
        Back.style.display='block';
        Restart.style.display='none';
        dropup.style.display='none';
        isOpen=false;
        dropdown.style.display='none';
    });
    

    // Taking text from user
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        if(data.value===""){
            form.style.display='flex';
            data.style.borderRight='5px solid #f32013';
            a_error.currentTime='0';
            a_error.play();
        }else{
            
            if (data.value.length > 360) {
                data.value = data.value.substring(0, 360);
            }

            keydata.innerHTML=data.value;
            text=keydata.innerHTML.split("");
            data.value='';
            a_type.play();
            form.style.display='none';
            Start();
        }
    });

    Level1.addEventListener('click',(e)=>{
        a_type.currentTime=0;
        a_type.play();
        isOpen=false;
        dropdown.style.display='none';
        Restart.style.display='none';
        Back.style.display='block';
        dropup.style.display='none';
        keydata.innerHTML=typing.Beginner;
        text=keydata.innerHTML.split("");
        a_type.play();
        Start();
    })
    Level2.addEventListener('click',(e)=>{
        a_type.currentTime=0;
        a_type.play();
        isOpen=false;
        dropdown.style.display='none';
        Restart.style.display='none';
        Back.style.display='block';
        dropup.style.display='none';
        keydata.innerHTML=typing.intermediate;
        text=keydata.innerHTML.split("");
        a_type.play();
        Start();
    })
    Level3.addEventListener('click',(e)=>{
        a_type.currentTime=0;
        a_type.play();
        isOpen=false;
        dropdown.style.display='none';
        Restart.style.display='none';
        Back.style.display='block';
        dropup.style.display='none';
        keydata.innerHTML=typing.advanced;
        text=keydata.innerHTML.split("");
        a_type.play();
        Start();
    })

//Control full alog after text come to the text array..

function Start(){

    const countTime = setInterval(()=>{
        Time++;
        let min = Math.floor(Time/60);
        let sec = Math.floor(Time%60);
        let speed =Math.floor(words/(Time/60));
        TotalSpeed.innerHTML=`${speed} WPM`;
         if(Time/60<1){
            TotalTime.innerHTML=`${sec}s`;
        }else{
            TotalTime.innerHTML=`${min} : ${sec}s`;
        }
    },1000); 

    Console.style.display='block';
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
                    this.clearInterval(countTime);
                    end();
                }
                a_type.currentTime=0;
                a_type.play();
            }
            Console.style.color='white';
        }else{
            if(e.key==='Backspace'){
                
                TEXT = Console.innerHTML.split("");
                if(i>0){
                    i--;
                }

                //Update the no of words
                if(String(text[i])==" "){
                    words--;
                     TotalWords.innerHTML=`${words} Words`;
                }

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

//Words count and check the pressed char is correct or not
    
    function keyCheck(key,KEY){
        if(key==" " && KEY==" "){
            ++words;
            TotalWords.innerHTML=`${words} Words`;
        }
    }
   
function end(){
    i=0;
    info.style.display='none';
    keydata.innerHTML='';
    Console.innerHTML='';
    TotalWords.innerHTML='';
    keydata.style.color='white';
    Console.style.display='none';
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

//Menu

dropdownMenu.style.transitionTimingFunction = 'linear';
dropdownMenu.style.transitionDuration = '0.15s';

dropup.addEventListener('click', (e) => {

    if(!isOpen){
        a_type.currentTime=0;
        a_type.play();
        dropdownMenu.style.display = 'flex';
        setTimeout(() => {
            dropdownMenu.style.bottom = '0px';
        },10); 
        isOpen=true;
    }else{
        a_back.currentTime=0;
        a_back.play();
        dropdownMenu.style.bottom='-50px';
        setTimeout(()=>{
             dropdownMenu.style.display='none';
         },100);
         isOpen=false;
    }

});
