function task31(){
var age = prompt('Сколько лет?', 'Введи число');
var smoke = confirm('Куришь?');
console.log (smoke);
if ((smoke) & (age > 18)) alert('Ну и зря');
else if ((smoke) & (age < 18)) alert('Маме расскажу');
else if (age < 18) alert('Так держать!');
else alert('Молодец, и не надо');
}