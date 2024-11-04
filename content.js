// Find all elements with a specific class (e.g., 'apple-icon') and adjust their appearance.
document.querySelectorAll('.apple-icon').forEach((element) => {
  if (element.alt === "bad") {
    // Make "bad" apples 50% transparent
    element.style.opacity = 0.5;
  } else if (element.alt === "good") {
    // Make "good" apples fully opaque and add a green border
    element.style.opacity = 1;
    element.style.border = "2px solid green";
  }
});

