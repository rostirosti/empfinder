$(function(){

      /**
   * Get the form info from the page.
   * Clear the form. 
   * Send the data in a POST request.
   */
  
 
const displayModal = function(data) {

        // Grab the result from the AJAX post so that the best match's name and photo are displayed.
        $('#match-name').text(data.name);
        $('#match-img').attr('src', data.photo);
    
        // Show the modal with the best match
        $('#results-modal').modal('toggle');
      }
   
  
  
   const addEmployeeScore = function (event) {
    event.preventDefault();
    console.log("I have been clicked!");
    // Here we grab the form elements
    const myScore = {
      customerName: $('#name').val().trim(),
      photo: $('#photo').val().trim(),
      scores: [
        $('#q1').val().trim(),
        $('#q2').val().trim(),
        $('#q3').val().trim(),
        $('#q4').val().trim(),
        $('#q5').val().trim(),
        $('#q6').val().trim(),
        $('#q7').val().trim(),
        $('#q8').val().trim(),
        $('#q9').val().trim(),
        $('#q10').val().trim(),
      ]
    };

    // // Clear the form when submitting
    // $('#reserve-name').val('');
    // $('#reserve-phone').val('');
    // $('#reserve-email').val('');
    // $('#reserve-unique-id').val('');
    console.log(myScore);

    // $.ajax({
    //   method: 'POST',
    //   url: 'api/employees',
    //   data: myScore
    // })

    $.post('/api/employees', myScore, displayModal);


  
//     arrayConverter = function() {
        
//         const getWaitList = function(){
//             $.ajax({
//               method: 'GET',
//               url: 'api/employees'
//             }).then(function(data){
//               render(data, $('.waitlist'));
//             });
//           }
        
//         var heroes = [
//             {name: “Batman”, franchise: “DC”},
//             {name: “Ironman”, franchise: “Marvel”},
//             {name: “Thor”, franchise: “Marvel”},
//             {name: “Superman”, franchise: “DC”}
//         ];
        
//         var marvelHeroes =  heroes.filter(function(hero) {
//             return hero.franchise == “Marvel”;
//         });
        
//         // [ {name: “Ironman”, franchise: “Marvel”}, {name: “Thor”, franchise: “Marvel”} ]
//     }

 }

  $('#submitter').on('click', addEmployeeScore)

  });

//   {
//     "name":"Bart",
//     "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//     "scores":[
//         5,
//         5,
//         5,
//         5,
//         5,
//         5,
//         5,
//         5,
//         5,
//         5
//       ]
//   },