// common reusable functon for faq question 
function commonFaq(id){
    const questionValue=document.getElementById(id);
    return questionValue;
}

// common reusable donate btn input value section 
function donateNowBtnInput(id) {
    const inputValueDonateBtn= document.getElementById(id).value;
    return inputValueDonateBtn;
}

// common reusable donate btn inner text function 
function donateNowBtnText(id) {
    const innerTextDonateNow= document.getElementById(id).innerText;
    return innerTextDonateNow;
}