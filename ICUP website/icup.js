window.addEventListener('scroll', function() {
    const video = document.getElementById('showcase');
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    // Calculate the new scale factor based on scroll
    // The scale factor reduces to a minimum of 0.75 (75%) as you scroll down
    const scaleFactor = Math.max(0.875, 1 - scrollY / (2 * windowHeight));
    video.style.transform = `scale(${scaleFactor})`;  // Scale down uniformly

    // Adjust corner rounding based on scale
    const cornerRadius = (1 - scaleFactor) * 500;  // Increase corner radius as video scales down
    video.style.borderRadius = `${cornerRadius}px`;  // Apply rounded corners
});

document.querySelectorAll('.video-1 video').forEach(video => {
    video.addEventListener('mouseenter', function() {
        this.play();
    });
    video.addEventListener('mouseleave', function() {
        this.pause();
    });
});


document.querySelectorAll('.video-2 video').forEach(video => {
    video.addEventListener('mouseenter', function() {
        this.play();
    });
    video.addEventListener('mouseleave', function() {
        this.pause();
    });
});

document.querySelectorAll('.video-3 video').forEach(video => {
    video.addEventListener('mouseenter', function() {
        this.play();
    });
    video.addEventListener('mouseleave', function() {
        this.pause();
    });
});

window.addEventListener('scroll', function() {
    const dropdown = document.getElementById('dropdownBar');
    const mainContent = document.querySelector('.main-content'); // Select the main content area

    // Only retract the dropdown if it is currently expanded
    if (dropdown.style.height !== "0px" && dropdown.style.height !== "") {
        dropdown.style.height = "0px"; // Animate the height back to 0
        mainContent.classList.remove('blur-content'); // Remove the blur effect
        setTimeout(function() {
            dropdown.style.display = "none"; // Only hide the dropdown after the transition
        }, 300); // This timeout should match the transition time of your CSS
    }
});

// Existing event listener for the search button
document.getElementById('searchbutton').addEventListener('click', function() {
    var button = document.getElementById('searchbutton');
    var dropdown = document.getElementById('dropdownBar');
    var mainContent = document.querySelector('.main-content'); // Select the main content area

    button.disabled = true; // Disable the button to prevent spamming

    if (dropdown.style.height === "0px" || dropdown.style.height === "") {
        dropdown.style.display = "block"; // Ensure dropdown is visible before animating
        setTimeout(function() {
            dropdown.style.height = "300px"; // Animate to the full height
            mainContent.classList.add('blur-content'); // Blur the main content
        }, 10); // Short delay to ensure display changes are applied first
    } else {
        dropdown.style.height = "0px"; // Animate the height back to 0
        mainContent.classList.remove('blur-content'); // Remove the blur effect
        setTimeout(function() {
            dropdown.style.display = "none"; // Only hide the dropdown after the transition
        }, 300); // This timeout should match the transition time of your CSS
    }

    // Re-enable the button after a cooldown period
    setTimeout(function() {
        button.disabled = false;
    }, 400); // Cooldown slightly longer than your longest transition time
});

document.getElementById('searchbutton').addEventListener('click', function() {
    document.getElementById('searchInput').focus();
});
