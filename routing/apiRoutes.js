let employeesList = require('../app/data/employees.js');


module.exports = function (app) {

  /**
   * Used to display a JSON of all the possible employees
   */
  app.get('/api/employees', function (req, res) {
    res.json(employeesList);
  });

  /**This will handle the incoming survey results and handle the compatibility logic.
   */
  app.post('/api/employees', function (req, res) {
     
    let returnRec = 
     
        {
            "name":"",
            "photo":""
        };

    var differencesScores;
    var scores;
    var scoresM = [];


    for (let i = 0; i < employeesList.length; i++){
        
        var currentEmployee = employeesList[i];
        let differencesScores = 0;
        for (let j = 0; j < currentEmployee.scores.length; j++){
        var currentEmployeeScore = currentEmployee.scores[j];
        var myScoreSubmit = req.body.scores[j];
        differencesScores += Math.abs(parseInt(currentEmployeeScore)-parseInt(myScoreSubmit));
        
        }
        console.log(differencesScores);
        scoresM.push(differencesScores);
        
        
      };
    
      var bestMatch = Math.min.apply(null, scoresM);
      var bestEmployeeIndexVal;

      console.log("the best match is "+bestMatch);

       for (let s = 0; s < scoresM.length; s++) {
       if (bestMatch == scoresM[s]) {
           console.log("best match found at position " + [s]);
           bestEmployeeIndexVal = s;
       };
       };
    
    returnRec.name = employeesList[bestEmployeeIndexVal].name;
    returnRec.photo = employeesList[bestEmployeeIndexVal].photo;
    
     console.log("here is the employee that is the best match " + employeesList[bestEmployeeIndexVal].name + employeesList[bestEmployeeIndexVal].photo );

   
    
    // for (let i = 0; i < scores.length; i++){
    //     if (scores[i]) 
    // };
     
    
    employeesList.push(req.body);

      
    res.json(returnRec);
  
    


   });
}
