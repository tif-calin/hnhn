// from: https://gist.github.com/frabert/48b12088441f6195ea9292c2a5a77e3a?permalink_comment_id=4139060#gistcomment-4139060

// ==UserScript==
// @name    hnhn
// @match   https://news.ycombinator.com/*
// ==/UserScript==
for (let link of document.querySelectorAll('.titlelink')) {
  if (link.attributes['hasIcon'] != 'true') {
    const domain = new URL(link.href).hostname;
    const imageUrl = `https://icons.duckduckgo.com/ip3/${domain}.ico`;

    const image = document.createElement('img');
    image.src = imageUrl;
    image.className = 'hnhn-link-icon';
    link.prepend(image);
    link.attributes['hasIcon'] = 'true';
  }
}
