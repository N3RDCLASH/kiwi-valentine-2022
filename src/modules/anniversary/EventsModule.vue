<template>
  <section class="flex flex-col justify-center items-center gap-4">
    <h2 class="text-[24px] md:text-[40px] lg:text-[64px]">
      Couples Scavenger Hunt
    </h2>
    <div class="flex flex-col lg:flex-row">
      <div class="flex flex-col gap-4 justify-center items-start px-5">
        <div
          class="flex gap-2"
          v-for="(item, index) in checklistItems"
          :key="index"
        >
          <input type="checkbox" :checked="checkIfChecked(index)" />
          <div class="flex flex-col">
            <span>{{ item.text }}</span>
            <!-- <ul>
              <li v-for="(bullet, index) in item.list" :key="index">
                {{ bullet }}
              </li>
            </ul> -->
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <img
          src="../../assets/img/undraw_searching_re_3ra9.svg"
          class="w-[30em]"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { checklistItems } from "../../config/index";
import { useScavengerChecklist } from "../../composables/useScavengerChecklist";
export default defineComponent({
  setup() {
    const { completedItems } = useScavengerChecklist();
    const checkIfChecked = (index: number) =>
      completedItems.value.length != 0 ? completedItems.value[index] : false;
    return { checklistItems, checkIfChecked };
  },
});
</script>

<style scoped></style>
