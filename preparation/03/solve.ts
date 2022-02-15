function timeConversion(s: string) {
    const len = s.length
    const amPm = s.substring(len-2)
    const parts = s.substring(0, len-2).split(":")
    let hour = +parts[0]
    if (hour === 12) {
        hour = amPm === 'AM' ? 0 : 12
    } else {
        hour += (amPm === 'PM' ? 12 : 0)
    }  
    return padStart(hour, 2) + ":" + parts[1] + ":" + parts[2]
}

function padStart(value: number, zeros: number) {
    return String(value).padStart(zeros, '0')
}


console.log("07:05:45PM", timeConversion("07:05:45PM"))
console.log("12:01:00AM", timeConversion("12:01:00AM"))
console.log("12:01:00PM", timeConversion("12:01:00PM"))
console.log("01:02:03AM", timeConversion("01:02:03AM"));
console.log("01:02:03PM", timeConversion("01:02:03PM"));