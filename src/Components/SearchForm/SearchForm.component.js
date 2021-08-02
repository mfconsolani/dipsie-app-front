import './SearchForm.styles.css';
import { Button } from '../index';

const SearchForm = ({ onSubmit }) => {

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>ID Candidato</label>
                <input type="text" id="idCandidate" required />
                <Button type="submit" name="Buscar" />
            </div>
        </form>
    )
}


export default SearchForm;