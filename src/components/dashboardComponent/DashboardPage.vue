<template>
    <div id="app">
      <section class="dashboard-page"> 
      <HeaderDashboard/> 
        <SideBar />
        <main class="main" id="main">
          <section class="section dashboard my-5">
            <div class="row">
              <div class="col-lg-5">
                <div class="row">
                <CompanySection />
                <CompanyPreference/>
                <CompanyDescription/>
                
              </div>
            </div>
              <div class="col-lg-7 right-side">
                <div class="row">
                <PersonalInfo />
                <CompanyDetails />
                <Password/>
                
              </div>
              </div>
            </div>
          </section>
        </main>
      </section> 
    </div>
  </template>
  <script>



import HeaderDashboard from './HeaderDashboard.vue';
  import SideBar from './SideBar.vue';
  import CompanySection from './CompanySection.vue';
  import PersonalInfo from './PersonalInfo.vue';
  import CompanyDetails from './CompanyDetails.vue';
  import Password from './PasswordForm.vue';
import CompanyDescription from './CompanyDescription.vue';
import CompanyPreference from './CompanyPreference.vue';





  
  export default {
    components: {
      HeaderDashboard,
      SideBar,
      CompanySection,
      CompanyPreference,
      PersonalInfo,
      CompanyDetails,
      CompanyDescription ,
      Password,
    },
    name: "DashboardPage",
  };
  </script>
  
  <style>

 
@import '../../assets/css/dashboard.css';
  </style>
  