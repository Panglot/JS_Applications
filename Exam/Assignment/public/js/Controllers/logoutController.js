$("#logout-button").click(function () {
    logoutController.execute();
});

let logoutController = (function () {
    function logoutUser() {

        dataService.logout()
            .then(()=> {
                $("#signin").show();
                $("#logout-button").hide();
                $("#comment-box").hide();
            });
    }

    return {
        execute: logoutUser
    }
})()
