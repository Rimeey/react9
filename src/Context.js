import { createContext, useReducer } from "react";
import BookDemo from './demo';
import useModal from "./Hooks/useModal";

const MyBook = createContext();

export const Context = ({ children }) => {
    // modal window state
    const [modal, handlerOpen, handlerClose] = useModal();

    // Books state
    const reducer = (books, action) => {
        switch (action.type) {
            case "ADD" : return [...books, action.payload];
            case "DELETE" : return books;
            case "EDIT" : return books;
            case "SORT" : return books.toSorted((a,b) => a[action.payload] < b[action.payload] && -1);
            case "SEARCH": return books.filter(elem => elem.title.includes(action.payload));
            default: return books;
        }
    }

    const [books, despatch] = useReducer(reducer, []);

    const handlerSortable = (field) => {
        despatch({type: "SORT", payload:field});
    }

    const handlerSearch = (str) => {
        despatch({type: "SEARCH", payload:str});
    }

    const handlerAdd = (t,a,y,p,p2,c) => {
        let obj = {
            id: Date.now(),
            title: t.current.value,
            author: a.current.value,
            year: y.current.value,
            pages: p.current.value,
            publishing: p2.current.value,
            count: c.current.value
        };
        
        despatch({type: "ADD", payload: obj});
    }

    const value = {books, despatch, modal, handlerOpen, handlerClose, handlerSortable, handlerSearch, handlerAdd};

    return (
        <MyBook.Provider value={value}>{children}</MyBook.Provider>
    )
}

export default MyBook;