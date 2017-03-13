angular.module('TodoDirective',[])

.directive('todoTable', function() {
  return {
    restrict: 'E',    //  E -> element
    templateUrl: 'templates/todo-table.html'
  };
})

.directive('navbar', function (){
	return {
		restrict: 'E',
		templateUrl: 'templates/navbar.html'
	};
});