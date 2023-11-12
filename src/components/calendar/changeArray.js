export function changeBookingArray(bookingsFromAPI) {
  const reserved = bookingsFromAPI.map((reservation) => {
    const startDate = new Date(reservation.dateFrom);
    const endDate = new Date(reservation.dateTo);
    return { startDate, endDate };
  });
  console.log(reserved);
  return reserved;
}
