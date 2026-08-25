// Q23. Traffic Signal
// Take a traffic signal color:
// "red"
// "yellow"
// "green"
// Use switch-case.
// Display:
// red → Stop
// yellow → Wait
// green → Go
// For any other value:
// Invalid signal

//solution-->

let trafic_signal = "red";
if (trafic_signal == "red" || trafic_signal == "yellow" || trafic_signal == "green" ) {
  switch (trafic_signal) {
    case ("red"):
      console.log("Stop");
      break;
     case ("yellow"):
      console.log("Wait");
      break;
     case ("green"):
      console.log("Go");
      break;
  }
}else{
    console.log("Invalid signal");
}