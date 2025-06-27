"use strict";
let dailyButton = document.querySelector(".day-button");
let weeklyButton = document.querySelector(".week-button");
let monthlyButton = document.querySelector(".month-button");
let dailyElements = document.querySelectorAll("[class*='daily']");
let weeklyElements = document.querySelectorAll("[class*='weekly']");
let monthlyElements = document.querySelectorAll("[class*='monthly']");
function showElements(button, elements) {
    button.style.color = "white";
    elements.forEach((e) => {
        e.classList.remove("hidden");
    });
}
function hideElements(button, elements) {
    button.style.color = "hsl(235, 45%, 61%)";
    elements.forEach((e) => {
        e.classList.add("hidden");
    });
}
if (dailyButton instanceof HTMLElement) {
    dailyButton.addEventListener("click", () => {
        showElements(dailyButton, dailyElements);
        hideElements(weeklyButton, weeklyElements);
        hideElements(monthlyButton, monthlyElements);
    });
}
if (weeklyButton instanceof HTMLElement) {
    weeklyButton.addEventListener("click", () => {
        hideElements(dailyButton, dailyElements);
        showElements(weeklyButton, weeklyElements);
        hideElements(monthlyButton, monthlyElements);
    });
}
if (monthlyButton instanceof HTMLElement) {
    monthlyButton.addEventListener("click", () => {
        hideElements(dailyButton, dailyElements);
        hideElements(weeklyButton, weeklyElements);
        showElements(monthlyButton, monthlyElements);
    });
}
