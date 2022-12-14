const navLinkContainers = document.querySelectorAll('.nav-link-container')

function handleMouseEnter() {
  console.log('ENTER')
}

function handleMouseLeave() {
  console.log('LEAVE')
}

for (let i = 0; i < navLinkContainers.length; i++) {
  const navLinkContainer = navLinkContainers.item(i)
  const children = Array.from(navLinkContainer.children);
  const dropdownElement = children.find((element) => element.classList.contains('dropdown'))
  if (!dropdownElement) {
    continue
  }
  navLinkContainer.addEventListener('mouseover', () => {
    dropdownElement.classList.toggle('dropdown-active')
  })
}
