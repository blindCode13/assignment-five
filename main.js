let sectionContents = [
    { heading: "National Emergency Number", title: "National Emergency", number: "999", type: "All", logo: "assets/emergency.png" },
    { heading: "Police Helpline Number", title: "Police", number: "999", type: "Police", logo: "assets/police.png" },
    { heading: "Fire Service Number", title: "Fire Service", number: "999", type: "Fire", logo: "assets/fire-service.png" },
    { heading: "Ambulance Service", title: "Ambulance", number: "1994-999999", type: "Health", logo: "assets/ambulance.png" },
    { heading: "Women & Child Helpline", title: "Women & Child Helpline", number: "109", type: "Help", logo: "assets/emergency.png" },
    { heading: "Anti-Corruption Helpline", title: "Anti-Corruption", number: "106", type: "Govt.", logo: "assets/emergency.png" },
    { heading: "Electricity Helpline", title: "Electricity Outage", number: "16216", type: "Electricity", logo: "assets/emergency.png" },
    { heading: "Brac Helpline", title: "Brac", number: "16445", type: "NGO", logo: "assets/brac.png" },
    { heading: "Bangladesh Railway Helpline", title: "Bangladesh Railway", number: "163", type: "Travel", logo: "assets/Bangladesh-Railway.png" }
];

for (let item of sectionContents) {
    document.getElementById('section-container').innerHTML += `
        <section class="bg-white p-8 rounded-xl shadow-md">
            <div class="flex justify-between items-center mb-3">
                <div class="p-4 bg-[#FFE3E2] rounded-xl"><img src="${item.logo}" class="size-8"></div>
                <img src="assets/heart2.png" class="size-6 cursor-pointer fav">
            </div>
            <h1 class="font-bold text-2xl">${item.heading}</h1>
            <h2>${item.title}</h2>
            <h1 class="font-bold text-3xl mt-4 mb-1">${item.number}</h1>
            <h2 class="bg-[rgba(89,89,89,0.1)] px-4 py-1 rounded-3xl w-fit mb-6">${item.type}</h2>
            <div class="flex justify-between gap-2">
                <button class="flex items-center justify-center gap-2 w-full py-2 border border-gray-300 rounded-lg cursor-pointer copy-btn"><img src="assets/copy.png" class="size-4">Copy</button>
                <button class="flex items-center justify-center gap-2 w-full py-2 bg-[#00A63E] text-white rounded-lg cursor-pointer"><img src="assets/call.png" class="size-4">Call</button>
            </div>
        </section>
    `
}

let favCount = document.getElementById('fav-count')
let copyCount = document.getElementById('copy')

let favs = document.getElementsByClassName('fav')
let copyBtns = document.getElementsByClassName('copy-btn')

// Fav-Count Mechanism
for (let item of favs) {
    item.addEventListener('click', () => {
    
            if (!item.hasAttribute('clicked')) {
                item.setAttribute('src', 'assets/heart.png')
                favCount.innerText = parseInt(favCount.innerText) + 1
                item.setAttribute('clicked', true)
            }
            else {
                item.removeAttribute('clicked')
                item.setAttribute('src', 'assets/heart2.png')
                favCount.innerText = parseInt(favCount.innerText) - 1
            }

    })
}

// copy mechanism
for (let i = 0; i < copyBtns.length; i++) {
    copyBtns[i].addEventListener('click', () => {
        copyCount.innerHTML = parseInt(copyCount.innerText) + 1
        alert(`phone number copied from ${sectionContents[i].heading}`)
        navigator.clipboard.writeText(sectionContents[i].number)
    })
}