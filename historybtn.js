
document.getElementById('history-btn').addEventListener('click', function(){
    console.log('its work of history btn');
    const cardSecDiv= document.getElementById('card-sec-div');
    cardSecDiv.classList.add('hidden');

    const historySecDiv=document.getElementById('history-sec-div');
    historySecDiv.classList.remove('hidden');

    const changeColorBtn= document.getElementById('history-btn');
    changeColorBtn.classList.add('bg-[#B4F461]');

    const changeCdonationBtn= document.getElementById('donation-main-btn');
    changeCdonationBtn.classList.remove('bg-[#B4F461]');

})