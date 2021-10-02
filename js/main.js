// Burger menu
function burger() {
    const btn = document.querySelector('.burger')
    btn.addEventListener('click', () => {
        const burgerLines = document.querySelectorAll('.burger__line')
        const menu = document.querySelector('.menu')

        menu.classList.toggle('active')

        burgerLines.forEach( line => {
            line.classList.toggle('active')
        })
    })
}
burger()

// Fixed navbar
function fixedNav() {
    const nav = document.querySelector('nav')
    const breakpoint = 100 

    if ( window.scrollY >= breakpoint) {
      nav.classList.add('fixed__nav')
    } else {
      nav.classList.remove('fixed__nav')
    }
  }

  window.addEventListener('scroll', fixedNav)

// Tabs
function tabs(headerSelector, tabSelector, contentSelector, activeClass, display='flex') {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector)
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none'
            item.classList.remove(activeClass)
        });
        tab.forEach(item => {
            item.classList.remove(activeClass)
        });
    }
    function showTabContent(i = 0) {
       content[i].style.display = display
       content[i].classList.add(activeClass)
       tab[i].classList.add(activeClass)
    }
    hideTabContent()
    showTabContent()
    header.addEventListener('click', e => {
        const target = e.target
        if (target.classList.contains(tabSelector.replace(/\./, '')) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tab.forEach((item, i) => {
                if ( target == item || target.parentNode == item ) {
                    hideTabContent()
                    showTabContent(i)
                }
            });
        }
    })
}
tabs( '.tabs' ,'.tab__header', '.tab__content', 'active')