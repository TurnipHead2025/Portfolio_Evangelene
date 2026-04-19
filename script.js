 /* FinalSprint
  Sheri Evangelene
    April 2026 */


// Finds skill-details class. Checks if card is open(active). Stores true/false. Closes all cards. If open close on click if closed open on click.
function toggleSkill(card) {
    const details = card.querySelector(".skill-details");
    const isOpen = card.classList.contains("active");
    
    document.querySelectorAll(".skill-card").forEach(c => {
        c.classList.remove("active");
        c.querySelector(".skill-details").style.display = "none";
    });

    if (!isOpen) {
        card.classList.add("active");
        details.style.display = "block";
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