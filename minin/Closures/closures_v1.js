function urlGenerator(domain) {
  return function (url) {
    return `https://www.${url}.${domain}`;
  };
}

const comUrl = urlGenerator("com");
const ruUrl = urlGenerator("ru");

console.log(ruUrl("Yandex"));
console.log(ruUrl("Vkontakte"));
console.log(comUrl("Google"));
console.log(comUrl("Netflix"));
console.log(comUrl("Vkontakte"));
