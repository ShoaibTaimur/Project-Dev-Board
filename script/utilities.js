function counterUpdate(id, counter, remaining,cardtitle,activityLog) {
    document.getElementById(id).addEventListener('click', function () {
        this.disabled = true;
        const count = document.getElementById(counter).innerText;
        const remain = document.getElementById(remaining).innerText;
        const div=document.getElementById(activityLog);
        const cardTitle=document.getElementById(cardtitle).innerText;
        const now=new Date();
        const time=now.toLocaleTimeString();

        const p=document.createElement('p');
        p.innerText=`You have completed ${cardTitle} at ${time}`;

        p.classList.add("bg-[#F4F7FF]" ,"rounded-2xl" ,"p-4" ,"text-[16px]" ,"text-[#4e4e4e]","mb-[10px]");
        div.appendChild(p);

        const convertedCount = parseInt(count);
        const convertedRemain = parseInt(remain);

        const sum = convertedCount + 1;
        const left = convertedRemain - 1;

        document.getElementById(counter).innerText = sum;
        document.getElementById(remaining).innerText = left;
        
    })
}