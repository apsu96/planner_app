import { Container } from "./UIKit.styled";
import CalendarEl from "react-calendar";
import "./Calendar.css";

function Calendar({
  date,
  setDate,
}: {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}) {
  return (
    <Container>
      <CalendarEl value={date} onChange={setDate as any} />
    </Container>
  );
}

export default Calendar;
