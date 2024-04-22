<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-4">
        <div class="card">
          <h5>Primary Details</h5>
          <div class="d-flex">
            <div>
              <p>Employee Name</p>
              <input
                type="text"
                class="w-75"
                placeholder="Enter Employee Name"
              />
            </div>
            <div>
              <p>Mail ID</p>
              <input type="mail" placeholder="Enter Email Id" />
            </div>
          </div>
          <div class="date-b-group d-flex">
            <div>
              <p>Date Of Birth</p>
              <input type="date" class="w-100" />
            </div>
            <div>
              <p>Blood Group</p>
              <select class="p-1 w-100">
                <option>---Select blood group---</option>
                <option>A+</option>
                <option>A-</option>
                <option>B</option>
                <option>B+</option>
              </select>
            </div>
          </div>
          <div class="d-flex gender">
            <div>
              <p>Gender</p>
              <button class="border-0">Male</button>
              <button class="border-0">Female</button>
              <button class="border-0">Others</button>
            </div>
            <div>
              <p>Physically Handicapped</p>
              <button class="border-0">Yes</button>
              <button class="border-0">No</button>
            </div>
          </div>
          <div class="w-100">
            <p>Marital Status</p>
            <button class="border-0">Married</button>
            <button class="border-0">Unmarried</button>
            <button class="border-0">Divorced</button>
            <button class="border-0">Widowed</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main-div {
  width: 300px;
  height: 300px;
  background-color: #f5f6ff;
}
.date-b-group {
  gap: 110px;
}
.gender {
  gap: 75px;
}
</style>