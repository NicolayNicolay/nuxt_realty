<template>
  <div ref="fancyRef">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

const fancyRef = ref()

const props = defineProps({
  options: Object
})
onMounted(() => {
  Fancybox.bind(fancyRef.value.container, '[data-fancybox]', {
    Carousel: props.options.Carousel ?? undefined,
    Fullscreen: { autoStart: false },
    Hash: undefined,
    Html: undefined,
    Images: undefined,
    Slideshow: undefined,
    Thumbs: undefined,
    Toolbar: undefined,
    animated: false,
    autoFocus: false,
    backdropClick: undefined,
    caption: undefined,
    closeButton: undefined,
    commonCaption: false,
    compact: undefined,
    contentClick: undefined,
    contentDblClick: undefined,
    defaultDisplay: undefined,
    defaultType: undefined,
    delegate: undefined,
    dragToClose: false,
    event: undefined,
    groupAll: false,
    groupAttr: '',
    height: undefined,
    hideClass: undefined,
    hideScrollbar: false,
    id: undefined,
    idle: undefined,
    keyboard: undefined,
    l10n: undefined,
    mainClass: '',
    on: undefined,
    parentEl: undefined,
    placeFocusBack: false,
    showClass: undefined,
    slug: '',
    src: undefined,
    startIndex: 0,
    tpl: {},
    trapFocus: false,
    trigger: undefined,
    wheel: undefined,
    width: undefined,
  })
})
onUpdated(() => {
  Fancybox.unbind(fancyRef.value.container)
  Fancybox.close()

  Fancybox.bind(fancyRef.value.container, '[data-fancybox]', {
    ...(this.options || {})
  })
})
onUnmounted(() => {
  Fancybox.destroy()
})

</script>
<style scoped lang="scss">
</style>
