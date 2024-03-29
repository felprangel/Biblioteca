const cards = document.querySelector('#cards')
const addBook = document.querySelector('#addBook')
const modal = document.querySelector('dialog')
const done = document.querySelector('#done')

const library = []

const notas = localStorage.getItem('library')
if (notas) {
    library.push(...JSON.parse(notas))
    showBooks()
}

const dismiss = ({target:modal}) => {
    if (modal.nodeName === 'DIALOG'){
        modal.close('dismiss')
    }
}

modal.addEventListener('click', dismiss)

addBook.addEventListener('click', () => {
    modal.showModal()
})

function Book(title, author, pages, status){
    this.title = title
    this.author = author
    this.pages = pages

    if (status.checked === true) {
        this.status = 'Lido'
    } else {
        this.status = 'Não Lido'
    }
}

done.addEventListener('click', () => {
    let title = document.querySelector('#book_title')
    let author = document.querySelector('#book_author')
    let pages = document.querySelector('#book_pages')
    let status = document.querySelector('#status')

    title.setCustomValidity('Digite o título do livro')
    author.setCustomValidity('Digite o autor do livro')
    pages.setCustomValidity('Digite o número de páginas do livro')

    if (title.validity.valueMissing) {
        title.reportValidity()
        return
    }

    if (author.validity.valueMissing) {
        author.reportValidity()
        return
    }

    if (pages.validity.valueMissing) {
        pages.reportValidity()
        return
    }

    let book = new Book(title.value, author.value, pages.value, status)
    library.push(book)
    localStorage.setItem('library', JSON.stringify(library))
    showBooks()

    title.value = ''
    author.value = ''
    pages.value = ''
    status.checked = false

    modal.close()
})

function showBooks(){
    cards.innerHTML = ''
    for (let i = 0; i < library.length; i++) {
        let card = document.createElement('div')
        card.classList.add('card')

        let title = document.createElement('h2')
        title.classList.add('title')
        title.textContent = library[i].title

        let author = document.createElement('h2')
        author.classList.add('author')
        author.textContent = library[i].author

        let pages = document.createElement('h2')
        pages.classList.add('pages')
        pages.textContent = `${library[i].pages} Páginas`

        let status = document.createElement('button')
        if (library[i].status === 'Lido') {
            status.classList.add('read')
        }
        status.textContent = library[i].status
        status.addEventListener('click', () => {
            status.classList.toggle('read')
            if (status.innerText === 'Lido') {
                status.innerText = 'Não Lido'
            } else {
                status.innerText = 'Lido'
            }
        })

        let remove = document.createElement('button')
        remove.classList.add('remove')
        remove.textContent = 'Remover'
        remove.setAttribute('data-index', i)
        remove.addEventListener('click', () => {
            let index = remove.getAttribute('data-index')
            library.splice(index, 1)
            localStorage.setItem('library', JSON.stringify(library))
            showBooks()
        })

        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(status)
        card.appendChild(remove)
        cards.appendChild(card)
    }
}