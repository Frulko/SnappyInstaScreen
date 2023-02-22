const webview = document.querySelector('webview');

// el.style.width = window.innerWidth + 'px';
// el.style.height = window.innerHeight + 'px';

webview.addEventListener('dom-ready', function () {
  const css = /* css */`
    .xeq5yr9,
    ._aak6{
      display : none !important;
    }
    .xnz67gz{
      background: red !important;
    }

    ._aaoe{
      display : none !important;
    }

    .x1porb0y.x1porb0y{
      width: 100% !important;
    }

    ._abb3, .x8j4wrb{
      display: none !important;
    }

    .x1kcpa7z.x1kcpa7z{
      pointer-events: none !important;
    }

    footer.xvbhtw8{
      pointer-events: none !important;
    }

    .xw2csxc.xrt01vj,
    ._ab8w._ab94._ab99._ab9f._ab9m._ab9p._abcm,
    section._aamu._ae3_._ae47._ae48,
    ._ae2s._ae3v._ae3w,
    ._acao._acat, a._acao._acat, a._acao._acat:visited,
    ._aasm,
    ._abl-{
      pointer-events: none !important;
    }

    /* ._acay, */
    ._aasm,
    ._abl-{
      display: none !important;
    }

    ._aarg{
      pointer-events: none !important;
    }
  `
  console.log('-->')
  webview.insertCSS(css)

});

// webview.addEventListener('dom-ready', function () {
//   console.log('--<w')
//   webview.insertCSS('html,body{ background-color: #FF0000 !important;}')
// });


const current = -1;
const instagram_accounts = [
  { href: 'https://www.instagram.com/3cm_lin/', name: '3cm_lin', profilePicture: require('./img/11232649_1595557643994646_1139084805_a.jpg')},
  { href: 'https://www.instagram.com/snappythekangaroo/', name: 'snappythekangaroo', profilePicture: require('./img/14733195_1798785580339872_6165366677996306432_a.jpg')},
  { href: 'https://www.instagram.com/alksko/', name: 'alksko', profilePicture: require('./img/314656294_834048857912418_3327879007863840483_n.jpg')},
  { href: 'https://www.instagram.com/beer___chen/', name: 'beer___chen', profilePicture: require('./img/331614815_1387101652060413_2710415714988690729_n.jpg')},
  { href: 'https://www.instagram.com/benzank/', name: 'benzank', profilePicture: require('./img/284572580_534424598361932_2808288476836167865_n.jpg')},
  { href: 'https://www.instagram.com/shusaku1977/', name: 'shusaku1977', profilePicture: require('./img/51694373_1343533495771624_3790974921291595776_n.jpg')},
  { href: 'https://www.instagram.com/hoodass/', name: 'hoodass', profilePicture: require('./img/286418193_161209863066646_8289812443628477331_n.jpg')},
  { href: 'https://www.instagram.com/hushartist/', name: 'hushartist', profilePicture: require('./img/248611139_848616692467520_7314265106293823948_n.jpg')},
  { href: 'https://www.instagram.com/iamslip/', name: 'iamslip', profilePicture: require('./img/72781253_472917560245004_338777610035134464_n.jpg')},
  { href: 'https://www.instagram.com/jamie_rawlings_artist/', name: 'jamie_rawlings_artist', profilePicture: require('./img/279521875_683512482935660_1612378133208279526_n.jpg')},
  { href: 'https://www.instagram.com/johnyuyi/', name: 'johnyuyi', profilePicture: require('./img/20225770_1397590113691303_5387235122128879616_n.jpg')},
  { href: 'https://www.instagram.com/popovysisters/', name: 'popovysisters', profilePicture: require('./img/10523273_589042361214122_116069153_a.jpg')},
  { href: 'https://www.instagram.com/pouyasnap/', name: 'pouyasnap', profilePicture: require('./img/131049516_2686825134916597_5370924487796392095_n.jpg')},
  { href: 'https://www.instagram.com/shamsiahassani/', name: 'shamsiahassani', profilePicture: require('./img/317910790_822270312396594_7210288018613425488_n.jpg')},
  { href: 'https://www.instagram.com/takashidongjing/', name: 'takashidongjing', profilePicture: require('./img/92290872_295631641419124_7881427269204312064_n.jpg')},
  { href: 'https://www.instagram.com/theonigiriart/', name: 'theonigiriart', profilePicture: require('./img/315207132_518574976842501_5137628215016130268_n.jpg')},
  { href: 'https://www.instagram.com/vincent_bal/', name: 'vincent_bal', profilePicture: require('./img/13269327_138424356561466_1450273792_a.jpg')},
 
];


const bottomEl = document.querySelector('.bottom_bar');
const divBottomEl = document.createElement('div');

bottomEl.appendChild(divBottomEl);

instagram_accounts.forEach(({ href, name, profilePicture }, index) => {

  const linkAccountEl = document.createElement('button');
  linkAccountEl.setAttribute('data-link', href);

  const imgWrapperEl = document.createElement('span');
  imgWrapperEl.classList.add('img_wrapper');
  const imgEl = document.createElement('img');

  imgEl.src = profilePicture;

  const spanEl = document.createElement('span');
  spanEl.innerText = name;

  imgWrapperEl.appendChild(imgEl);
  linkAccountEl.appendChild(imgWrapperEl);
  linkAccountEl.appendChild(spanEl);

  divBottomEl.appendChild(linkAccountEl);

  linkAccountEl.addEventListener('click', () => {
    console.log('-->', webview.loadURL(href));
    bottomEl.querySelectorAll('button').forEach((el) => el.classList.remove('active') );
    linkAccountEl.classList.add('active');
    current = index;
  })
})



if (module.hot) {
  module.hot.dispose(function (data) {
    // module is about to be replaced.
    // You can save data that should be accessible to the new asset in `data`
    data.updated = Date.now();
  });

  module.hot.accept(function (getParents) {
    // module or one of its dependencies was just updated.
    // data stored in `dispose` is available in `module.hot.data`
    let { updated } = module.hot.data;
  });
}