let registerController = ( function () {
        function registerUser() {
            templates.get("register")
                .then(function (template) {
                    $("#content").html(template);
                    $("#registerSubmit").click(function () {
                        let user = {};
                        user.username = $("#regUserName").val();
                        user.password = $("#regUserPassword").val();
                        dataService.register(user)
                            .then(()=>{
                                loginController.execute(ser)
                                $("#registerSubmit").hide();
                            });
                    })
                }
            )
        }

        return{
            execute: registerUser
        };
    }
)();

