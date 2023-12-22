import { Component, Input } from '@angular/core';
import { type } from 'node:os';
import { VaccineOnCalendar, GetMomentToImplementVacuneDTO, CalendarResponse } from '../../../models/calendar-response.module';

type Edad = {
  id: number,
  edad: string,
  month: string;
}
const Edades: Edad[] = [
  {
    id: 1,
    edad: 'pre-natal',
    month: '-1'
  },
  {
    id: 2,
    edad: '0',
    month: '0'
  },
  {
    id: 3,
    edad: '2',
    month: '2'
  },
  {
    id: 4,
    edad: '4',
    month: '4'
  },
  {
    id: 5,
    edad: '6',
    month: '6'
  },
  {
    id: 6,
    edad: '11',
    month: '11'
  },
  {
    id: 7,
    edad: '12',
    month: '12'
  },
  {
    id: 8,
    edad: '15',
    month: '15'
  },
  {
    id: 9,
    edad: '3-4',
    month: '36-48'
  },
  {
    id: 10,
    edad: '5',
    month: '60'
  },
  {
    id: 11,
    edad: '6',
    month: '72'
  },
  {
    id: 12,
    edad: '12',
    month: '144'
  },
  {
    id: 13,
    edad: '14',
    month: '168'
  },
  {
    id: 14,
    edad: '15-18',
    month: '180-216'
  },
  {
    id: 15,
    edad: '19-64',
    month: '228-768'
  },
  {
    id: 16,
    edad: '65',
    month: '780'
  },
]
  ;
@Component({
  selector: 'app-calendary',
  templateUrl: './calendary.component.html',
  styleUrl: './calendary.component.css'
})
export class CalendaryComponent {
  @Input() calendar!: CalendarResponse;
  e = Edades;

  hasTheAge(ownCalendar: CalendarResponse, edad: Edad) {
    var boo: Boolean = false
    if (!edad.month.includes('-')) {
      console.log(ownCalendar.age);
      console.log(edad.month)
      const age = parseInt(edad.month);
      if (parseInt(ownCalendar.age) == age) {
        boo = true;
      }
    } else {
      const [min, max] = edad.month.split('-').map((e) => parseInt(e));
      if (min == null && max == 1) {
        boo = false;
      } else {
        if (min <= parseInt(ownCalendar.age) &&
          max >= parseInt(ownCalendar.age)) {
          boo = true;
        }
      }
    }
    console.log(boo)
    return boo;

  }

  isAdministred(vacuna: VaccineOnCalendar, edad: Edad) {
    var boo: Boolean = false
    vacuna.getMomentToImplementVacuneDTOS.forEach(moment => {
      if (!edad.month.includes('-')) {
        const age = parseInt(edad.month);
        if (age === moment.monthToImplement && moment.isImplemented == true) {
          boo = true;
        }
      } else {
        const [min, max] = edad.month.split('-').map((e) => parseInt(e));
        if (min == null && max == 1) {
          boo = false;
        } else {
          if (min <= moment.monthToImplement &&
            max >= moment.monthToImplement &&
            moment.isImplemented == true) {
            boo = true;
          }
        }
      }
    });
    return boo;

  }
  isNotAdministred(myCalendar: CalendarResponse, vacuna: VaccineOnCalendar, edad: Edad) {
    var boo: Boolean = false
    vacuna.getMomentToImplementVacuneDTOS.forEach(moment => {
      const age = parseInt(edad.month);
      if (!edad.month.includes('-')) {
        if (age === moment.monthToImplement && moment.isImplemented == false && parseInt(myCalendar.age) <= age) {
          boo = true;
        }
      } else {
        const [min, max] = edad.month.split('-').map((e) => parseInt(e));

        if (min == null && max == 1) {
          boo = false;
        } else {

          if (min <= moment.monthToImplement &&
            max >= moment.monthToImplement &&
            moment.isImplemented == false
            && parseInt(myCalendar.age) <= age) {
            console.log('minimo =' + min + 'maximo =' + max + ' moment =' + moment.monthToImplement);
            boo = true;
          }
        }
      }
    });
    return boo;
  }
  isPendingAdministred(myCalendar: CalendarResponse, vacuna: VaccineOnCalendar, edad: Edad) {
    var boo: Boolean = false
    vacuna.getMomentToImplementVacuneDTOS.forEach(moment => {
      const age = parseInt(edad.month);
      if (!edad.month.includes('-')) {
        if (age === moment.monthToImplement && moment.isImplemented == false && parseInt(myCalendar.age) > age) {
          boo = true;
        }
      } else {
        const [min, max] = edad.month.split('-').map((e) => parseInt(e));
        if (min == null && max == 1) {
          boo = false;
        } else {
          if (min <= moment.monthToImplement &&
            max >= moment.monthToImplement &&
            moment.isImplemented == false
            && parseInt(myCalendar.age) > age) {
            boo = true;
          }
        }
      }
    });
    return boo;
  }




  esEdadActual(edad: Edad): boolean {
    return this.calendar.age == edad.month;
  }
}









