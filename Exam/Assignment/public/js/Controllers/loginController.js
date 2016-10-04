$("#login-button").click(function () {
    let user = {};
    user.username = $("#username").val();
    user.password = $("#password").val();

    loginController.execute(user);
});

let loginController = (function () {
    function loginUser(user) {

        dataService.login(user)
            .then(()=> {
                $("#signin").hide();
                $("#logout-button").show();
                $("#comment-box").show();
            });
    }

    return {
        execute: loginUser
    }
})()