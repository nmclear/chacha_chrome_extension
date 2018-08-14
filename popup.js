function addAcornsLink() {
    chrome.tabs.executeScript({
      code: `window.location.href = 'https://app.acorns.com/present'`
    }); 
}

function addEtradeLink() {
    chrome.tabs.executeScript({
      code: `window.location.href = 'https://us.etrade.com/e/t/user/login'`
    }); 
}

function addAmeritradeLink() {
    chrome.tabs.executeScript({
      code: `window.location.href = 'https://invest.ameritrade.com/grid/p/login'`
    }); 
}

function addRobinhoodLink() {
    chrome.tabs.executeScript({
      code: `window.location.href = 'https://robinhood.com/login'`
    }); 
}
  
document.getElementById('acornsBtn').addEventListener('click', addAcornsLink);
document.getElementById('etradeBtn').addEventListener('click', addEtradeLink);
document.getElementById('ameritradeBtn').addEventListener('click', addAmeritradeLink);
document.getElementById('robinhoodBtn').addEventListener('click', addRobinhoodLink);