import type { LogoASCII } from '@/types'

export const logoMIHAUCO: LogoASCII = {
  lines: [
    '███╗░░░███╗██╗██╗░░██╗░█████╗░██╗░░░██╗░░░░█████╗░░█████╗░',
    '████╗░████║██║██║░░██║██╔══██╗██║░░░██║░░░██╔══██╗██╔══██╗',
    '██╔████╔██║██║███████║███████║██║░░░██║░░░██║░░╚═╝██║░░██║',
    '██║╚██╔╝██║██║██╔══██║██╔══██║██║░░░██║░░░██║░░██╗██║░░██║',
    '██║░╚═╝░██║██║██║░░██║██║░░██║╚██████╔╝██╗╚█████╔╝╚█████╔╝',
    '╚═╝░░░░░╚═╝╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░╚═════╝░╚═╝░╚════╝░░╚════╝░'
  ],
  fontSize: 10,
  width: 350
}



export const logoMICHALDEV: LogoASCII = {
  lines: [
    '███╗░░░███╗██╗░██████╗██╗░░██╗░█████╗░██╗░░░░░░░░██████╗░███████╗██╗░░░██╗',
    '████╗░████║██║██╔════╝██║░░██║██╔══██╗██║░░░░░░░░██╔══██╗██╔════╝██║░░░██║',
    '██╔████╔██║██║██║░░░░░███████║███████║██║░░░░░░░░██║░░██║█████╗░░██║░░░██║',
    '██║╚██╔╝██║██║██║░░░░░██╔══██║██╔══██║██║░░░░░░░░██║░░██║██╔══╝░░╚██╗░██╔╝',
    '██║░╚═╝░██║██║╚██████╗██║░░██║██║░░██║███████╗██╗██████╔╝███████╗░╚████╔╝░',
    '╚═╝░░░░░╚═╝╚═╝░╚═════╝╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝╚═╝╚═════╝░╚══════╝░░╚═══╝░░'
  ],
  fontSize: 10,
  width: 446
}

export const navigation: {
  name: string,
  path: string,
  componentName: string,
  showInNavigation: boolean
}[] = [
  {
    path: '/',
    name: 'home',
    componentName: 'HomeView.vue',
    showInNavigation: true
  },
  {
    path: '/about',
    name: 'about',
    componentName:'AboutView.vue',
    showInNavigation: true
  },
  {
    path: '/texts',
    name: 'texts',
    componentName: 'TextsView.vue',
    showInNavigation: true
  },
  // {
  //   path: '/code',
  //   name: 'code',
  //   componentName: 'CodeView.vue'
  // },
  {
    path: '/contact',
    name: 'contact',
    componentName: 'ContactView.vue',
    showInNavigation: true
  },
  {
    path: '/privacy',
    name: 'privacy',
    componentName: 'PrivacyView.vue',
    showInNavigation: false
  }
]
