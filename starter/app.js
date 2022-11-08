// Functional Programming

const changeProjectHeadingTitle = (title) => {
  const projectTitle = document.querySelector("#project-title");

  if (typeof title === 'string') {
    projectTitle.textContent = title;
  }else {
    console.error("Your Argument is not a string!")
  }

  projectTitle.textContent = title
}

changeProjectHeadingTitle("JavaScipt is Cool")