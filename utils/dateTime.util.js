const millisInDay = 86400000;

class DateTimeUtil {
    today() {
        return new Date();
    }

    setYear(date) {
        let currentDate =  new Date();
        currentDate.setFullYear(date.getFullYear());
        return currentDate;
    }

    daysDifference(dateLeft, dateRight) {
        return Math.floor((dateLeft.getTime() - dateRight.getTime()) / millisInDay);
    }

    dateDecreasedByNDays(days) {
        return new Date(Date.now() - days * millisInDay);
    }
}

module.exports = new DateTimeUtil();