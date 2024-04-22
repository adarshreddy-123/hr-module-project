<!-- <template>
  <div>
    <select
      v-model="selectedMonth"
      @change="updateCalendar"
      class="border-1 me-3 month-input p-1 rounded-2"
      v-if="!showTable"
    >
      <option v-for="(month, index) in months" :key="index" :value="index + 1">
        {{ month }}
      </option>
    </select>
    <table class="w-100" v-if="!showTable">
      <thead>
        <tr>
          <th>102 Employee</th>
          <th v-for="day in daysInMonth" :key="day.date" class="p-2">
            <div>{{ day.date }}</div>
            <div class="month-days">{{ day.day }}</div>
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>
  
  <script>
// import Datepicker from "vuejs-datepicker";

export default {
  components: {
    // Datepicker,
  },
  data() {
    return {
      // selectedDate: null,
      selectedDate: new Date(),
      selectedMonth: new Date().getMonth() + 1,
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  computed: {
    daysInMonth() {
      const daysInMonth = [];
      const date = new Date(
        new Date().getFullYear(),
        this.selectedMonth - 1,
        1
      );

      while (date.getMonth() === this.selectedMonth - 1) {
        daysInMonth.push({
          date: date.getDate(),
          day: this.getDayName(date.getDay()),
        });
        date.setDate(date.getDate() + 1);
      }

      return daysInMonth;
    },
  },
  methods: {
    updateCalendar() {
      const selectedYear = new Date().getFullYear();
      const daysInMonth = new Date(
        selectedYear,
        this.selectedMonth,
        0
      ).getDate();

      if (this.selectedDate && this.selectedDate.getDate() > daysInMonth) {
        this.selectedDate = null;
      }
    },
    getDayName(dayIndex) {
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return days[dayIndex];
    },
}
}
</script>
  
  <style>
/* Add your custom styles here */
</style> -->

<!-- <template>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Employee Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(employee, index) in uniqueEmployeeNames" :key="index" class="text-nowrap">
        <td>{{ index + 1 }}</td>
        <td>{{ employee }}</td>
        <td v-for="details in message" :key="details">
                  <div v-if="details.status == 'Present'" class="present">P</div>
                  <div v-if="details.status == 'Absent'" class="Absent">A</div>
       </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      message: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const response = await fetch(
        "http://192.168.1.194:8000/api/method/life_slimming.events.attendance_details"
      );
      let res = await response.json();
      this.message = res.message;
      console.log(this.message);
    },
  },
  computed: {
    uniqueEmployeeNames() {
      const uniqueNamesSet = new Set();
      
      return this.message.reduce((result, employee) => {
        const name = employee.employee_name;
        
        if (!uniqueNamesSet.has(name)) {
          uniqueNamesSet.add(name);
          result.push(name);
        }
        
        return result;
      }, []);
    },
  },
};
</script> -->


<template>
  <table>
    <thead>
      <tr>
        <th>S No.</th>
        <th>Employee Name</th>
        <th v-for="date in uniqueDates" :key="date">{{ date }}</th>
        <th v-for="day in daysInMonth" :key="day.date" class="p-2">
          <div>{{ day.date }}</div>
          <div class="month-days">{{ day.day }}</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(employee, index) in uniqueEmployeeNames" :key="index" class="text-nowrap">
        <td>{{ index + 1 }}</td>
        <td>{{ employee }}</td>
        <td v-for="date in uniqueDates" :key="date">
          <div v-if="AttendanceStatus(employee, date) === 'Present'" class="present">P</div>
          <div v-else-if="AttendanceStatus(employee, date) === 'Absent'" class="absent">A</div>
          <div v-if="AttendanceStatus(employee, date) === 'On Leave'" class="On-Leave">L</div>
          <div v-if="AttendanceStatus(employee, date) === 'Half Day'" class="Half-Day"><i class="bi bi-circle-half fs-6 text-warning "></i></div>
          <div v-if="AttendanceStatus(employee, date) === 'Work From Home'" class="WFH">W</div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      message: [],
      selectedDate: new Date(),
      selectedMonth: new Date().getMonth() + 1,
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const response = await fetch(
        "http://192.168.1.194:8000/api/method/life_slimming.events.attendance_details"
      );
      let res = await response.json();
      this.message = res.message;
      console.log(this.message);
    },
    AttendanceStatus(employeeName, date) {
      const attendanceEntry = this.message.find(
        (entry) => entry.employee_name === employeeName && entry.date === date
      );
      return attendanceEntry ? attendanceEntry.status : "Not Available";
    },
    updateCalendar() {
      const selectedYear = new Date().getFullYear();
      const daysInMonth = new Date(
        selectedYear,
        this.selectedMonth,
        0
      ).getDate();

      if (this.selectedDate && this.selectedDate.getDate() > daysInMonth) {
        this.selectedDate = null;
      }
    },
    getDayName(dayIndex) {
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return days[dayIndex];
    },
  },
  computed: {
    daysInMonth() {
      const daysInMonth = [];
      const date = new Date(
        new Date().getFullYear(),
        this.selectedMonth - 1,
        1
      );
      while (date.getMonth() === this.selectedMonth - 1) {
        daysInMonth.push({
          date: date.getDate(),
          day: this.getDayName(date.getDay()),
        });
        date.setDate(date.getDate() + 1);
      }
      return daysInMonth;
    },

    uniqueEmployeeNames() {
      const uniqueNamesSet = new Set();
      return this.message.reduce((result, employee) => {
        const name = employee.employee_name;
        if (!uniqueNamesSet.has(name)) {
          uniqueNamesSet.add(name);
          result.push(name);
        }
        return result;
      }, []);
    },

    uniqueDates() {
      const DatesSet = new Set();
      this.message.forEach((entry) => {
        DatesSet.add(entry.date);
      });
      return Array.from(DatesSet);
    },
  },
};
</script>

<style>
.present {
  color: green;
}

.absent {
  color: red;
}

table,
td,
th {
  text-align: center;
}
</style>