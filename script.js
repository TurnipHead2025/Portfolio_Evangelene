 /* FinalSprint
  Sheri Evangelene
    April 2026 */


// Finds skill-details class. Checks if card is open(active). Stores true/false. Closes all cards. If open close on click if closed open on click.
function toggleSkill(card) {
    const detail = card.querySelector(".skill-details").textContent;
    const display = document.getElementById("skill-display");
    const isOpen = card.classList.contains("active");

    document.querySelectorAll(".skill-card").forEach(c => c.classList.remove("active"));

    if (!isOpen) {
        card.classList.add("active");
        display.textContent = detail;
        display.style.display = "block";
    } else {
        display.style.display = "none";
    }
}
// Same as above but for before Code
function toggleProject(card) {
    const details = card.querySelector(".project-details");
    const isOpen = card.classList.contains("active");

    document.querySelectorAll(".history-card").forEach(c => {
        c.classList.remove("active");
        const d = c.querySelector(".project-details");
        if (d) d.style.display = "none";
    });

    if (!isOpen) {
        card.classList.add("active");
        details.style.display = "block";
    }
}