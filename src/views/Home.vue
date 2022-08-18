<script>
import AuthorizeWithGoogle from '../components/AuthorizeWithGoogle.vue';
import SignupForm from '../components/forms/SignupForm.vue';
import BusinessLocations from '../components/BusinessLocations.vue';
export default {
  data() {
    return {
      isAuthorized: false,
      isLocationCreated: false,
      userInfo: {},
    }
  },
  components: {
    AuthorizeWithGoogle,
    SignupForm,
    BusinessLocations
},
  methods: {
    async isSignedIn() {
      this.isAuthorized = await this.$google.api.auth2.getAuthInstance().isSignedIn.get()
      this.userInfo = await this.$google.api.auth2.getAuthInstance().currentUser.get()
    },
    updateSignInStatus(isSignedIn) {
      if(isSignedIn) {
        this.isAuthorized = true
      } else {
        this.isAuthorized = false
      }
    }
  },
 
}
</script>

<template>
  <div>
    <h1 class="font-normal text-2xl">Get Started</h1>
    <h2 class="text-lg font-light">Authorize your Google Account and Create a Google Business</h2>
    <!-- <pre class="overflow-scroll">
      {{ userInfo }}
    </pre> -->
    <div class="card">
      <div class="mb-4">
        <h2 class="text-lg">1. Authorize with Google <span class="font-mono"><span class="text-sm text-gray-600">(Authorized status: {{ isAuthorized || 'Click check status first.' }})</span> </span></h2>
        <button @click="isSignedIn" class="underline text-blue-600">Check status</button>
        <div>
        </div>
      </div>
      <AuthorizeWithGoogle />
    </div>

    <div class="card">
      <h2 class="text-lg">2. List of locations you currently manage</h2>
      <BusinessLocations :userId="userInfo['Ca']" />
    </div>

    <div class="card">
      <div class="mb-2">
        <h2 class="text-lg">3. Create a Google Business Location <span class="font-mono">(Location created: {{ isLocationCreated }})</span></h2>
        <div>
        </div>
      </div>
      <SignupForm :userId="userInfo['Ca']" />
    </div>
  </div>
</template>

