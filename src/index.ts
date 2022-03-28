import './index.scss'
import MKInfo from './MKInfo'

const mainEl: HTMLElement = document.querySelector('#mk-info')
new MKInfo(mainEl).start()
