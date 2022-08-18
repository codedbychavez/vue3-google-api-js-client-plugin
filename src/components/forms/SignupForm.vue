<script>
export default {
  props: {
    userId: String,
  },
  data() {
    return {
      addressLines: [""],
      categories: [
        {
          primaryCategory: {
            name: "categories/gcid:e_commerce_service",
            displayName: "E-commerce service",
          },
        },
        {
          primaryCategory: {
            name: "categories/gcid:electrical_repair_shop",
            displayName: "Electrical repair shop",
          },
        },
        {
          primaryCategory: {
            name: "categories/gcid:fast_food_restaurant",
            displayName: "Fast food restaurant",
          },
        },
      ],
      location: {
        language_code: "en",
        title: "",
        categories: {
          // Category fits here
        },
        storefront_address: {
          regionCode: "GY",
          languageCode: "en",
          // postalCode: "0592",
          locality: "Georgetown",
          addressLines: [],
        },
        website_uri: "",
      },
    };
  },
  methods: {
    handleAddAddressLine() {
      if (this.addressLines.length >= 3) return;
      this.addressLines.push("");
    },
    handleRemoveAddressLine(index) {
      if (this.addressLines.length <= 1) return;
      this.addressLines.splice(index, 1);
    },
    setSelectedCategory(category) {
      this.location.categories = category;
    },
    async handleSubmit(e) {
      e.preventDefault();
      // Set address lines
      this.location.storefront_address.addressLines = this.addressLines;

      console.log(JSON.stringify(this.location));

      const response =
        await this.$google.api.client.mybusinessbusinessinformation.accounts.locations.create(
          {
            parent: `accounts/${this.userId}`,
            resource: this.location,
          }
        );
      console.log(response);
    },
  },
};
</script>

<template>
  <form @submit="handleSubmit">
    <h2 class="text-2xl font-bold">Create a Google Business Form</h2>
    <h3 class="mt-2"><b>Account ID</b>: {{ userId }}</h3>
    <div class="grid gap-6 my-6 grid-cols-1 lg:grid-cols-2" >
      <div class="border shadow p-4 rounded-md">
      <div>
        <label for="language_code">Language code (Readonly)</label>
        <input
          v-model="location.language_code"
          type="text"
          id="language_code"
          placeholder="en"
          readonly
        />
      </div>
      <div class="mt-2">
        <label for="business_name">Business name</label>
        <input
          v-model="location.title"
          type="text"
          id="business_name"
          placeholder="Acme Inc."
          required
        />
      </div>

      <div class="mt-2">
        <label for="categories" class="mr-2">Choose a category:</label>
        <select class="py-2 px-4 rounded" name="categories" id="categories">
          <option
            v-for="(category, index) in categories"
            :key="index"
            :value="category.primaryCategory"
            @click="setSelectedCategory(category)"
          >
            {{ category.primaryCategory.displayName }}
          </option>
        </select>
      </div>

      <h2 class="text-xl font-bold mt-4">Storefront Address</h2>

      <div class="mt-2">
        <label for="business_name">Region code</label>
        <input
          v-model="location.storefront_address.regionCode"
          type="text"
          id="business_name"
          placeholder="ZA"
          maxlength="2"
          required
        />
      </div>
      <div class="mt-2">
        <label for="business_name">Language code</label>
        <input
          v-model="location.storefront_address.languageCode"
          type="text"
          id="business_name"
          placeholder="Acme Inc."
          readonly
        />
      </div>
      <div class="mt-2">
        <div v-for="(addressLine, index) in addressLines" :key="index">
          <div>
            <div class="flex justify-between">
              <label for="business_name">Address line {{ index + 1 }}</label>
              <button
                @click.prevent="handleRemoveAddressLine"
                v-if="index != 0"
                class="text-red-500"
              >
                X
              </button>
            </div>
            <input
              v-model="addressLines[index]"
              type="text"
              id="business_name"
              :placeholder="'Address line ' + (index + 1)"
            />
          </div>
        </div>
        <button
          @click.prevent="handleAddAddressLine"
          class="mt-2 bg-yellow-300 w-max px-4 py-1 rounded-md cursor-pointer text-sm"
        >
          + Add another address line
        </button>
      </div>
      <!-- TODO: Still experimenting on this -->
      <!-- <div>
        <label for="business_name">Postal code</label>
        <input
          v-model="location.storefront_address.postalCode"
          type="text"
          id="business_name"
          placeholder="Acme Inc."
        />
      </div> -->
      <div class="mt-2">
        <label for="address_locality">Locality</label>
        <input
          v-model="location.storefront_address.locality"
          type="text"
          id="address_locality"
          placeholder="Acme Inc."
        />
      </div>
      <div class="mt-2">
        <label for="business_name">Website URL</label>
        <input
          v-model="location.website_uri"
          type="url"
          id="business_name"
          placeholder="https://www.mywebsite.com"
        />
      </div>

    <button
      type="submit"
      class="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >
      Create my business!
    </button>
    </div>
    </div>

  </form>
</template>
