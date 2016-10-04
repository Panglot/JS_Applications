/* globals requester localStorage */

const BASE_URL = document.location.origin;

var dataService = {
    materials() {
        return requester.getJSON(BASE_URL +"/api/materials");
    },
    materialById(id){
        return requester.getJSON(BASE_URL + "/api/materials/" + id);
    },
    createComment(id, text){
        let options = {};
        options.headers = {
            "x-auth-key" : localStorage.authKey
        }

        return requester.putJSON(BASE_URL + "/api/materials/" + id +"/comments", text, options);
    },
    login(user) {
        return requester.putJSON(BASE_URL + "/api/users/auth", user)
            .then(respUser => {
                localStorage.setItem("username", respUser.result.username);
                localStorage.setItem("authKey", respUser.result.authKey);
            });
    },
    register(user) {
        return requester.postJSON(BASE_URL + "/api/users", user);
    },
    logout() {
        return Promise.resolve()
            .then(() => {
                localStorage.removeItem("username");
                localStorage.removeItem("authKey");
            });
    },
    isLoggedIn() {
        return Promise.resolve()
            .then(() => {
                return !!localStorage.getItem("username");
            });
    }
};