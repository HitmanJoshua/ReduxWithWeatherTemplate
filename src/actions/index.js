//Action Creator 
export function selectBook(book){
    return {
        type: 'SELECT_BOOK',
        payload: book
    };
}