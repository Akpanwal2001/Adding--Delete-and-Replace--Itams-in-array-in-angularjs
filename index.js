var app = angular.module('myApp', []);
app.controller('myCtrl', ($scope) => {
    $scope.itams = [];
    
    $scope.mtotal = () => {
        $scope.value = $scope.qty * $scope.rate;
    }
    
    $scope.taxtotal = () => {
        $scope.taxvalue = $scope.value * $scope.tax / 100; 
        $scope.amount = $scope.taxvalue + $scope.value;
    }
    
    // print the itams 
    $scope.print = () => {
        var itam = {
            Date : $scope.date,
            PartyName : $scope.partyname,
            remarks : $scope.Remarks,
            ItamName : $scope.itamname,
            Qty : $scope.qty,
            Rate : $scope.rate, 
            Value : $scope.value,
            Tax : $scope.tax,
            TaxValue : $scope.taxvalue,
            Amount : $scope.amount
        }
        $scope.itams.push(itam);
    } 
    
    // Edit Itams Method
    $scope.edit = (index) => {
        debugger;
        $scope.date = $scope.itams[index].Date;
        $scope.partyname = $scope.itams[index].PartyName;
        $scope.Remarks = $scope.itams[index].remarks;
        $scope.itamname = $scope.itams[index].ItamName;
        $scope.qty = $scope.itams[index].Qty;
        $scope.rate = $scope.itams[index].Rate;
        $scope.value = $scope.itams[index].Value;
        $scope.tax = $scope.itams[index].Tax;
        $scope.taxvalue = $scope.itams[index].TaxValue;
        $scope.amount = $scope.itams[index].Amount;
        $scope.itams.splice(index, 1);
    }
    
    // Delete Itams Method
    $scope.delete = (index) => { 
        $scope.itams.splice(index, 1); 
    }
});