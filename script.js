var app = angular.module('Demo', ['ui.router','ngMaterial','kendo.directives']);
app.config(function($stateProvider,$urlRouterProvider){
var states = [

{
name: 'add',
url: '/add',
templateUrl: 'aa.html'

},
{
    name: 'home',
    url: '/home',
    template: '<h1>  Welcome to The HOME PAGE </h1>'
    
    },
{
    name: 'List',
    url: '/List',
    templateUrl: 'kendo.html'
    }

];
states.forEach((state) => $stateProvider.state(state));
$urlRouterProvider.otherwise('/');


})
.controller('MainCtrl', function($scope, $state) {
  $scope.adduser = function(){
    //console.log("Login clicked!");
    $state.go('add');
    console.log('the state is '+$state.stateName); 
    // window.location = "/main.html";
    // $scope.apply();
  };    
})

.controller('MainController', function($scope, $state) {    
     $scope.listuser = function(){
    //console.log("Login clicked!");
    $state.go('List');
    console.log('the state is '+$state.stateName); 
    // window.location = "/main.html";
    // $scope.apply();
  };
})
.controller('Main', function($scope, $state) {    
    $scope.home = function(){
   //console.log("Login clicked!");
   $state.go('home');
   console.log('the state is '+$state.stateName); 
   // window.location = "/main.html";
   // $scope.apply();
 };
})
.controller('Bas', function($scope, $mdSidenav) {
    $scope.toggleLeft = buildToggler('left');
  
      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
    }
      
    })
    .controller('mainC', function($scope,$rootScope) {

        $scope.submitted = false;
        
            // function to submit the form after all validation has occurred			
            $scope.submitForm = function() {
          
                $scope.submitted = true;
          
                // check to make sure the form is completely valid
                if ($scope.userForm.$valid) {
                    alert( "Successfuly Submitted" );
                }
          else {
            
            alert('ERROR');
          }
          $rootScope.user.age = $scope.user.age;
          $rootScope.user.lastname = $scope.user.lastname;
          $rootScope.user.name = $scope.user.name;
          $rootScope.user.email = $scope.user.email;
          
        
    
            };
            
        })
        .controller("MyCt", function($scope,$mdDialog){
            var data = new kendo.data.DataSource({
               

              data: [  { text: "Abdul", text2:"Hanan", text3:"22", text4:"ahanan127@gmail.com" },
                { text: "Fahad", text2:"Bilal", text3:"25", text4:"fahad17@gmail.com" },
                { text: "Junaid", text2:"Ahmad", text3:"20", text4:"Junaid1@gmail.com" }
            ],
            
            aggregate: [
                { field: "text", aggregate: "count" }],
                
                selectable: true,
                pageSize:2,
                
            }
         
         );
            
      
        

      $scope.mainGridOptions = {
        dataSource: data,
        pageable:true,
         
        columns: [{
            field: "text",
            title: "First Name ",
            width: "180px",
            footerTemplate: "Total : {{ aggregate.count }}"
            
           
            
            },{
            field: "text2",
            title: "Last Name",
            width: "120px"
            },{
            field: "text3",
            title: "Age",
            width: "120px"
            },{
            field: "text4",
            title: "Email",
            width: "120px"
           
        },{
          title: "UserInfo",
          width: "120px",
           command: [{
            name: "details",
            click: function(e) {
                // prevent page scroll position change
                e.preventDefault();
                // e.target is the DOM element representing the button
                var tr = $(e.target).closest("tr"); // get the current table row (tr)
                // get the data bound to the current table row
                var data = this.dataItem(tr);
                
                    $mdDialog.show(
                      $mdDialog.alert()
                        .clickOutsideToClose(true)
                        .title('UserInfo')
                        .textContent("Details for: " + data.text + " " + data.text2 + " " + data.text3 + " " + data.text4)
                        .ariaLabel('Left to right demo')
                        .ok('Close')
                        
                    );
                  



               
            }
          }]

         } ]
           
      };
    });
            
            

           


  