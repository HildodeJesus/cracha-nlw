const linksSocialMedia = {
  github: 'hildodejesus',
  youtube: 'channel/UCnT_eAnGR5A_4ebJqzewcIA',
  facebook: 'maykbrito',
  instagram: 'hildoneto.dev',
  twitter: 'jakelinytec'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    // Criamos um let que armazena os filhos do socialLinks usando o .children para chamr os filhos.
    const social = li.getAttribute('class') // Essa const guarda as class das li, que corresponde ao nome no objeto
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
    // Chamamos o href (atributo da tag a) e passamos o valor a ele.
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url) // pegou as informações na api de qualquer forma
  .then(response => response.json()) // transformamos o arquivo em json
  .then(data => { // guardamos o arquivo .json no data
    userName.textContent = data.name // invocamos a teg que queremos mudar o conteudo e o mudamos
    userBio.textContent = data.bio
    userUrl.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGitHubProfileInfos()