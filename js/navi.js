const createNavi = () => {

    const path = (window.location.pathname.includes('topics'))?'..':'./topics';

    console.log(path)

    return `
      <button class="menu-btn" popovertarget="menu">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 192 192" xml:space="preserve" aria-hidden="true">
            <path d="M 172 148.3125 L 20 148.3125 "></path>
            <path d="M 172 96 L 20 96 "></path>
            <path d="M 172 44.25 L 20 44.25"></path>
        </svg>
        <span class="sr-only">Open menu</span>
      </button>
    
      <nav popover id="menu">
        <button class="close-btn" popovertarget="menu" popovertargetaction="hide">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 192 192" xml:space="preserve" aria-hidden="true">
          <line x1="44" y1="148" x2="148" y2="44" stroke-width="8.67"></line>
          <line x1="148" y1="148" x2="44" y2="44" stroke-width="8.67"></line>
          </svg>
          <span class="sr-only">Close menu</span>
        </button>
        <ul>
          <li><a href="${path}/card/index.html">Card</a></li>
          <li><a href="${path}/grid-layout/index.html">Grid</a></li>
        </ul>
      </nav>
`}

const addNavi = () => {

    if(document.getElementById('menu')){
        console.log('schon da')
        return;
    }

    const navi = document.createElement('div')
    navi.setAttribute('id', 'navi');
    navi.innerHTML = createNavi();
    document.querySelector('body').appendChild(navi);

    const currentScript = document.currentScript;
    const baseUrl = currentScript ? currentScript.src.replace(/\/[^/]*$/, '/') : '';
    const cssUrl = baseUrl + '../css/navi.css';

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssUrl;
    document.head.appendChild(link);

}

addNavi()