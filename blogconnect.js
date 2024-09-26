
function goToPageBlog() {
    window.location.href = "blog.html"; // Replace with the URL of the second page
}

function goToPageIndex() {
    window.location.href = "index.html"; // Replace with the URL of the first page
}


// blog page question
let ishidden=true;
// blog page first question
document.getElementById('first-question').addEventListener('click', function(){

    // first question 
    const fquestionP=commonFaq('first-question-p-tag');
    const arrowSymbal=commonFaq('arrow-s-one');
    const arrowHidden= commonFaq('arrow-hidden-one');
    if (ishidden) {
        fquestionP.classList.remove('hidden');
        arrowSymbal.classList.add('hidden');
        arrowHidden.classList.remove('hidden');
        ishidden=false;
    }
    else{
        fquestionP.classList.add('hidden');
        arrowSymbal.classList.remove('hidden');
        arrowHidden.classList.add('hidden');
        ishidden= true;
    }
})


// blog page second question 
document.getElementById('second-question').addEventListener('click', function(){
    const secondQuestionP=commonFaq('second-question-p-tag');
    const arrowSymbal=commonFaq('arrow-s-second');
    const arrowHidden= commonFaq('arrow-hidden-second');
    if (ishidden) {
        secondQuestionP.classList.remove('hidden');
        arrowSymbal.classList.add('hidden');
        arrowHidden.classList.remove('hidden');
        ishidden=false;
    }
    else{
        secondQuestionP.classList.add('hidden');
        arrowSymbal.classList.remove('hidden');
        arrowHidden.classList.add('hidden');
        ishidden= true;
    }
})

// // blog page third question 
document.getElementById('third-question').addEventListener('click', function(){
    const thirdQuestionP=commonFaq('third-question-p-tag');
    const arrowSymbal=commonFaq('arrow-s-third');
    const arrowHidden= commonFaq('arrow-hidden-third');
    if (ishidden) {
        thirdQuestionP.classList.remove('hidden');
        arrowSymbal.classList.add('hidden');
        arrowHidden.classList.remove('hidden');
        ishidden=false;
    }
    else{
        thirdQuestionP.classList.add('hidden');
        arrowSymbal.classList.remove('hidden');
        arrowHidden.classList.add('hidden');
        ishidden= true;
    }
})

// // blog page fourth question 

document.getElementById('fourth-question').addEventListener('click', function(){

    
    const fourthQuestionP=commonFaq('fourth-question-p-tag');
    const arrowSymbal=commonFaq('arrow-s-fourth');
    const arrowHidden= commonFaq('arrow-hidden-fourth');
    if (ishidden) {
        fourthQuestionP.classList.remove('hidden');
        arrowSymbal.classList.add('hidden');
        arrowHidden.classList.remove('hidden');
        ishidden=false;
    }
    else{
        fourthQuestionP.classList.add('hidden');
        arrowSymbal.classList.remove('hidden');
        arrowHidden.classList.add('hidden');
        ishidden= true;
    }
})