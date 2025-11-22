const div = document.getElementById("todayDate");

const today = new Date();

const date=document.createElement('p');
date.classList.add("md:text-[18px]","xl:text-[22px]" ,"font-bold")

// Format: Day Month Year  
const options = { day: "numeric", month: "long", year: "numeric" };
const formattedDate = today.toLocaleDateString("en-US", options);
date.innerText=formattedDate;

div.appendChild(date);
