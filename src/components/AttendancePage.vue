<template>
  <NavBar />
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <SideBar />
      </div>
      <div class="col-10">
        <!----- search bar------->
        <div class="d-flex main-div1 justify-content-between align-item-center">
          <div class="d-flex gap-4 align-item-center mt-2">
            <div class="d-flex">
              <i class="bi bi-caret-left-square me-2 mt-1"></i>
              <i class="bi bi-caret-right-square mt-1"></i>
            </div>
            <div>
              <h6 class="mt-2 text-nowrap">Attenadance</h6>
            </div>
            <div class="input-box d-flex">
          <input
            class="input-group-text mt-1"
            type="search"
            placeholder="Search for information"
            @input="InputSearch"/>
        <span class="span"><i class="bi bi-search"></i></span>
      </div>
          </div>
          <div class="d-flex mt-2">
            <!-- Button trigger modal -->
            <button type="button" class="btn Attendance-btn text-nowrap me-3" data-bs-toggle="modal"
              data-bs-target="#exampleModal">
              <i class="bi bi-plus"></i>Add Attendance
            </button>
            <select class="me-3 p-1 month-input rounded-2" v-if="!showTable">
              <option>Web Designer</option>
              <option>Web Designer</option>
            </select>
            <div>
              <button class="border-0 me-2 side-btns rounded-2" v-if="showTable">
                Import
              </button>
              <button class="border-0 me-2 side-btns rounded-2" v-if="showTable">
                Filter
              </button>
              <button class="border-0 me-2 side-btns rounded-2" v-if="showTable">
                Export
              </button>
            </div>
            <select v-model="selectedMonth" @change="updateCalendar" class="border-1 me-3 month-input p-1 rounded-2"
              v-if="!showTable">
              <option v-for="(month, index) in months" :key="index" :value="index + 1">
                {{ month }}
              </option>
            </select>

            <!-- <ul class="nav nav-pills mb-3 btn-div" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link cal-btn" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
                  type="button" role="tab" aria-controls="pills-home" aria-selected="true" @click="table('list')">
                  <i class="bi bi-calendar-event btn-icon"></i>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link active cal-btn" id="pills-profile-tab" data-bs-toggle="pill"
                  data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                  aria-selected="false" @click="table('date')">
                  <i class="bi bi-list-ul btn-icon me-2"></i>
                </button>
              </li>
            </ul> -->
            <ul class="nav ul-btn nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
                  type="button" role="tab" aria-controls="pills-home" aria-selected="true" @click="table('list')">
                  <i class="bi bi-calendar-event"></i>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
                  type="button" role="tab" aria-controls="pills-profile" aria-selected="false" @click="table('date')">
                  <i class="bi bi-list-ul"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div id="carouselExampleControls" class="carousel slide carousel-div" data-bs-ride="carousel"
          data-bs-touch="false" data-bs-interval="false">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row mt-3 mb-3">
                <div class="col-2">
                  <div class="card">
                    <div class="d-flex card-div">
                      <div class="ms-4">
                        <h5>400</h5>
                        <label>Total Employees</label>
                      </div>
                      <div>
                        <i class="bi me-lg-4 bi-people-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-2">
                  <div class="card">
                    <div class="d-flex card-div">
                      <div class="ms-4">
                        <h5>120</h5>
                        <label>In time</label>
                      </div>
                      <div>
                        <i class="bi me-lg-4 bi-box-arrow-in-left"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-2">
                  <div class="card">
                    <div class="d-flex card-div">
                      <div class="ms-4">
                        <h5>20</h5>
                        <label>Late Entry</label>
                      </div>
                      <div>
                        <i class="bi me-lg-4 bi-left bi-box-arrow-in-left"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-2">
                  <div class="card">
                    <div class="d-flex card-div">
                      <div class="ms-4">
                        <h5>190</h5>
                        <label>Early Exit</label>
                      </div>
                      <div>
                        <i class="bi me-lg-4 bi-box-arrow-in-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-2">
                  <div class="card">
                    <div class="d-flex card-div">
                      <div class="ms-4">
                        <h5>30</h5>
                        <label>On Leave</label>
                      </div>
                      <div>
                        <i class="bi me-lg-4 bi-person-badge-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-2">
                  <div class="card">
                    <div class="d-flex card-div">
                      <div class="ms-4">
                        <h5>300</h5>
                        <label>Present</label>
                      </div>
                      <div>
                        <i class="bi me-lg-4 bi-people-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row mt-3 mb-3">
                <div class="col-2">
                  <div class="card">
                    <div class="d-flex card-div">
                      <div class="ms-4">
                        <h5>420</h5>
                        <label>On Remote</label>
                      </div>
                      <div>
                        <i class="bi me-lg-4 bi-people-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-2">
                  <div class="card">
                    <div class="d-flex card-div">
                      <div class="ms-4">
                        <h5>420</h5>
                        <label>Absent</label>
                      </div>
                      <div>
                        <i class="bi me-lg-4 bi-box-arrow-in-left"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-2">
                  <div class="card">
                    <div class="d-flex card-div">
                      <div class="ms-4">
                        <h5>420</h5>
                        <label>Half Day</label>
                      </div>
                      <div>
                        <i class="bi me-lg-4 bi-left bi-box-arrow-in-left"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev" v-if="!show" @click="click('left')">
            <span class="carousel-control-prev-icon prev-icon" aria-hidden="true"></span>
            <!-- <span><i class="bi bi-caret-left-fill prev-icon"></i></span> -->
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next" v-if="show" @click="click('right')">
            <span class="carousel-control-next-icon next-icon" aria-hidden="true"></span>
            <!-- <span><i class="bi bi-caret-right-fill next-icon"></i></span> -->
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <!-- Attandance  -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Attenadance</h5>
                <button type="Reset" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="submitForm">
                  <label for="EmployeeName">Employee Id</label><br />
                  <input type="text" id="EmployeeName" class="form-control p-2 w-100" placeholder=" Enter Employee Id"
                    v-model="FormData.employee" @input="ValidateEmployee" :class="{
                      'is-invalid': error.employee,
                    }" />
                  <div class="invalid-feedback" v-if="!employee">
                    {{ error.employee }}
                  </div>
                  <br />
                  <label for="company">company </label><br />
                  <input type="text" id="company" class="form-control p-2 w-100" placeholder=" Enter company "
                    v-model="FormData.company" @input="Validatecompany" :class="{
                      'is-invalid': error.company,
                    }" />
                  <div class="invalid-feedback" v-if="!company">
                    {{ error.company }}
                  </div>
                  <br />

                  <label for="EmployeeName">Employee Name</label><br />
                  <input type="text" id="EmployeeName" class="form-control p-2 w-100" placeholder=" Enter Employee Name"
                    v-model="FormData.employee_name" @input="ValidatEemployeeName" :class="{
                      'is-invalid': error.employee_name,
                    }" />
                  <div class="invalid-feedback" v-if="!employee_name">
                    {{ error.employee_name }}
                  </div>
                  <br />
                  <label for="Attendance">Attendance Date</label><br />
                  <input type="date" id="Attendance" class="form-control p-2 w-100" v-model="FormData.attendance_date" />
                  <br />
                  <label for="time">Updated time</label><br />
                  <input type="text" id="time" class="form-control p-2 w-100" placeholder="Enter Updated time"
                    v-model="FormData.working_hours" @input="Validatehours" :class="{
                      'is-invalid': error.working_hours,
                    }" />
                  <div class="invalid-feedback">
                    {{ error.working_hours }}
                  </div>
                  <br />
                  <label for="Department">Department</label><br />
                  <input type="text" id="Department" class="form-control p-2 w-100" placeholder="Enter Department"
                    v-model="FormData.department" @input="Validatedepartment" :class="{
                      'is-invalid': error.department,
                    }" />
                  <div class="invalid-feedback">
                    {{ error.department }}
                  </div>
                  <br />
                  <label for="Category">Category</label><br />
                  <select class="p-2 w-100 text-center" v-model="FormData.leave_type">
                    <option>----Select leave_type----</option>
                    <option value="Casual Leave">Casual Leave</option>
                    <option value="Compensatory Off">Compensatory Off</option>
                    <option value="Leave Without Pay">Leave Without Pay</option>
                    <option value="Privilege Leave">Privilege Leave</option>
                    <option value="Sick Leave">Sick Leave</option>
                  </select>
                  <br />
                  <br />
                  <label for="status">Status</label><br />
                  <select class="p-2 w-100 text-center" v-model="FormData.status">
                    <option selected>----Select status----</option>
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                    <option value="Half Day">Half Day</option>
                    <option value="On Leave">On Leave</option>
                    <option value="Work From Home">Work From Home</option>
                  </select>
                  <br />
                  <br />
                  <label>Shift</label><br />
                  <select class="w-100 p-2 mb-2 text-center" v-model="FormData.shift">
                    <option selected>----Select Shift----</option>
                    <option value="A Shift">A Shift</option>
                    <option value="B Shift">B Shift</option>
                  </select>
                  <br />

                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                      Close
                    </button>
                    <button type="Submit" class="btn btn-primary">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <table v-if="showTable" class="w-100 p-5">
          <thead class="shadow-sm">
            <tr>
              <th>Sr no</th>
              <th>Employee Name</th>
              <th>Date</th>
              <th>Updated time</th>
              <th>Department</th>
              <th>Status</th>
              <th>Category</th>
              <th>Shift</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in message" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.employee_name }}</td>
              <td>{{ item.attendance_date }}</td>
              <td>
                <div v-if="item.working_hours">{{ item.working_hours }}</div>
                <div v-else>--</div>
              </td>
              <td>
                <div v-if="item.department">{{ item.department }}</div>
                <div v-else>--</div>
              </td>
              <td>
                <div v-if="item.status == 'Present'" style="color: rgb(45, 187, 45)">
                  {{ item.status }}
                </div>
                <div v-if="item.status == 'On Leave'" style="color: orange">
                  {{ item.status }}
                </div>
                <div v-if="item.status == 'Absent'" style="color: red">
                  {{ item.status }}
                </div>
                <div v-if="item.status == 'Half Day'" style="color: #f54d2f">
                  {{ item.status }}
                </div>
                <div v-if="item.status == 'Work From Home'" style="color: rgba(0, 0, 0, 0.568)">
                  {{ item.status }}
                </div>
              </td>
              <td>
                <div v-if="item.leave_type">{{ item.leave_type }}</div>
                <div v-else>--</div>
              </td>
              <td>
                <div v-if="item.shift">{{ item.shift }}</div>
                <div v-else>--</div>
              </td>
              <td>
                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                  <i class="bi bi-pencil-fill me-3 fs-6"></i>
                </button>
                <i class="bi bi-info-circle-fill fs-6"></i>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- Update Attendance Modal -->
        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Update Attendance
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="UpdateForm">
                  <label for="EmployeeName">Employee Id</label><br />
                  <input type="text" id="EmployeeName" class="form-control p-2 w-100" placeholder=" Enter Employee Id"
                    v-model="updateData.employee" @input="ValidateEmployee1" :class="{
                      'is-invalid': error.employee,
                    }" />
                  <div class="invalid-feedback" v-if="!employee">
                    {{ error.employee }}
                  </div>
                  <br />
                  <label for="company">company </label><br />
                  <input type="text" id="company" class="form-control p-2 w-100" placeholder=" Enter company "
                    v-model="updateData.company" @input="Validatecompany1" :class="{
                      'is-invalid': error.company,
                    }" />
                  <div class="invalid-feedback" v-if="!company">
                    {{ error.company }}
                  </div>
                  <br />

                  <label for="EmployeeName">Employee Name</label><br />
                  <input type="text" id="EmployeeName" class="form-control p-2 w-100" placeholder=" Enter Employee Name"
                    v-model="updateData.employee_name" @input="ValidatEemployeeName1" :class="{
                      'is-invalid': error.employee_name,
                    }" />
                  <div class="invalid-feedback" v-if="!employee_name">
                    {{ error.employee_name }}
                  </div>
                  <br />
                  <label for="Attendance">Attendance Date</label><br />
                  <input type="date" id="Attendance" class="form-control p-2 w-100"
                    v-model="updateData.attendance_date" />
                  <br />
                  <label for="time">Updated time</label><br />
                  <input type="text" id="time" class="form-control p-2 w-100" placeholder="Enter Updated time"
                    v-model="updateData.working_hours" @input="Validatehours1" :class="{
                      'is-invalid': error.working_hours,
                    }" />
                  <div class="invalid-feedback">
                    {{ error.working_hours }}
                  </div>
                  <br />
                  <label for="Department">Department</label><br />
                  <input type="text" id="Department" class="form-control p-2 w-100" placeholder="Enter Department"
                    v-model="updateData.department" @input="Validatedepartment1" :class="{
                      'is-invalid': error.department,
                    }" />
                  <div class="invalid-feedback">
                    {{ error.department }}
                  </div>
                  <br />
                  <label for="Category">Category</label><br />
                  <input type="text" id="Category" class="form-control p-2 w-100" placeholder="Enter Category"
                    v-model="updateData.Category" @input="ValidateCategory1" :class="{
                      'is-invalid': error.Category,
                    }" />
                  <div class="invalid-feedback">
                    {{ error.department }}
                  </div>
                  <br />
                  <label for="status">Status</label><br />
                  <select class="p-2 w-100 text-center" v-model="updateData.status">
                    <option>----Select status----</option>
                    <option value="Absent">Absent</option>
                    <option value="Present">Present</option>
                  </select>
                  <br />
                  <br />
                  <label>Shift</label><br />
                  <select class="w-100 p-2 mb-2 text-center" v-model="updateData.shift">
                    <option selected>----Select Shift----</option>
                    <option value="A Shift">A Shift</option>
                    <option value="B Shift">B Shift</option>
                  </select>
                  <br />

                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                      Close
                    </button>
                    <button type="Submit" class="btn btn-primary">
                      Update Data
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <!-- ====CALENDAR ===== -->
        <div>
          <datepicker v-model="selectedDate" format="yyyy-MM-dd"></datepicker>
          <table class="w-100" v-if="!showTable">
            <thead>
              <tr>
                <th>S.No</th>
                <th>102 Employee</th>
                <th v-for="day in daysInMonth" :key="day.date" class="p-2">
                  <div>{{ day.date }}</div>
                  <div class="month-days">{{ day.day }}</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(employee, index) in EmployeeNames" :key="index" class="text-nowrap">
                <td>{{ index + 1 }}</td>
                <td>{{ employee }}</td>
                <td v-for="date in uniqueDates" :key="date">
                  <div v-if="AttendanceStatus(employee, date) === 'Present'" class="present">P</div>
                  <div v-if="AttendanceStatus(employee, date) === 'Absent'" class="Absent">A</div>
                  <div v-if="AttendanceStatus(employee, date) === 'On Leave'" class="On-Leave">L</div>
                  <div v-if="AttendanceStatus(employee, date) === 'Half Day'" class="Half-Day">
                    <i class="bi bi-circle-half fs-6 text-warning"></i></div>
                  <div v-if="AttendanceStatus(employee, date) === 'Work From Home'" class="WFH">W</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import NavBar from "./NavBar.vue";
