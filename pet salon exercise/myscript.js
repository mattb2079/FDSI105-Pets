//object literal

const salon = {
    name: "The Fashion Pets",
    phone: "5567893",
    address:{
        street: "Av University",
        number: "262-G"
    },
    workingHours:{
        days: "Mon-Fri",
        open: "9:00 am",
        close: "5:00 pm"
    },
    pets:[],
    count: function(){
        //alert("We have " + salon.pets.length + " pets registered");
    }
}

// object destructuring

let {name, phone, address:{street,number},workingHours:{days, open, close}} = salon;

document.querySelector(".info").innerHTML=`<p> ${name} <br> ${street},${number} <br> ${days} from ${open} to ${close} <br> ${phone}`;

document.querySelector("footer .info").innerHTML=`<p> ${name} <br> ${street},${number} <br> ${days} from ${open} to ${close} <br> ${phone}`;


// object constructor
var petc=0;
class Pet {
    constructor(name, age, breed, gender, service, ownerName, phoneContact){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownerName=ownerName;
        this.phoneContact=phoneContact;
        this.id="pet"+petc;
        petc+=1;
        this.hunger = 10;
        this.happiness = 5;
    }
    ownerInfo = function(){
        console.log("Owner name: " + this.ownerName + "\n" + "Contact Phone: " + this.phoneContact);
    }
    feed = function(){
        this.hunger-=10;
        this.happiness+=10;
        console.log("Feeding...");
    }

    status = function(){
        console.log ("Hunger " + this.hunger + "\n" + "Happiness: " + this.happiness);
    }
}

var textname = document.getElementById('petName');
var textage = document.getElementById('petAge');
var textbreed = document.getElementById('petBreed');
var textgender = document.getElementById('petGender');
var textservice = document.getElementById('petService');
var textownername = document.getElementById('ownerName');
var textcontactphone = document.getElementById('contactPhone');

function register(){
    //test();
    const thePet = new Pet(textname.value, textage.value, textbreed.value, textgender.value, textservice.value, textownername.value, textcontactphone.value);
    salon.pets.push(thePet);
    alert("You have registered a pet")
    clean();
    displayPet(thePet);
}

function clean(){
    textname.value="";
    textage.value="";
    textbreed.value="";
    textgender.value="";
    textservice.value="";
    textownername.value="";
    textcontactphone.value="";
}

function displayPet(aPet){
    var tBody = document.getElementById("rowPet");
    var row = `<tr id="${aPet.id}">
                <td> ${aPet.name} </td>
                <td> ${aPet.age} </td>
                <td> ${aPet.breed} </td>
                <td> ${aPet.gender} </td>
                <td> ${aPet.service} </td>
                <td> ${aPet.ownerName} </td>
                <td> ${aPet.phoneContact} </td>
                <td>
                    <button onclick='remove("${aPet.id}");'> Delete </button>
                </td>`;
    tBody.innerHTML+=row;
}

function remove(petId){
    var tr = document.getElementById(petId);
    var indexDelete;
    for(var i=0; i<salon.pets.length; i++){
        var selectedPet = salon.pets[i];

        console.log(selectedPet);
    }
    salon.pets.splice(indexDelete, 1);
    tr.remove();
}

var testnum = 1;
function test(){ //test function to fill values quickly when registering
    textname.value="Name " + testnum;
    textage.value="1" + testnum;
    textbreed.value="breed " + testnum;
    textgender.value="M";
    textservice.value="Shower";
    textownername.value="Owner " + testnum;
    textcontactphone.value="425-344-123" + testnum;
    testnum += 1;
}