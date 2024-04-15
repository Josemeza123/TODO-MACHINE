import "../style/TodoSearch.css";

const TodoSearch = ({ searchValue, setSearchValue }) => {
  function recibir(e) {
    // console.log('search');
    // console.log(e);
    setSearchValue(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="cortar"
        className="TodoSearch"
        onChange={recibir}
        value={searchValue}
      />
    </div>
  );
};

export default TodoSearch;
