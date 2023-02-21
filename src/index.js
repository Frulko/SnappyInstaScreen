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

    ._aasm,
    ._abl-{
      display: none !important;
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

  { href: 'https://www.instagram.com/3cm_lin/', name: '3cm_lin', profilePicture: require('./img/11232649_1595557643994646_1139084805_a.jpg')},
  { href: 'https://www.instagram.com/snappythekangaroo/', name: 'snappythekangaroo', profilePicture: require('./img/14733195_1798785580339872_6165366677996306432_a.jpg')},
  { href: 'https://www.instagram.com/3cm_lin/', name: '3cm_lin', profilePicture: require('./img/11232649_1595557643994646_1139084805_a.jpg')},
  // { href: 'https://www.instagram.com/snappythekangaroo/', name: 'snappythekangaroo', profilePicture: require('./img/14733195_1798785580339872_6165366677996306432_a.jpg')},
  // { href: 'https://www.instagram.com/3cm_lin/', name: '3cm_lin', profilePicture: require('./img/11232649_1595557643994646_1139084805_a.jpg')},
  // { href: 'https://www.instagram.com/snappythekangaroo/', name: 'snappythekangaroo', profilePicture: require('./img/14733195_1798785580339872_6165366677996306432_a.jpg')},
  // { href: 'https://www.instagram.com/3cm_lin/', name: '3cm_lin', profilePicture: require('./img/11232649_1595557643994646_1139084805_a.jpg')},
  // { href: 'https://www.instagram.com/snappythekangaroo/', name: 'snappythekangaroo', profilePicture: require('./img/14733195_1798785580339872_6165366677996306432_a.jpg')},
  // { href: 'https://www.instagram.com/3cm_lin/', name: '3cm_lin', profilePicture: require('./img/11232649_1595557643994646_1139084805_a.jpg')},
  // { href: 'https://www.instagram.com/snappythekangaroo/', name: 'snappythekangaroo', profilePicture: require('./img/14733195_1798785580339872_6165366677996306432_a.jpg')},
  // { href: 'https://www.instagram.com/3cm_lin/', name: '3cm_lin', profilePicture: require('./img/11232649_1595557643994646_1139084805_a.jpg')},
  // { href: 'https://www.instagram.com/snappythekangaroo/', name: 'snappythekangaroo', profilePicture: require('./img/14733195_1798785580339872_6165366677996306432_a.jpg')},
];


const bottomEl = document.querySelector('.bottom_bar');

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

  bottomEl.appendChild(linkAccountEl);

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