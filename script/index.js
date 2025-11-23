// Date
const div = document.getElementById("todayDate");
const today = new Date();

const date = document.createElement('p');
date.classList.add("md:text-[18px]", "xl:text-[22px]", "font-bold")

// Format: Day Month Year  
const options = { day: "numeric", month: "long", year: "numeric" };
const formattedDate = today.toLocaleDateString("en-US", options);
date.innerText = formattedDate;

div.appendChild(date);

counterUpdate('card-1-btn', 'task-done', 'task-assigned', 'card-1-title', 'activity-log');
counterUpdate('card-2-btn', 'task-done', 'task-assigned', 'card-2-title', 'activity-log');
counterUpdate('card-3-btn', 'task-done', 'task-assigned', 'card-3-title', 'activity-log');
counterUpdate('card-4-btn', 'task-done', 'task-assigned', 'card-4-title', 'activity-log');
counterUpdate('card-5-btn', 'task-done', 'task-assigned', 'card-5-title', 'activity-log');
counterUpdate('card-6-btn', 'task-done', 'task-assigned', 'card-6-title', 'activity-log');
document.getElementById('activity-log-btn').addEventListener('click', function () {
    document.getElementById('activity-log').innerText = "";
    Swal.fire({
        title: "Cleared!",
        text: "Activity Log is cleared!",
        icon: "success"
    });

});

document.getElementById('colorChange').addEventListener('click', function () {
    const root = document.documentElement;
    const current = getComputedStyle(root).getPropertyValue("--main-color").trim();
    const color1 = "244 247 255";
    const color2 = "218 255 246";
    root.style.setProperty("--main-color", current === color1 ? color2 : color1);
    Swal.fire({
        title: "Changed!",
        text: "Theme Changed Successfully!",
        icon: "success"
    });
});




//Form Section

const addTaskBtn = document.getElementById("new-task-btn");
const formContainer = document.getElementById("task-form-container");

addTaskBtn.addEventListener("click", function () {
    formContainer.classList.toggle("hidden");

    // Optional: Change button text when toggled
    if (formContainer.classList.contains("hidden")) {
        addTaskBtn.innerText = "Add New Task";
    } else {
        addTaskBtn.innerText = "Close Form";
    }
});



const form = document.getElementById("loginForm");
const cardsContainer = document.getElementById("cards-container");

// you already have 6 static cards
let cardCount = 6;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    Swal.fire({
        title: "Added!",
        text: "Task added successfully!",
        icon: "success"
    });

    const taskAssigned = document.getElementById('task-assigned').innerText;
    const convertedTaskAssigned = parseInt(taskAssigned);

    const sum = convertedTaskAssigned + 1;

    document.getElementById('task-assigned').innerText = sum;


    const company = e.target.companyName.value;
    const title = e.target.title.value;
    const description = e.target.description.value;
    const deadline = e.target.deadline.value;

    cardCount += 1;

    const titleId = `card-${cardCount}-title`;
    const btnId = `card-${cardCount}-btn`;

    const card = document.createElement("div");
    card.className = `card-${cardCount} flex-[1_1_300px] bg-[rgb(var(--main-color))] p-[24px] rounded-2xl`;

    card.innerHTML = `
        <div class="flex flex-col gap-[16px]">
            <p class="text-[16px] text-[rgba(0,48,60,1)] rounded-xl px-[16px] py-[8px] bg-white w-fit">
                ${company}
            </p>
            <h1 id="${titleId}" class="text-[20px] sm:text-[24px] text-[rgba(0,48,60,1)] font-medium">
                ${title}
            </h1>
            <p class="bg-white p-[16px] text-[12px] sm:text-[16px] rounded-xl">
                <span class="opacity-50">${description}</span>
            </p>
        </div>

        <div class="mt-4 mb-4 border-t-4 border-dashed border-[#dde5fd]"></div>

        <div class="flex flex-col sm:flex-row justify-between">
            <div class="flex flex-col items-center">
                <p class="text-[14px] text-[rgba(0,48,60,1)]">Deadline</p>
                <h1 class="text-[16px] font-medium">${deadline}</h1>
            </div>
            <button
                id="${btnId}"
                class="btn btn-soft btn-primary px-[20px] py-[10px] text-[16px] font-medium rounded-xl">
                Completed
            </button>
        </div>
    `;

    cardsContainer.appendChild(card);

    counterUpdate(btnId, 'task-done', 'task-assigned', titleId, 'activity-log');

    form.reset();
});


