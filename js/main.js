const meetingToggles = document.querySelectorAll('.demo-date-controls')

if(meetingToggles.length) {
    for (let i = 0; i < meetingToggles.length; i++) {
        const toggle = meetingToggles[i];
        
        const toggleButton = toggle.querySelector('.toggle')

        toggleButton.addEventListener('click', function(){
            if(toggle.classList.contains('open')) {
                toggle.classList.remove('open')
            } else {
                toggle.classList.add('open')
            }
        })
    }
}

const moreInfoToggles = document.querySelectorAll('.more-button')
if(moreInfoToggles.length) {
    for (let ii = 0; ii < moreInfoToggles.length; ii++) {
        const tog = moreInfoToggles[ii];
        const buttonLabel = tog.querySelector('.label')
        const buttonIcon = tog.querySelector('.img-wrap img')
        
        tog.addEventListener('click', function(e){
            const target = e.currentTarget.dataset.target


            const targetEl = document.querySelector('#' + target)
            if(targetEl) {
                const targetInner = targetEl.querySelector('.inner')
                const innerH = targetInner.offsetHeight

                if(targetEl.classList.contains('open')) {
                    targetEl.classList.remove('open')
                    targetEl.style.height = '0px'
                    buttonLabel.innerHTML = 'More Info'
                    buttonIcon.setAttribute('src', 'assets/icons/add.svg')
                } else {
                    targetEl.classList.add('open')
                    targetEl.style.height = innerH + 'px'
                    buttonLabel.innerHTML = 'Less Info'
                    buttonIcon.setAttribute('src', 'assets/icons/minus.svg')
                }
            }
        })
    }
}