function task32(){
var yourname = prompt('Как зовут?', 'Введи имя');
var age = prompt('Сколько лет?', 'Введи число');
var smoke = confirm('Куришь?');
if (age >= 5 && age <= 20) {
    var agename = ' лет';
}
else {
        var agename = (age-((Math.trunc(age/10))*10));
        if (agename > 1 && agename <5) {
            var agename = ' года';
        }
        else if (agename == 1) {
            var agename = ' год';
        }
        else if (agename > 4) {
            var agename = ' лет';
        }
    }   
if ((smoke) & (age > 18)) alert('Ну и зря, ' + yourname + '. Тебе ' + age + agename);
else if ((smoke) & (age < 18)) alert(yourname + ', маме расскажу' + '. Тебе ' + age + agename);
else if (age < 18) alert(yourname + ', так держать!' + 'Тебе ' + age + agename);
else alert(yourname + ', молодец, и не надо' + '. Тебе ' + age + agename);
}