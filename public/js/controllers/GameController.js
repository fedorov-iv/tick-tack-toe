/**
 * Created by ifedor on 22.09.16.
 */
angular
    .module('TickTackToeApp')
    .controller('GameController', function ($scope) {


        // field
        $scope.field = [null, null, null, null, null, null, null, null, null];
        $scope.gameOver = false;

        console.log('Initial field:', $scope.field);


        // user's move
        $scope.move = function (position) {

            $scope.field[position] = 1;
            console.log('User\'s move :', $scope.field);
            findEmptyCell();

        };

        // start new game
        $scope.reset = function () {
            $scope.field = [null, null, null, null, null, null, null, null, null];
            $scope.gameOver = false;
        };


        //computer's move
        function moveBack(position) {
            $scope.field[position] = 0;
            console.log('Computer\'s move :', $scope.field);
        }

        function findEmptyCell() {
            if (hasEmptyCells()) {
                var position = Math.floor(Math.random() * 9);
                $scope.field[position] !== null ? findEmptyCell() : moveBack(position);
            } else {
                resume();
            }


        }

        // checks field for empty cells
        function hasEmptyCells() {

            for (var i = 0; i < $scope.field.length; i++) {
                if ($scope.field[i] === null) {
                    return true;
                }
            }
            return false;

        }

        function resume() {
            $scope.gameOver = true;
        }


    });