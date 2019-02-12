function task5(){
function elements (quantity){
    var element = [];
    
    for (var i = 0; i < quantity; i++) {
        element [i] = prompt ('Введи элемент')
    }
    var sumEl = 0;
    var minEl = element[0];
    var maxEl = element[0];
    for (var i = 0; i < element.length; i++) {
        if (element[i] < minEl){
            minEl = element[i];
        }
        if (element[i] > maxEl) {
            maxEl = element[i];
        }
        sumEl += +element[i];
        console.log(minEl)
        console.log(maxEl)
        console.log(sumEl)
    }
    return alert('Максимальное - ' + maxEl + '. Минимальное - ' + minEl + '. Сумма = ' + sumEl)
}
elements(prompt ('Введи кол-во элементов'))
}