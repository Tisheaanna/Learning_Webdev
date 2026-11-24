// 1. questions for each subject
const questions = [
        {
            question : "What is the Port number of DNS ?",
            answer : [
                { text: "53", correct: true},
                { text: "80", correct: false},
                { text: "443", correct: false},
                { text: "21", correct: false}
            ]
            
        },

        {
            question : "What is the Port number of HTTP ?",
            answer : [
                { text: "80", correct: true},
                { text: "53", correct: false},
                { text: "443", correct: false},
                { text: "21", correct: false}
            ]
        },
        {
            question : "What is a mask in networking ?",
            answer : [
                { text: "A subnet mask is a protocol that automatically gives IP addresses to devices on the network ", correct: false},
                { text: "A subnet mask is the physical address burned into a network card by the manufacturer.", correct: false},
                { text: "A subnet mask is a number that shows which part of an IP address identifies the network and which part identifies the device. ", correct: true},
                { text: "A subnet mask is a security tool that hides a computer's IP address from the internet.", correct: false}
            ]
        },
        // add questions and subjects as needed
        ];

//shuffle the questions array to randomize the order of the questions
const randomIndex = [...questions].sort(() => Math.random() - 0.5);

//keep track of the current question & score
let index = 0;
//count score
let score = 0;

// get the question container in the HTML
const questionContainer = document.getElementById("question"); 
// get the answer container in the HTML
const answerButtons = document.getElementById("answer"); 

progress.textContent = "Question " + (index + 1) + " of " + randomIndex.length;
//show the first question when the page loads
function Show_Question() {
    //get the progress bar in the HTML
    const progress = document.getElementById("progress");
    const ActualQuestion = randomIndex[index]; // get the current question from the shuffled array
    questionContainer.textContent = ActualQuestion.question; // display the question in the HTML
    answerButtons.innerHTML = ""; // clear the answer buttons container

    //for each answer, create a button
    ActualQuestion.answer.forEach(function (answer) {
        const bouton = document.createElement("button");
        bouton.textContent = answer.text;
        answerButtons.appendChild(bouton);

        // add an event listener to each button
        bouton.addEventListener("click", function () {

            // trouver tous les boutons dans la zone des réponses
            const EveryAnswer = answerButtons.querySelectorAll("button");

            // pour chaque bouton, le désactiver
            EveryAnswer.forEach(function (unBouton) {
            unBouton.disabled = true;
            });


            // add a class to the button to indicate if the answer is correct or false
            if (answer.correct) {
                bouton.classList.add("correct");
                score++; // increment the score if the answer is correct
            } else {
                bouton.classList.add("false");
            }

            index++;

            setTimeout(function () {
                if (index < randomIndex.length) {
                    Show_Question();
                } else {
                    Show_Score();
                }
            }, 1000);          // end of setTimeout

        });                    // end of click event
    });                        // end of forEach
}                              // end of Show_Question


// show the score at the end of the quizz
function Show_Score() {
    questionContainer.textContent = "Your score is: " + score + "/" + randomIndex.length;
    answerButtons.innerHTML = "";
}

const restartButton = document.getElementById("restart");
restartButton.addEventListener("click", function () {
    index = 0; 
    score = 0;
    randomIndex.sort(() => Math.random() - 0.5); // shuffle the questions again
    Show_Question(); // show the first question again
});

Show_Question(); // show the first question when the page loads


