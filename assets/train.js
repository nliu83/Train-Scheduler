$(document).ready(function() {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCCS0mWtJQdiuIWI18rFSVT0SkG6OI3VwI",
        authDomain: "train-schedule1.firebaseapp.com",
        databaseURL: "https://train-schedule1.firebaseio.com",
        projectId: "train-schedule1",
        storageBucket: "train-schedule1.appspot.com",
        messagingSenderId: "172200254196"
    };
  
  
    firebase.initializeApp(config);

    var database = firebase.database();
       
    $('#submitbtn').on('click', function(){

        var TrainName = $('#train-name').val().trim();
        
        var TrainDestination = $('#train-destination').val().trim();
            
        var FirstTrainTime = $('#First-Train-Time').val().trim();
            
        var TrainFrequency = $('#train-frequency').val().trim();
        
        database.ref().push({

            TrainName: TrainName,
            TrainDestination: TrainDestination,
            FirstTrainTime: FirstTrainTime,
            TrainFrequency: TrainFrequency

        });

        $('#train-name').val('');

        $('#train-destination').val('');

        $('#First-Train-Time').val('');
 
        $('#train-frequency').val('');

        

    });

    database.ref().on('child_added', function(childSnapshot){

        var tname = childSnapshot.val().TrainName;
        var tdestination = childSnapshot.val().TrainDestination;
        var firsttrain = childSnapshot.val().FirstTrainTime;
        var tfrequency = childSnapshot.val().TrainFrequency;

        var firstTimeConverted = moment(firsttrain, 'HH:mm').subtract(1, 'years');

        var currentTime = moment();

        currentTimeConverted = moment(currentTime, 'HH:mm').subtract(1, 'years');

        console.log('current time: ' + currentTimeConverted);

        var diffTime = moment().diff(moment(firstTimeConverted), 'minutes');

        console.log('difference in time: ' + diffTime);

        var tRemainder = diffTime % tfrequency;

        console.log('tremainder: ' + tRemainder);

        var tMinutesTillTrain = tfrequency - tRemainder;

        console.log('minutes until next train: ' + tMinutesTillTrain);

        var nextTrain = moment().add(tMinutesTillTrain, 'minutes');

        var nextTrainConverted = moment(nextTrain).format('hh:mm');

        console.log('Arrival time: ' + nextTrainConverted);
    
        var tBody = $('tbody');
        var tRow = $('<tr>');

        var TrainNameTd = $('<td>').text(tname);
        var TrainDestinationTd = $('<td>').text(tdestination);
        var TimeNextArrivalTd = $('<td>').text(nextTrainConverted);
        var minutesAway = $('<td>').text(tMinutesTillTrain);
        
        var TrainFrequencyTd = $('<td>').text(tfrequency);

        tRow.append(TrainNameTd, TrainDestinationTd, TrainFrequencyTd, TimeNextArrivalTd, minutesAway);
        tBody.append(tRow);

    });

    

    

        


    
});