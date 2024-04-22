<template>
  <NavBar />
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <SideBar />
      </div>
      <div class="col-10">
        <SearchBar />
        <table v-if="show" class="w-100 p-5">
          <thead class="shadow-sm">
            <tr>
              <th>Sr no</th>
              <th>Employee</th>
              <th>Department</th>
              <th>Job Type</th>
              <th>Shift Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in message" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.employee_name }}</td>
              <td><div v-if="item.department">{{ item.department }} </div><div v-else>---</div></td>
              <td><div v-if="item.designation">{{ item.designation }} </div><div v-else>---</div></td>
              <td><div v-if="item.default_shift">{{ item.default_shift }} </div><div v-else>---</div></td>
              <td >
                <div v-if="item.status == 'Active'" class="Active ">
                  {{ item.status }}
                </div>
                <div v-if="item.status == 'Inactive'" class="Inactive">
                  {{ item.status }}
                </div>
              </td>
              <td>
                <i class="bi bi-pencil-fill me-3 fs-6" @click="PersonDetails(item)"></i>
                <i class="bi bi-info-circle-fill fs-6"></i>
              </td>
            </tr>
          </tbody>
        </table>

        <div v-if="!show">
          <div class="card card-div">
            <div class="bg-clr d-flex justify-content-around">
              <div>
                <img class="card-img"
                  src="https://blog.hootsuite.com/wp-content/uploads/2022/07/Download-Instagram-Reels.png" />
              </div>

              <div class="d-flex">
                <div>
                  <i class="bi me-3 person-icon bi-person-fill"></i>
                </div>
                <div>
                  <h6>{{ details.employee_name }}</h6>
                  <p class="text-white">Name</p>
                </div>
              </div>
              <div class="d-flex">
                <div>
                  <i class="bi me-3 person-icon bi-envelope-fill"></i>
                </div>
                <div>
                  <h6>{{ details.personal_email }}</h6>
                  <p class="text-white">Email</p>
                </div>
              </div>
              <div class="d-flex">
                <div>
                  <i class="bi me-3 person-icon bi-telephone-fill"></i>
                </div>
                <div>
                  <h6>{{ details.emergency_phone_number }}</h6>
                  <p class="text-white">Mobile</p>
                </div>
              </div>
              <div class="d-flex">
                <div>
                  <i class="bi me-3 person-icon bi-file-person-fill"></i>
                </div>
                <div>
                  <h6>{{ details.designation }}</h6>
                  <p class="text-white">Designation</p>
                </div>
              </div>
              <div>
                <button class="border-0 text-white rounded-4 p-2 active-btn" v-if="details.status == 'Active'"
                  style="background-color: #65ff4d">
                  {{ details.status }}
                </button>
                <button class="border-0 text-white rounded-4 p-2 active-btn" v-else
                  style="font-weight: bold; background-color: rgb(192, 62, 62)">
                  {{ details.status }}
                </button>
              </div>
            </div>
          </div>
          <br />


        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home1" type="button" role="tab" aria-controls="pills-home" aria-selected="true">  Personal</button>
         </li>
          <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile1" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Attendance</button>
          </li>
          <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact1" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Job Details</button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
         <div class="tab-pane fade show active" id="pills-home1" role="tabpanel" aria-labelledby="pills-home-tab">
    <div class="container-fluid">
                <div class="row">
                  <div class="col-6">
                    <div class="col-12">
                      <div class="card shadow-sm">
                        <div class="d-flex justify-content-between mt-3 ms-3 me-3">
                          <div class="d-flex gap-2 align-items-center">
                            <h6>
                              <i class="bi bi-person-fill fs-4 me-2"></i>
                            </h6>
                            <h6>Primary Details</h6>
                          </div>
                          <div>
                            <!-- <i class="bi bi-pencil-fill"></i> -->

                            <!-- Button trigger modal -->
                            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModals">
                              <i class="bi bi-pencil-fill"></i>
                            </button>

                            <!-- Modal -->
                            <div class="modal fade" id="exampleModals" tabindex="-1" aria-labelledby="exampleModalLabel"
                              aria-hidden="true">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">
                                      Primary Details
                                    </h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                      aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                    <form @submit.prevent="submitForm">
                                      <label for="FullName">Full Name</label><br />
                                      <input type="text" id="FullName" class="form-control p-2 w-100"
                                        placeholder=" Enter Full Name" v-model="FormData.employee_name"
                                        @input="ValidatEemployeeName" :class="{
                                          'is-invalid': error.employee_name,
                                        }" />
                                      <div class="invalid-feedback" v-if="!employee_name">
                                        {{ error.employee_name }}
                                      </div>
                                      <br />
                                      <label for="mail">Mail</label><br />
                                      <input type="mail" id="mail" class="form-control p-2 w-100"
                                        placeholder="Enter Mail Id" v-model="FormData.personal_email"
                                        @input="ValidateMail" :class="{
                                          'is-invalid': error.personal_email,
                                        }" />
                                      <div class="invalid-feedback">
                                        {{ error.personal_email }}
                                      </div>
                                      <br />
                                      <label for="firstName">First Name</label><br />
                                      <input type="text" id="firstName" class="form-control p-2 w-100"
                                        placeholder="Enter First Name" v-model="FormData.first_name"
                                        @input="ValidateFname" :class="{
                                          'is-invalid': error.first_name,
                                        }" />
                                      <div class="invalid-feedback">
                                        {{ error.first_name }}
                                      </div>
                                      <br />
                                      <label>Last Name</label><br />
                                      <input type="text" class="form-control p-2 w-100" placeholder="Enter Last Name"
                                        v-model="FormData.last_name" @input="ValidateLname" :class="{
                                          'is-invalid': error.last_name,
                                        }" />
                                      <div class="invalid-feedback">
                                        {{ error.last_name }}
                                      </div>
                                      <br />
                                      <label for="DOB">Date Of Birth</label><br />
                                      <input type="date" id="DOB" class="form-control p-2 w-100"
                                        placeholder="Enter Date Of Birth" v-model="FormData.date_of_birth" />
                                      <br />
                                      <label>Blood Group</label><br />
                                      <select class="form-control w-100 p-2 mb-2 text-center"
                                        v-model="FormData.BloodGroup">
                                        <option selected>
                                          ----Select Blood Group----
                                        </option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                      </select>
                                      <br />

                                      <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                          Close
                                        </button>
                                        <button type="Submit" class="btn btn-primary">
                                          Update Details
                                        </button>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div class="ms-5 me-5">
                          <div class="d-flex justify-content-around text-nowrap">
                            <div>
                              <h6>{{ details.employee_name }}</h6>
                              <label>Full Name</label>
                            </div>
                            <div class="w-100 text-end">
                              <h6>{{ details.personal_email }}</h6>
                              <label>Email</label>
                            </div>
                          </div>
                          <br />
                          <div class="d-flex justify-content-between text-nowrap">
                            <div>
                              <h6>{{ details.first_name }}</h6>
                              <label>First Name</label>
                            </div>
                            <div class="w-100 text-end">
                              <h6>{{ details.last_name }}</h6>
                              <label>Last Name</label>
                            </div>
                          </div>
                          <br />
                          <div class="d-flex justify-content-between">
                            <div>
                              <h6>{{ details.salutation }}</h6>
                              <label>Salutation</label>
                            </div>
                            <div class="w-100 text-end">
                              <h6>{{ details.date_of_birth }}</h6>
                              <label>Date Of Birth</label>
                            </div>
                          </div>
                          <br />
                          <div class="d-flex text-nowrap">
                            <div>
                              <h6>{{ details.blood_group }}</h6>
                              <label>Blood Group</label>
                            </div>
                            <div class="w-100 text-end">
                              <h6>No</h6>
                              <label>Physically Handicapped</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="col-12">
                      <div class="card shadow-sm">
                        <div class="d-flex justify-content-between mt-3 ms-3 me-3">
                          <div class="d-flex gap-2 align-items-center">
                            <h6>
                              <i class="bi bi-person-fill fs-4 me-2"></i>
                            </h6>
                            <h6>Family Details</h6>
                          </div>
                          <div>
                            <i class="bi bi-pencil-fill"></i>
                          </div>
                        </div>
                        <hr />
                        <div class="ms-5 me-5">
                          <div class="d-flex justify-content-around text-nowrap">
                            <div>
                              <h6>Baley Hains</h6>
                              <label>Mother Name</label>
                            </div>
                            <div class="w-100 text-end">
                              <h6>Peter Hains</h6>
                              <label>Father Name</label>
                            </div>
                          </div>
                          <br />
                          <div class="d-flex justify-content-around text-nowrap">
                            <div>
                              <h6>Koley Hains</h6>
                              <label>Guardian</label>
                            </div>
                            <div class="w-100 text-end">
                              <h6>{{ details.marital_status }}</h6>
                              <label>Marital Status</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="col-12">
                      <div class="card shadow-sm">
                        <div class="d-flex justify-content-between mt-3 ms-3 me-3">
                          <div class="d-flex gap-2 align-items-center">
                            <h6>
                              <i class="bi bi-person-lines-fill fs-4 me-3"></i>
                            </h6>
                            <h6>Contact Details</h6>
                          </div>
                          <div>
                            <i class="bi bi-pencil-fill"></i>
                          </div>
                        </div>
                        <hr />
                        <div class="ms-5 me-5">
                          <div class="d-flex justify-content-around text-nowrap">
                            <div>
                              <h6>{{ details.emergency_phone_number }}</h6>
                              <label>Mobile Number</label>
                            </div>
                            <div class="w-100 text-end">
                              <h6>{{ details.emergency_phone_number }}</h6>
                              <label>Emergency Mobile Number</label>
                            </div>
                          </div>
                          <br />
                          <div class="d-flex justify-content-around text-nowrap">
                            <div>
                              <h6>{{ details.personal_email }}</h6>
                              <label>Mail ID</label>
                            </div>
                            <div class="w-100 text-end">
                              <h6>peter.a@caratred.com</h6>
                              <label>Office Mail ID</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>

                  <div class="col-6">
                    <div class="col-12">
                      <div class="card shadow-mg">
                        <div class="d-flex justify-content-between mt-3 ms-3 me-3">
                          <div class="d-flex gap-2 align-items-center">
                            <h6>
                              <i class="bi bi-geo-alt-fill fs-4 me-2"></i>
                            </h6>
                            <h6>Bio / Cover Letter</h6>
                          </div>
                          <div>
                            <i class="bi bi-pencil-fill"></i>
                          </div>
                        </div>
                        <hr />
                        <div class="ms-5 me-5 pb-2">
                          <label>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aperiam voluptatem nulla officia doloremque
                            praesentium tempora ut, dolores minima, beatae ex
                            iste doloribus autem earum, veniam perspiciatis
                            ullam voluptate.
                          </label>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="col-12">
                      <div class="card shadow-sm">
                        <div class="d-flex justify-content-between mt-3 ms-3 me-3">
                          <div class="d-flex gap-2 align-items-center">
                            <h6><i class="bi bi-geo-alt-fill fs-4"></i></h6>
                            <h6>Address</h6>
                          </div>
                          <div>
                            <i class="bi bi-pencil-fill"></i>
                          </div>
                        </div>
                        <hr />
                        <div class="mt-3 ms-3">
                          <h6>B-46, HAL Raghavendra Colony</h6>
                          <label>Line</label>
                          <br />
                          <br />
                          <h6>Opposite SBI Bank</h6>
                          <label>Landmark</label>
                          <br />
                          <br />
                          <h6>Telangana</h6>
                          <label>State</label>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="col-12">
                      <div class="card shadow-sm">
                        <div class="d-flex justify-content-between mt-3 ms-3 me-3">
                          <div class="d-flex gap-2 align-items-center">
                            <h6><i class="bi bi-geo-alt-fill fs-4"></i></h6>
                            <h6>Education</h6>
                          </div>
                          <div>
                            <i class="bi bi-pencil-fill"></i>
                          </div>
                        </div>
                        <hr />
                        <div class="mt-3 ms-3">
                          <h6>B.Tech</h6>
                          <ul class="d-flex gap-4">
                            <li>Kakatiya University, Malkagiri</li>
                            <li>Mechanical Engineering</li>
                            <li>2012-2016</li>
                          </ul>
                          <br />
                          <h6>Intermediate</h6>
                          <ul class="d-flex gap-4">
                            <li>Sri Chaitanya Junior College</li>
                            <li>MPC</li>
                            <li>2010-2012</li>
                          </ul>
                          <br />
                          <h6>10th</h6>
                          <p>State</p>
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
      </div>
          </div>

          <div class="tab-pane fade" id="pills-profile1" role="tabpanel" aria-labelledby="pills-profile-tab">  <div class="container">
                <div class="row">
                  <div class="col-12">
                    <div class="card">
                      <h5 class="m-3">Approvers</h5>
                      <hr />
                      <div class="d-flex justify-content-around">
                        <div>
                          <h6>Nagaarjun Akkineni</h6>
                          <p>Expense Approver</p>
                        </div>
                        <div>
                          <h6>Nagachaitanya Akkineni</h6>
                          <p>Leave Approver</p>
                        </div>
                        <div>
                          <h6>Samantha Akkineni</h6>
                          <p>Shift Approver</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-12">
                    <div class="card">
                      <h5 class="m-3">
                        <i class="bi bi-person-vcard-fill"></i>Attendance
                        Information
                      </h5>
                      <hr />
                      <div class="d-flex justify-content-around">
                        <div>
                          <h6>Biometric</h6>
                          <p>Device</p>
                        </div>
                        <div>
                          <h6>2023-24 Holidays</h6>
                          <p>Holiday List</p>
                        </div>
                        <div>
                          <h6>Morning Shift</h6>
                          <p>Default Shift</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div></div>
           <div class="tab-pane fade" id="pills-contact1" role="tabpanel" aria-labelledby="pills-contact-tab">Job Details</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import NavBar from "./NavBar.vue";
