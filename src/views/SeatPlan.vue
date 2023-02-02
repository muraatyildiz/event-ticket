<template>
  <div class="container mx-auto event">
    <h1>Koltuk Seçimi</h1>
    <div class="grid grid-cols-10 grid-rows-5 gap-4">
      <div
        data-popover-target="popover-default"
        v-for="(seat, index) in seats"
        :key="index"
        class="box-content h-20 w-20 p-4 border-4 ..."
        :class="{
          'bg-green-500': seat.selected,
          'bg-red-500': seat.isBooked && !seat.selected,
          'bg-blue-400': !seat.isBooked && !seat.selected,
        }"
        @click="selectSeat(seat.id)"
      >
        {{ seat.seat }} - {{ seat.row }}
      </div>
    </div>
    <button
    class="
            inline-flex
            items-center
            px-3
            py-2
            text-sm
            font-medium
            text-center text-white
            bg-blue-700
            rounded-lg
            hover:bg-blue-800
            focus:ring-4 focus:outline-none focus:ring-blue-300
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
          "
      type="submit"
      id="goToPayment"
      @click="goToPayment()"
      
    >Koltuk Seçimini Tamamla
</button>
  </div>
</template>
  <script>
export default {
  name: "SeatPlan",
  components: {},
  data() {
    return {
      userSelections: {
        eventId: this.$route.params.eventId,
        eventCategoryId: this.$route.params.eventCategoryId,
        seats: [],
      },
    };
  },
  methods: {
    async getSeatPlans() {
      await this.$store.dispatch("getSeatPlans", this.userSelections);
    },
    selectSeat(seatId) {
      let item = this.seats.find((item) => item.id === seatId);
      if (item.isBooked) {
        alert("Lütfen boş bir koltuk seçiniz");
      } else {
        this.userSelections.seats.push(seatId);
        let indexOfSeat = this.seats.findIndex((item) => item.id === seatId);
        this.seats[indexOfSeat].selected = true;
      }
    },
    goToPayment() {
      this.$store.commit("setUserSelections", this.userSelections);
      this.$router.push({ name: "Payment" });
    },
  },
  computed: {
    seats() {
      return this.$store.getters.getSeats;
    },
  },
  created() {
    this.getSeatPlans();
  },
};
</script>
