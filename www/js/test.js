var angularApp = angular.module('apiApp', []);
			angularApp.controller('apiController', function($scope, $http) {
				$scope.imageURL = "";
				$scope.showCharts=false;
				$scope.showSpeakingMessage=false;
				$scope.RenderChart=function(){
					$scope.showCharts=true;
					$scope.showSpeakingMessage=false;
					$scope.imageURL="https://chart.googleapis.com/chart?chs="+$scope.chartWidth+"x"+$scope.chartHeight+"&chd=t:"+$scope.chartData+"&cht=p3&chl="+$scope.chartSliceLabels;	
				};
				$scope.TextToSpeaK=function(){
					$scope.showCharts=false;
					$scope.showSpeakingMessage=true;
					var textToSpeak = $scope.textToSpeak;
					textToSpeak = textToSpeak.indexOf(' ') >=0 ? textToSpeak.replace(/\s+/g, 
			
			'+') : textToSpeak;
					var audio = new Audio();
					audio.src ='http://translate.google.com/translate_tts?ie=utf-8&tl=en&q='+textToSpeak;;
					audio.play();
				};
				}
			);