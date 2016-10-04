let homeController = (function () {
    function homePopulate() {
        templates.get("home")
            .then(function (template) {
                dataService.materials()
                    .then(function (mats) {
                        $("#content").html(template(mats));
                    })
            })
    }
    return{
        execute: homePopulate
    }
})();