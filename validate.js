
/* -----> An Apology

Sorry I Thought That Data Should Be Exist With Refresh
So I Did It With Local Storage And Array 2D

*/

const idinput = document.getElementById("id");
if (!localStorage.count) {
    localStorage.count = 0;
}
var num =parseInt(localStorage.count);
idinput.value = num+1;
//local storage counter for id 
window.addEventListener("load", function () {
  
})
function all() {
    this.block = (idd) => { //to show error div
        var div1 = document.getElementById(idd);
        return div1.style.display = "block";
    }
    this.none = (idd) => { //to hide error div
        var div1 = document.getElementById(idd);
        return div1.style.display = "none";
    }

    this.value = (idd) => { //to get value
        let x = document.getElementById(idd).value;
        return x;
    }
}
const all1 = new all();
var doit = true;//to check there is error in data or not
document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault()
    if (!localStorage.count) {
        localStorage.count = 0;
    }
    localStorage.count++;
    var num = localStorage.count;
    idinput.value = num;

    var xname = all1.value("name");
    if (xname == "") {
        all1.block("name1") //show error
        doit = false; //mark that there is error
    }
    else {
        all1.none("name1")
    }
    var xemail = all1.value("email");

    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (xemail == "") {
        all1.block("email1")//show error
        doit = false;//mark that there is error
    }

    else if (!pattern.test(email.value)) {
        all1.none("email1")//hide error data correct
        all1.block("email11")//show error
        doit = false;//mark that there is error
    }
    else {
        all1.none("email1")//hide error data correct
        all1.none("email11")//hide error data correct
    }

    var xphone = all1.value("phone");
    var phoneno = /^\d{10}$/; //phone consists of 11 number
    var rx = /\D/g;//phone havn't any char
    if (rx.test(phone.value) == true) {
        all1.block("phone1")//show error
        doit = false;//mark that there is error
    }
    else if (xphone == "" || xphone.length != 11) {
        all1.block("phone1")//show error
        doit = false;//mark that there is error
    }
    else if (!phoneno.test(phone.value)) {
        all1.none("phone1")//hide error data correct
    }
    else {
        all1.block("phone1")//show error
        doit = false;//mark that there is error
    }
    //if i havn't any errors save in local storage
    if (doit) {
        addContact();

        var data = [idinput.value, xname, xemail, xphone];
        var a;
        //is anything in localstorage?
        if (localStorage.getItem('session') === null) {
            a = [];
        } else {
            // Parse the serialized data back into an array of objects
            a = JSON.parse(localStorage.getItem('session'));
        }
        // Push the new data (whether it be an object or anything else) onto the array
        a.push(data);
        // Re-serialize the array back into a string and store it in localStorage
        localStorage.setItem('session', JSON.stringify(a));
    }
    var arrayFromStroage = JSON.parse(localStorage.getItem("session"));
    var arrayLength = arrayFromStroage.length;
});

//check if local storage have data
var arrayFromStroage = JSON.parse(localStorage.getItem("session"));
if (JSON.parse(localStorage.getItem("session")))
    var arrayLength = arrayFromStroage.length;
else
    var arrayLength = 0;
//loop to show data in the local storage
for (let i = 0; i < arrayLength; i++) {
    const contactdiv = document.createElement("div");
    contactdiv.className = "contact-entry"; //container div

    const id22 = document.createElement("div");
    id22.className = "identry";
    id22.textContent ="ID : "+ arrayFromStroage[i][0];
    const name = document.createElement("div");
    name.className = "nameentry";
    var countofname = arrayFromStroage[i][1].split(' ').length;
    if (countofname > 1) {
        var nameofuser = arrayFromStroage[i][1].match(/^\s*(\S+)\s*(.*?)\s*$/).slice(1);
        name.textContent ="Name : "+ arrayFromStroage[i][1].charAt(0).toUpperCase() + '.' + nameofuser[1];
    }
    else {
        name.textContent = "Name : "+arrayFromStroage[i][1]
    }
    const email22 = document.createElement("div");
    email22.className = 'emailentry';
    email22.textContent ="Email : "+ arrayFromStroage[i][2];

    const phone22 = document.createElement("div");
    phone22.className = 'phoneentry';
    phone22.textContent ="Phone : "+ arrayFromStroage[i][3];
    //put data in container div
    contactdiv.appendChild(id22);
    contactdiv.appendChild(name);
    contactdiv.appendChild(email22);
    contactdiv.appendChild(phone22);
    contactdiv.id = "div" + i;
    //put container div in super div
    const odiv = document.getElementById("di1");
    odiv.appendChild(contactdiv);

    //delete button works******
    const del = document.createElement("button");
    del.type = "submit";
    del.textContent = "delete item num " + (i + 1);
    del.className = "delete";
    contactdiv.append(del);
    document.getElementsByClassName("delete")[i].addEventListener("click", function (e) {
        var con = confirm("Are you shure you want to delete : " + arrayFromStroage[i][1])
        if (con) {
            arrayFromStroage.splice(i, 1);
            localStorage.setItem('session', JSON.stringify(arrayFromStroage));
        }
        contactdiv.remove();
    })
    //edit button ******
    var jjj = [];
    const edit = document.createElement("button");
    edit.type = "submit";
    edit.textContent = "edit item num " + (i + 1);
    edit.className = "edit";
    contactdiv.append(edit);
    //if else for validation
    document.getElementsByClassName("edit")[i].addEventListener("click", function (e) {
        jjj[0] = arrayFromStroage[i][0];
        var yname = prompt("enter the name");
        if (yname === "") {
            alert("Enter a Valid Name");
            jjj[1] = arrayFromStroage[i][1];
        }
        else {
            jjj[1] = yname;
            var countofname = yname.split(' ').length;
            if (countofname > 1) {
                var nameofuser = yname.match(/^\s*(\S+)\s*(.*?)\s*$/).slice(1);
                name.textContent ="Name : "+ yname.charAt(0).toUpperCase() + '.' + nameofuser[1];
            }
            else {
                name.textContent ="Name : "+ yname;
            }
        }
        var yemail = prompt("enter the email");
        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (yemail === "" || !pattern.test(yemail)) {
            jjj[2] = arrayFromStroage[i][2];
            alert("Enter a Valid Email");
        }
        else {
            jjj[2] = yemail;
            email22.textContent ="Email : "+ yemail;
        }
        var yphone = prompt("enter the phone");
        var phoneno = /^\d{10}$/;
        var rx = /\D/g;
        if (rx.test(yphone) == true) {
            jjj[3] = arrayFromStroage[i][3];
            alert("Enter a Valid Phone");
        }
        else if (yphone == "" || yphone.length != 11) {
            jjj[3] = arrayFromStroage[i][3];
            alert("Enter a Valid Phone");
        }
        else if (!phoneno.test(yphone)) {
            jjj[3] = yphone;
            phone22.textContent = "Phone : "+yphone;
        }
        else {
            jjj[3] = arrayFromStroage[i][3];
            alert("Enter a Valid Phone");
        }
        arrayFromStroage.splice(i, 1, jjj);
        localStorage.setItem('session', JSON.stringify(arrayFromStroage));
    })
}
//function to create divs that new have values
function addContact() {
    document.location.reload()
}










