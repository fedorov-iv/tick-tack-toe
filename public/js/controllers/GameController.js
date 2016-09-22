/**
 * Created by ifedor on 22.09.16.
 */
angular
    .module('TickTackToeApp')
    .controller('GameController', function ($scope) {

        $scope.field = [null, null, null, null, null, null, null, null, null]; // field
        $scope.gameOver = false; // state

        console.log('Initial field:', $scope.field);


        /**
         * User's move
         * @param {int} position
         */
        $scope.move = function (position) {

            $scope.field[position] = 1;
            console.log('User\'s move :', $scope.field);
            findEmptyCell();

        };

        /**
         * Starts a new game
         */
        $scope.reset = function () {
            $scope.field = [null, null, null, null, null, null, null, null, null];
            $scope.gameOver = false;
        };


        /**
         * Computer's move
         * @param {int} position
         */
        function moveBack(position) {
            $scope.field[position] = 0;
            console.log('Computer\'s move :', $scope.field);
        }

        /**
         * Finds an empty cell for computer's move
         */
        function findEmptyCell() {
            if (hasEmptyCells()) {
                var position = Math.floor(Math.random() * 9);
                $scope.field[position] !== null ? findEmptyCell() : moveBack(position);
            } else {
                resume();
            }


        }

        /**
         * Checks field for empty cells
         * @returns {bool}
         */
        function hasEmptyCells() {

            for (var i = 0; i < $scope.field.length; i++) {
                if ($scope.field[i] === null) {
                    return true;
                }
            }
            return false;

        }

        /**
         * Resumes game
         */
        function resume() {
            $scope.gameOver = true;
        }


    });