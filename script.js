const observe = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        console.log(entry)
        if (entry.isIntersecting) {
            manageLeftSide(entry);
        }
    }
})

observe.observe(document.querySelector(".right-side"));
observe.observe(document.querySelector(".intro"));

function manageLeftSide(entry) {
    const classList = entry.target.classList;
    const leftSideClasses = document.querySelector('.left-side').classList;
    if (classList.contains("right-side")) {
        leftSideClasses.add("reveal-left-side");
        leftSideClasses.remove("hidde-left-side");
    } else if (classList.contains("intro")) {
        leftSideClasses.remove("reveal-left-side");
        leftSideClasses.add("hidde-left-side");
    }
}