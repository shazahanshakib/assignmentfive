document.getElementById('donation-main-btn').addEventListener('click', function(){
    console.log('perfectly work donation btn');


    const historySecDiv=document.getElementById('history-sec-div');
    historySecDiv.classList.add('hidden');

    const cardSecDiv= document.getElementById('card-sec-div');
    cardSecDiv.classList.remove('hidden');


    const changeColorBtn= document.getElementById('history-btn');
    changeColorBtn.classList.remove('bg-[#B4F461]');

    const changeCdonationBtn= document.getElementById('donation-main-btn');
    changeCdonationBtn.classList.add('bg-[#B4F461]');
})