const box = document.getElementById('box')
// const trigger = document.getElementById('trigger')
const view_1 = document.getElementById('view_1')
const view_2 = document.getElementById('view_2')
const view_3 = document.getElementById('view_3')
const view_4 = document.getElementById('view_4')
const view_5 = document.getElementById('view_5')
const view_6 = document.getElementById('view_6')
const one = `<div class="pic_one"></div>`
const two = `
    <div class="pic_two">
        <div class="p_one"></div>
        <div class="p_two"></div>
    </div>
`
const three = `
    <div class="pic_three">
        <div class="p_one"></div>
        <div class="p_two"></div>
        <div class="p_three"></div>
    </div>
`
const four = `
    <div class="pic_four">
        <div class="p_one"></div>
        <div class="p_two"></div>
        <div class="p_three"></div>
        <div class="p_four"></div>
    </div>
`
const five = `
    <div class="pic_five">
        <div class="p_one"></div>
        <div class="p_two"></div>
        <div class="p_three"></div>
        <div class="p_four"></div>
        <div class="p_five"></div>
    </div>
`
const six = `
    <div class="pic_six">
        <div class="p_one"></div>
        <div class="p_two"></div>
        <div class="p_three"></div>
        <div class="p_four"></div>
        <div class="p_five"></div>
        <div class="p_six"></div>
    </div>
`

let dice = 1

box.onclick = function animate(event) {
    box.classList.add('animation')
    dice = randomIntFromInterval(1, 6)
    setTimeout(() => {
        switch (dice) {
            case 1:
                view_1.innerHTML = one
                view_2.innerHTML = two
                view_3.innerHTML = three
                view_4.innerHTML = four
                view_5.innerHTML = five
                view_6.innerHTML = six
                break
            case 2:
                view_1.innerHTML = two
                view_2.innerHTML = one
                view_3.innerHTML = three
                view_4.innerHTML = four
                view_5.innerHTML = five
                view_6.innerHTML = six
                break
            case 3:
                view_1.innerHTML = three
                view_2.innerHTML = two
                view_3.innerHTML = one
                view_4.innerHTML = four
                view_5.innerHTML = five
                view_6.innerHTML = six
                break
            case 4:
                view_1.innerHTML = four
                view_2.innerHTML = two
                view_3.innerHTML = three
                view_4.innerHTML = one
                view_5.innerHTML = five
                view_6.innerHTML = six
                break
            case 5:
                view_1.innerHTML = five
                view_2.innerHTML = two
                view_3.innerHTML = three
                view_4.innerHTML = four
                view_5.innerHTML = one
                view_6.innerHTML = six
                break
            case 6:
                view_1.innerHTML = six
                view_2.innerHTML = two
                view_3.innerHTML = three
                view_4.innerHTML = four
                view_5.innerHTML = five
                view_6.innerHTML = one
                break
        }
    }, 300)
    setTimeout(() => {
        box.classList.remove('animation')
    }, 3000)
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}