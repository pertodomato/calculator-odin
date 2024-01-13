let teclado = document.querySelector('.teclado')
let painel = document.querySelector('.painel')

let zero = document.querySelector('.zero')
let um = document.querySelector('.um')
let dois = document.querySelector('.dois')
let tres = document.querySelector('.tres')
let quatro = document.querySelector('.quatro')
let cinco = document.querySelector('.cinco')
let seis = document.querySelector('.seis')
let sete = document.querySelector('.sete')
let oito = document.querySelector('.oito')
let nove = document.querySelector('.nove')

let igual = document.querySelector('.igual')
let clear = document.querySelector('.clear')
let deleta = document.querySelector('.delete')

let ponto = document.querySelector('.ponto')
let soma = document.querySelector('.soma')
let subtracao = document.querySelector('.subtracao')
let multiplicacao = document.querySelector('.multiplicacao')
let divisao = document.querySelector('.divisao')

let textoConta = '6+1-2*3/4/'

let conta = '6 + 1 - 2 * 3 / 4 / '
teclado.addEventListener('click',()=>{
    painel.textContent = textoConta
    console.log(conta)
})

const maxsize = 15

zero.addEventListener('click',()=>{
    if (textoConta.length < maxsize){
        textoConta = textoConta + '0'
        conta = conta + '0'
    }
})
um.addEventListener('click',()=>{
    if (textoConta.length < maxsize){
        textoConta = textoConta + '1'
        conta = conta + '1'
    }
})
dois.addEventListener('click',()=>{
    if (textoConta.length < maxsize){
        textoConta = textoConta + '2'
        conta = conta + '2'
    }
})
tres.addEventListener('click',()=>{
    if (textoConta.length < maxsize){
        textoConta = textoConta + '3'
        conta = conta + '3'
    }
})
quatro.addEventListener('click',()=>{
    if (textoConta.length < maxsize){
        textoConta = textoConta + '4'
        conta = conta + '4'
    }
})
cinco.addEventListener('click',()=>{
    if (textoConta.length < maxsize){
        textoConta = textoConta + '5'
        conta = conta + '5'
    }
})
seis.addEventListener('click',()=>{
    if (textoConta.length < maxsize){
        textoConta = textoConta + '6'
        conta = conta + '6'
    }
})
sete.addEventListener('click',()=>{
    if (textoConta.length < maxsize){
        textoConta = textoConta + '7'
        conta = conta + '7'
    }
})
oito.addEventListener('click',()=>{
    if (textoConta.length < maxsize){
        textoConta = textoConta + '8'
        conta = conta + '8'
    }
    
})
nove.addEventListener('click',()=>{
    if (textoConta.length < maxsize){
        textoConta = textoConta + '9'
        conta = conta + '9'
    }
})

soma.addEventListener('click',()=>{
    if (textoConta.length < maxsize && isLastANum(textoConta)){
        textoConta = textoConta + '+'
        conta = conta + ' + '
    }
})
subtracao.addEventListener('click',()=>{
    if (textoConta.length < maxsize && isLastANum(textoConta)){
        textoConta = textoConta + '-'
        conta = conta + ' - '
    }
})
multiplicacao.addEventListener('click',()=>{
    if (textoConta.length < maxsize && isLastANum(textoConta)){
        textoConta = textoConta + '*'
        conta = conta + ' * '
    }
})
divisao.addEventListener('click',()=>{
    if (textoConta.length < maxsize && isLastANum(textoConta)){
        textoConta = textoConta + '/'
        conta = conta + ' / '
    }
})
ponto.addEventListener('click',()=>{
    if ( (textoConta.length < maxsize) && isNumOnlyPoint(textoConta) ){
        if(!isLastANum(textoConta) && textoConta.length < (maxsize-1)){
            textoConta = textoConta + '0.'
            conta = conta + '0.'
        }
        else{
            textoConta = textoConta + '.'
            conta = conta + '.'
        }
    }

})

deleta.addEventListener('click',()=>{
    if(textoConta.length = 0){
    }
    else{
        textoConta = textoConta.substring(0,textoConta.length-1)
        if(conta.at(-1) == ' '){
            conta = conta.substring(0,conta.length-3)
        }
        else{
            conta = conta.substring(0,conta.length-1)
        }
    }
})

clear.addEventListener('click',()=>{
    textoConta = ''
})

igual.addEventListener('click',()=>{
    if(!isLastANum(textoConta)){
        textoConta = textoConta.substring(0,textoConta.length-1)
        conta = conta.substring(0,conta.length-3)
    }
    textoConta = calculate(conta)
    conta = textoConta
})

function isLastANum (textoConta){
    if(textoConta.at(-1) == '+' || textoConta.at(-1) == '-' || textoConta.at(-1) == '*' || textoConta.at(-1) == '/' ||  textoConta.length == 0 ){
        return false
    }
    else{
        return true
    }
}

function isNumOnlyPoint (textoConta){
    for(let i = 0; textoConta.length >= i;i++){
        if(textoConta.at(-(i)) == '+' || textoConta.at(-(i)) == '-' || textoConta.at(-(i)) == '*' || textoConta.at(-(i)) == '/' ||  textoConta.length == 0 ){
            return true
        }
        if(textoConta.at(-(i)) == '.'){
            return false
        }
    }
}

function calculate (conta){
    const calculo = conta.split(' ')
    console.log(calculo)
    console.table(calculo)

    const operacoes = ['/','*','+','-']
    console.log('start')
    operacoes.forEach(operador => {
        for(let i = 0; calculo.length > i; i++){
            if(calculo[i] == operador){
                let result = 1
                if(operador == '/'){
                    result = calculo[i-1] / calculo[i+1]
                }
                if(operador == '*'){
                    result = calculo[i-1] * calculo[i+1]
                }
                if(operador == '+'){
                    result = Number(calculo[i-1]) + Number(calculo[i+1])
                }
                if(operador == '-'){
                    result = calculo[i-1] - calculo[i+1]
                }
                console.log(result)
                calculo.splice(i-1 ,3 , result)
                i = i-1
            }
            else{

            }
        }
    }
    );
    console.log('fim')
    console.log(calculo)
    return calculo[0]
}

alert(isLastANum(textoConta))

