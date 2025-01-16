document.addEventListener("DOMContentLoaded", () => {
    const dropdown1 = document.querySelector("#LO1 .dropdown-title");
    const content1 = document.querySelector("#LO1 .dropdown-content");
    const dropdown2 = document.querySelector("#LO2 .dropdown-title");
    const content2 = document.querySelector("#LO2 .dropdown-content");
    const dropdown3 = document.querySelector("#LO3 .dropdown-title");
    const content3 = document.querySelector("#LO3 .dropdown-content");
    const dropdown4 = document.querySelector("#LO4 .dropdown-title");
    const content4 = document.querySelector("#LO4 .dropdown-content");

    // Set initial state: closed
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";

    // Add manual toggle functionality for the first dropdown
    dropdown1.addEventListener("click", () => {
        content1.style.display = content1.style.display === "block" ? "none" : "block";
    });

    // Add manual toggle functionality for the second dropdown
    dropdown2.addEventListener("click", () => {
        content2.style.display = content2.style.display === "block" ? "none" : "block";
    });

    dropdown3.addEventListener("click", () => {
        content3.style.display = content3.style.display === "block" ? "none" : "block";
    });

    dropdown4.addEventListener("click", () => {
        content4.style.display = content4.style.display === "block" ? "none" : "block";
    });

// Check for URL parameter and open the corresponding dropdown
const urlParams = new URLSearchParams(window.location.search);
const openDropdown = urlParams.get("open");

if (openDropdown) {
    switch (openDropdown) {
        case "1":
            content1.style.display = "block";
            break;
        case "2":
            content2.style.display = "block";
            break;
        case "3":
            content3.style.display = "block";
            break;
        case "4":
            content4.style.display = "block";
            break;
    }
}
});

