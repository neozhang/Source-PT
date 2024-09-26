// Sign-up page functionality
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Content Loaded");

    const signupPage = document.getElementById("gh-signup-page");
    const closeButton = document.getElementById("gh-signup-close");
    const closeCornerButton = document.getElementById("gh-signup-close-corner");
    const ghostPortalRoot = document.getElementById("ghost-portal-root");

    // console.log("Signup page element:", signupPage);
    // console.log("Close button element:", closeButton);
    // console.log("Ghost portal root element:", ghostPortalRoot);

    function showSignupPage() {
        signupPage.classList.add("is-active");
        if (ghostPortalRoot) {
            ghostPortalRoot.style.display = "none";
        }
    }

    function hideSignupPage() {
        signupPage.classList.remove("is-active");
    }

    // Check if the user has visited before
    if (!localStorage.getItem("hasVisited")) {
        // console.log("First-time visitor detected");
        showSignupPage();
        localStorage.setItem("hasVisited", "true");
    } else {
        // console.log("Returning visitor detected");
    }

    if (closeButton) {
        closeButton.addEventListener("click", function () {
            // console.log("Close button clicked");
            hideSignupPage();
        });
    }

    if (closeCornerButton) {
        closeCornerButton.addEventListener("click", hideSignupPage);
    }

    // Ghost will handle the form submission automatically
});
