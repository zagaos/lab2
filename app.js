var express = require('express');

var httpExpressServer = express();

var student1 = { id:'10001' , name: 'Malathi' , department: 'ECE '  }
var student2 = { id:'10002' , name: 'Arun' , department: 'ECE '  }
var student3 = { id:'10003' , name: 'Deepika' , department: 'ECE '  }

var student4 = { id:'10004' , name: 'Fathima' , department: 'ECE '  }

var students = [];
students.push(student1);
students.push(student2);
students.push(student3);
students.push(student4);


httpExpressServer.listen(8002, ()=> {
    console.log('my server is started on the port 8082' )

});

httpExpressServer.get('/allstudents', (req , res) => {

    res.send(students);
});
httpExpressServer.get('/student/:id', (req , res) => {
    var studnetid = req.params.id;
    console.log('request stundet ' ,studnetid );
   
    var corresstiudent = students.find( st => st.id === studnetid );
  
    console.log('result stundet ' ,corresstiudent );
    res.send(corresstiudent);
});
httpExpressServer.post('/:id', (req , res) => {
    var studnetid = req.params.id;
    console.log('request stundet ' ,studnetid );
   //uodate datae
  
    ///console.log('result stundet ' ,corresstiudent );
    //res.send("successfuly uoadte student id " , studnetid);
    res.status(200).send("successfuly uoadte student id " + studnetid);
});
