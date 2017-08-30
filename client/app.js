var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/home.html",
            controller: "homeController"
        })
        .when("/newQuestion", {
            templateUrl: "partials/newQuestion.html",
            controller: "questionController"
        })
        .otherwise({
            redirectTo: "/"
        });
});