import SideBar from "./SideBar.vue";
export default {
  components: {
    NavBar,
    SideBar,
  },
  data() {
    return {
      show: true,
      showTable: true,
      error: [],
      FormData: {},
      updateData: {},
      item: [],
      message: [],
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

    submitForm() {
      console.log(this.FormData);
      axios
        .post(
          "http://192.168.1.194:8000/api/resource/Attendance",
          this.FormData
        )
        .then((res) => {
          this.fetchData();
          console.log(res);
        })
        .catch((error) => {
          console.log("Error while sending data", error);
        });
    },
    UpdateForm() {
      console.log(this.updateData);
      axios
        .put(
          "http://192.168.1.194:8000/api/resource/Attendance",
          this.updateData
        )
        .then((res) => {
          this.fetchData();
          console.log(res);
        })
        .catch((error) => {
          console.log("Error while sending data", error);
        });
    },

    click(icon) {
      if (icon == "right") {
        this.show = false;
      }
      if (icon == "left") {
        this.show = true;
      }
    },
  // const act=this.message.filter((employee) => {
  //     if (employee.name == name) {
  //       this.currentEmployee = employee;
  //       console.log(this.currentEmployee);
  //     }
  //   }),

    table(tableData) {
      if (tableData == "date") {
        this.showTable = true;
      }
      if (tableData == "list") {
        this.showTable = false;
      }
    },
    ValidatEemployeeName() {
      if (!this.FormData.employee_name) {
        this.error.employee_name = "Required";
      } else {
        delete this.error.employee_name;
      }
    },
    Validatehours() {
      if (!this.FormData.working_hours) {
        this.error.working_hours = "Required";
      } else {
        delete this.error.working_hours;
      }
    },
    Validatedepartment() {
      if (!this.FormData.department) {
        this.error.department = "Required";
      } else {
        delete this.error.department;
      }
    },
    ValidateCategory() {
      if (!this.FormData.Category) {
        this.error.Category = "Required";
      } else {
        delete this.error.Category;
      }
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
    AttendanceStatus(employeeName, date) {
      const attendanceEntry = this.message.find(
        (entry) => entry.employee_name === employeeName && entry.date === date
      );
      return attendanceEntry ? attendanceEntry.status : "Not Available";
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
    EmployeeNames() {
      const NamesSet = new Set();

      return this.message.reduce((result, employee) => {
        const name = employee.employee_name;

        if (!NamesSet.has(name)) {
          NamesSet.add(name);
          result.push(name);
        }

        return result;
      }, []);
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
  InputSearch(){
    return this.message.filter(item => {
        return item.FormData.toLowerCase().includes(this.InputSearch.toLowerCase())
      })
  }
};
</script>

<style scoped>
.input-box{
  position: absolute;
  border-radius: 25px;
  position: relative;
}
.input-group-text {
  background-color: #ebedf2;
  height: 33px;
  text-align: center;
  position: absolute;
  display: block; 
  border-radius: 17px;
  font-size: 17px;
  /* padding: 10px; */
  border: none;
}
.input-group-text:focus{
  outline: none;
}
.span{
  position: absolute;
  top: 9px;
  left: 10px;
  border-radius: 50%;
  background: none;
}

.month-input {
  background-color: #ebedf2;
  border: 1px solid #9aaeff;
  color: rgb(87, 85, 85);
  height: 30px;
  width: 8vw;
}

.month-input1 {
  background-color: #ebedf2;
  border: 1px solid #9aaeff;
  width: 29px;
  background-color: #365eff;
  color: white !important;
}

.main-div1 {
  position: sticky;
  top: 57px;
  height: 47px;
  z-index: 100;
  background-color: white;
}

.side-btns {
  background-color: #ebedf2;
  padding: 4px 20px;
}

.btn-div {
  background-color: #ebedf2;
  border-radius: 7px;
}

table,
tr,
td,
th {
  border-bottom: 1px solid rgba(19, 18, 18, 0.103);
  padding: 6px;
  font-size: 14px;
  text-align: center;
}

tr:hover {
  box-shadow: 0px 1px 14px -7px black inset;
}

th {
  padding: 10px;
}

thead {
  background-color: #dee0ff;
  position: sticky;
  z-index: 100;
  top: 213px;
  /* box-shadow: 0px 1px 14px -7px black inset !important; */
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

.card-div {
  /* width: 10vw; */
  height: 75px;
  align-items: center;
  justify-content: space-between;
}

.bi-people-fill {
  color: blue;
  font-size: 22px;
}

.bi-box-arrow-in-left {
  font-size: 24px;
  color: rgb(16, 233, 16);
}

.bi-left {
  font-size: 24px;
  color: red;
}

.bi-box-arrow-in-right {
  font-size: 24px;
  color: orange;
}

.bi-person-badge-fill {
  font-size: 24px;
  color: #df4848;
}

.carousel-item {
  width: 95%;
  position: relative;
  left: 40px;
}

.prev-icon {
  background-color: #babbbe;
  font-size: 30px;
  color: blue;
  position: relative;
  right: 97px;
  height: 85px;
}

.next-icon {
  color: blue;
  font-size: 30px;
  background-color: #babbbe;
  position: relative;
  left: 100px;
  height: 85px;
}

.carousel-div {
  position: sticky;
  top: 104px;
  z-index: 100;
  background-color: white;
}

.bi-pencil-fill:hover {
  color: rgb(76, 103, 239);
}

.bi-pencil-fill,
.bi-info-circle-fill {
  color: #838383;
}

.bi-info-circle-fill:hover {
  color: rgb(76, 103, 239);
}

.Attendance-btn {
  background-color: #ebedf2;
  padding: 4px 20px;
  height: 32px;
  width: 160px;
}

.Attendance-btn:hover {
  background-color: #ebedf2;
  padding: 4px 20px;
  border: 1px solid #9aaeff;
}

.present {
  background-color: #e9fde9;
  color: green;
  padding: 11px;
  border-radius: 5px;
}

.Absent {
  background-color: #fcdede;
  color: red;
  padding: 11px;
  border-radius: 5px;
}

.On-Leave {
  padding: 11px;
  font-weight: bold;
  border-radius: 5px;
  color: #e9795a;
  background-color: #fde2de;
}

.Half-Day {
  padding: 11px;
  border-radius: 5px;
  background-color: #fde2c8;
}

.WFH {
  padding: 11px;
  font-weight: bold;
  border-radius: 5px;
  color: #d6c001;
  background-color: #fbf6c7;
}

.month-days {
  color: #4948487c;
}

.cal-btn {
  width: 35px;
  height: 35px;
  align-items: center;
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
  color: var(--bs-nav-pills-link-active-color);
  background-color: var(--bs-nav-pills-link-active-bg);
  padding: 4px;
  width: 30px;
  align-content: center;
}

.ul-btn {
  height: 30px;
  width: 78px;
  border-radius: 7px;
  background-color: rgb(235, 237, 242);
}
</style>