
$(document).ready(function() {
        
    function displayUserInputs() {

        var TrainName = $('#train-name').val().trim();
        
        var TrainDestination = $('#train-destination').val().trim();
            
        var FirstTrainTime = $('#First-Train-Time').val().trim();
            
        var TrainFrequency = $('#train-frequency').val().trim();

        var firstTimeConverted = moment(FirstTrainTime, 'HH:mm').subtract(1, 'years');

        var currentTime = moment();

        currentTimeConverted = moment(currentTime, 'HH:mm').subtract(1, 'years');

        console.log('current time: ' + currentTimeConverted);

        var diffTime = moment().diff(moment(firstTimeConverted), 'minutes');

        console.log('difference in time: ' + diffTime);

        var tRemainder = diffTime % TrainFrequency;

        var tMinutesTillTrain = TrainFrequency - tRemainder;

        console.log('minutes until next train: ' + tMinutesTillTrain);

        var nextTrain = moment().add(tMinutesTillTrain, 'minutes');

        var nextTrainConverted = moment(nextTrain).format('hh:mm');

        console.log('Arrival time: ' + nextTrainConverted);
    
        var tBody = $('tbody');
        var tRow = $('<tr>');

        var TrainNameTd = $('<td>').text(TrainName);
        var TrainDestinationTd = $('<td>').text(TrainDestination);
        var TimeNextArrivalTd = $('<td>').text(nextTrainConverted);
        var minutesAway = $('<td>').text(tMinutesTillTrain);
        
        var TrainFrequencyTd = $('<td>').text(TrainFrequency);

        tRow.append(TrainNameTd, TrainDestinationTd, TrainFrequencyTd, TimeNextArrivalTd, minutesAway);
        tBody.append(tRow);

        $('#train-name').val('');

        $('#train-destination').val('');

        $('#First-Train-Time').val('');
 
        $('#train-frequency').val('');

    }

    $('#submitbtn').on('click', function(){

        displayUserInputs();


    })
});