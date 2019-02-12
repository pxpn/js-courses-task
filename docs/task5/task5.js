function task5(){
function elements (quantity){
    var element = [];
    
    for (var i = 0; i < quantity; i++) {
        element [i] = prompt ('Введи элемент')
    }
    var minEl = element[0];
    var maxEl = element[0];
    var sumEl = 0;
    for (var i = 0; i < quantity; i++) {
        if (element[i] < minEl){
            minEl = element[i];
        }
        if (element[i] > maxEl){
            maxEl = element[i];
        }
        sumEl += +element[i];
    }
    return alert('Максимальное - ' + maxEl + '. Минимальное - ' + minEl + '. Сумма = ' + sumEl)

}
elements(prompt ('Введи кол-во элементов'))
}