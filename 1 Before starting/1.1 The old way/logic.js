var persons = document.getElementsByClassName("person");
console.log(persons);

for(var i = 0; i < persons.length ; i++){
    var p = persons[i];
    console.log(p);
    p.addEventListener('click',function(event){
        this.style.backgroundColor = "blue";
        this.style.color = "white";
    });
}