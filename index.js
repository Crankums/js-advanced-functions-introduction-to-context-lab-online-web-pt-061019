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
  let dateArr = dateStamp.split(' ')
  let hour = dateArr[1]
  let date = dateArr[0]
  return obj.timeInEvents.push({
    type: "TimeIn",
    hour: hour,
    date: date
  })
  
}
