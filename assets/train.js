
$(document).ready(function() {
        
    function displayUserInputs() {

        var nTrainName = $('#train-name').val().trim();
        
        var nTrainDestination = $('#train-destination').val().trim();
            
        //var nFirstTrainTime = $('#First-Train-Time').val().trim();
            
        var nTrainFrequency = $('#train-frequency').val().trim();
    
        var tBody = $('tbody');
        var tRow = $('<tr>');

        var TrainNameTd = $('<td>').text(nTrainName);
        var TrainDestinationTd = $('<td>').text(nTrainDestination);
        //var TimeNextArrivalTd = $('<td>').text();
        
        var TrainFrequencyTd = $('<td>').text(nTrainFrequency);

        tRow.append(TrainNameTd, TrainDestinationTd, TrainFrequencyTd);
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