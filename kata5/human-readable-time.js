/* 
DESCRIPTION:
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures. 
*/

function humanReadable(seconds) {
  if (seconds === 0) {
    return "00:00:00";
  }

  let hh = parseInt(seconds / 3600);
  seconds = seconds - hh * 3600;

  let mm = parseInt(seconds / 60);
  seconds = seconds - mm * 60;

  if (hh < 10) {
    hh = "0" + hh;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  if (seconds < 10) {
    ss = "0" + seconds;
  } else {
    ss = seconds;
  }

  let time = hh + ":" + mm + ":" + ss;
  console.log(time);

  return time;
}