var exec = require('child_process').exec;
function execute(cmd){

    exec(cmd, function(error, stdout, stderr) {
        if(error){
            console.error(error);
        }
        else{
            console.log("success");
        }
    });

}
execute('python ../EPIJudge-master/epi_judge_python_solutions/a_b_sqrt2.py');
execute('python py_test.py 2');
