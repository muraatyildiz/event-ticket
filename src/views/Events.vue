<template>
  <div class="container overflow-y-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="
          text-xs text-gray-700
         
          bg-gray-50
          dark:bg-gray-700 dark:text-gray-400
        "
      >
        <tr>
          <th class="px-4 py-2">Etkinlik</th>
          <th class="px-4 py-2"></th>
          <th class="px-4 py-2">Mekan</th>
          <th class="px-4 py-2">Tarih</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(item, index) in events" :key="index">
          <td class="w-48 px-8 py-2 " @click="goToEvent(item.id)">
          
                <img alt="item.title"  :src="item.image_url" />
                     
          </td>
          <td class="px-8 py-2" @click="goToEvent(item.id)">
            {{ item.title }}
          </td>
          <td class="px-8 py-2">{{ item.venue.name }}</td>
          <td class="px-8 py-2" @click="goToEvent(item.id)">
            {{ $filters.dateFormat(item.event_date) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Events",
  components: {},
  data() {
    return {};
  },
  methods: {
    async getEvents() {
      await this.$store.dispatch("getEvents");
    },
    goToEvent(id) {
      this.$router.push({ name: "EventDetail", params: { id: id } });
    },
  },
  computed: {
    events() {
      return this.$store.getters.getEvents;
    },
  },
  created() {
    this.getEvents();
  },
};
</script>
