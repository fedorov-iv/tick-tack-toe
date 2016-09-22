/**
 * Created by ifedor on 22.09.16.
 */
angular
    .module('TickTackToeApp')
    .controller('GameController', function ($scope) {

        $scope.field = [null, null, null, null, null, null, null, null, null]; // field
        $scope.gameOver = false; // state
        var winner = {
            ai: 'Компьютер',
            user: 'Пользователь'
        };

        console.log('Initial field:', $scope.field);


        /**
         * User's move
         * @param {int} position
         */
        $scope.move = function (position) {

            $scope.field[position] = 1;
            console.log('User\'s move :', $scope.field);
            checkWin();
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
            checkWin();
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
         * @returns {boolean}
         */
        function hasEmptyCells() {

            for (var i = 0; i < $scope.field.length; i++) {
                if ($scope.field[i] === null) {
                    return true;
                }
            }
            return false;

        }

        function checkWin(){
           if ($scope.field[0] !== null &&  $scope.field[1]!== null && $scope.field[2] !== null){ // проверяем первый горизонтальный ряд
               if($scope.field[0] + $scope.field[1] + $scope.field[2] == 0){
                   $scope.winner = winner.ai;
                   resume();
               }
               if($scope.field[0] + $scope.field[1] + $scope.field[2] == 3){
                   $scope.winner = winner.user;
                   resume();
               }

           } else if($scope.field[3] !== null &&  $scope.field[4]!== null && $scope.field[5] !== null){ // проверяем второй горизонтальный ряд
               if($scope.field[3] + $scope.field[4] + $scope.field[5] == 0){
                   $scope.winner = winner.ai;
                   resume();
               }
               if($scope.field[3] + $scope.field[4] + $scope.field[5] == 3){
                   $scope.winner = winner.user;
                   resume();
               }

           } else if($scope.field[6] !== null &&  $scope.field[7]!== null && $scope.field[8] !== null){ // проверяем третий горизонтальный ряд
               if($scope.field[6] + $scope.field[7] + $scope.field[8] == 0){
                   $scope.winner = winner.ai;
                   resume();
               }
               if($scope.field[6] + $scope.field[7] + $scope.field[8] == 3){
                   $scope.winner = winner.user;
                   resume();
               }

           } else if($scope.field[0] !== null &&  $scope.field[3]!== null && $scope.field[6] !== null){ // проверяем первый вертикальный ряд
               if($scope.field[0] + $scope.field[3] + $scope.field[6] == 0){
                   $scope.winner = winner.ai;
                   resume();
               }
               if($scope.field[0] + $scope.field[3] + $scope.field[6] == 3){
                   $scope.winner = winner.user;
                   resume();
               }

           } else if($scope.field[1] !== null &&  $scope.field[4]!== null && $scope.field[7] !== null){ // проверяем второй вертикальный ряд
               if($scope.field[1] + $scope.field[4] + $scope.field[7] == 0){
                   $scope.winner = winner.ai;
                   resume();
               }
               if($scope.field[1] + $scope.field[4] + $scope.field[7] == 3){
                   $scope.winner = winner.user;
                   resume();
               }

           } else if($scope.field[2] !== null &&  $scope.field[5]!== null && $scope.field[8] !== null){ // проверяем третий вертикальный ряд
               if($scope.field[2] + $scope.field[5] + $scope.field[8] == 0){
                   $scope.winner = winner.ai;
                   resume();
               }
               if($scope.field[2] + $scope.field[5] + $scope.field[8] == 3){
                   $scope.winner = winner.user;
                   resume();
               }

           } else if($scope.field[0] !== null &&  $scope.field[4]!== null && $scope.field[8] !== null){ // проверяем диагональ левый верхний - правый нижний
               if($scope.field[0] + $scope.field[4] + $scope.field[8] == 0){
                   $scope.winner = winner.ai;
                   resume();
               }
               if($scope.field[0] + $scope.field[4] + $scope.field[8] == 3){
                   $scope.winner = winner.user;
                   resume();
               }

           } else if($scope.field[2] !== null &&  $scope.field[4]!== null && $scope.field[6] !== null){ // проверяем диагональ правый верхний - левый нижний
               if($scope.field[2] + $scope.field[4] + $scope.field[6] == 0){
                   $scope.winner = winner.ai;
                   resume();
               }
               if($scope.field[2] + $scope.field[4] + $scope.field[6] == 3){
                   $scope.winner = winner.user;
                   resume();
               }

           }


        }

        /**
         * Resumes game
         */
        function resume() {
            $scope.gameOver = true;
        }


    });