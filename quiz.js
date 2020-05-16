var questions = [
    {
        prompt: "Commonly used data types DO NOT include: \n(1) strings \n(2) booleans \n(3) alerts \n(4) numbers",
        answer: "3"
    },
    {
        prompt: "The condition in an if / esle statement is enclosed within ________. \n(1) quotes \n(2) curly brackets \n(3) parenthesis \n(4) square brackets",
        answer: "2"
    },
    {
        prompt: "Arrays in JavaScript can be used to store ________. \n(1) numbers and strings \n(2) other arrays \n(3) booleans \n(4) all of the above",
        answer: "4"
    },
        prompt: "String values must be enclosed within __________ when being assigned to variables. \n(1) commas \n(2) curly brackets \n(3) quotes \n(4) paranthesis",
        answer: "3"
    }
];
var score = 0;
for(var i=0; i < questions.length; i++);{
    var response = window.prompt(questions[i].prompt);
    if (response == questions[i].answer){
        score++;
        alert("Correct!");
    } else {
        alert("WRONG!");
    }
}
alert("you got " + score + "/" questions.length)