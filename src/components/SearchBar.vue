<template>
  <div class="d-flex main-div justify-content-between">
    <div class="d-flex gap-4 align-item-center mt-2">
      <div class="d-flex">
        <i class="bi bi-caret-left-square me-2 mt-1"></i>
        <i class="bi bi-caret-right-square mt-1"></i>
      </div>
      <div>
        <h6 class="mt-2 text-nowrap">Add Employee</h6>
      </div>
      <div class="input-box d-flex">
        <input class="input-group-text mt-1" type="search" placeholder="Search for information" v-model="InputSearch" />
        <span><i class="bi bi-search"></i></span>
      </div>
    </div>
    <div class="mt-2">
      <button class="border-0 me-3 export rounded-1">Export</button>
      <button type="button" class="btn text-white create-btn mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i class="bi bi-person-plus-fill ms-1"></i> Add Employee
      </button>
      <!-- Modal -->
    </div>
  </div>
  <div class="modal fade w-100" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <form @submit.prevent="submitForm">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title" id="exampleModalLabel">
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
                    type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                    <i class="bi bi-person-fill"></i> Employee Profile
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
                    type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                    <i class="bi bi-file-earmark-person"></i> Documents
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact"
                    type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                    <i class="bi bi-ticket-detailed-fill"></i> Job Details
                  </button>
                </li>
                <button type="reset" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <div class="modal-body">
                    <!--  Employee Profile -->
                    <div class="primary-div p-3">
                      <h4>Primary Details</h4>

                      <div class="d-flex justify-content-between w-100 mt-3">
                        <div>
                          <label for="Name">Employee Name *</label><br />
                          <input type="text" id="Name" class="form-control width p-2" placeholder="Enter Name"
                            v-model="FormData.first_name" @input="validateName"
                            :class="{ 'is-invalid': error.first_name }" />
                          <div class="invalid_feedback" v-if="!first_name">
                            {{ error.first_name }}
                          </div>
                        </div>
                        <div>
                          <label for="mail">Department</label><br />
                          <input type="text" id="Enter department" class="form-control width p-2"
                            placeholder="Enter department" v-model="FormData.department" @input="validateDep"
                            :class="{ 'is-invalid': error.department }" />
                          <div class="invalid_feedback" v-if="!department">
                            {{ error.department }}
                          </div>
                        </div>
                      </div>
                      <br />
                      <div class="date-b-group d-flex justify-content-between">
                        <div>
                          <label for="DOB">Date Of Birth *</label><br />
                          <input type="date" id="DOB" class="form-control p-2 width" v-model="FormData.date_of_birth" />
                        </div>
                        <br />
                        <div>
                          <label for="BloodGroup">Mobile Number</label><br />
                          <input type="text" class="form-control p-2 width" placeholder="Enter Number"
                            v-model="FormData.emergency_phone_number" />
                          <!-- <select
                            class="width p-2 text-center"
                            id="BloodGroup"
                            v-model="FormData.BloodGroup"
                          >
                            <option selected>---Select blood group---</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B">B</option>
                            <option value="B+">B+</option>
                          </select> -->
                        </div>
                      </div>
                      <br />
                      <div class="d-flex gender justify-content-between">
                        <div>
                          <label for="gender">Gender *</label><br />
                          <select class="width p-2 text-center" id="gender" v-model="FormData.gender">
                            <option selected>----Select Gender----</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                        <div>
                          <label for="PhyHandicap">Shift</label><br />
                          <select class="width p-2 text-center" id="PhyHandicap" v-model="FormData.default_shift">
                            <option selected>----Select Option---</option>
                            <option value="A Shift">A Shift</option>
                            <option value="B Shift">B Shift</option>
                          </select>
                        </div>
                      </div>
                      <br />
                      <div class="d-flex justify-content-between">
                        <div>
                          <label for="marital_status">Marital Status</label><br />
                          <select class="p-2 width text-center" id="marital_status" v-model="FormData.marital_status">
                            <option selected>----Select Staus----</option>
                            <option value="Married">Married</option>
                            <option value="Unmarried">unmarried</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Widowed">Widowed</option>
                          </select>
                        </div>
                        <div>
                          <label for="dateOfJoining">Date of Joining *</label><br />
                          <input type="date" class="form-control p-2 width" id="dateOfJoining"
                            v-model="FormData.date_of_joining" />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="contact-div p-3">
                      <h4>Contact Details</h4>
                      <div class="d-flex justify-content-between mt-3">
                        <div>
                          <label for="Mobile">Designation</label><br />
                          <input type="text" id="mobile" class="form-control width p-2" placeholder="Enter Designation"
                            v-model="FormData.designation" @input="validateDesigna"
                            :class="{ 'is-invalid': error.designation }" />
                          <div class="invalid_feedback" v-if="!designation">
                            {{ error.designation }}
                          </div>
                        </div>
                        <div>
                          <label for="mail">Mail</label><br />
                          <input type="text" id="mail" class="form-control width p-2" placeholder="Enter Mail Id"
                            v-model="FormData.personal_email" @input="validatepersonal_email"
                            :class="{ 'is-invalid': error.personal_email }" />
                          <div class="invalid_feedback" v-if="!personal_email">
                            {{ error.status }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="address p-3">
                      <h4>Address</h4>
                      <div class="d-flex justify-content-between mt-3">
                        <div>
                          <label for="Lane">Lane</label><br />
                          <input type="text" id="Lane" class="form-control width p-2"
                            placeholder="Enter house number & street" v-model="FormData.Lane" @input="validateLane"
                            :class="{ 'is-invalid': error.Lane }" />
                          <div class="invalid_feedback" v-if="!Lane">
                            {{ error.Lane }}
                          </div>
                        </div>
                        <div>
                          <label for="City">City</label><br />
                          <input type="text" id="City" class="form-control width p-2" placeholder="Enter city"
                            v-model="FormData.City" @input="ValidateCity" :class="{ 'is-invalid': error.City }" />
                          <div class="invalid_feedback" v-if="!City">
                            {{ error.City }}
                          </div>
                        </div>
                      </div>
                      <br />
                      <div class="d-flex justify-content-between">
                        <div>
                          <label for="State">State</label><br />
                          <input type="text" id="State" class="form-control width p-2" placeholder="Enter State"
                            v-model="FormData.State" @input="ValidateState" :class="{ 'is-invalid': error.State }" />
                          <div class="invalid_feedback" v-if="!State">
                            {{ error.State }}
                          </div>
                        </div>
                        <div>
                          <label for="pin-Code">Pin Code</label><br />
                          <input type="text" id="pin-Code" class="form-control width p-2" placeholder="Enter Pin Code"
                            v-model="FormData.pin_code" @input="ValidateCode" :class="{ 'is-invalid': error.pin_code }" />
                          <div class="invalid_feedback" v-if="!pin_code">
                            {{ error.pin_code }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Document -->
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  Document
                </div>
                <!-- Job Details -->
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                  Job Details
                </div>
              </div>
            </h6>
          </div>

          <div class="modal-footer">
            <button type="reset" class="btn btn-secondary" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Next</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      FormData: {},
      error: {},
      item: [],
    };
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
    validateName() {
      if (!this.FormData.employee_name) {
        this.error.employee_name = "Required *";
      } else {
        delete this.error.employee_name;
      }
    },
    validateDep() {
      if (!this.FormData.department) {
        this.error.department = "Required *";
      } else {
        delete this.error.department;
      }
    },
    validateDesigna() {
      if (!this.FormData.designation) {
        this.error.designation = "Required *";
      } else {
        delete this.error.designation;
      }
    },
    validateShift() {
      if (!this.FormData.default_shift) {
        this.error.default_shift = "Required *";
      } else {
        delete this.error.default_shift;
      }
    },
    validatestatus() {
      if (!this.FormData.status) {
        this.error.status = "Required *";
      } else {
        delete this.error.status;
      }
    },
    validateLane() {
      if (!this.FormData.status) {
        this.error.status = "Required *";
      } else {
        delete this.error.status;
      }
    },
    ValidateCity() {
      if (!this.FormData.status) {
        this.error.status = "Required *";
      } else {
        delete this.error.status;
      }
    },
    ValidateState() {
      if (!this.FormData.status) {
        this.error.status = "Required *";
      } else {
        delete this.error.status;
      }
    },
    ValidateCode() {
      if (!this.FormData.status) {
        this.error.status = "Required *";
      } else {
        delete this.error.status;
      }
    },
  },
};
</script>

