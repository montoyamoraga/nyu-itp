//declare variables for storing the date
int year, month, day;
int hour, minute, second;
String currentDate = " ";

//function for retrieving the current date
void getDate() {
  day = day();
  month = month();
  year = year();
  hour = hour();
  minute = minute();
  second = second();
  currentDate = year  + "_" + month + "_" + day + "_" + hour  + "_" + minute + "_" + second;
}