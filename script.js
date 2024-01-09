//Adicionar validação se o livro já existe ou não
//Máximo de 10 mil paginas
const cards = document.querySelector('#cards')
const addBook = document.querySelector('#addBook')
const modal = document.querySelector('dialog')
const done = document.querySelector('#done')
const form = document.querySelector('form')

const library = []

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
    let title = document.querySelector('#book_title').value
    let author = document.querySelector('#book_author').value
    let pages = document.querySelector('#book_pages').value
    let status = document.querySelector('#status')

    let book = new Book(title, author, pages, status)
    library.push(book)
    showBooks()

    form.reset()
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
        status.classList.add('read')
        status.textContent = library[i].status

        let remove = document.createElement('button')
        remove.classList.add('remove')
        remove.textContent = 'Remover'

        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(status)
        card.appendChild(remove)
        cards.appendChild(card)
    }
}