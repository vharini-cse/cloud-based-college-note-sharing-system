const noteForm = document.getElementById("noteForm");

noteForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const studentName = document.getElementById("studentName").value.trim();
    const noteTitle = document.getElementById("noteTitle").value.trim();
    const subject = document.getElementById("subject").value;

    if (!studentName || !noteTitle || !subject) {
        alert("Please complete all the fields before sharing your note.");
        return;
    }

    alert(
        "Thank you, " +
        studentName +
        "! Your note \"" +
        noteTitle +
        "\" has been submitted successfully."
    );

    noteForm.reset();
});

const viewButtons = document.querySelectorAll(".view-button");

viewButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        alert("Notes for this subject will be available soon.");
    });
});