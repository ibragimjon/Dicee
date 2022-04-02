const img = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const button = document.querySelector('.refresh')



button.addEventListener('click', () => {
    const random1 = Math.floor(Math.random( ) *6 + 1)
    const random2 = Math.floor(Math.random( ) *6 + 1)


    img.src = ` images/dice${random1}.png`
    img2.src = ` images/dice${random2}.png`



   const h1 = document.querySelector('h1')
    if( random1 > random2) {
    h1.textContent = ' player 1 won'
    } else if (random1 <  random2) {
    h1.textContent = 'player 2 won'
    } else {
    h1.textContent = 'Draw'
    }
})
