<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 fw-bold">{{ month }}</span>
        <span class="mx-1 fs-3">{{ day }}</span>
        <span class="mx-2 fs-4 fw-light">{{ year }}</span>
      </div>
      <div>
        <button
          v-if="this.entry.id"
          class="btn btn-danger mx-2"
          @click="onDeleteEntry()"
        >
          Delete <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary">
          Upload a photo <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>
    <hr />
    <div class="d-flex flex-column px-3 h-75">
      <textarea
        placeholder="What happened today?"
        v-model="entry.text"
      ></textarea>
    </div>
  </template>
  <Fab icon="fa-save" @on-click="saveEntry()" />
  <img
    src="https://th-thumbnailer.cdn-si-edu.com/Y99SIMiKe48gMhaOJVV71GaN0jw=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/a8/51/a851be96-2508-422f-88fa-5aee6fc7ada3/stand_in_cover_pic.jpg"
    alt="entry-picture"
    class="img-thumbnail"
  />
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import Swal from 'sweetalert2';
import getCustomDate from '../helpers/getCustomDate';

export default {
  components: {
    Fab: defineAsyncComponent(() => import('../components/Fab.vue')),
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      entry: null,
    };
  },
  methods: {
    loadEntry() {
      let entry;
      if (this.id === 'new') {
        entry = {
          text: '',
          date: new Date().getTime(),
        };
      } else {
        entry = this.getEntryById(this.id);
        if (!entry) {
          this.$router.push({ name: 'no-entry' });
          return;
        }
      }
      this.entry = entry;
    },
    async saveEntry() {
      new Swal({
        title: 'Wait, please',
        allowOutsideClick: false,
      });
      Swal.showLoading();
      if (this.entry.id) {
        await this.updateEntry(this.entry);
      } else {
        const newId = await this.createEntry(this.entry);
        this.$router.push({ name: 'entry', params: { id: newId } });
      }
      Swal.fire('Saved', 'The entry was saved successfully', 'success');
    },
    async onDeleteEntry() {
      const { isConfirmed } = await Swal.fire({
        title: 'Are you sure',
        text: 'This action cannot be undone',
        showDenyButton: true,
        confirmButtonText: 'Yes, I am sure',
      });
      if (isConfirmed) {
        new Swal({
          title: 'Wait, please',
          allowOutsideClick: false,
        });
        Swal.showLoading();
        await this.deleteEntry(this.entry.id);
        this.$router.push({ name: 'no-entry' });
        Swal.fire('Deleted', '', 'success');
      }
    },
    ...mapActions({
      updateEntry: 'journal/updateEntry',
      createEntry: 'journal/createEntry',
      deleteEntry: 'journal/deleteEntry',
    }),
  },
  computed: {
    ...mapGetters({
      getEntryById: 'journal/getEntryById',
    }),
    day() {
      const { day } = getCustomDate(this.entry.date);
      return day;
    },
    month() {
      const { month } = getCustomDate(this.entry.date);
      return month;
    },
    year() {
      const { year } = getCustomDate(this.entry.date);
      return year;
    },
  },
  created() {
    this.loadEntry();
  },
  watch: {
    id() {
      this.loadEntry();
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  border: none;
  font-size: 20px;
  height: 100%;

  &:focus {
    outline: none;
  }
}

img {
  bottom: 150px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
  position: fixed;
  right: 20px;
  width: 200px;
}
</style>
