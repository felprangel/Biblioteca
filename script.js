//Adicionar validação se o livro já existe ou não
//Máximo de 10 mil paginas
const cards = document.querySelector('#cards')
const addBook = document.querySelector('#addBook')
const modal = document.querySelector('dialog')

const library = []

addBook.addEventListener('click', () => {
    modal.showModal()
})

function Book(title, author, pages, status){
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

function addBookToLibrary(){
    const book1 = new Book('O Código Da Vinci', 'Dan Brown', '665', 'Lido')
    const book2 = new Book('Harry Potter e a Pedra Filosofal', 'J. K. Rowling', '312', 'Não Lido')
    const book3 = new Book('Dom Quixote', 'Miguel de Cervantes', '1033', 'Lido')
    library.push(book1)
    library.push(book2)
    library.push(book3)
}

function showBooks(){
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
        status.textContent = 'Lido'

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

addBookToLibrary()
showBooks()