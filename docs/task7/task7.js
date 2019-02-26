function task7() {
    function delay(text, time) {
        return function(){
            var context = this;
            var args = arguments;
            setTimeout(function(){
                text.apply(context, args);
            }, time);
        }
    }
    function text(text){
        console.log('Сообщение: ' + text);
    }
    var text1500 = delay(text, 1500);
    var text2500 = delay(text, 2500);
    text1500("тест1");
    text2500("тест2");

}