const adviceId = document.querySelector(".adviceId");
const adviceRef = document.querySelector(".adviceRef");
const dice = document.querySelector(".dice");

function getAdvice(){
  const advicePromise = fetch('https://api.adviceslip.com/advice');

advicePromise
.then((response)=> response.json())
.then((data)=>{
  console.log(data) 
 
const {slip:{id, advice}}= data;
adviceId.textContent=id;
adviceRef.textContent=`"${advice}"`
})


}
getAdvice()
dice.addEventListener("click", getAdvice)