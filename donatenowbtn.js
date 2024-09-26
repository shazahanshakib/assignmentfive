

// donatenow first card button function
document.getElementById('donatenow-btn').addEventListener('click', function () {
    
    // donation btn input value 
    const donateInput=donateNowBtnInput('donate-input');
    const donateInputValue=parseFloat(donateInput);
    
    // donation recive money inner text 
    const donationReceive= donateNowBtnText('donation-receive');
    const donationReceiveText= parseFloat(donationReceive);
   
    // my account money on navbar 
    const navMoney= donateNowBtnText('nav-money');
    const navMoneyInt= parseFloat(navMoney);

    if ( typeof donateInputValue === 'number' && !isNaN(donateInputValue) && donateInputValue <= navMoneyInt && donateInputValue > 0){
        
        // current money and input money 
        const currentdonationMoney= donateInputValue + donationReceiveText;
        
        // add input money in donation 
        document.getElementById('donation-receive').innerText=currentdonationMoney;
        
        // mynas input money from own account 
        const currentNavMoney= navMoneyInt - donateInputValue;
    
        document.getElementById('nav-money').innerText= currentNavMoney;

        // popupbtn show 
        const popupId= commonFaq('popup-id');
        popupId.classList.remove('invisible');

    }
    else{
        alert('Invalid value');
    }
    
    const noakhaliHtag=donateNowBtnText('noakhali-h-tag');

      // history card div 
    const historyCard= commonFaq('history-sec-div');

    // create a history card div in main div and add classlist
    const historyCardHtag= document.createElement('div');
    historyCardHtag.classList.add('history-div');

    // create a h2 tag in div and add classlist
    const hTwoTag= document.createElement('h2');
    hTwoTag.classList.add('history-div-h2-tag');
    
    // output of history card 
    hTwoTag.textContent=donateInputValue +' taka is '+ noakhaliHtag;

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





// donatenow seccond card button function
document.getElementById('donate-now-second-btn').addEventListener('click', function () {
    
    // donation btn input value 
    const donateInput=donateNowBtnInput('donate-input-second');
    const donateInputValue=parseFloat(donateInput);
    
    // donation recive money inner text 
    const donationReceive= donateNowBtnText('donation-receive-second');
    const donationReceiveText= parseFloat(donationReceive);
   
    // my account money on navbar 
    const navMoney= donateNowBtnText('nav-money');
    const navMoneyInt= parseFloat(navMoney);

    if ( typeof donateInputValue === 'number' && !isNaN(donateInputValue) && donateInputValue <= navMoneyInt && donateInputValue > 0){
        
        // current money and input money 
        const currentdonationMoney= donateInputValue + donationReceiveText;
        
        // add input money in donation 
        document.getElementById('donation-receive-second').innerText=currentdonationMoney;
        
        // mynas input money from own account 
        const currentNavMoney= navMoneyInt - donateInputValue;
    
        document.getElementById('nav-money').innerText= currentNavMoney;

        // popupbtn show 
        const popupId= commonFaq('popup-id');
        popupId.classList.remove('invisible');

    }
    else{
        alert('Invalid value');
    }
    
    const noakhaliHtag=donateNowBtnText('feni-h-tag');

      // history card div 
    const historyCard= commonFaq('history-sec-div');

    // create a history card div in main div and add classlist
    const historyCardHtag= document.createElement('div');
    historyCardHtag.classList.add('history-div');

    // create a h2 tag in div and add classlist
    const hTwoTag= document.createElement('h2');
    hTwoTag.classList.add('history-div-h2-tag');
    
    // output of history card 
    hTwoTag.textContent=donateInputValue +' taka is '+ noakhaliHtag;

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




// donatenow third card button function
document.getElementById('donate-now-third-btn').addEventListener('click', function () {
    
    // donation btn input value 
    const donateInput=donateNowBtnInput('donate-input-third');
    const donateInputValue=parseFloat(donateInput);
    
    // donation recive money inner text 
    const donationReceive= donateNowBtnText('donation-receive-third');
    const donationReceiveText= parseFloat(donationReceive);
   
    // my account money on navbar 
    const navMoney= donateNowBtnText('nav-money');
    const navMoneyInt= parseFloat(navMoney);

    if ( typeof donateInputValue === 'number' && !isNaN(donateInputValue) && donateInputValue <= navMoneyInt && donateInputValue > 0){
        
        // current money and input money 
        const currentdonationMoney= donateInputValue + donationReceiveText;
        
        // add input money in donation 
        document.getElementById('donation-receive-third').innerText=currentdonationMoney;
        
        // mynas input money from own account 
        const currentNavMoney= navMoneyInt - donateInputValue;
    
        document.getElementById('nav-money').innerText= currentNavMoney;

        // popupbtn show 
        const popupId= commonFaq('popup-id');
        popupId.classList.remove('invisible');

    }
    else{
        alert('Invalid value');
    }
    
    const noakhaliHtag=donateNowBtnText('quota-h-tag');

      // history card div 
    const historyCard= commonFaq('history-sec-div');

    // create a history card div in main div and add classlist
    const historyCardHtag= document.createElement('div');
    historyCardHtag.classList.add('history-div');

    // create a h2 tag in div and add classlist
    const hTwoTag= document.createElement('h2');
    hTwoTag.classList.add('history-div-h2-tag');
    
    // output of history card 
    hTwoTag.textContent=donateInputValue +' taka is '+ noakhaliHtag;

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