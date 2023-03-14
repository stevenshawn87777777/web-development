const toggleButton = document.getElementsByClassName('toggle')[0]
const navLinks = document.getElementsByClassName('nav-list')[0]

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})

// navLinks.forEach((link, index) => {
//     if(link.style.animation) {
//     link.style.animation = '';
//     } else {
//     link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 2}s`;
//     }
//     });
//     }

// const toggles = document.querySelectorAll('pack-toggle')

// toggles.forEach(toggle => {
//     toogle.addEventListener(click, () => {
//         toggle.parentNode.classList.toggle('active')
//     })
// })

const packMenu = document.querySelector('.pack-menu'),
        pacKBbtn = document.querySelector('.pack-btn'),
        options = document.querySelectorAll('.pack-option'),
        packText = document.querySelector('.pack-text');

pacKBbtn.addEventListener("click", () => packMenu.classList.toggle("active")); 

        options.forEach(option =>{
            option.addEventListener('click', () =>{
                let selectedOption = option.querySelector(".option-text").innerText;
                packText.innerText = selectedOption;
                packMenu.classList.remove("active");
            })
            
        })
