class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Не указан ID')
        }
        if (this.alarmCollection.some((item) => item.id === id)) {
            console.error('Такой ID уже есть');
            return
        }
        return this.alarmCollection.push({
            id: id,
            time: time,
            callback: callback,
        })
    }

    removeClock(id) {
        let searchAlarmById = this.alarmCollection.filter((item) => item.id === id);

        this.alarmCollection.splice(this.alarmCollection.indexOf(searchAlarmById));

        if (searchAlarmById === undefined) {
            return false
        } else {
            return true
        }
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0, -3);
    }

    start() {

        let checkClock = (alarm) => {
            if (this.getCurrentFormattedTime() === alarm.time) {
                callback()
            }
        }

        if (this.timerId === null) {
            setInterval(() => {
                for (alarm in this.alarmCollection){
                    checkClock(alarm)  
                }
                this.timerId = this.alarmCollection.time
                return this.timerId;
            }, 500) //Возможно убрать время?
            
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(element => console.log(`Будильник №${element.id} установлен на ${element.time}`));
    }

    clearAlarms() {
        stop();
        return this.alarmCollection = [];
    }
}