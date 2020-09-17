import { getDaysInMonth, isSameDay } from 'date-fns';
import { parseEventDate } from './parseDate';

const buildDaysWithEvents = (
    startDate: Date,
    events: EventInfo[]
): ModalData[] => {
    const days = getDaysInMonth(startDate);

    return Array(days)
        .fill(null)
        .map((d, idx) => {
            const date = new Date(
                startDate.getFullYear(),
                startDate.getMonth(),
                idx + 1
            );

            return {
                date,
                events: events.filter(event =>
                    isSameDay(parseEventDate(event.date), date)
                ),
            };
        });
};

export default buildDaysWithEvents;
