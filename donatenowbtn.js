

// donatenow-btn 
document.getElementById('donatenow-btn').addEventListener('click', function () {
    // console.log('its also work');
    const donateInput=document.getElementById('donate-input').value;
    const donateInputValue=parseFloat(donateInput);

    const donationReceive= document.getElementById('donation-receive').innerText;
    const donationReceiveText= parseFloat(donationReceive);
    // console.log('input value', donateInputValue);

    const navMoney= document.getElementById('nav-money').innerText;
    const navMoneyInt= parseFloat(navMoney);

    if ( typeof donateInputValue === 'number' && !isNaN(donateInputValue) && donateInputValue <= navMoneyInt && donateInputValue > 0){
        // console.log('perfect');
        const currentdonationMoney= donateInputValue + donationReceiveText;
        // console.log('cur', currentdonationMoney)
        document.getElementById('donation-receive').innerText=currentdonationMoney;

        const currentNavMoney= navMoneyInt - donateInputValue;
        // console.log(currentNavMoney);
        document.getElementById('nav-money').innerText= currentNavMoney;

        // popupbtn show 
        const popupId= document.getElementById('popup-id');
        popupId.classList.remove('invisible');

    }
    else{
        alert('Invalid value');
    }
    
    const noakhaliHtag=document.getElementById('noakhali-h-tag')
      // history card div 
    const historyCard= document.getElementById('history-sec-div');

    // create a history card div in main div 
    const historyCardHtag= document.createElement('div');
    historyCardHtag.classList.add('history-div');

    // create a h2 tag in div 
    const hTwoTag= document.createElement('h2');
    hTwoTag.classList.add('history-div-h2-tag');

    hTwoTag.textContent=donateInputValue +' taka is '+noakhaliHtag;

    historyCardHtag.appendChild(hTwoTag);

    historyCard.appendChild(historyCardHtag);
    // add time 
    const now = new Date();

    // Get the current hours, minutes, and seconds
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    // Format the time 
    const currentTime = hours + ':' + minutes + ':' + seconds;

    // Format the date string
    const currentDate = month + '/' + day + '/' + year;

    const timeTag =document.createElement('p');

    // Display the time inside the div
    timeTag.textContent = 'Date: ' + currentDate + ' ' + ' ,Current Time: ' + currentTime;
    historyCardHtag.appendChild(timeTag);

    
})