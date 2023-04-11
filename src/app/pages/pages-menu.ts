export const PAGES_LINKS = [
    {
      title: 'Dashboard',
      icon: 'activity-outline',
      link: '/pages/dashboard',
      isActive: true,
    },
    {
      title: 'Shipsy Orders',
      icon: 'activity-outline',
      children: [
      {
        title: 'Add New',
        link: '/pages/shipsyorders/add',
        icon: 'add',
        isActive: true,
      },
      {
        title: 'View All',
        icon: 'format_list_bulleted',
        link: '/pages/shipsyorders/list',
        isActive: true,
      },
      {
        title: 'View Pending',
        icon: 'watch_later',
        link: '/pages/shipsyorders/pending',
        isActive: true,
      },
      {
        title: 'View Cancel',
        icon: 'cancel',
        link: '/pages/shipsyorders/cancel',
        isActive: true,
      },
    ],
    },
  ]