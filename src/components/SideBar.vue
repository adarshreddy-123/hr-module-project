<template>
  <!-- <div class="main-div">
    <router-link to="HomePage" class="text-decoration-none"
      ><h6 class="Dashboard ms-3">
        <i class="bi bi-asterisk me-3"></i>Dashboard
      </h6></router-link
    >
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            <i class="bi bi-people-fill me-3"></i> Requitment
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            <ul class="list-unstyled">
              <li>Posting</li>
              <li>Interviews</li>
              <li>Appointment</li>
              <li>Requisition</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            <i class="bi bi-briefcase-fill me-3"></i>Engagement
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          class="accordion-collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            <ul class="list-unstyled">
              <li>Leave Requests</li>
              <router-link to="AttendancePage" class="text-decoration-none"
                ><li>Attendance</li></router-link
              >
              <router-link to="CalendarPage" class="text-decoration-none"
                ><li>Shift</li></router-link
              >
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingThree">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            <i class="bi bi-person-square me-3"></i>Employe Details
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          class="accordion-collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            <ul class="list-unstyled">
              <router-link to="EmployeeSum" class="text-decoration-none"
                ><li>Employe Summary</li></router-link
              >
              <li>Onboarding</li>
              <li>journey</li>
              <li>Grievance</li>
              <li>Training</li>
              <li>Exit</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingfour">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapsefour"
            aria-expanded="false"
            aria-controls="flush-collapsefour"
          >
            <i class="bi bi-star-fill me-3"></i>Performance
          </button>
        </h2>
        <div
          id="flush-collapsefour"
          class="accordion-collapse"
          aria-labelledby="flush-headingfour"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            <ul class="list-unstyled">
              <li>Appraisals</li>
              <li>Promotion</li>
              <li>Rating</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingfive">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapsefive"
            aria-expanded="false"
            aria-controls="flush-collapsefive"
          >
            <i class="bi bi-currency-bitcoin me-3"></i>Expenses
          </button>
        </h2>
        <div
          id="flush-collapsefive"
          class="accordion-collapse"
          aria-labelledby="flush-headingfive"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            <ul class="list-unstyled">
              <li>Claims</li>
              <li>Advances</li>
              <li>Fleet</li>
              <li>Tavel</li>
              <li>Laibilities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="main-div">
    <router-link to="HomePage" class="text-decoration-none">
      <p class="Dashboard ms-3"><i class="bi bi-asterisk me-3"></i>Dashboard</p></router-link>
    <div class="accordion" id="accordionPanelsStayOpenExample">
    
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            <i class="bi bi-people-fill me-3"></i> Recruitment
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          class="accordion-collapse collapse "
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div class="accordion-body">
            <ul class="list-unstyled">
              <li>Posting</li>
              <li>Interviews</li>
              <li>Appointment</li>
              <li>Requisition</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            <i class="bi bi-briefcase-fill me-3"></i>Engagement
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTwo"
        >
          <div class="accordion-body">
            <ul class="list-unstyled">
              <li>Leave Requests</li>
              <router-link to="AttendancePage" class="text-decoration-none"
                ><li>Attendance</li></router-link
              > 
              <router-link to="CalendarPage" class="text-decoration-none"><li>Shift</li></router-link>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            <i class="bi bi-person-square me-3"></i>Employe Details
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingThree"
        >
          <div class="accordion-body">
            <ul class="list-unstyled">
              <router-link to="EmployeeSum" class="text-decoration-none"
                ><li>Employe Summary</li></router-link
              >
              <li>Onboarding</li>
              <li>journey</li>
              <li>Grievance</li>
              <li>Training</li>
              <li>Exit</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingFour">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseFour"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseFour"
          >
            <i class="bi bi-star-fill me-3"></i>Performance
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingFour"
        >
          <div class="accordion-body">
            <ul class="list-unstyled">
              <li>Appraisals</li>
              <li>Promotion</li>
              <li>Rating</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingFive">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseFive"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseFive"
          >
          <i class="bi bi-dash-circle-fill me-3"></i>Expenses
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseFive"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingFive"
        >
          <div class="accordion-body">
            <ul class="list-unstyled">
              <li>Claims</li>
              <li>Advances</li>
              <li>Fleet</li>
              <li>Tavel</li>
              <li>Laibilities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.accordion {
  font-size: 15px;
  overflow-y: scroll;
  height: 87vh;
  --bs-accordion-border-color: none !important;
}
.main-div {
  position: sticky;
  z-index: 100;
  top: 65px;
  width: 95%;
}
.accordion-button:not(.collapsed) {
  background-color: white !important;
  color: black;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.125);
}
.accordion-button:not(.collapsed)::after {
  background-image: url("https://www.svgrepo.com/show/344060/caret-down-fill.svg");

}
.accordion-button::after {
  background-image: url("https://icons.iconarchive.com/icons/bootstrap/bootstrap/256/Bootstrap-caret-up-fill-icon.png");
  transform: rotate(180deg);
}
.btn:hover {
  color: rgb(76, 103, 240);
}
.Dashboard {
  color: black;
  /* margin-top: 18px; */
}
li {
  line-height: 30px;
  margin-left: 50px;
}
.nav-link {
  color: black;
}
.nav-link:hover {
  color: black;
}
.accordion-body {
    padding: var(--bs-accordion-body-padding-y) var(--bs-accordion-body-paddin);
}

</style>