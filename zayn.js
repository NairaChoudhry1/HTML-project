document.addEventListener("DOMContentLoaded", function() {
    const welcomeMessageButton = document.createElement("button");
    welcomeMessageButton.textContent = "Klik hier voor een bericht!";
    welcomeMessageButton.style.padding = "10px 20px";
    welcomeMessageButton.style.margin = "20px auto";
    welcomeMessageButton.style.border = "none";
    welcomeMessageButton.style.borderRadius = "5px";
    welcomeMessageButton.style.backgroundColor = "#1f1f2e";
    welcomeMessageButton.style.color = "white";
    welcomeMessageButton.style.cursor = "pointer";
    welcomeMessageButton.style.display = "block";

    welcomeMessageButton.addEventListener("click", function() {
        alert("Welkom op de officiële ZAYN-website!");
    });

    document.querySelector("#welcome").appendChild(welcomeMessageButton);
});
