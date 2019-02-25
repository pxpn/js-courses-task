function task33(){
    var chislo = prompt('Введите число')
    var chisloArr = chislo.split('')
    var reverse = []
    for (var i = chisloArr.length-1; i>=0 ; i--) {
        reverse.push(chisloArr[i])

    }
    alert(reverse.join(''));
}
