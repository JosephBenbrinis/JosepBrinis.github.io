var myApp = angular.module("myApp",[]);

myApp.controller("myCtrl", function($scope){
  /*alert("Enter Items That You Are Usually Eat For Lunch ");
  alert("Please use Comma-Separated");*/
  $scope.split = [];
  $scope.wordCount = 0;
  $scope.message = '';


  
  $scope.countWords = function(text){
    
    /*Split by Space*/
    $scope.split = text.split(",");
    word = $scope.split;
    /*Remove all the blank spaces*/
    for(var i=0; i<=word.length; i++){
      if(word[i] == ""){
        word.splice(i, 1);
      }
    }
    if (word.length > 0 && word.length <= 3){
    	$scope.message = 'Enjoy!';
		document.getElementById("mydiv").style.border = "thick solid #4CAF50 ";


    }else if(word.length >= 4){
    	$scope.message = 'Too much!';
    	document.getElementById("mydiv").style.border = "thick solid #4CAF50 ";
    }else{
    	$scope.message = 'Please enter your choice';
    	document.getElementById("mydiv").style.border = "thick solid red";
    }
    

    
  }
  
});