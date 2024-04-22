<template>
  <NavBar />
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <SideBar />
      </div>

      <div class="col-10">
        <SearchBar />
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="bg-clr d-flex justify-content-around">
                <div>
                  <img
                    class="card-img"
                    src="https://blog.hootsuite.com/wp-content/uploads/2022/07/Download-Instagram-Reels.png"
                  />
                </div>
                <div>
                  <h6>
                    {{ currentEmployee.employee_name }}
                    <i class="bi bi-person-fill text-white"></i>
                  </h6>
                  <p class="text-white">Name</p>
                </div>
                <div>
                  <h6>
                    <i class="bi bi-person-fill"></i
                    >{{ currentEmployee.first_name }}
                  </h6>
                  <p class="text-white">Email</p>
                </div>
                <div>
                  <h6>
                    <i class="bi bi-person-fill"></i>
                  </h6>
                  <p class="text-white">Mobile</p>
                </div>
                <div>
                  <h6><i class="bi bi-person-fill"></i>Team Leader</h6>
                  <p class="text-white">Designation</p>
                </div>
                <div>
                  <button class="border-0 text-white rounded-4 active-btn">
                    Active
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Personal
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Attendance
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Job Details
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-Documents"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Documents
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-Time-Line"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Time Line
            </button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <!-- ====Personal Details======= -->
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div class="container-fluid">
              <div class="row">
                <div class="col-6">
                  <div class="col-12">
                    <div class="card shadow-sm">
                      <div
                        class="d-flex justify-content-between mt-3 ms-3 me-3"
                      >
                        <div class="d-flex gap-2 align-items-center">
                          <h6><i class="bi bi-person-fill fs-4 me-2"></i></h6>
                          <h6>Primary Details</h6>
                        </div>
                        <div>
                          <i class="bi bi-pencil-fill"></i>
                        </div>
                      </div>
                      <hr />
                      <div class="ms-5 me-5">
                        <div class="d-flex justify-content-around text-nowrap">
                          <div>
                            <h6>Sizu Hains</h6>
                            <p>Full Name</p>
                          </div>
                          <div class="w-100 text-end">
                            <h6>sizu.h@gmail.com</h6>
                            <p>Email</p>
                          </div>
                        </div>
                        <br />
                        <div class="d-flex justify-content-between text-nowrap">
                          <div>
                            <h6>Robinson</h6>
                            <p>First Name</p>
                          </div>
                          <div class="w-100 text-end">
                            <h6>Mathew</h6>
                            <p>Last Name</p>
                          </div>
                        </div>
                        <br />
                        <div class="d-flex justify-content-between">
                          <div>
                            <h6>Mr</h6>
                            <p>Salutation</p>
                          </div>
                          <div class="w-100 text-end">
                            <h6>02-05-2001</h6>
                            <p>Date Of Birth</p>
                          </div>
                        </div>
                        <br />
                        <div class="d-flex text-nowrap">
                          <div>
                            <h6>A+</h6>
                            <p>Blood Group</p>
                          </div>
                          <div class="w-100 text-end">
                            <h6>No</h6>
                            <p>Physically Handicapped</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div class="col-12">
                    <div class="card shadow-sm">
                      <div
                        class="d-flex justify-content-between mt-3 ms-3 me-3"
                      >
                        <div class="d-flex gap-2 align-items-center">
                          <h6><i class="bi bi-person-fill fs-4 me-2"></i></h6>
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
                            <p>Mother Name</p>
                          </div>
                          <div class="w-100 text-end">
                            <h6>Peter Hains</h6>
                            <p>Father Name</p>
                          </div>
                        </div>
                        <div class="d-flex justify-content-around text-nowrap">
                          <div>
                            <h6>Koley Hains</h6>
                            <p>Guardian</p>
                          </div>
                          <div class="w-100 text-end">
                            <h6>No</h6>
                            <p>Marital Status</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div class="col-12">
                    <div class="card shadow-sm">
                      <div
                        class="d-flex justify-content-between mt-3 ms-3 me-3"
                      >
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
                            <h6>+91-9900990099</h6>
                            <p>Mobile Number</p>
                          </div>
                          <div class="w-100 text-end">
                            <h6>+91-9900990099</h6>
                            <p>Emergency Mobile Number</p>
                          </div>
                        </div>
                        <div class="d-flex justify-content-around text-nowrap">
                          <div>
                            <h6>peterparker@gmail.com</h6>
                            <p>Mail ID</p>
                          </div>
                          <div class="w-100 text-end">
                            <h6>peter.a@caratred.com</h6>
                            <p>Office Mail ID</p>
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
                      <div
                        class="d-flex justify-content-between mt-3 ms-3 me-3"
                      >
                        <div class="d-flex gap-2 align-items-center">
                          <h6><i class="bi bi-geo-alt-fill fs-4 me-2"></i></h6>
                          <h6>Bio / Cover Letter</h6>
                        </div>
                        <div>
                          <i class="bi bi-pencil-fill"></i>
                        </div>
                      </div>
                      <hr />
                      <div class="ms-5 me-5">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aperiam voluptatem nulla officia doloremque
                          praesentium tempora ut, dolores minima, beatae ex iste
                          doloribus autem earum, veniam perspiciatis ullam
                          voluptate.
                        </p>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div class="col-12">
                    <div class="card shadow-sm">
                      <div
                        class="d-flex justify-content-between mt-3 ms-3 me-3"
                      >
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
                        <p>Line</p>
                        <br />
                        <h6>Opposite SBI Bank</h6>
                        <p>Landmark</p>
                        <br />
                        <h6>Telangana</h6>
                        <p>State</p>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div class="col-12">
                    <div class="card shadow-sm">
                      <div
                        class="d-flex justify-content-between mt-3 ms-3 me-3"
                      >
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

          <!-- ====Attendance Details======= -->
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div class="container">
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
            </div>
          </div>

          <!-- ====Job Details======= -->
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            Job Details
          </div>

          <!-- ====Documents Details======= -->
          <div
            class="tab-pane fade"
            id="pills-Documents"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            Documents Details
          </div>

          <!-- ====Time Line Details======= -->
          <div
            class="tab-pane fade"
            id="pills-Time-Line"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          ></div>
          <!-- ====End Time Line Details======= -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "./SideBar.vue";
import NavBar from "./NavBar.vue";
import SearchBar from "./SearchBar.vue";
export default {
  data() {
    return {
      employee: [],
      name: [],
      currentEmployee: [],
    };
  },
  components: {
    SideBar,
    NavBar,
    SearchBar,
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData(name) {
      const response = await fetch(
        "http://192.168.1.194:8000/api/method/life_slimming.events.employee_details"
      );
      let res = await response.json();
      this.messagez = res.message;
      this.messagez.filter((employee) => {
        if (employee.name == name) {
          this.currentEmployee = employee;
          console.log(this.currentEmployee);
        }
      });
    },
  },
};
</script>

<style scoped>
p {
  color: #8e8f8d;
}
.bg-clr {
  color: white;
  background-color: #5b76ff;
}
.card-img {
  width: 100px;
}
.active-btn {
  background-color: #65ff4d;
  padding: 0px 30px 6px 35px;
}
</style>