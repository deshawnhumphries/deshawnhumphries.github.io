"use strict";

var element = document.getElementById("logo_h2");
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);
element.addEventListener("animationiteration", listener, false);

element.className = "logo_b";

class Person {
    constructor(firstName, LastName, Job) {
        this.firstName = firstName,
        this.lastName = LastName,
        this.Job = Job
    }
}

function CreatePerson() {
    var f = document.getElementById("fname");
    var l = document.getElementById("lname");
    var j = document.getElementById("job");

    if(f.value=='') {
        alert('Please enter a first name.');
    } else if (l.value=='') {
        alert('Please enter a last name');
    } else if (j.value=='') {
        alert('Please enter a job.');
    } else {
        var person1 = new Person(f.value, l.value, j.value);
        alert("You just created this person: " + person1.firstName + " " + person1.lastName + ": " + person1.Job);
    }    
}

function ChangeNavClass() {
    abt.className = "active";
    alert("ChangeNavClass");

    var lh2 = document.querySelector("#logo_h2");

    var ce = document.createElement("p");
    ce.textContent = "Adding an element to the DOM";

    document.body.insertBefore(ce, lh2);
}

//var btn = document.querySelector("#btn");
//btn.addEventListener("click", CreatePerson, false);

//var abt = document.querySelector("#about");
//abt.addEventListener("click", ChangeNavClass, false);

var webdev = document.querySelector("#webdev");
webdev.addEventListener("click", ChangeNavClass, false);