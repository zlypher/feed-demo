const formatter = Intl.DateTimeFormat("de-DE", {
  dateStyle: "long",
  timeStyle: "short",
});

export const formatDatetime = (date: Date) => {
  return formatter.format(date);
};
