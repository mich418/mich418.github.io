(()=>{"use strict";var e={147:(e,t,n)=>{e.exports=n.p+"assets/f6ec043996f712f4b5b2.jpeg"},432:e=>{e.exports="# Change log\n\nList of changes in project will be documented in this file.\n\nIt's nothing special, I just created it to learn more / play with changelog format. Based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)\n\n## [1.3.0] - 2021-11-04\n\n### Added\n\n- 'changelog' command (prints project changelog)\n- 'repo' command (opens project repository)\n- eslint and stylelint\n\n### Changed\n\n- skip \"lazy print\" on spacebar keyup\n\n### Fixed\n\n- eslint and stylelint errors\n- other minor things / improvements\n\n\n## [1.2.0] - 2022-11-02\n\n### Added\n\n- readme\n- changelog\n- clean dist folder on dev and prod build\n- auto generate CNAME for github pages on predeploy\n\n### Fixed\n\n- npm vulnerabilities\n\n## [1.1.0] - 2022-10-31\n\n### Added\n\n- js & scss helpers\n\n### Fixed\n\n- better mobile support\n- other small fixes\n\n## [1.0.0] - 2022-10-31\n\n### Added\n\n- app with all basic functionalities\n- gh-pages to deploy project as github page\n\n[1.3.0]: https://github.com/mihauco/mihauco.github.io/compare/v1.2.0...v1.3.0\n[1.2.0]: https://github.com/mihauco/mihauco.github.io/compare/v1.1.0...v1.2.0\n[1.1.0]: https://github.com/mihauco/mihauco.github.io/compare/v1.0.0...v1.1.0\n[1.0.0]: https://github.com/mihauco/mihauco.github.io/releases/tag/v1.0.0\n"}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{function e(e){return new Promise((t=>{setTimeout((()=>{t(e)}),e)}))}var t=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))};const i=JSON.parse('{"helloText":{"en":"Hello! I\'m Michal, and that\'s[100].[100].[100].[500] my website.","pl":"Cześć! Jestem Michał, a to[100].[100].[100].[500] moja strona."},"helloMobileText":{"en":"Experience on small/mobile screens could be not as good as on desktop devices, still working on improvements.","pl":"Użytkowanie na małych ekranach / urządzeniach mobilnych może nie być tak dobre jak na komputerach, ciągle pracuję nad usprawnieniami."},"helloHelpInfo":{"en":"Type in \'help\' command to see what you can do here.","pl":"Wprowadź komendę \'help\' żeby zobaczyć co możesz zrobić."},"unknownProgram":{"en":"Not sure what you mean by \'${0}\'. Type in \'help\' to see the list of available commands.","pl":"Nie jestem pewien co to \'${0}\'. Wprowadź komendę \'help\' aby zobaczyć dostępne komendy."},"options.theme.light":{"en":"light theme","pl":"jasny motyw"},"options.theme.dark":{"en":"dark theme","pl":"ciemny motyw"},"options.language.polish":{"en":"polish","pl":"polski"},"options.language.english":{"en":"english","pl":"angielski"},"options.unknownThemeError":{"en":"Unknown theme ${0}. Available themes: ${1}.","pl":"Nieznany motyw ${0}. Dostępne motywy: ${1}."},"options.unknownLangError":{"en":"Unknown language: ${0}. Available languages: ${1}.","pl":"Nieznany język ${0}. Dostępne języki: ${1}."},"options.resetToChangeLang":{"en":"To change language, application needs to restart. Do you want to restart now? [Y/n]","pl":"Aby zmienić język, aplikacja musi uruchomić się ponownie. Czy chcesz zrestartować teraz? [T/n]"},"options.noPropsError":{"en":"You need to provide --theme and/or --lang values.","pl":"Musisz podać wartość dla parametrów --theme i/lub --lang."},"button.cancel":{"en":"Cancel","pl":"Anuluj"},"button.close":{"en":"Close","pl":"Zamknij"},"help.list.commandHeader":{"en":"Command","pl":"Komenda"},"help.list.descriptionHeader":{"en":"Description","pl":"Opis"},"help.additionalInfro":{"en":"Type \'help --command [commandName]\' to get more info","pl":"Wprowadź komendę \'help --command [nazwaKomendy]\' aby dowiedzieć się więcej."},"help.commandDoNotExist":{"en":"Unfortunately, command \'${0}\' doesn\'t exist.","pl":"Niestety, komenda \'${0}\' nie istnieje."},"help.forgotAboutIt":{"en":"Upps.. looks like someone forgot to add help for it...","pl":"Oho... chyba ktoś zapomniał dodać pomoc dla tej komendy..."},"help.helpProgramDescription":{"en":"Helps.","pl":"Pomaga."},"help.optionsProgram.description":{"en":"set some options","pl":"ustawia niektóre opcje"},"help.optionsProgram.title":{"en":"${0} usage","pl":"użycie ${0}"},"help.optionsProgram.themeName":{"en":"theme_name","pl":"nazwa_motywu"},"help.optionsProgram.themeOptionDescription":{"en":"changes theme (available themes: light, dark)","pl":"zmienia motyw (dostępne motywy: light (jasny), dark (ciemny))"},"help.optionsProgram.languageCode":{"en":"lang_code","pl":"kod_języka"},"help.optionsProgram.langOptionDescription":{"en":"changes language (available languages: en (english), pl (polish))","pl":"zmienia język (dostępne języki: en (angielski), pl (polski))"},"help.aboutProgram.description":{"en":"shows popup with some bio about me","pl":"pokazuje okienko z informacjami o mnie"},"help.aboutProgram.detailedDescription":{"en":"Just type in \'about\' and you will get some info about this page author.","pl":"Po prostu wprowadź komendę \'about\' a dostaniesz info o autorze tej strony."},"help.linksProgram.description":{"en":"prints list of links to my social media","pl":"wyświetla listę linków do moich mediów społecznościowych"},"help.linksProgram.detailedDescription":{"en":"Just type in \'links\' and you will get some social media links.","pl":"Po prostu wprowadź komendę \'links\' a dostaniesz kilka linków do social mediów."},"help.elorapProgram.detailedDescription":{"en":"Rap, dammit!","pl":"Rapsy, kurde blacha!"},"help.cvProgram.description":{"en":"download my CV","pl":"pobierz moje CV"},"help.cvProgram.detailedDescription":{"en":"Just type in \'cv\' to download my CV.","pl":"Po prostu wprowadź komendę \'cv\' aby pobrać moje CV"},"help.cvProgram.downloadInfo":{"en":"Sorry, CV is no longer available to download","pl":"Wybacz, chwilowo CV jest niedostępne"},"help.cvProgram.downloadProceed":{"en":"PRESS ENTER TO PROCEED","pl":"NACIŚNIJ ENTER ABY KONTUNUOWAĆ"},"elorap.text1":{"en":"Check this out: [link=${0}]${0}[/link]","pl":"Sprawdź to: [link=${0}]${0}[/link]"},"about.text":{"en":"I\'m Michal (spelling me-how or mihau), doing some front-end & javascript for fun and money. Walking dog and enjoying good beer in free time. Living in Cracow, Poland.","pl":"Jestem Michał, robię front-end & javascript dla zabawy i pieniędzy. Spacery z psem i rozkoszowanie się dobrym piwem w czasie wolnym. Kraków, Polska."},"help.changelog.description":{"en":"prints out changelog","pl":"pokazuje listę zmian (w języku angielskim)"},"help.changelog.detailedDescription":{"en":"Just type in \'changelog\' to see the changelog.","pl":"Po prostu wprowadź komendę \'changelog\' żeby zobaczyć listę zmian."},"help.repo.description":{"en":"go to github repository page","pl":"otwiera stronę repozytorium na githubie"},"help.repo.detailedDescription":{"en":"Opens github repository that contains source code of this page.","pl":"Otwiera repozytorium na githubie zawierajace kod źródłowy tej strony."},"repo.didnOpenMessage":{"en":"If your browser didn\'t open a link, just click on it: [link=${0}]${0}[/link]","pl":"Jeżeli twoja przeglądarka nie otworzyła linku, po prostu kliknij: [link=${0}]${0}[/link]"}}');var o=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))};const s=class{constructor(e){this.hidden=!1,this.mainCommand=e.mainCommand,this.i18n=e.i18n,this.description=e.description||"some program, not sure what it's doing...",this.hidden=e.hidden||!e.description,this.propsConfig=e.propsConfig||{}}getMainCommand(){return this.mainCommand}isHidden(){return this.hidden}getDescription(){return this.description}help(){return{print:{type:"print",output:this.i18n.key("help.forgotAboutIt")}}}run(e){return o(this,void 0,void 0,(function*(){const t=this.createPropsFromString(e),n=this.validateProps(t);return n?{err:n}:yield this.runCallback(t)}))}runCallback(e){return o(this,void 0,void 0,(function*(){return{err:null,data:{print:{type:"print",output:`Provided props?: ${!!e}`}}}}))}createPropsFromString(e){return e.replace(/\n.*/g,"").split(" ").filter((e=>!!e.trim().length)).reduce(((e,t)=>{if(t.match(/^--/)){const n=t.replace(/^--/,"").split("="),i=[n[0].toLocaleLowerCase()];n.length>1&&i.push(n[1]),e.push(i)}else e.length&&e[e.length-1]&&e[e.length-1].length<2&&e[e.length-1].push(t);return e}),[]).reduce(((e,t)=>{if(t.length)if(1===t.length)e[t[0].replace(/^no-/,"")]=!t[0].match(/^no-/);else if(2===t.length){let n;"false"===t[1]||"true"===t[1]?e[t[0]]="false"!==t[1]:(n=Number(t[1]))&&!isNaN(n)?e[t[0]]=n:e[t[0]]=t[1]}return e}),{})}validateProps(e){let t=null;for(const n in e){if(!this.propsConfig[n]){t=`Unknown property '${n}'`;break}if(typeof e[n]!==this.propsConfig[n].type){t=`Property '${n}' has wrong type. Expected ${this.propsConfig[n].type}, got ${typeof e[n]}.`;break}}return t}},r={setInitialLang:()=>localStorage.getItem("lang")||"en",setInitialTheme(){const e=localStorage.getItem("themeClass")||"theme-dark";return this.setTheme(e),e},saveLang(e){localStorage.setItem("lang",e)},saveTheme(e){localStorage.setItem("themeClass",e),this.setTheme(e)},setTheme(e){const t=document.body;t.className.match(/theme-.+?(\s|$)/)?t.className=t.className.replace(/theme-.+?(\s|$)/,`${e}$1`):t.classList.add(e)}};const a=class extends s{constructor(e){super({mainCommand:"options",description:e.key("help.optionsProgram.description"),i18n:e,propsConfig:{theme:{type:"string"},lang:{type:"string"}}}),this.themes={light:"theme-light",dark:"theme-dark"},this.langs={en:"en",pl:"pl"}}help(){return{print:[{type:"print",output:this.i18n.key("help.optionsProgram.title",this.mainCommand)},{type:"printKeyDescription",output:[{key:`${this.mainCommand} --theme [${this.i18n.key("help.optionsProgram.themeName")}]`,description:this.i18n.key("help.optionsProgram.themeOptionDescription")},{key:`${this.mainCommand} --lang [${this.i18n.key("help.optionsProgram.languageCode")}]`,description:this.i18n.key("help.optionsProgram.langOptionDescription")}]}]}}runCallback(e){return t=this,n=void 0,o=function*(){if(!e.theme&&!e.lang)return{err:this.i18n.key("options.noPropsError")};if(e.theme){const t=this.changeTheme(e.theme);if(t)return{err:t}}if(e.lang){const t=this.changeLang(e.lang);return t?{err:t}:{question:{text:this.i18n.key("options.resetToChangeLang"),callback:e=>(e&&"y"!==e.toLocaleLowerCase()&&"t"!==e.toLocaleLowerCase()||(window.location.href=window.location.href),{})}}}return{}},new((i=void 0)||(i=Promise))((function(e,s){function r(e){try{l(o.next(e))}catch(e){s(e)}}function a(e){try{l(o.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,a)}l((o=o.apply(t,n||[])).next())}));var t,n,i,o}changeTheme(e){return this.themes[e]?(r.saveTheme(this.themes[e]),null):this.i18n.key("options.unknownThemeError",[e,Object.keys(this.themes).join(", ")])}changeLang(e){return this.langs[e]?(r.saveLang(this.langs[e]),null):this.i18n.key("options.unknownLangError",[e,Object.keys(this.langs).join(", ")])}};var l=n(147);const c=class extends s{constructor(e){super({mainCommand:"about",description:e.key("help.aboutProgram.description"),i18n:e}),this.classNames={main:"about",image:"about__image",text:"about__text"}}help(){return{print:{type:"print",output:this.i18n.key("help.aboutProgram.detailedDescription")}}}runCallback(){return e=this,t=void 0,i=function*(){const e=new class{constructor(e,t){this.classNames={main:"dialog",dialogWindow:"dialog__window",dialogHeader:"dialog__header",dialogName:"dialog__name",dialogClose:"dialog__close",dialogContent:"dialog__content",dialogContentDefault:"dialog__content--default",dialogButtons:"dialog__buttons",dialogButtonsMulti:"dialog__buttons--multi",dialogButton:"dialog__button",dialogButtonOk:"dialog__button--ok",dialogButtonNo:"dialog__button--no"},this.config=Object.assign({name:"Dialog",buttonOk:"OK",width:400,showClose:!0},t||{}),this.mainElement=document.createElement("div"),this.mainElement.classList.add(this.classNames.main);const n=document.createElement("div");n.classList.add(this.classNames.dialogWindow),n.style.width=`${this.config.width}px`,this.config.height&&(n.style.minHeight=`${this.config.height}px`),this.mainElement.appendChild(n);const i=document.createElement("div");i.classList.add(this.classNames.dialogHeader);const o=document.createElement("span");o.classList.add(this.classNames.dialogName),o.innerHTML=this.config.name,i.appendChild(o),this.config.showClose&&(this.dialogClose=document.createElement("button"),this.dialogClose.classList.add(this.classNames.dialogClose),i.appendChild(this.dialogClose)),n.appendChild(i);const s=document.createElement("div");s.classList.add(this.classNames.dialogContent),"string"==typeof e?(s.innerText=e,s.classList.add(this.classNames.dialogContentDefault)):s.appendChild(e),n.appendChild(s);const r=document.createElement("div");r.classList.add(this.classNames.dialogButtons),this.config.buttonNo&&(this.buttonNo=document.createElement("button"),this.buttonNo.classList.add(this.classNames.dialogButton,this.classNames.dialogButtonNo),this.buttonNo.innerText=this.config.buttonNo,r.appendChild(this.buttonNo),r.classList.add(this.classNames.dialogButtonsMulti)),this.buttonOk=document.createElement("button"),this.buttonOk.classList.add(this.classNames.dialogButton,this.classNames.dialogButtonOk),this.buttonOk.innerText=this.config.buttonOk,r.appendChild(this.buttonOk),n.appendChild(r)}open(){return document.body.appendChild(this.mainElement),new Promise((e=>{let t,n;const i=()=>{this.buttonOk.removeEventListener("click",i),document.body.removeEventListener("keyup",o),this.buttonNo&&void 0!==t&&this.buttonNo.removeEventListener("click",t),this.dialogClose&&void 0!==n&&this.dialogClose.removeEventListener("click",n),this.close(),e(!0)};this.buttonOk.addEventListener("click",i);const o=e=>{"escape"===e.key.toLocaleLowerCase()&&i()};document.body.addEventListener("keyup",o),this.config.showClose&&this.dialogClose&&(n=()=>{this.dialogClose.removeEventListener("click",n),this.buttonOk.removeEventListener("click",i),document.body.removeEventListener("keyup",o),this.buttonNo&&void 0!==t&&this.buttonNo.removeEventListener("click",t),this.close(),e(!0)},this.dialogClose.addEventListener("click",n)),this.buttonNo&&(t=()=>{this.buttonNo.removeEventListener("click",t),this.buttonOk.removeEventListener("click",i),document.body.removeEventListener("keyup",o),this.dialogClose&&void 0!==n&&this.dialogClose.removeEventListener("click",n),this.close(),e(!1)},this.buttonNo.addEventListener("click",t))}))}close(){this.mainElement.remove()}}(this.getContent(),{name:"About",width:600,buttonOk:this.i18n.key("button.close")});return yield e.open(),{err:null}},new((n=void 0)||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}));var e,t,n,i}getContent(){const e=document.createElement("div");e.classList.add(this.classNames.main);const t=document.createElement("img");t.classList.add(this.classNames.image),t.src=l;const n=document.createElement("p");return n.classList.add(this.classNames.text),n.innerText=this.i18n.key("about.text"),e.appendChild(t),e.appendChild(n),e}};const p=class extends s{constructor(e){super({mainCommand:"links",description:e.key("help.linksProgram.description"),i18n:e})}help(){return{print:{type:"print",output:this.i18n.key("help.linksProgram.detailedDescription")}}}runCallback(){return e=this,t=void 0,i=function*(){return{err:null,data:{print:{type:"printKeyDescription",output:[{key:"linkedin:",description:"[link=https://www.linkedin.com/in/mihauco]linkedin.com/in/mihauco[/link]"},{key:"twitter:",description:"[link=https://twitter.com/mihauco]twitter.com/mihauco[/link]"},{key:"github:",description:"[link=https://github.com/mihauco]github.com/mihauco[/link]"}]}}}},new((n=void 0)||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}));var e,t,n,i}};const h=class extends s{constructor(e){super({mainCommand:"elorap",i18n:e}),this.rapList=["https://www.youtube.com/watch?v=F86i8gPgquI","https://www.youtube.com/watch?v=GbAHs3Bs8I4","https://www.youtube.com/watch?v=H30R1BUpRF8","https://www.youtube.com/watch?v=DDZFSRBCSdo"]}help(){return{print:{type:"print",output:this.i18n.key("help.elorapProgram.detailedDescription")}}}runCallback(){return e=this,t=void 0,i=function*(){const e=Math.round(Math.random()*(this.rapList.length-1));return{data:{print:{type:"print",output:this.i18n.key("elorap.text1",this.rapList[e])}}}},new((n=void 0)||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}));var e,t,n,i}};const u=class extends s{constructor(e,t){super({mainCommand:"help",i18n:e,propsConfig:{command:{type:"string"}}}),this.programInstances=t}help(){return{print:{type:"print",output:this.i18n.key("help.helpProgramDescription")}}}runCallback(e){return t=this,n=void 0,o=function*(){if(e.command&&"string"==typeof e.command)return{err:null,data:this.getCommandHelpPrintData(e.command)};const t=[{key:this.i18n.key("help.list.commandHeader"),description:this.i18n.key("help.list.descriptionHeader")}];t.push({key:new Array(t[0].key.length).fill("-").join(""),description:new Array(t[0].description.length).fill("-").join("")});for(const e of this.programInstances)e.isHidden()||t.push({key:e.getMainCommand(),description:e.getDescription()});return{err:null,data:{print:[{type:"printKeyDescription",output:t},{type:"print",output:""},{type:"print",output:this.i18n.key("help.additionalInfro")}]}}},new((i=void 0)||(i=Promise))((function(e,s){function r(e){try{l(o.next(e))}catch(e){s(e)}}function a(e){try{l(o.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,a)}l((o=o.apply(t,n||[])).next())}));var t,n,i,o}getCommandHelpPrintData(e){const t=this.programInstances.find((t=>t.getMainCommand()===e));return t?t.help():{print:{type:"print",output:this.i18n.key("help.commandDoNotExist",e)}}}};const d=class extends s{constructor(e){super({mainCommand:"cv",description:e.key("help.cvProgram.description"),i18n:e})}help(){return{print:{type:"print",output:this.i18n.key("help.cvProgram.detailedDescription")}}}runCallback(){return e=this,t=void 0,i=function*(){return{data:{print:{type:"print",output:this.i18n.key("help.cvProgram.downloadInfo")}}}},new((n=void 0)||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}));var e,t,n,i}downloadCV(){const e=document.createElement("a");e.style.display="none",e.target="_blank",e.href=null,e.download="xxx.pdf",document.body.appendChild(e),e.click(),setTimeout((()=>{e.remove()}),100)}};var m=n(432);const g=class extends s{constructor(e){super({mainCommand:"changelog",description:e.key("help.changelog.description"),i18n:e})}help(){return{print:{type:"print",output:this.i18n.key("help.changelog.detailedDescription")}}}runCallback(){return e=this,t=void 0,i=function*(){return{data:{print:{type:"print",output:this.getFormattedChangelog()}}}},new((n=void 0)||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}));var e,t,n,i}getFormattedChangelog(){const e=m.match(/\[\d.\d.\d\]:.+/gm),t=Array.isArray(e)?e.reduce(((e,t)=>{if("string"==typeof t){const n=t.split(": ");2===n.length&&(e[n[0]]=n[1])}return e}),{}):{};return m.replace(/\[\d.\d.\d\]:.+/gm,"").replace(/\n/g,"<nl>").replace(/^#.+?#/,"#").replace(/#{1,}/g,"").split("<nl>").filter((e=>e.trim())).map(((e,n)=>{const i=(e=e.trim()).match(/\[\d.\d.\d\]/);return i&&t[i[0]]&&(e=e.replace(/\[\d.\d.\d\]/,`[link=${t[i[0]]}]${i[0].replace(/\[|\]/g,"")}[/link]`)),e.match(/^[a-zA-Z]/)?e=`&nbsp;&nbsp;${e}`:e.match(/^-/)?e=`&nbsp;&nbsp;&nbsp;&nbsp;${e}`:n>0&&(e=`<br/>${e}`),e}))}};const y=class extends s{constructor(e){super({mainCommand:"repo",description:e.key("help.repo.description"),i18n:e})}help(){return{print:{type:"print",output:this.i18n.key("help.repo.detailedDescription")}}}runCallback(){return e=this,t=void 0,i=function*(){return window.open("https://github.com/mihauco/mihauco.github.io","_blank"),{data:{print:{type:"print",output:this.i18n.key("repo.didnOpenMessage","https://github.com/mihauco/mihauco.github.io")}}}},new((n=void 0)||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}));var e,t,n,i}};var v=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))};new class{constructor(n){r.setInitialTheme(),this.mainEl=n,this.mainEl.innerHTML="",this.conzole=new class{constructor(e,t="conzole"){this.busy=!1,this.inputHandlers=[],this.history=[],this.histroyIndex=-1,this.beforeHistroyInput="",this.currentActiveLine=null,this.speedUpLazyPrint=!1,this.mainElement=e,this.createClassNames(t),this.prepareMainElement()}print(n,i=!1,o){return t(this,void 0,void 0,(function*(){if(this.busy)throw new Error("Conzole is busy right now");this.busy=!0;const t=this.createNewLine(o),s="string"==typeof n?[n]:[...n],r=i?e=>{" "===e.key&&(this.speedUpLazyPrint=!0)}:null;r&&document.body.addEventListener("keyup",r);for(let n of s){const o=this.createNewSublineElement();if(t.appendChild(o),i)yield this.printLazy(o,n,"object"==typeof i?i:void 0),this.speedUpLazyPrint||(yield e(100));else{const e=n.match(/\[link=.*?].*?\[\/link\]/g);if(e)for(const t of e){const[,e,i]=t.match(/\[link=(.*?)](.*?)\[\/link\]/);n=n.replace(t,`<a class="${this.classNames.link}" href="${e}" target="_blank">${i}</a>`)}o.innerHTML=n}}r&&(document.body.removeEventListener("keyup",r),this.speedUpLazyPrint=!1),this.busy=!1}))}printKeyDescriptionList(e,n=3){return t(this,void 0,void 0,(function*(){const t=[];let i=0;for(const t of e)t.key.length>i&&(i=t.key.length);for(const o of e){const e=n+(i-o.key.length);t.push(`${o.key}${new Array(e).fill("&nbsp;").join("")}${o.description}`)}yield this.print(t)}))}input(){return t(this,void 0,void 0,(function*(){this.currentActiveLine=this.createNewInputLine();const e=t=>{if("Enter"===t.key){const t=this.currentActiveLine.value,n=this.createNewSublineElement();this.currentActiveLine.parentElement.classList.remove(this.classNames.lineUserInputActive),n.innerText=t,this.currentActiveLine.parentElement.appendChild(n),this.currentActiveLine.removeEventListener("keyup",e),this.currentActiveLine.remove(),this.addToHistory(t),this.resetHistoryActions(),t.trim()?this.executeInputHandlers(t):this.input()}else"ArrowUp"===t.key?this.goToPrevInHistory():"ArrowDown"===t.key?this.goToNextInHistory():this.histroyIndex=-1};this.currentActiveLine.addEventListener("keyup",e),this.currentActiveLine.focus()}))}question(e){const t=`${e}: `;return this.currentActiveLine=this.createNewInputLine(),this.currentActiveLine.value=t,new Promise((e=>{const n=()=>{this.currentActiveLine.value.length<t.length&&(this.currentActiveLine.value=t)},i=o=>{if("Enter"===o.key){const o=this.currentActiveLine.value,s=this.createNewSublineElement();this.currentActiveLine.parentElement.classList.remove(this.classNames.lineUserInputActive),s.innerText=o,this.currentActiveLine.parentElement.appendChild(s),this.currentActiveLine.removeEventListener("keyup",i),this.currentActiveLine.removeEventListener("input",n),this.currentActiveLine.remove(),e(o.replace(t,"").trim())}};this.currentActiveLine.addEventListener("keyup",i),this.currentActiveLine.addEventListener("input",n),this.currentActiveLine.focus()}))}focus(){this.currentActiveLine&&this.currentActiveLine.focus()}onInput(e){this.inputHandlers.push(e)}createClassNames(e){this.classNames={main:`${e}`,line:`${e}__line`,lineWithQuestion:`${e}__line--with-question`,lineUserInput:`${e}__line--user-input`,lineUserInputActive:`${e}__line--user-input-active`,userInput:`${e}__user-input`,subline:`${e}__subline`,link:`${e}__link`,question:`${e}__question`}}prepareMainElement(){this.mainElement.classList.add(this.classNames.main),this.mainElement.innerHTML=""}createNewLine(e){const t=document.createElement("div");return t.classList.add(this.classNames.line),e&&t.classList.add(`${this.classNames.line}--${e}`),this.mainElement.appendChild(t),t}createNewInputLine(){const e=this.createNewLine(),t=document.createElement("textarea");return t.spellcheck=!1,t.autocapitalize="off",e.classList.add(this.classNames.lineUserInput),e.classList.add(this.classNames.lineUserInputActive),t.classList.add(this.classNames.userInput),e.appendChild(t),t}createNewSublineElement(){const e=document.createElement("span");return e.classList.add(this.classNames.subline),e}printLazy(n,i,o){return t(this,void 0,void 0,(function*(){const t=o||{pauseMaxTime:70,pauseMinTime:10},s={};let r;for(;null!==(r=i.match(/\[\d+]/));)s[r.index]=Number(r[0].replace(/\[|]/g,"")),i=i.replace(r[0],"");const a=i.split("");let l="";for(let i=0;i<a.length;i++){if(s[i]&&!this.speedUpLazyPrint&&(yield e(s[i])),!this.speedUpLazyPrint){const n=(c=t,Object.prototype.hasOwnProperty.call(c,"pauseMinTime")?Math.round(Math.random()*(t.pauseMaxTime-t.pauseMinTime)+t.pauseMinTime):t.pauseMaxTime);yield e(this.speedUpLazyPrint?0:n)}l+=a[i],n.innerHTML=l}var c}))}executeInputHandlers(e){for(const t of this.inputHandlers)t(e)}addToHistory(e){this.history.unshift(e.replace(/\n$/,""))}goToPrevInHistory(){this.history.length&&(this.histroyIndex<0&&(this.beforeHistroyInput=this.currentActiveLine.value),this.histroyIndex+1<this.history.length?(this.histroyIndex+=1,this.currentActiveLine.value=this.history[this.histroyIndex]):(this.histroyIndex=-1,this.currentActiveLine.value=this.beforeHistroyInput)),this.moveCursorAtTheEnd()}goToNextInHistory(){this.histroyIndex>-1&&(0===this.histroyIndex?(this.histroyIndex=-1,this.currentActiveLine.value=this.beforeHistroyInput):(this.histroyIndex-=1,this.currentActiveLine.value=this.history[this.histroyIndex])),this.moveCursorAtTheEnd()}moveCursorAtTheEnd(){const e=this.currentActiveLine.value.length;this.currentActiveLine.setSelectionRange(e,e)}resetHistoryActions(){this.histroyIndex=-1,this.beforeHistroyInput=""}}(this.mainEl,"mk-info"),this.lang=this.getLang(),this.i18n=new class{constructor(e,t,n){this.translations=e,this.lang=t,this.fallback=n||t}setLang(e){this.lang=e}key(e,t){if(this.translations[e]){let n=this.translations[e][this.lang]||this.translations[e][this.fallback]||void 0;if("string"==typeof n){if(t){const e={};if("string"==typeof t)e[0]=t;else if(Array.isArray(t))for(const n in t)e[`${n}`]=t[n];else if("object"==typeof t)for(const n in t)e[`${n}`]=t[n];for(const t in e)n=n.replaceAll("${"+t+"}",e[t])}return n}}return e}}(i,this.lang,"en"),this.programs=[new a(this.i18n),new c(this.i18n),new p(this.i18n),new h(this.i18n),new d(this.i18n),new g(this.i18n),new y(this.i18n)],this.programs.push(new u(this.i18n,this.programs))}start(){return v(this,void 0,void 0,(function*(){yield this.printLogo(),yield this.conzole.print(""),yield this.printHelloMessage(),this.bindInputEvents(),this.bindAutoFocusToActiveLineEvent(),this.conzole.input()}))}bindAutoFocusToActiveLineEvent(){document.body.addEventListener("click",(()=>{this.conzole.focus()}))}getLang(){return r.setInitialLang()}printLogo(){return v(this,void 0,void 0,(function*(){const e="\n███╗░░░███╗██╗██╗░░██╗░█████╗░██╗░░░██╗░░░░█████╗░░█████╗░\n████╗░████║██║██║░░██║██╔══██╗██║░░░██║░░░██╔══██╗██╔══██╗\n██╔████╔██║██║███████║███████║██║░░░██║░░░██║░░╚═╝██║░░██║\n██║╚██╔╝██║██║██╔══██║██╔══██║██║░░░██║░░░██║░░██╗██║░░██║\n██║░╚═╝░██║██║██║░░██║██║░░██║╚██████╔╝██╗╚█████╔╝╚█████╔╝\n╚═╝░░░░░╚═╝╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░╚═════╝░╚═╝░╚════╝░░╚════╝░\n".split("\n").filter((e=>!!e.length));let t="v1.3.1|© 2022 Michal Koczkodon",n=-1;for(const t of e)t.length>n&&(n=t.length);yield this.conzole.print(e,{pauseMaxTime:3},"logo");const i=n-t.length+1;i>0?t=t.replace("|",new Array(i).fill("&nbsp;").join("")):t.split("|"),yield this.conzole.print(t,!1,"app-info")}))}printHelloMessage(){return v(this,void 0,void 0,(function*(){const e=[this.i18n.key("helloText"),...window.innerWidth<=600?[this.i18n.key("helloMobileText")]:[],this.i18n.key("helloHelpInfo")];yield this.conzole.print(e,!0)}))}bindInputEvents(){this.conzole.onInput((e=>v(this,void 0,void 0,(function*(){var t;const n=(null===(t=e.trim().match(/^.+?(\s|$)/)[0])||void 0===t?void 0:t.trim())||"",i=this.programs.find((e=>e.getMainCommand()===n));i?yield this.runProgram(i,e):yield this.conzole.print(this.i18n.key("unknownProgram",n)),this.conzole.input()}))))}runProgram(e,t){return v(this,void 0,void 0,(function*(){let n=!0,i=yield e.run(t.replace(/^.+?(\s|$)/,""));for(;n;){if(i.question||(n=!1),i.err&&(yield this.conzole.print(i.err)),i.data)if("string"==typeof i.data)yield this.conzole.print(i.data);else if(i.data.print){const e=Array.isArray(i.data.print)?i.data.print:[i.data.print];for(const t of e)"printLazy"===t.type?yield this.conzole.print(t.output,!0):"printKeyDescription"===t.type?yield this.conzole.printKeyDescriptionList(t.output):yield this.conzole.print(t.output)}if(i.question){const e=yield this.conzole.question(i.question.text);i=i.question.callback(e)}}}))}}(document.querySelector("#mk-info")).start()})()})();
//# sourceMappingURL=mkinfo.js.map