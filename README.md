# AngularJs boilerplate v1

Easy to use and flexible boilerplate for everyone. Developed by [Younus Talha](http://www.younustalha.com)

## This basic boilerplate have:
* Basic configuration
* Routers
* Controller
* How to include html parts
* API Calls/Resources
* Form Submission

If you want to create more pages then do the following
* Create html file in templates folder
* Add router in js/routers.js file. Copy below code before ".otherwise"
`.when('/contact-us', {`
`templateUrl: 'templates/YOUR_FILE_NAME.html',`
`controller: 'YOUR_CONTROL_NAME'`
`})`
* Add controller in js/controllers.js file. Copy the below code before ";"
`.controller('AboutMe', ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams){`
`$('.nav li').removeAttr('class'); // This line will deactive all navigation`
`$rootScope.activeAbout = 'active'; // This line will activate the selected link. You can add more links in includes/header.html file`
`$rootScope.pageDetail = 'This is a static about-me.html file in templates folder';// This will not require in your project. Remove it from all controllers and also remove html part from index.html`
`}])`
