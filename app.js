const resultElement1 = document.getElementById('result1')
const resultElement2 = document.getElementById('result2')
const resultElement3 = document.getElementById('result3')
const resultElement4 = document.getElementById('result4')
const resultElement5 = document.getElementById('result5')
const resultElement6 = document.getElementById('result6')
const tableElement = document.getElementById('table')

const btnSubmit = document.getElementById('submit')
const btnAdd = document.getElementById('add')

/* Player 1 */
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const input4 = document.getElementById('input4')
const input5 = document.getElementById('input5')
const input6 = document.getElementById('input6')
const input7 = document.getElementById('input7')

/* Player 2 */
const input11 = document.getElementById('input11')
const input22 = document.getElementById('input22')
const input33 = document.getElementById('input33')
const input44 = document.getElementById('input44')
const input55 = document.getElementById('input55')
const input66 = document.getElementById('input66')
const input77 = document.getElementById('input77')

/* Player 3 */
const input111 = document.getElementById('input111')
const input222 = document.getElementById('input222')
const input333 = document.getElementById('input333')
const input444 = document.getElementById('input444')
const input555 = document.getElementById('input555')
const input666 = document.getElementById('input666')
const input777 = document.getElementById('input777')

/* Player 4 */
const input1111 = document.getElementById('input1111')
const input2222 = document.getElementById('input2222')
const input3333 = document.getElementById('input3333')
const input4444 = document.getElementById('input4444')
const input5555 = document.getElementById('input5555')
const input6666 = document.getElementById('input6666')
const input7777 = document.getElementById('input7777')

/* Player 5 */
const input11111 = document.getElementById('input11111')
const input22222 = document.getElementById('input22222')
const input33333 = document.getElementById('input33333')
const input44444 = document.getElementById('input44444')
const input55555 = document.getElementById('input55555')
const input66666 = document.getElementById('input66666')
const input77777 = document.getElementById('input77777')

/* Player 6 */
const input111111 = document.getElementById('input111111')
const input222222 = document.getElementById('input222222')
const input333333 = document.getElementById('input333333')
const input444444 = document.getElementById('input444444')
const input555555 = document.getElementById('input555555')
const input666666 = document.getElementById('input666666')
const input777777 = document.getElementById('input777777')

btnSubmit.onclick = function() {
    const sum1 = Number(input1.value) + Number(input2.value) + Number(input3.value) + Number(input4.value) + Number(input5.value) + Number(input6.value) + Number(input7.value)
resultElement1.textContent = sum1
    const sum2 = Number(input11.value) + Number(input22.value) + Number(input33.value) + Number(input44.value) + Number(input55.value) + Number(input66.value) + Number(input77.value)
resultElement2.textContent = sum2
    const sum3 = Number(input111.value) + Number(input222.value) + Number(input333.value) + Number(input444.value) + Number(input555.value) + Number(input666.value) + Number(input777.value)
resultElement3.textContent = sum3
    const sum4 = Number(input1111.value) + Number(input2222.value) + Number(input3333.value) + Number(input4444.value) + Number(input5555.value) + Number(input6666.value) + Number(input7777.value)
resultElement4.textContent = sum4
    const sum5 = Number(input11111.value) + Number(input22222.value) + Number(input33333.value) + Number(input44444.value) + Number(input55555.value) + Number(input66666.value) + Number(input77777.value)
resultElement5.textContent = sum5
    const sum6 = Number(input111111.value) + Number(input222222.value) + Number(input333333.value) + Number(input444444.value) + Number(input555555.value) + Number(input666666.value) + Number(input777777.value)
resultElement6.textContent = sum6
}

btnAdd.onclick = function() {
    tableElement.insertAdjacentHTML('beforeend',
    `                    
    <tr>
        <td><input class="radius" type="text" placeholder="Имя" id="player1" value=""></td>
        <td><input class="size" type="number" placeholder="Очки" id="input1"></td>
        <td><input class="size" type="number" placeholder="Очки" id="input2"></td>
        <td><input class="size" type="number" placeholder="Очки" id="input3"></td>
        <td><input class="size" type="number" placeholder="Очки" id="input4"></td>
        <td><input class="size" type="number" placeholder="Очки" id="input5"></td>
        <td><input class="size" type="number" placeholder="Очки" id="input6"></td>
        <td><input class="size" type="number" placeholder="Очки" id="input7"></td>
        <td><h2 id="result1">0</h2></td>
    </tr>` 
    )
}



