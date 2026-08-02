interface SearchBarProps {
    city: string;
    onCityChange: (city: string) => void;
    onSearch: () => void;
}

function SearchBar({ city, onCityChange, onSearch}: SearchBarProps) {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        onCityChange(e.target.value);
    }


    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if(e.key === "Enter") {
            onSearch();
        }
    }

    return (
        <div className="search-bar">
            <input
                type="text"
                value={city}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Введите город"
            />
            <button onClick={onSearch}>Найти</button>
        </div>
    );
}

export default SearchBar;