
const alertArr = ['cart', 'checkout', 'bag']

for(let i = 0; i < alertArr.length; i++){
    if(window.location.pathname.indexOf(alertArr[i]) !== -1){
        createModal();
        break;
    }
}

function clickImg(){
    location.assign('https://app.acorns.com/present');
}

// if(window.location.href === 'https://app.acorns.com/present'){
//     window.onload = function() {
//         alert('hello')
//         document.querySelector('.shYYq').click();
//     };
// }

function hideModal() {
    wrapperDiv.setAttribute("style","display: none");
    modalDialogParentDiv.setAttribute("style","display: none");
}

function createModal(){
    wrapperDiv = document.createElement("div");
    wrapperDiv.setAttribute("style","position: absolute; left: 0px; top: 0px; background-color: rgb(255, 255, 255); opacity: 0.5; z-index: 2000; height: 1083px; width: 100%;");

    iframeElement = document.createElement("iframe");
    iframeElement.setAttribute("style","width: 100%; height: 100%;");

    wrapperDiv.appendChild(iframeElement);

    modalDialogParentDiv = document.createElement("div");
    modalDialogParentDiv.setAttribute("style","position: absolute; width: 350px; border: 1px solid #6ec165; padding: 10px; background-color: rgb(255, 255, 255); z-index: 2001; overflow: auto; text-align: center; top: 40%; left: 40%;");

    modalDialogSiblingDiv = document.createElement("div");

    modalDialogTextDiv = document.createElement("div"); 
    modalDialogTextDiv.setAttribute("style" , "text-align:center");

    modalDialogTextSpan = document.createElement("span"); 
    modalDialogText = document.createElement("strong"); 
    modalDialogText.innerHTML = "Invest Your Extra Spending Money.";
    modalDialogText.innerHTML = "Saving an extra $20 per week can earn upwards of $55,000 over 20 years.";

    breakElement = document.createElement("br"); 
    imageElement = document.createElement("img"); 
    imageElement.setAttribute("id", "acornsBtn");
    imageElement.setAttribute("style", "cursor: pointer");
    imageElement.src = "https://app.acorns.com/icons/acorns-logotype.svg";

    buttonElement = document.createElement("a");
    buttonElement.innerHTML = "X    ";
    buttonElement.setAttribute("style", "cursor: pointer");
    buttonElement.setAttribute("id", "closeBtn");

    modalDialogTextDiv.appendChild(buttonElement);
    modalDialogTextSpan.appendChild(modalDialogText);
    modalDialogTextDiv.appendChild(modalDialogTextSpan);
    modalDialogTextDiv.appendChild(breakElement);
    modalDialogTextDiv.appendChild(breakElement);
    modalDialogTextDiv.appendChild(imageElement);

    modalDialogSiblingDiv.appendChild(modalDialogTextDiv);
    modalDialogParentDiv.appendChild(modalDialogSiblingDiv);

    document.body.appendChild(wrapperDiv);
    document.body.appendChild(modalDialogParentDiv);

    document.getElementById('acornsBtn').addEventListener('click', clickImg);
    document.getElementById('closeBtn').addEventListener('click', hideModal);
}