import { ref, onBeforeMount } from "vue";
export const useScavengerChecklist = () => {
  const completedItems = ref([]);

  onBeforeMount(() => {
    completedItems.value = getCompletedScavengerHuntItems();
  });

  const getCompletedScavengerHuntItems = () => {
    return (
      JSON.parse(localStorage.getItem("scavengerHuntItems") as string) ?? {}
    );
  };
  const setCompletedScavengerHuntItems = () => {};

  return { completedItems };
};
