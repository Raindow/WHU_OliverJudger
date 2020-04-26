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
execute('python py_test.py 2');
