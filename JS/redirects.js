/* Redirect Warning */
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".external-link"); /* Checks for class "exertnal-link" */

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const confirmed = confirm("You are about to leave this site. Do you want to continue?");
            if (!confirmed) {
                event.preventDefault(); /* If user says no, prevents from switching site */
            }
        });
    });
});