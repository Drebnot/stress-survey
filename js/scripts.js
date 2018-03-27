$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();
    var arrStress = [];
    var arrCoping = [];
    var arrWarning = [];
      $("input:checkbox[name=warning-signs]:checked").each(function(){
         var warningSigns = $(this).val();
         arrWarning.push(warningSigns);
      });
      $("input:checkbox[name=stress-symptoms]:checked").each(function(){
        var stressSymptoms = $(this).val();
        arrStress.push(stressSymptoms);
      });
      $("input:checkbox[name=coping-mechanisms]:checked").each(function(){
        var copingMechanisms = $(this).val();
        arrCoping.push(copingMechanisms);
      });
    if (arrCoping.length < 3 && (arrWarning.length >= 3 || arrStress.length >= 3)) {
        $("#health-tip").text("Meditate, bruh.");
    } else if (arrCoping.length >= 3 && (arrWarning.length >= 0 || arrStress.length >= 0)) {
        $("#health-tip").text("The Dude Abides");
    } else {
      $("#health-tip").text("Totes normal, no stresso.");
    }
  });
});
