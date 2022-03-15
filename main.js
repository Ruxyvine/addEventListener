					// Задание #1 

					// По нажатию клавиш меняйте цвет заднего фона div - элемента.
					// R- red;
					// G - green;
					// B - blue;
					// W - white;
					// Shift + B - black
					// Shift + G - gray;



const block = `
	width: 500px;
	height: 250px;
	box-shadow: 10px -1px teal;
	border-color: #92a8d1;
	outline: 2px solid #000; 
  border: 3px solid #fff; 
  border-radius: 10px; 

`
const red = `background: red;`
const green= `background: green;`
const blue = `background: blue;`
const white = `background: white;`
const black = `background: black;`
const gray = `background: gray;`



let div1 = document.createElement('div')
div1.style.cssText = block
document.addEventListener('keypress', (e) => {

	
	if (e.key === 'r'){
	div1.style.cssText += red
	}
	if (e.key === 'g'){
	div1.style.cssText += green
	}
	if (e.key === 'b'){
	div1.style.cssText += blue
	}
	if (e.key === 'w'){
	div1.style.cssText += white
	}
	
	if (e.shiftKey && e.key === 'G'){
	div1.style.cssText += gray
	}
	 if (e.shiftKey && e.key ==='B'){
	div1.style.cssText += black
	}
  
});
document.body.append(div1)




// Задание #2

// Создайте переменную let i = 0;, по нажатию на кнопку выводите в консоль переменную i увеличивайте ее в 2 раза;
let btn = document.createElement('button')
btn.innerHTML = 'Press'
let i = 0
document.addEventListener('click', (e) => {
	if ( i == 0){i++}
	else {i = i*2}
		console.log(i)
		// i++
		// console.log(i * 2)
})
document.body.append(btn)


// Задание #3

// Создайте div размером 500px * 500px, по нажатию на нее выводите в консоль позицию места куда вы нажали относительно div-a;

const block2 = `
	width: 500px;
	height: 500px;
	box-shadow: 10px -1px teal;
	border-color: #92a8d1;
	outline: 2px solid #000; 
  border: 3px solid #fff; 
  border-radius: 10px; 

`
let div2 = document.createElement('div')
div2.style.cssText = block2
document.addEventListener('click', e => {
	x = div2.offsetLeft
  y = div2.offsetTop
	console.log(`X - ${e.clientX - x } -- Y - ${e.clientY - y}`)
	
})
document.body.append(div2)
// document.addEventListener('click', e => { //чет пытался сделать через координаты оффсет
		// console.log(`X = ${e.pageX - div2.offsetX} -- Y = ${e.pageY - div2.offsetY}`)
	

		// console.log(`X = ${e.clientX - div2.offsetX } -- Y = ${e.pageY - div2.offsetTop}`)
	
		//})


// Задание #4   //не полуичлось немного )) в боди класс не добавил

// Создайте input . При изменении инпута меняйте цвет заднего фона body на значение из этого инпута
const inpcss = `
`
const body = document.body

let inp = document.createElement('input')
inp.innerHTML = 'mix color'
inp.style.cssText = inpcss
document.addEventListener('input', e => {
	clr = input.value
	if ( clr == 'red'){
		body.style.css = "red"
	}

})


document.body.append(inp)



