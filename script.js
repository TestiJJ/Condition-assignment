    // 1
    function enterAddress(){
        if (address.value == '') {
            // alert ("Enter your email address")
        } else {
            var email = (address.value).toLowerCase()
            newAddress.innerHTML = email
        }
    }
    function clearEmail() {
        address.value = "";
        newAddress.innerHTML = "Here is your updated address :";
        // alert ('clear all')
    }
    
// 2
    function insertEssay() {
        var Input = essayInput.value
        if (Input == "") {
            alert('i am here')
        } else {
            var insertEssay = Input.replace(/\s+/g, " ")
            newEssay.innerHTML = insertEssay 
        } 
    }
    function clearEssay() {
        essayInput.value = '';
        newEssay.innerHTML =  'Here is your updated essay :'
        
    }
    // 3
    function strongPass() {
        let password = passwordStrong.value;
        if (password.length < 8){
            alert('Password must be at least 8 characters long'); return;
        } else if (!/[A-Z]/.test(password)) { 
                alert('Password must include at least one upperCase'); return;  
            }  else if (!/[a-z]/.test(password)) { alert('Password must have at least a lowercase'); return;
            } else if (!/[0-9]/.test(password)) {
                alert('password must include at least one number'); return;
            } else if (!/[!@#$%^&*(),.?":{}< >]/.test(password)) {
                    alert('password must have at least one special character'); return;
                } 
                else { ('Password is strong') 
                }
            showPass.innerHTML = 'Your password is : ' + password;   
    }
    function clearPass() {
        passwordStrong.value = '';
        showPass.innerHTML = 'Your password is :'
    }
    // 4
    function addTitle() {
        let listOfBooks = ['input books here'];
        let secondUserInput = bookTitle.value.toLowerCase();if(secondUserInput == '') {
            alert('Please enter a book title');
        } else if (listOfBooks.includes(secondUserInput)) {
            alert('You have entered a book that is in the list')
        } else {
            bookMessage.innerHTML = 'your new book is : ' + bookTitle.value
        }
        
    }
function clearTitle() {
    bookTitle.value = '';
    bookMessage.innerHTML = 'Here is your book title message'
    
}

// 5
// function checkAnswer() {
//     let correctAnswer = 'Ogbomosho'
//     let studentAnswer = answerInput.value.trim();
//     if (studentAnswer == '') {
//         alert('Please write an answer');
//     } else{ 
//     let correct = correctAnswer.toLowerCase();
//     let answer = studentAnswer.toLowerCase();

//     if (studentAnswer == '')  {
//         resultHere.innerHTML = 'correct!'
//     } else {
//         resultHere.innerHTML = 'Wrong!'
//     }
// }


function checkAnswer(){
    let studentAnswer = answerInput.value
    let correctAnswer = 'ogbomosho'

    if (!studentAnswer) {
        alert('Please enter your answer'); return;        
    }
    if (studentAnswer.trim().toLowerCase() ==correctAnswer.trim().toLowerCase()) {
        resultHere.innerHTML = 'your answer is : correct ';
    } else {
        resultHere.innerHTML = 'your answer is : wrong'
    }
}

function clearAll() {
    answerInput.value = '';
    resultHere.innerHTML = 'Enter your answer:'
}

