/* Catherine Nguyen 
edited:*/

/*alert
function alertz() {
   alert("You fancy!"); 
} */

//bigger
function bigz() {
   var text = document.getElementById("feedme");
   text.style.fontSize = "24pt";
}

//bold
function boldz() {
   var text = document.getElementById("feedme");
   text.style.fontWeight = "bold";
   text.style.color= "blue";
   text.style.textDecoration= "underline";
}

//unbold
function boringz() {
   var text = document.getElementById("feedme");
   text.style.fontSize = "initial";
   text.style.fontWeight = "normal";
   text.style.color = "black";
   text.style.textDecoration= "none";
}

//uppercase+ -Moo suffix
function mooz() {
   var suffix = '-Moo',
   txt = document.getElementById('feedme');
   txt.style.textTransform="uppercase";
   txt.value = txt.value.split('.').join('') + suffix;
}