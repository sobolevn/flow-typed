import joda from 'js-joda';
import type { Instant, DayOfWeek, Duration, LocalTime, LocalDate, LocalDateTime} from 'js-joda';

const instantNow: Instant = joda.Instant.now();
const dayOfWeek: DayOfWeek = joda.DayOfWeek.of(1);
const oneSecond: Duration = joda.Duration.ofSeconds(1);
const timeNow: LocalTime = joda.LocalTime.now();
const dateNow: LocalDate = joda.LocalDate.now();
const dateTimeNow: LocalDateTime = joda.LocalDateTime.now();

// $ExpectError
const notADate: Date = joda.LocalDateTime.now();