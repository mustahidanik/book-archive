const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    searchField.value = '';
    const url = ` https://openlibrary.org/search.json?q=${searchText} `;

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
};
const displaySearchResult = books => {
    const bookNum = document.getElementById('num-of-book');
    bookNum.innerHTML = ` <h3> Total Number Of Books: ${books.length} </h3>`;

    const searchResult = document.getElementById('search-result');
    books.forEach(book => {

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        
        <div class="card h-100">
    <img class="card-img-top" alt="..." src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg ">
            <div class="card-body">
            <h5 class="card-title"> Name:${book.title}</h5>
                <h5 class="card-title"> Author:${book.author_name ? book.author_name : ""}</h5>
                <h5 class="card-title"> Publisher:${book.publisher ? book.publisher[0] : ""}</h5>
                <h5 class="card-title"> Publishing Year${book.first_publish_year ? book.publish_year[0] : ""}</h5>
                
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}