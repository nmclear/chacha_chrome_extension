
const alertArr = ['cart', 'checkout', 'bag'];
const messageArr = [
    `"Love is like money... hard to find easy to lose." — Ally Mbululo`,
    `"Financial peace isn't the acquisition of stuff. It's learning to live on less than you make, so you can give money back and have money to invest. You can't win until you do this." — Dave Ramsey`,
    `"A simple fact that is hard to learn is that the time to save money is when you have some." —Joe Moore`,
    `"Don’t tell me where your priorities are. Show me where you spend your money and I’ll tell you what they are." —James W. Frick`,
    `"If you would be wealthy, think of saving as well as getting." —Benjamin Franklin`,
    `"Money is a terrible master but an excellent servant." —P.T. Barnum`,
    `"You must gain control over your money or the lack of it will forever control you." —Dave Ramsey`,
    `"The quickest way to double your money is to fold it in half and put it in your back pocket." —Will Rogers`,
    `"Money is a guarantee that we may have what we want in the future. Though we need nothing at the moment it insures the possibility of satisfying a new desire when it arises." —Aristotle`,
    `"Many people take no care of their money till they come nearly to the end of it, and others do just the same with their time." –Johann Wolfgang von Goethe`,
    `"Being frugal does not mean being cheap! It means being economical and avoiding waste." -Catherine Pulsifer`,
    `"Save money on the big, boring stuff so that you have something left over for life’s little pleasures." –Elisabeth Leamy`,
    `"A penny saved is a penny earned." –Benjamin Franklin`,
    `"The best way to save money is not to lose it." –Les Williams`,
    `"Being a smart shopper is the first step to getting rich." –Mark Cuban`,
    `"Never buy what you do not need because it is cheap; it will be dear to you." –Thomas Jefferson`
]

for(let alert of alertArr){
    if(window.location.pathname.indexOf(alert) !== -1){

        const randomIndex = Math.floor((Math.random() * messageArr.length));
        const message = messageArr[randomIndex]

        let modal = createModal(message);
        modal.open();
        break;
    }
}

function createModal(message){
    const modal = new tingle.modal({
        footer: true,
        stickyFooter: false,
        closeMethods: ['overlay', 'button', 'escape'],
        closeLabel: "Close",
        cssClass: ['cha-cha']
    });

    modal.setContent(`
        <h1 class="modalHeader">Invest Your Extra Spending Money</h1>
        <h3 class="modalBody">${message}</h3>
    `);

    modal.addFooterBtn('Acorns', 'linkBtn tingle-btn', function() {
        location.assign('https://app.acorns.com/present');
    });

    modal.addFooterBtn('eTrade', 'linkBtn tingle-btn', function() {
        location.assign('https://us.etrade.com/e/t/user/login');
    });

    modal.addFooterBtn('Ameritrade', 'linkBtn tingle-btn', function() {
        location.assign('https://invest.ameritrade.com/grid/p/login');
    });

    modal.addFooterBtn('robinhood', 'linkBtn tingle-btn', function() {
        location.assign('https://robinhood.com/login');
    });

    return modal
}