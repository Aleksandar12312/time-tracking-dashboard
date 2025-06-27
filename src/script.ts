    let dailyButton= document.querySelector(".day-button") as HTMLElement;
    let weeklyButton= document.querySelector(".week-button") as HTMLElement;
    let monthlyButton= document.querySelector(".month-button") as HTMLElement;
    let dailyElements= document.querySelectorAll("[class*='daily']") as NodeListOf<HTMLElement>;
    let weeklyElements= document.querySelectorAll("[class*='weekly']") as NodeListOf<HTMLElement>;
    let monthlyElements= document.querySelectorAll("[class*='monthly']") as NodeListOf<HTMLElement>;

    function showElements( button:HTMLElement,elements:NodeListOf<HTMLElement>){
        button.style.color = "white";
        elements.forEach((e)=>{
            e.classList.remove("hidden");

        })
    }
    function hideElements( button:HTMLElement,elements:NodeListOf<HTMLElement>){
        button.style.color = "hsl(235, 45%, 61%)";
        elements.forEach((e)=>{
            e.classList.add("hidden");
        })
    }

    if (dailyButton instanceof HTMLElement) {
        dailyButton.addEventListener("click",
            () => {
                showElements(dailyButton,dailyElements);
                hideElements(weeklyButton,weeklyElements);
                hideElements(monthlyButton,monthlyElements);
            }
            );
    }
    if (weeklyButton instanceof HTMLElement) {
        weeklyButton.addEventListener("click",
            () => {
                hideElements(dailyButton,dailyElements);
                showElements(weeklyButton,weeklyElements);
                hideElements(monthlyButton,monthlyElements);
            }
        );
    }
    if (monthlyButton instanceof HTMLElement) {
        monthlyButton.addEventListener("click",
            () => {
                hideElements(dailyButton,dailyElements);
                hideElements(weeklyButton,weeklyElements);
                showElements(monthlyButton,monthlyElements);
            }
        );
    }