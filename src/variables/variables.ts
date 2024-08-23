export const logo: string[] = [
  '███╗░░░███╗██╗██╗░░██╗░█████╗░██╗░░░██╗░░░░█████╗░░█████╗░',
  '████╗░████║██║██║░░██║██╔══██╗██║░░░██║░░░██╔══██╗██╔══██╗',
  '██╔████╔██║██║███████║███████║██║░░░██║░░░██║░░╚═╝██║░░██║',
  '██║╚██╔╝██║██║██╔══██║██╔══██║██║░░░██║░░░██║░░██╗██║░░██║',
  '██║░╚═╝░██║██║██║░░██║██║░░██║╚██████╔╝██╗╚█████╔╝╚█████╔╝',
  '╚═╝░░░░░╚═╝╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░╚═════╝░╚═╝░╚════╝░░╚════╝░'
]

export const navigation: {
  name: string,
  path: string,
  componentName: string
}[] = [
  {
    path: '/',
    name: 'home',
    componentName: 'HomeView.vue'
  },
  {
    path: '/about',
    name: 'about',
    componentName:'AboutView.vue'
  },
  {
    path: '/texts',
    name: 'texts',
    componentName: 'TextsView.vue'
  },
  {
    path: '/code',
    name: 'code',
    componentName: 'CodeView.vue'
  },
  {
    path: '/contact',
    name: 'contact',
    componentName: 'ContactView.vue'
  }
]
