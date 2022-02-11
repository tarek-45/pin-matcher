//Generate pin section
const randomnumber =document.getElementById('generatePin');
randomnumber.addEventListener('click',function(){
    let generateNumber= Math.floor(1000 + Math.random() * 9000);
    document.getElementById('randomNumberDisplay').value=generateNumber;   
});

//button section 
function display(userInput){
   if(userInput==='C'){
    //clear all char at a time
    document.getElementById('userInputDisplay').value="";
    notify_section('notMatch','none');
    notify_section('match','none');
    swal("...Empty!..")

   }else if(userInput=='<' || userInput=='>'){
    let displayValue=document.getElementById('userInputDisplay');
    if(document.getElementById('userInputDisplay').value==""){
        swal("Input field is empty!", "...Nothing to remove")
        notify_section('notMatch','none');
        notify_section('match','none');
    }
    else if(userInput=='>'){
        //clear char one by one from left to right
        document.getElementById('userInputDisplay').value=displayValue.value.substring(1,displayValue.value.length)
         //str=display.value
         //str.substring(1,str.length)
         //str.slice(1,str.length)
    }
    else{
        //clear char one by one from right to left
        document.getElementById('userInputDisplay').value=displayValue.value.substring(0,displayValue.value.length-1)
         //str.substring(0,str.length-1)
         //str.slice(0,str.length-1);
        
    }
   }
   else{
    document.getElementById('userInputDisplay').value+=userInput;
   }  
}

//submit section

const submit=document.getElementById('submit');
submit.addEventListener('click',function(){
    let displayValue=document.getElementById('userInputDisplay').value;
    let randomNumber=document.getElementById('randomNumberDisplay').value;
  
    if((displayValue=="")||(randomNumber=="")){
        swal("Empty!", "..Check Input Field & Random Number Field....")
        notify_section('notMatch','none');
        notify_section('match','none')
    }
    else{
        if(displayValue==randomNumber){
            notify_section('match','block');
            notify_section('notMatch','none');
            
            //clear random number field &  user input field automatically
            input_field_clear('randomNumberDisplay');
            input_field_clear('userInputDisplay');
        }
        else{ 
            let updatevalue=0; 
            let action_left_value=document.getElementById('action_left_value').innerText;  
            let convertValue=parseInt(action_left_value);
            updatevalue=convertValue-1;
            document.getElementById('action-left').style.display='block'; 

            if(convertValue>1){
                 document.getElementById('action_left_value').innerText=updatevalue;
                 notify_section('notMatch','block');
                 notify_section('match','none');

                 //clear user input field automatically
                 input_field_clear('userInputDisplay');
            

             }else{
                 swal("OOps!You have alredy try 3 times");
                 document.getElementById('action-left').style.display='none'; 
                 notify_section('notMatch','none');
                 notify_section('match','none')  

                 //disabled submit button 
                 document.getElementById("submit").disabled = true;
                 document.getElementById("submit").style.backgroundColor='#cccccc';
                 document.getElementById("submit").style.color=' #666666';

                //clear random number field &  user input field automatically
                 input_field_clear('randomNumberDisplay');
                 input_field_clear('userInputDisplay');
             }          
    }
    }   

})

//notify_section
function notify_section(id,value){
    document.getElementById(id).style.display=value;
}

//after submit automatically clear input field
function input_field_clear(id){
    document.getElementById(id).value="";  
}
