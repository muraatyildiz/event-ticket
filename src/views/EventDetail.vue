<template>
  <div class="container mx-auto event">
    <div
      class="
        bg-white
        border border-gray-200
        rounded-lg
        shadow
        dark:bg-gray-800 dark:border-gray-700
      "
    >
      <div>
        <h5
          class="
            mb-2
            text-2xl
            font-bold
            tracking-tight
            text-gray-900
            dark:text-white
          "
        >
          {{ event.title }}
        </h5>
      </div>
      <a>
        <img class="rounded-t-lg" alt="item.title" :src="event.image_url" />
      </a>
      <div class="">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ event.description }}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ event.venue.name }}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ $filters.dateFormat(event.event_date) }}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ $filters.timeFormat(event.event_date) }}
        </p>
        <div >
          <label
          for="categories"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Kategori Seç</label
        >
        <select
          id="categories"
          v-model="selectedCategory"
          class="
            bg-gray-50
            border border-gray-300
            text-gray-900 text-sm
            rounded-lg
            focus:ring-blue-500 focus:border-blue-500
            mb-2           
            p-2.5
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
        >
          <option
            v-for="(item, index) in event.event_categories"
            :key="index"
            :value="item.id"
          >
            {{ item.name }}
          </option>
        </select>
        </div>
        <button
          @click="goToSeats()"
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
        >
          Koltuk Seçimi
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EventDetail",
  components: {},
  data() {
    return {
      selectedCategory: 1,
    };
  },
  methods: {
    async getSelectedEvent() {
      await this.$store.dispatch("getEventDetail", this.$route.params.id);
    },
    goToSeats() {
      this.$router.push({
        name: "SeatPlan",
        params: {
          eventId: this.event.id,
          eventCategoryId: this.selectedCategory,
        },
      });
    },
  },
  computed: {
    event() {
      return this.$store.getters.getSelectedEvent;
    },
  },
  created() {
    this.getSelectedEvent();
  },
};
</script>