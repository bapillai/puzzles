//Take the calendars of two people look at their existing meetings and figure out available slots using data structures

function calendarMatching(calendar1,dailyBounds1,calendar2,dailyBounds2,meetingDuration){
    var updatedCalendar1 = updateCalendar(calendar1,dailyBounds1);
    var updatedCalendar2 = updateCalendar(calendar2,dailyBounds2);
    var mergedCalenders = mergeCalenders(updatedCalendar1,updatedCalendar2);
    var flattenedCalender = flattenCalender(mergedCalenders);
    return getMatchingAvailablity(flattenedCalender,meetingDuration);
  }
  
  function getMatchingAvailablity(calendar, meetingDuration){
    var matchingAvailabilities = [];
    for(let i=1;i<calendar.length;i++){
      var start = calendar[i-1][1];
      var end = calendar[i][0];
      var availablilityDuration = end-start;
      if(availablilityDuration >= meetingDuration){
        matchingAvailabilities.push([start,end]);
      }
    }
    return matchingAvailabilities.map(meeting => meeting.map(minutesToTime));
  }
  
  function minutesToTime(minutes){
    var hours = Math.floor(minutes/60);
    var minutes = minutes % 60;
    var hoursString = hours.toString();
    var minutesString = minutes < 10 ? "0" + minutes.toString() : minutes.toString();
    return hoursString + ":" + minutesString;
  }
  
  function mergeCalenders(calendar1,calendar2){
    var merged = [];
    var i =0;
    var j = 0;
    while(i < calendar1.length && j < calendar2.length){
      var meeting1 = calendar1[i];
      var meeting2 = calendar2[j];
      if(meeting1[0] < meeting2[0]){
        merged.push(meeting1);
        i++;
      } else {
        merged.push(meeting2);
        j++;
      }
    }
    //In case we have only added the values of one calendar values.
    while(i < calendar1.length){
      merged.push(calendar1[i++]);
    }
    while(j < calendar2.length){
      merged.push(calendar2[j++]);
    }
    return merged;
  }
  
  function flattenCalender(calendar){
    var flattened = [calendar[0].slice()];
    //Already put the first meeting the calendar.
    for(var i=1;i<calendar.length;i++){
      var currentMeeting = calendar[i];
      previousMeeting = flattened[flattened.length - 1];
      var [currentStart,currentEnd] = currentMeeting;
      var [previousStart,previousEnd] = previousMeeting;
      if(previousEnd >= currentStart){
        var newPreviousMeeting = [previousStart, Math.max(previousEnd,currentEnd)];
        flattened[flattened.length - 1] = newPreviousMeeting;
      } else {
        flattened.push(currentMeeting.slice());
      }
    }
    return flattened;
  }
  
  function updateCalendar(calendar,dailyBounds){
    var updatedCalendar = [['0:00',dailyBounds[0]],...calendar,[dailyBounds[1],'23:59']];
    return updatedCalendar.map(meeting => meeting.map(timeToMinutes));
  }
  
  function timeToMinutes(time){
    var [hours,minutes] = time.split(":").map(str =>parseInt(str));
    return hours * 60 + minutes;
  }
  
    const calendar1 = [
      ['9:00', '10:30'],
      ['12:00', '13:00'],
      ['16:00', '18:00'],
    ];
    const dailyBounds1 = ['9:00', '20:00'];
    const calendar2 = [
      ['10:00', '11:30'],
      ['12:30', '14:30'],
      ['14:30', '15:00'],
      ['16:00', '17:00'],
    ];
    const dailyBounds2 = ['10:00', '18:30'];
    const meetingDuration = 30;
  
    console.log(calendarMatching(calendar1,dailyBounds1,calendar2,dailyBounds2,meetingDuration))