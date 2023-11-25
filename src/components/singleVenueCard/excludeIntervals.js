export function excludeIntervals(dateObject) {
  if (dateObject.length > 0) {
    let bookedDates = [];
    dateObject.forEach((booking) => {
      let bookingDates = {
        start: "",
        end: "",
      };
      for (const [key, value] of Object.entries(booking)) {
        if (key === "dateFrom") {
          bookingDates.start = new Date(value);
        }
        if (key === "dateTo") {
          bookingDates.end = new Date(value);
        }
      }
      bookedDates.push(bookingDates);
    });
    return bookedDates;
  }
}
