document.addEventListener("DOMContentLoaded", (e) => {
// window.addEventListener("load", () => {
  //start your code here
  
   //start your code here
  
   console.log('load called');
  const recentlyGenerated=[];
  
  document.getElementById('submit').addEventListener('click',event=>{
    // function generatePassword(){  
    console.log(' called');
    event.preventDefault();
    let passwordLen=document.getElementById('passwordLen').value;
    
    let sets=[];
     if(passwordLen.length=4) {
    sets= [1,2,3,4];
     }
     else if (passwordLen.length=5) {
        sets= [1,2,3,4,5];
     }
     else {
        sets= [1,2,3,4,5,6];
     }
     
     
    let setItem;
    let num ;
    let newPassword=[];
    let min=0;
    let max=0;
    let suggestedPassword='';
    while (newPassword.length===0){
      for (let rec=1;rec<=passwordLen;rec++){
        num=Math.floor(Math.random() * sets.length);
        setItem=sets[num];
        sets.splice(num, 1);
        if (setItem===1){
          min =97;
          max=122;
          }
        else if (setItem===2){
          min=48;
          max=57;
          }
        else if (setItem===3){
          min=65;
          max=90;
          }
        else if (setItem===4){
          min=33;
          max=47;
          }
        else if (setItem===5){
          min=58;
          max=64;
          }
        else if (setItem===6){
          min=91;
          max=96;
          }
         console.log('min=',min,'--max=',max);
        suggestedPassword=suggestedPassword+String.fromCharCode(Math.floor(Math.random()*(max-min+1)+min)) ;
        console.log('suggestedPassword=',suggestedPassword);
        
        if(sets.length===0){
          sets=[1,2,3,4,5,6];
        }
      }
  
      newPassword=recentlyGenerated.filter(element=>{ 
        if (element===suggestedPassword){
        return suggestedPassword;
      };});
      if (newPassword.length>0 || suggestedPassword.length!=passwordLen){
        newPassword=[];
      }
      else if (newPassword.length===0  && suggestedPassword.length===passwordLen)
      newPassword=suggestedPassword;
    }
    console.log('suggestedPassword=',suggestedPassword);
  if(recentlyGenerated.length===0){
    recentlyGenerated[0]=suggestedPassword;
  }
  else recentlyGenerated[recentlyGenerated.length]=suggestedPassword;
  // return suggestedPassword;
  console.log('suggestedPassword=',suggestedPassword);
// let shuffle = arr => {
//   for (let i = suggestedPassword.length, j = Math.floor(Math.random() * --i); i; j = Math.floor(Math.random() * --i)) [arr[i], arr[j]] = [arr[j], arr[i]]
  // return arr;
// }
  
  document.getElementById('result').innerHTML=suggestedPassword;
}
);
  }
    )