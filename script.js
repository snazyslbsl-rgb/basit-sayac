let count=0;


const countDisplay=document.getElementById("count");
const decreaseBtn=document.getElementById("decrease");
const increasebTn=document.getElementById("increase");
const resetBtn=document.getElementById("reset");



function updateDisplay() {

    countDisplay.textContent=count;
    countDisplay.classList.add("count-change");
    setTimeout(() =>{

        countDisplay.classList.remove("count-change")
    },200);
}

increasebTn.addEventListener("click", ()=> {

    count++;
    updateDisplay();
});

decreaseBtn.addEventListener("click",()=> {
    count--;
    updateDisplay();

});

resetBtn.addEventListener("click", ()=>{
    count=0;
    updateDisplay();

});
