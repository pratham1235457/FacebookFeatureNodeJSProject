var isStatus = document.querySelector("h5");
var isAdded = document.querySelector("#add");
var isRemoved = document.querySelector("#remove");

isAdded.addEventListener("click", () => {
    isStatus.innerHTML = "Friends";
    isStatus.style.color = "green";
});

isRemoved.addEventListener("click", () => {
    isStatus.innerHTML = "Stranger";
    isStatus.style.color = "red";
});
