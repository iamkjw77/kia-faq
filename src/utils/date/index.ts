export function formatDateRange(startDate: number, endDate: number): string {
  const format = (timestamp: number) => {
    const date = new Date(timestamp);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}.${mm}.${dd}`;
  };

  const formattedStart = format(startDate);
  const formattedEnd = endDate === 0 ? '현재' : format(endDate);

  return `${formattedStart} ~ ${formattedEnd}`;
}
