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

  obj.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date
  })
  return obj
}

function createTimeOutEvent(obj, dateStamp){
  let [date, hour] = dateStamp.split(' ')

  obj.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date
  })
  return obj
}

function hoursWorkedOnDate(obj, date){
  let clockIn = obj.timeInEvents.find(el => el.date === date)
  let clockOut = obj.timeOutEvents.find(el => el.date === date)
  return (clockOut.hour-clockIn.hour)/100
}

function wagesEarnedOnDate(obj, date){
  return hoursWorkedOnDate(obj, date)*obj.payPerHour
}

function allWagesFor(obj) {
  let dates = employee.timeInEvents.map(el => el.date)

  let totalWages = dates.reduce(function(total, date){
    return total + wagesEarnedOnDate(obj, date)
  }, 0)
    return totalWages
}
