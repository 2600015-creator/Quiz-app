const question = [
    {
        'que': 'which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'what year was JavaScript launched',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of the above',
        'correct': 'b'
    },
    {
        'que': 'what does CSS stands for?',
        'a': 'Hypertext Markup Language',
        'b': 'Cascading style sheet',
        'c': 'Jason object Notation',
        'd': 'Helicopter terminals Motorboats Lamborginis',
        'correct': 'b'
    }
];

let index = 0;
let total = question.length;
let right = 0,
    wrong = 0;

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options');

const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    
    const data = question[index]; // Fixed array name from 'questions' to 'question'
    console.log(data);
    
    // Fixed single quotes to backticks for template literals
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
    const currentQuestion = question[index]; // Get current question data
    const ans = getAnswer();                 // Fixed redeclaration error
    
    console.log(ans, currentQuestion.correct);
    
    if (ans === currentQuestion.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
};

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                console.log("yes");
                answer = input.value;
            }
        }
    );
    return answer;
};

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    );
};

const endQuiz = () => {
    document.getElementById('box').innerHTML = `
        <div style="text-align:center">
            <h3> Thanks you for Playing </h3> 
            <h2> ${right} / ${total} are correct </h2>
        </div>
    `;
};

// Initial call to load the first question
loadQuestion();