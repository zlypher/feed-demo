const formatter = Intl.DateTimeFormat("de-DE", {
  dateStyle: "short",
  timeStyle: "short",
});

export const formatDatetime = (date: Date) => {
  return formatter.format(date);
};
