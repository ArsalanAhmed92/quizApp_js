window.onload = function(){
   show(0);
   
}


var questions = [
    {
        id:1,
        question:"What is the full form of RAM ?",
        answer: "Random Access Memory",
        options: [
         "Random Access Memory",
         "Randomely Access Memory",
         "run aceapt memory",
         "none of these",
        ] 
    },
    {
      id:2,
      question:"What is the full form of CPU ?",
      answer: "Central Processing Unit",
      options: [
       "Central program Unit",
       "Central Processing Unit",
       "Central preload Unit ",
       "none of these",
      ] 
  },
  {
   id:3,
   question:"What is the full form of E-mail?",
   answer: "Electronic Mail",
   options: [
    "Electric Mail",
    "Elementery Mail",
    "Electronic Mail",
    "none of these",
   ] 
},
{
   id:4,
   question:"What is the full form of RAM ?",
   answer: "Random Access Memory",
   options: [
    "Random Access Memory",
    "Randomely Access Memory",
    "run aceapt memory",
    "none of these",
   ] 
},
 ]
 
 
 function submitForm(e){
    e.preventDefault();
    var name = document.forms["welcome_form"]["userName"].value;
    sessionStorage.setItem("name", name);

    location.href = "quiz.html";
   
 }



 var question_count = 0;
 var point = 0;

 function next() {
  var user_answer = document.querySelector("li.option.active").innerHTML;

  if(user_answer == questions[question_count].answer){
    point = point + 10;
    sessionStorage.setItem("points", point);
 }
  if(question_count == questions.length -1){

      location.href = "end.html";
      return;
  }

   
  
   question_count++;
   show(question_count);
  
 }

 function show(count){
   var question = document.getElementById("questions");

   // question.innerHTML = "<h2>" + questions[count].question +"</h2>";

   question.innerHTML =`<h2>${questions[count].question}</h2>
    <ul class="option_group">
   <li class="option"><p class="opt_txt"> ${questions[count].options[0]}</p></li>
   <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
 </ul>
 `;

 toggleActive();
 }


// function toggleActive(){
//    var option = document.querySelectorAll("li.option");
   
//    for(var i = 0 ;i < option.length; i++){
//       option[i].onclick = function(){
//          for (var j = 0; j < option.length; j++){
//             if(option[j].classList.contains("active")){
//                option[j].classList.remove("active");
//             }
//          }
//          option[i].classList.add("active"); 
//       }
//    }
// };
  
function toggleActive() {
   let option = document.querySelectorAll("li.option");
   for (let i = 0; i < option.length; i++) {
     option[i].onclick = function() {
       for (let i = 0; i < option.length; i++) {
         if (option[i].classList.contains("active")) {
           option[i].classList.remove("active");
         }
       }
       option[i].classList.add("active");
     };
   } 
 }
 