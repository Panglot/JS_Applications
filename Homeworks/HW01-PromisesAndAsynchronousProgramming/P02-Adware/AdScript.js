(function () {
    console.log("You must disable your adblock for this script to work!\n" +
        "Adblock is designed to block scripts that redirect.");

    let annoyingRedirectingPromice = new Promise(function (resolve, reject) {
            resolve(setTimeout(function () {
                    window.location = "https://www.youtube.com/watch?v=_AtP7au_Q9w&ab_channel=foxalbiazul";
                }, 2000)
            )
        }
    );

    annoyingRedirectingPromice;
})();