import SideBar from "./SideBar.vue";
import SearchBar from "./SearchBar.vue";
export default {
  data() {
    return {
      show: true,
      message: [],
      item: [],
      currentEmployee: [],
      details: {},
      FormData: {},
      error: {},
    };
  },
  components: {
    NavBar,
    SideBar,
    SearchBar,
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const response = await fetch(
        "http://192.168.1.194:8000/api/method/life_slimming.events.employee_details"
      );
      let res = await response.json();
      this.message = res.message;
      console.log(this.message);
    },
    submitForm() {
      console.log(this.FormData);
      axios
        .post("http://192.168.1.194:8000/api/resource/Employee", this.FormData)
        .then((res) => {
          this.fetchData();
          console.log(res);
        })
        .catch((error) => {
          console.log("Error while sending data", error);
        });
    },
    PersonDetails(name) {
      this.show = false;
      console.log(name);
      this.details = name;
    },
    ValidatEemployeeName() {
      if (!this.FormData.employee_name) {
        this.error.employee_name = "Required";
      } else {
        delete this.error.employee_name;
      }
    },
    ValidateMail() {
      if (!this.FormData.personal_email) {
        this.error.personal_email = "Required";
      } else {
        delete this.error.personal_email;
      }
    },
    ValidateFname() {
      if (!this.FormData.first_name) {
        this.error.first_name = "Required";
      } else {
        delete this.error.first_name;
      }
    },
    ValidateLname() {
      if (!this.FormData.last_name) {
        this.error.last_name = "Required";
      } else {
        delete this.error.last_name;
      }
    },
    // this.message.filter((employee) => {
    //   if (employee.name == name) {
    //     this.currentEmployee = employee;
    //     console.log(this.currentEmployee);
    //   }
    // });

    // PersonDetails() {
    //   this.$router.push({
    //     path: "/InfoDetails",
    //     query: {
    //       name: "InfoDetails",
    //     },
    //   });
    // },
  },
};
</script>

<style scoped>
table,
tr,
td,
th {
  border-bottom: 1px solid rgba(19, 18, 18, 0.103);
  padding: 7px;
  font-size: 14px;
  text-align: center;
}
tr:hover {
  box-shadow: 0px 1px 14px -7px black inset;
}

thead {
  background-color: #dee0ff;
  position: sticky;
  z-index: 100;
  top: 118px;
  /* box-shadow: 0px 1px 14px -7px black inset !important; */
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

.bi {
  color: #838383;
}
.Active {
  font-weight: bold; 
  color: rgb(45, 187, 45);
}
.Inactive{
  font-weight: bold; 
  color: red
}

.bi-pencil-fill:hover {
  color: rgb(76, 103, 239);
}

.person-icon {
  color: white !important;
  font-size: 31px;
}

.bi-info-circle-fill:hover {
  color: rgb(76, 103, 239);
}

.bg-clr {
  color: white;
  background-color: #5b76ff;
  align-items: center;
}

.card-img {
  width: 100px;
}

.card-div {
  position: sticky;
  top: 118px;
  z-index: 10;
}

.is-invalid {
  border: 1px solid red;
}
</style>