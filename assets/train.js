
$(document).ready(function() {
        
    function displayUserInputs() {

        var nTrainName = $('#train-name').val().trim();
        
        var nTrainDestination = $('#train-destination').val().trim();
            
        var nFirstTrainTime = $('#First-Train-Time').val().trim();
            
        var nTrainFrequency = $('#train-frequency').val().trim();
    
        var tBody = $('tbody');
        var tRow = $('<tr>');

        var TrainNameTd = $('<td>').text(nTrainName);
        var TrainDestinationTd = $('<td>').text(nTrainDestination);
        var FirstTrainTimeTd = $('<td>').text(nFirstTrainTime);
        var TrainFrequencyTd = $('<td>').text(nTrainFrequency);

        tRow.append(TrainNameTd, TrainDestinationTd, FirstTrainTimeTd, TrainFrequencyTd);
        tBody.append(tRow);
    }

    $('#submitbtn').on('click', function(){

        displayUserInputs();
        
    })
});