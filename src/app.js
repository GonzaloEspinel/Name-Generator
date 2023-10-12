/* eslint-disable */
let domains = []

window.onload = function () {
  let prona = ['the', 'our'];
  let adjs = ['great', 'best', 'organic'];
  let noun = ['olive', 'spanish', 'oliva'];
  let thing = ['oil', 'aceite']
  let tlds = ['.net', '.org', '.com', '.es', '.food', '.dev']




  prona.forEach((pron) => {
    adjs.forEach((adjs) => {
      noun.forEach((noun) => {
        thing.forEach((thing) => {
          tlds.forEach((tld) => {
            domains.push('www.' + pron + adjs + noun + thing + tld);
          })
        })
      })
    })
  })
  let domainsList = document.getElementsByTagName("ul");

  domains.forEach((domain) => {
    let domainItem = document.createElement("ul");
    domainItem.innerText = domain;
    domainsList[0].appendChild(domainItem);
  });
}

