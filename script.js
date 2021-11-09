function displayResult() {
  document.getElementById("button").innerHTML = "Thanks for signing up!";
  }


function ButtonClicked()
{
   document.getElementById("formsubmitbutton").style.display = "none"; 
   document.getElementById("buttonreplacement").style.display = ""; 
   
   return true;
}
var FirstLoading = true;
function RestoreSubmitButton()
{
   if( FirstLoading )
   {
      FirstLoading = false;
      return;
   }
   document.getElementById("formsubmitbutton").style.display = ""; // to display
   document.getElementById("buttonreplacement").style.display = "none"; // to undisplay
}
  
document.onfocus = RestoreSubmitButton;
  
  
  
