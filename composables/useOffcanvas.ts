import { markRaw, ref, shallowRef } from 'vue'

const isOpen = ref<boolean>(false)
const offcanvasTitle = ref<string>('')
const view = shallowRef<any>({})
const model = ref<object>({})
const offCanvasInstance = ref<any>(null)

function init (offcanvas: any) {
  offCanvasInstance.value = offcanvas
}

function open (component: object, title = '', modelValue?: any) {
  offcanvasTitle.value = title
  offCanvasInstance.value.show()
  isOpen.value = true
  model.value = modelValue ?? {}
  view.value = markRaw(component)
}

function close () {
  offCanvasInstance.value.hide()
}

export function useOffcanvas () {
  return {
    title: offcanvasTitle,
    isOpen,
    view,
    model,
    close,
    open,
    init
  }
}
