document.addEventListener("DOMContentLoaded", () => {

    /*=========================================================
      ELEMENTS
    =========================================================*/
    
    const splashScreen = document.getElementById("splashScreen");
    const pinPage = document.getElementById("pinPage");
    const homePage = document.getElementById("homePage");
    const licencePage = document.getElementById("licencePage");
    const viewAllPage = document.getElementById("viewAllPage");
    const viewAllButton = document.getElementById("viewAllButton");
    const backFromViewAll = document.getElementById("backFromViewAll");
    const walletPage = document.getElementById("walletPage");
    const walletLicence = document.getElementById("walletLicence");
    const showQRPage = document.getElementById("showQRPage");
    const scanQRPage = document.getElementById("scanQRPage");
    const messagesPage = document.getElementById("messagesPage");
    const settingsPage = document.getElementById("settingsPage");
    const openSettings = document.getElementById("openSettings");
    const backFromSettings = document.getElementById("backFromSettings");

    const openLicence = document.getElementById("openLicence");
    const backHome = document.getElementById("backHome");

    const homeNav = document.getElementById("homeNav");
    const walletNav = document.getElementById("walletNav");
    const showQRNav = document.getElementById("showQRNav");
    const scanQRNav = document.getElementById("scanQRNav");
    const messagesNav = document.getElementById("messagesNav");

    const refreshTime = document.getElementById("refresh-time");
    const refreshStatus = document.getElementById("refreshStatus");
    const refreshInfo = document.getElementById("refreshInfo");
    const pullRefresh = document.querySelector(".pull-refresh");

    const signaturePopup = document.getElementById("signaturePopup");
    const closePopup = document.getElementById("closePopup");

    const copySheet = document.getElementById("copySheet");
    const closeCopySheet = document.getElementById("closeCopySheet");
    const copyOverlay = document.querySelector(".copy-overlay");
    const copyLicence = document.getElementById("copyLicence");
    const copyCard = document.getElementById("copyCard");

    const learnScroll = document.querySelector(".learn-scroll");
    const learnLeft = document.getElementById("learnLeft");
    const learnRight = document.getElementById("learnRight");

    const homeNavIcon = document.getElementById("homeNavIcon");
    const walletNavIcon = document.getElementById("walletNavIcon");
    const showQRNavIcon = document.getElementById("showQRNavIcon");
    const scanQRNavIcon = document.getElementById("scanQRNavIcon");
    const messagesNavIcon = document.getElementById("messagesNavIcon");

    /*=========================================================
      PIN ELEMENTS
    =========================================================*/

    const pinBoxes = document.querySelectorAll(".pin-box");
    const pinKeys = document.querySelectorAll(".pin-key[data-number]");
    const pinDelete = document.getElementById("pinDelete");

    let enteredPin = "";
    let visibleIndex = -1;
    let hideTimer = null;

    /* Change this to your own PIN */

    const correctPin = "852963";

    const pinMessage = document.createElement("div");

    pinMessage.className = "pin-message";

    const pinBoxesContainer = document.querySelector(".pin-boxes");

    if(pinBoxesContainer){

        pinBoxesContainer.before(pinMessage);

    }
    /*=========================================================
      PAGE NAVIGATION
    =========================================================*/

    function hideAllPages(){

        homePage.style.display = "none";
        licencePage.style.display = "none";
        viewAllPage.style.display = "none";
        walletPage.style.display = "none";
        showQRPage.style.display = "none";
        scanQRPage.style.display = "none";
        messagesPage.style.display = "none";
        settingsPage.style.display = "none";

    }

    function showHome(){

        hideAllPages();

        homePage.style.display = "block";

        setActiveNav("home");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }

    function showSettings(){

        hideAllPages();

        settingsPage.style.display = "block";

        setActiveNav("home");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }

    function showLicence(){

        hideAllPages();

        licencePage.style.display = "block";

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }

    function showViewAll(){

        hideAllPages();

        viewAllPage.style.display = "block";

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }

    function showWallet(){

        hideAllPages();

        walletPage.style.display = "block";

        setActiveNav("wallet");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }

    function showQR(){

        hideAllPages();

        showQRPage.style.display = "block";

        setActiveNav("showQR");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }

    function showScanQR(){

        hideAllPages();

        scanQRPage.style.display = "block";

        setActiveNav("scanQR");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }

    function showMessages(){

        hideAllPages();

        messagesPage.style.display = "block";

        setActiveNav("messages");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }



    if(openLicence){

        openLicence.addEventListener("click",showLicence);

    }

    if(backHome){

        backHome.addEventListener("click",showHome);

    }

    if(homeNav){

        homeNav.addEventListener("click",showHome);

    }

    if(viewAllButton){

        viewAllButton.addEventListener("click",showViewAll);

    }

    if(backFromViewAll){

        backFromViewAll.addEventListener("click",showHome);

    }

    if(openSettings){

        openSettings.addEventListener("click",showSettings);

    }

    if(backFromSettings){

        backFromSettings.addEventListener("click",showHome);

    }

    if(walletLicence){

        walletLicence.addEventListener("click", showLicence);

    }


    /*=========================================================
      LOADING SCREEN
    =========================================================*/
    setTimeout(()=>{

        splashScreen.classList.add("hide");

        setTimeout(()=>{

            splashScreen.remove();

        },300);

    },2000);

        /*=========================================================
      LEARN MORE
    =========================================================*/

    function updateLearnButtons(){

        if(!learnScroll || !learnLeft || !learnRight) return;

        const maxScroll =
            learnScroll.scrollWidth - learnScroll.clientWidth;

        if(learnScroll.scrollLeft <= 5){

            learnLeft.style.opacity = "0";
            learnLeft.style.pointerEvents = "none";

        }else{

            learnLeft.style.opacity = "1";
            learnLeft.style.pointerEvents = "auto";

        }

        if(learnScroll.scrollLeft >= maxScroll - 5){

            learnRight.style.opacity = "0";
            learnRight.style.pointerEvents = "none";

        }else{

            learnRight.style.opacity = "1";
            learnRight.style.pointerEvents = "auto";

        }

    }

    if(learnScroll){

        const card = learnScroll.querySelector(".learn-card");

        let scrollDistance = 400;

        if(card){

            const gap = 16;

            scrollDistance =
                (card.offsetWidth + gap) * 2;

        }

        if(learnRight){

            learnRight.addEventListener("click",()=>{

                learnScroll.scrollBy({

                    left:scrollDistance,

                    behavior:"smooth"

                });

            });

        }

        if(learnLeft){

            learnLeft.addEventListener("click",()=>{

                learnScroll.scrollBy({

                    left:-scrollDistance,

                    behavior:"smooth"

                });

            });

        }

        learnScroll.addEventListener("scroll",updateLearnButtons);

        window.addEventListener("resize",updateLearnButtons);

        updateLearnButtons();

    }

    /*=========================================================
      REFRESH TIME
    =========================================================*/

    function updateTime(){

        const months=[
            "Jan","Feb","Mar","Apr","May","Jun",
            "Jul","Aug","Sep","Oct","Nov","Dec"
        ];

        const now=new Date();

        let hours=now.getHours();
        const minutes=String(now.getMinutes()).padStart(2,"0");
        const ampm=hours>=12?"pm":"am";

        hours=hours%12||12;

        if(refreshTime){
            refreshTime.textContent=
            `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()} ${hours}:${minutes}${ampm}`;
        }

    }

    updateTime();


    /*=========================================================
      PULL TO REFRESH
    =========================================================*/

    let startY=0;
    let pulling=false;

    document.addEventListener("touchstart",e=>{

        if(window.scrollY!==0) return;
        if(!licencePage || licencePage.style.display==="none") return;

        startY=e.touches[0].clientY;
        pulling=true;

    });

    document.addEventListener("touchmove",e=>{

        if(!pulling) return;

        const distance=e.touches[0].clientY-startY;

        if(distance>70){
            pullRefresh.classList.add("show");
        }

    });

    document.addEventListener("touchend",()=>{

        if(!pullRefresh.classList.contains("show")){
            pulling=false;
            return;
        }

        refreshInfo.classList.add("hide");
        refreshStatus.classList.add("show");
        pullRefresh.classList.add("spin");

        setTimeout(()=>{

            updateTime();

            refreshStatus.classList.remove("show");
            refreshInfo.classList.remove("hide");

            pullRefresh.classList.remove("show","spin");

        },800);

        pulling=false;

    });



    /*=========================================================
      SIGNATURE POPUP
    =========================================================*/

    function showSignature(){

        signaturePopup.classList.add("show");

    }

    function hideSignature(){

        signaturePopup.classList.remove("show");

    }

    document.querySelectorAll(".signature-trigger").forEach(item=>{

        item.addEventListener("click",showSignature);

    });

    if(closePopup){

        closePopup.addEventListener("click",hideSignature);

    }

    if(signaturePopup){

        signaturePopup.addEventListener("click",e=>{

            if(e.target===signaturePopup){

                hideSignature();

            }

        });

    }
        /*=========================================================
      COPY SHEET
    =========================================================*/

    function showCopySheet(){

        copySheet.classList.add("show");

    }

    function hideCopySheet(){

        copySheet.classList.remove("show");

    }

    document.querySelectorAll(".card-trigger, .licence-trigger").forEach(item=>{

        item.addEventListener("click",showCopySheet);

    });

    if(closeCopySheet){

        closeCopySheet.addEventListener("click",hideCopySheet);

    }

    if(copyOverlay){

        copyOverlay.addEventListener("click",hideCopySheet);

    }

    /*=========================================================
      COPY TO CLIPBOARD
    =========================================================*/

    async function copyText(text){

        try{

            await navigator.clipboard.writeText(text);

        }catch(e){

            console.log(e);

        }

        hideCopySheet();

    }

    if(copyLicence){

        copyLicence.addEventListener("click",()=>{

            copyText("144848384");

        });

    }

    if(copyCard){

        copyCard.addEventListener("click",()=>{

            copyText("7F8D7D70C4");

        });

    }

    /*=========================================================
      PIN SCREEN
    =========================================================*/

    function updateBoxes(){

        pinBoxes.forEach((box,index)=>{

            if(index >= enteredPin.length){

                box.textContent = "";

                box.classList.remove("filled","dot");

                return;

            }

            if(index === visibleIndex){

                box.textContent = enteredPin[index];

                box.classList.add("filled");

                box.classList.remove("dot");

            }else{

                box.textContent = "●";

                box.classList.add("dot");

                box.classList.remove("filled");

            }

        });

    }

    function resetPin(){

        clearTimeout(hideTimer);

        enteredPin = "";

        visibleIndex = -1;

        updateBoxes();

    }

    function showSuccess(){

        pinMessage.textContent = "Success";

        pinMessage.style.color = "#28a745";

        pinBoxes.forEach(box=>{

            box.style.borderColor = "#28a745";

        });

        setTimeout(unlockApp,700);

    }

    function showError(){

        pinMessage.textContent = "Incorrect PIN";

        pinMessage.style.color = "#d62828";

        pinBoxes.forEach(box=>{

            box.style.borderColor = "#d62828";

        });

        setTimeout(()=>{

            pinBoxes.forEach(box=>{

                box.style.borderColor = "#7a1d3d";

            });

            pinMessage.textContent = "";

            resetPin();

        },900);

    }

    function unlockApp(){

        pinPage.style.display = "none";

        homePage.style.display = "block";

    }

    pinKeys.forEach(button=>{

        button.addEventListener("click",()=>{

            if(enteredPin.length >= 6) return;

            clearTimeout(hideTimer);

            if(visibleIndex !== -1){

                visibleIndex = -1;

                updateBoxes();

            }

            enteredPin += button.dataset.number;

            visibleIndex = enteredPin.length - 1;

            updateBoxes();

            hideTimer = setTimeout(()=>{

                visibleIndex = -1;

                updateBoxes();

            },500);

            if(enteredPin.length === 6){

                setTimeout(()=>{

                    if(enteredPin === correctPin){

                        showSuccess();

                    }else{

                        showError();

                    }

                },500);

            }

        });

    });

    if(pinDelete){

        pinDelete.addEventListener("click",()=>{

            clearTimeout(hideTimer);

            enteredPin = enteredPin.slice(0,-1);

            visibleIndex = -1;

            updateBoxes();

        });

    }

    /*=========================================================
      FUTURE NAVIGATION PLACEHOLDERS
    =========================================================*/



    if(walletNav){

        walletNav.addEventListener("click",showWallet);

    }

    if(showQRNav){

        showQRNav.addEventListener("click", showQR);

    }


    if(scanQRNav){

        scanQRNav.addEventListener("click", showScanQR);

    }

    if(messagesNav){

        messagesNav.addEventListener("click", showMessages);

    }

});