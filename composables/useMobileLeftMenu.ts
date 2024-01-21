interface MenuItem {
  name: string,
  url: string,
  active: boolean,
  children: MenuItem[] | []
}

// Цепочка открытых пунктов меню для реализации возможности возврата на предыдущий уровень
const openedLeftMenuChain = ref<number[]>([])
const leftMenuItems = ref<MenuItem[]>([])
const menuItems = ref<MenuItem[]>([])
const currentItem = ref<MenuItem | null>(null)

export function useMobileLeftMenu () {
  function loadMenuItems () {
    menuItems.value = [
      {
        name: 'Главная',
        active: true,
        url: '/',
        children: []
      },
      {
        name: 'Каталог',
        active: false,
        url: '/catalog/',
        children: [
          {
            name: 'Раздел 1',
            active: false,
            url: '/catalog/',
            children: [
              {
                name: 'подраздел 1',
                active: false,
                url: '/catalog/',
                children: []
              },
              {
                name: 'подраздел 2',
                active: false,
                url: '/buyers/',
                children: [
                  {
                    name: 'уровень 4 раздел 1',
                    active: false,
                    url: '/catalog/',
                    children: []
                  },
                  {
                    name: 'уровень 4 Раздел 2',
                    active: false,
                    url: '/buyers/',
                    children: []
                  },
                  {
                    name: 'уровень 4 Раздел 3',
                    active: false,
                    url: '/contacts/',
                    children: []
                  }
                ]
              },
              {
                name: 'подраздел 3',
                active: false,
                url: '/contacts/',
                children: []
              }
            ]
          },
          {
            name: 'Раздел 2',
            active: false,
            url: '/buyers/',
            children: []
          },
          {
            name: 'Раздел 3',
            active: false,
            url: '/contacts/',
            children: []
          }
        ]
      },
      {
        name: 'Покупателям',
        active: false,
        url: '/buyers/',
        children: []
      },
      {
        name: 'Контакты',
        active: false,
        url: '/contacts/',
        children: []
      }
    ]

    openedLeftMenuChain.value = []

    // Обновляем актуальный список активных пунктов
    getMenuItems()
  }

  // Открываем пункт меню с дочерними
  function openChildren (index: number) {
    openedLeftMenuChain.value.push(index)
    getMenuItems()
  }

  // Возврат на предыдущий уровень
  function goBack () {
    openedLeftMenuChain.value.pop()
    getMenuItems()
  }

  // Получение текущих пунктов меню в соответствии с цепочкой открытых пунктов
  function getMenuItems () {
    currentItem.value = null
    let tmpItems = menuItems.value
    for (const i in openedLeftMenuChain.value) {
      currentItem.value = tmpItems[openedLeftMenuChain.value[i]]
      tmpItems = tmpItems[openedLeftMenuChain.value[i]].children
    }
    leftMenuItems.value = tmpItems
  }

  return {
    loadMenuItems,
    items: leftMenuItems,
    openChildren,
    goBack,
    currentItem,
    canGoBack: computed(() => openedLeftMenuChain.value.length > 0)
  }
}
