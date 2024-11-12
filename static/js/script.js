function toggleTheme() {
    // Get the theme toggle button
    const themeToggleButton = document.getElementById("theme-toggle");
    // Toggle the 'dark-mode' class on the body element
    document.body.classList.toggle("dark-mode");

    // Save the current theme preference to localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem('theme', 'dark'); // Save dark theme
        themeToggleButton.textContent = "🌙"; // Change to moon when dark mode is active
    } else {
        localStorage.setItem('theme', 'light'); // Save light theme
        themeToggleButton.textContent = "🌞"; // Change to sun when light mode is active
    }
}

// Check localStorage for theme preference on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');

    // Apply saved theme if exists
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById("theme-toggle").textContent = "🌙"; // Adjust the button emoji
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById("theme-toggle").textContent = "🌞"; // Adjust the button emoji
    }
});
