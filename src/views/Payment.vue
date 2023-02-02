<template>
  <div class="container mx-auto">
    <h1>Ödeme Ekranı</h1>
    <form>
      <div class="grid gap-6 my-6 md:grid-cols-3">
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >İsim</label
          >
          <input
            type="text"
            id="first_name"
            v-model="payment.customerName"
            class="
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
            required
          />
        </div>
        <div>
          <label
            for="last_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Soyisim</label
          >
          <input
            type="text"
            id="last_name"
            v-model="payment.customerSurname"
            class="
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
            required
          />
        </div>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >E-posta</label
          >
          <input
            type="email"
            id="email"
            class="
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
            v-model="payment.customerEmail"
            
            required
          />
        </div>
      </div>
      <div class="grid gap-6 mb-6 md:grid-cols-4">
        <div>
          <label
            for="cardNumber"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Kart Numarsı</label
          >
          <input
            type="phone"
            id="cardNumber"
            v-model="payment.ccNumber"
            class="
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
            required
          />
        </div>
        <div>
          <label
            for="cardExpMonth"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Son Kullanım Ay</label
          >
          <input
            type="number"
            id="cardExpMonth"
            v-model="payment.ccExpMonth"
            class="
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
            required
          />
        </div>
        <div>
            <label
            for="cardExpYear"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Son Kullanım Yıl</label
          >
          <input
            type="number"
            id="cardExpYear"
            class="
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
            v-model="payment.ccExpYear"
            required
          />
        </div>
        <div>
          <label
            for="cardCvv"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Güvenlik Kodu</label
          >
          <input
            type="number"
            id="cardCvv"
            v-model="payment.ccExpCvv"
            class="
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
            required
          />
        </div>
      </div>
      <button    
        class="
          text-white
          bg-blue-700
          hover:bg-blue-800
          focus:ring-4 focus:outline-none focus:ring-blue-300
          font-medium
          rounded-lg
          text-sm
          w-full
          sm:w-auto
          px-5
          py-2.5
          text-center
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
        "
      @click="complatePayment()">Tamamla</button>
    </form>
  </div>
</template>
  <script>
export default {
  name: "Payment",
  data() {
    return {
      payment: {
        eventId: null,
        eventCategoryId: null,
        seats: [],
        customerName: "",
        customerSurname: "",
        customerEmail: "",
        ccNumber: null,
        ccExpMonth: null,
        ccExpYear: null,
        ccExpCvv: null,
      },
    };
  },
  methods: {
    async complatePayment() {
      this.payment.eventId = this.userSelections.eventId;
      this.payment.eventCategoryId = this.userSelections.eventCategoryId;
      this.payment.seats = this.userSelections.seats;
      await this.$store.dispatch("postPayment", this.payment);
      this.$store.getters.getResponsePayment;
      this.$router.push({ path: "/" });
    },
  },
  computed: {
    userSelections() {
      return this.$store.getters.getUserSelections;
    },
  },
  created() { 
    let userSelections= this.$store.getters.getUserSelections;
    console.log(this.$store.getters.getUserSelections)
    if(userSelections === null || userSelections === undefined || userSelections === "" ){
        console.log(userSelections)
        this.$router.push({ path: "/" });
    }
  },
};
</script>
