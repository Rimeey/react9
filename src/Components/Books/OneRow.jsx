import './books.scss';
import { Button } from 'react-bootstrap';
import { MdEdit as Edit, MdDeleteSweep as Delete } from "react-icons/md";

export default function OneRow({ id, title, author, year, publishing, pages, count }) {

    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{author}</td>
            <td>{year}</td>
            <td>{publishing}</td>
            <td>{pages}</td>
            <td>{count}</td>
            <td><Button variant='primary'><Edit/></Button> <Button variant='danger'><Delete/></Button></td>
        </tr>
    )
}