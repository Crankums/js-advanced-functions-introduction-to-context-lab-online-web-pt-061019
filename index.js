// Your code here
function createEmployeeRecord(arr){
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents : [],
    timeOutEvents : []
  }
}

function createEmployeeRecords(arr) {
  return arr.map(el => createEmployeeRecord(el))
}

function createTimeInEvent(obj, dateStamp){
  let [date, hour] = dateStamp.split(' ')
  
  return obj.timeInEvents.push({
    type: "TimeIn",
    hour: hour,
    date: date
  })

}
