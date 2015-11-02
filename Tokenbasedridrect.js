<script>
window.onload = function(){
	var ActivityStageVals = ["NewBorn","Learner","Engage","Pro"];
var ActivityStage = "{{lead.ActivityStatus_test:default=edit me}}";
            var ActivityStageLength = ActivityStageVals.length;
            var AppName="creator";
            for(x = 0; x < ActivityStageLength; x++) {
                
                if(ActivityStage == ActivityStageVals[x])
                {
                    var contenturl = "https://go.manageengine.com/" + AppName + ActivityStage + "test.html";
                     window.location = contenturl;
                }
            }
         }
            
            
            
            </script>
