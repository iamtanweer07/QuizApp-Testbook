
// ------------Front page js code-----------

let SelectCategory = document.getElementById("SelectCategory");
let displayCategories = document.getElementById("displayCategories");
let inputField;

// ----if startQuiz button clicked-----

SelectCategory.addEventListener("click",function(){

 inputField = document.getElementById("inputfield").value;
  if(inputField=="")
  {
    alert("Please Enter Your Name");
  }else{
    displayCategories.style.display = "block";
    document.getElementById("inputfield").value = " ";
  }
  quesCount(1);  //passing 1 parameter to queCounter
});

// ------------Front page js code ends -----------

//------selecting all required elements----------

let mainBox = document.querySelector(".mainBox");
let container = document.querySelector(".container");
let categories1 = document.querySelector(".categories1");
let quiz_box = document.querySelector(".quiz_box");
let next_btn = document.querySelector(".next_btn");
let countdown = document.querySelector(".countdown");
let result_box = document.querySelector(".result_box");
let total_ques = document.querySelector(".total_ques");
let startbutn = document.querySelector("#startbutn");
let gotohome = document.querySelector("#gotohome");
let count = 15;
let countTimer;
// -------if categories button clicked---------

categories1.addEventListener("click",function(){

   $(".quiz_box").show();
   $(".container").hide();
  printQuestion(index); 
  count= 15;
  clearInterval(countTimer);
  timeDisplay();

});

// Timer 

const timeDisplay = () => {
  countTimer = setInterval(() => {
    count--;
    countdown.innerHTML = `${count}s`;
    if(count== 0){
      clearInterval(countTimer);
      printQuestion(index); 
    }
  },1000)
};


// function to print all questions start

let que_count = 0;
let que_number = 1
let index = 0;
let attempt = 0;
let score = 0;
let wrong = 0;

// let  questions = questionSet;
let  questions = questionSet.sort(function(){
  return 0.5 - Math.random();
});


let totalQues = questions.length;


function printQuestion(i)
{
$(".ques_text span").text(questions[i].question);
$(".option_list span").eq(0).text(questions[i].option[0]);
$(".option_list span").eq(1).text(questions[i].option[1]);
$(".option_list span").eq(2).text(questions[i].option[2]);
$(".option_list span").eq(3).text(questions[i].option[3]);
}

// function to print question end
 
// function to check answer start

function checkAns(option){
  attempt++;

  let optionClicked = $(option).data("opt");
  // console.log(questions[index]);

  if(optionClicked == questions[index].correct){
    $(option).addClass("right");
    score++;
  }else{
    $(option).addClass("wrong");
    wrong++;
  }
  $(".scored span").text(score);
  $(".option_list span").attr("onclick","");
  clearInterval(countTimer);
}

// function to check answer end

// function for the next question start

next_btn.addEventListener("click",function(){
  que_number++;
  quesCount(que_number);
index++;
if(index >= (questions.length - 1)){
  showResult();
  return;

}

$(".option_list span").removeClass();
$(".option_list span").attr("onclick","checkAns(this)");
printQuestion(index);

});

// function for the next question end

// passing the question number and total question

function quesCount(index){
  let totalQuesCount = index + '/' + totalQues;
  total_ques.innerText = totalQuesCount;
};


// function for showing result
function showResult()
{
 $(".quiz_box").hide();
 $(".result_box").show();

 $("#totalQuestion").text(totalQues);
 $("#questionAttempt").text(attempt);
 $("#correctAttempt").text(score);
 $("#wrongAttempt").text(wrong);
 document.getElementById("yourname").innerText = `${inputField + " your result is:"}`;
 document.getElementById("percentage").innerText = `${score * 100 / 5 + ".00%"}`;
};

// if startQuiz button clicked

startbutn.addEventListener("click",function(){
    $(".result_box").hide();
    $(".quiz_box").show();  
    totalTime = 15;
    que_number = 1
    que_count = 0;
    index = 0;
    attempt = 0;
    score = 0;
    wrong = 0;
    printQuestion(que_count);
    quesCount(que_number);
   
});

// if home button clicked

gotohome.addEventListener("click",function(){
    $(".result_box").hide();
    $(".container").show();
    location.reload();

});
