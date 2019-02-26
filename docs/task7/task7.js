function task7() {
    var text = prompt('введти текст');
    var delayTime = +prompt('введи задержку')

    function mymessage(){
        alert('Сообщение: ' + text);
    }
   
    function delay(message, time) {
        setTimeout(message, time);
      }
    
    var displayMessage = delay(mymessage, delayTime)
   
      

}