let router = new Navigo(null, true);

router
    .on("/home", homeController.execute)
    .on("/register", registerController.execute)
    .on("/materials/:id", materialController.execute)
    .on(()=> router.navigate("/home"))

    .resolve();


dataService.isLoggedIn()
    .then(function(isLoggedIn) {
        if (isLoggedIn) {
            $("#signin").hide();
            $("#logout-button").show();
        }
    });