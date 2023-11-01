document.addEventListener("DOMContentLoaded", () => {
    const courseLists = document.querySelectorAll('.course-list');
    const coursesSection = document.getElementById("courses");
    const showCoursesButton = document.getElementById("show-courses-button");

courseLists.forEach(courseList => {
    courseList.addEventListener('mouseenter', () => {
        courseList.style.animationPlayState = 'paused';
    });

    courseList.addEventListener('mouseleave', () => {
        courseList.style.animationPlayState = 'running';
    });
    
});

showCoursesButton.addEventListener("click", () => {
    // Toggle the visibility of the Courses section
    if (coursesSection.style.display === "none" || coursesSection.style.display === "") {
        coursesSection.style.display = "block";
    } else {
        coursesSection.style.display = "none";
    }
});

var typed = new Typed(".text", {
    strings: ["Web Developer", "Programer", "Trained DBA"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

})


