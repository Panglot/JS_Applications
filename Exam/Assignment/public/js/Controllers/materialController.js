let materialController = (function () {
    function constructMaterial(id) {
        let data;
        dataService.materialById(id.id)
            .then(function (answer) {
                data = answer;
                return templates.get("material");
            })
            .then(function (template) {
                $("#content").html(template(data));

                dataService.isLoggedIn()
                    .then(function (isLoggedIn) {
                        if(isLoggedIn){
                            $("#comment-box").show();
                        }
                    });
                $("#post-button").click(function () {
                    let comment = {};
                    comment.commentText = $("#post-comment-input").val();
                    dataService.createComment(id.id, comment);
                    materialController.execute(id);
                })
            })
    }

    return{
        execute: constructMaterial
    }
})();