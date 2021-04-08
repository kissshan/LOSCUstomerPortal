
angular.module('NerdCtrl', []).controller('NerdController', function($scope,Nerd, $http, $q,$rootScope) {
	debugger;
	console.log('Nerd initiated');
	console.log('$rootScope.accId::'+$rootScope.accId);
	console.log('$rootScope.loginInScs = true;::'+$rootScope.loginInScs);
	$rootScope.loginInScs = false;
	$scope.response = '';
	$scope.indexInitiate = false;
	if($rootScope.loginInScs)
		$scope.indexInitiate = true;
	$scope.appData = {
		Account__c : '0012v00002vLEvs',
		Application_Stage__c : '',
		Loan_Amount__c :'',
		Product__c :'a0U2v00001pbskw'
	};
	$scope.accountData = {
		Name:'',
		AccountNumber : '',
		Account_Score__c : '',
		Age_of_Company__c : ''
	};
	
	$scope.getApplication = function(){
		debugger;
		console.log('mydata::'+$scope.appData);
		Nerd.getApplication(JSON.stringify($scope.appData))
		.then(function(response){
			$scope.applications = response.data;
			console.log(response.data);
			console.log($scope.Name);
		},function(error){
			$scope.status = 'Unable to load data';
		});
	}
	
});