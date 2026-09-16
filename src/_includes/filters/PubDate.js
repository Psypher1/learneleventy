import { parseISO, format } from "date-fns";

export default function PubDate(date) {
  const dateString = parseISO(date);
  const formattedDate = format(dateString, "dd MMM, yyyy");
  return formattedDate;
}
