const smallCups = document.querySelectorAll(".cup-small");

const remained = document.getElementById("remained");

const litres = document.getElementById("litres");

const percentage = document.getElementById("percentage");

smallCups.forEach((cup, idx) => {
    cup.addEventListener("click", () => {
        highlightFullCups(idx);
    });
});

function highlightFullCups(idx) {
    if(idx === 7 && smallCups[idx].classList.contains("full")) {
        idx --;
    }

    if(smallCups[idx].classList.contains("full") && !smallCups[idx].nextElementSibling.classList.contains("full")) {
        idx --;
    }

    smallCups.forEach((eCup, eIdx) => {
        if(eIdx <= idx) {
            smallCups[eIdx].classList.add("full");
        } else {
            smallCups[eIdx].classList.remove("full");
        }
    })

    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll(".cup-small.full").length;

    const totalCups = smallCups.length;

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    }   else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerText = `${fullCups / totalCups * 100}%`;
    }

    if(totalCups === fullCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        litres.innerText = `${2 - fullCups / totalCups * 2}L`;
    }
}