<style scoped>
.input-box {
  position: absolute;
  border-radius: 25px;
  position: relative;
}

.input-group-text {
  background-color: #ebedf2;
  height: 35px;
  text-align: center;
  position: absolute;
  display: block;
  border-radius: 17px;
  font-size: 17px;
  /* padding: 10px; */
  border: none;
}

.input-group-text:focus {
  outline: none;
}

span {
  position: absolute;
  top: 9px;
  left: 0;
  border-radius: 50%;
  background: none;
}

.bi-search {
  position: relative;
  left: 10px;
  color: black !important;
}

.plus-btn {
  color: white;
  background-color: rgb(50, 93, 255);
  font-size: 24px;
}

.main-div {
  background-color: white;
  position: sticky;
  z-index: 100;
  top: 57px;
  height: 61px;
}

.primary-div,
.contact-div,
.address {
  background-color: #ecedf8;
  border-radius: 7px;
  width: 40vw;
}

.invalid_feedback {
  color: red;
}

.create-btn {
  background-color: rgb(18, 110, 253);
}

.create-btn:hover {
  background-color: rgb(18, 110, 253);
}

.width {
  width: 17vw;
}

.is-invalid {
  border: 1px solid red;
}

label {
  color: rgb(95, 93, 93);
}

.export {
  padding: 7px 32px;
  background-color: #ebedf2;
}

/* select {
  border-right: 16px solid transparent;
} */
</style>