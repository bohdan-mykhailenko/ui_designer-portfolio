<script setup>
import {
  PopoverPortal,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "radix-vue";
import { Languages } from "lucide-vue-next";

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger asChild>
      <Languages color="teal" :size="32" />
    </PopoverTrigger>

    <PopoverPortal>
      <PopoverContent
        side="bottom"
        :side-offset="5"
        class="rounded p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.green7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
        z
      >
        <div class="flex flex-col gap-2.5">
          <NuxtLink
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
          >
            {{ locale.name }}
          </NuxtLink>
        </div>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
