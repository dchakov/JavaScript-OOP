function SolveClassic() {
    var Student = (function() {

        function Student(argument) {
            this.name = argument.name;
        }
        return Student;
    }());
    return Student;
}


function SolveProto() {
	var student = (function () {
		var student = {
			init:function (argument) {
				this.name = argument.name;
			}
		}
	}());
	return student;
}