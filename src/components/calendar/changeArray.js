export function changeBookingArray(bookingsFromAPI) {
  if (bookingsFromAPI) {
    let newBookingsArray = [];
    for (let i = 0; i < bookingsFromAPI.length; i++) {
      let bookingDates = {
        startDate: "",
        endDate: "",
      };
      for (const [key, value] of Object.entries(bookingsFromAPI[i])) {
        if (key === "dateFrom") {
          let date = new Date(value);
          let day = date.getUTCDate();
          let month = date.getUTCMonth() + 1;
          let year = parseFloat(String(date.getUTCFullYear()).slice(-2));
          bookingDates.startDate = year;
        }
        if (key === "dateTo") {
          let date = new Date(value);
          let day = date.getUTCDate();
          let month = date.getUTCMonth() + 1;
          let year = String(date.getUTCFullYear()).slice(-2);
          bookingDates.endDate = month;
        }
        if (
          bookingDates.startDate.length === 0 &&
          bookingDates.endDate.length === 0
        ) {
          newBookingsArray.push(bookingDates);
        }
      }
    }
    console.log(newBookingsArray);
  }
}
