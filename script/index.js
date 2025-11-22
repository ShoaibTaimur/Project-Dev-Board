// Date
const div = document.getElementById("todayDate");
const today = new Date();

const date=document.createElement('p');
date.classList.add("md:text-[18px]","xl:text-[22px]" ,"font-bold")

// Format: Day Month Year  
const options = { day: "numeric", month: "long", year: "numeric" };
const formattedDate = today.toLocaleDateString("en-US", options);
date.innerText=formattedDate;

div.appendChild(date);

counterUpdate('card-1-btn','task-done','task-assigned','card-1-title','activity-log');
counterUpdate('card-2-btn','task-done','task-assigned','card-2-title','activity-log');
counterUpdate('card-3-btn','task-done','task-assigned','card-3-title','activity-log');
counterUpdate('card-4-btn','task-done','task-assigned','card-4-title','activity-log');
counterUpdate('card-5-btn','task-done','task-assigned','card-5-title','activity-log');
counterUpdate('card-6-btn','task-done','task-assigned','card-6-title','activity-log');
document.getElementById('activity-log-btn').addEventListener('click',function(){
    document.getElementById('activity-log').innerText="";
});

document.getElementById('colorChange').addEventListener('click', function(){
    const root =document.documentElement;
    const current=getComputedStyle(root).getPropertyValue("--main-color").trim();
    const color1="244 247 255";
    const color2="218 255 246";
    root.style.setProperty("--main-color",current === color1 ? color2 : color1);
})

