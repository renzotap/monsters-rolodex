import { ChangeEventHandler } from 'react';
import './search-box.styles.css';

// interface ISearchBoxProps {
//     className: string;
//     placeholder?: string|null;  /* ? -> means you can get string or null */
// }

// interface ISearchBoxProps {
//    onChangeHandler: (a: string) => void
// }

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className} `}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;