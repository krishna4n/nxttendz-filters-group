import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    selectedCategory,
    selectedRating,
    clearFilters,
    activeCategoryId,
    searchInput,
    onChangeSearchInput,
  } = props

  const onClickCategory = event => {
    selectedCategory(event.target.id)
  }
  const onClickRating = event => {
    selectedRating(event.target.id)
  }

  const onClickClearFilters = () => {
    clearFilters()
  }

  const onSearch = event => {
    onChangeSearchInput(event.target.value)
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onSearch}
          value={searchInput}
        />
        <BsSearch className="search-icon" />
      </div>
      <ul className="products-category-container">
        <h4>Category</h4>
        {categoryOptions.map(each => (
          <li key={each.categoryId}>
            <button
              type="button"
              className={`category-button ${
                activeCategoryId === each.categoryId ? 'activated-category' : ''
              }`}
              onClick={onClickCategory}
              id={each.categoryId}
            >
              {each.name}
            </button>
          </li>
        ))}
      </ul>
      <ul className="products-ratings-container">
        <h4>Ratings</h4>
        {ratingsList.map(each => (
          <li key={each.ratingId}>
            <button
              type="button"
              className="ratings-button"
              onClick={onClickRating}
              id={each.ratingId}
            >
              <img
                src={each.imageUrl}
                alt={each.ratingId}
                className="ratings-icon"
                id={each.ratingId}
              />
            </button>
          </li>
        ))}
      </ul>
      <div>
        <button
          type="button"
          className="clear-filters-button"
          onClick={onClickClearFilters}
        >
          Clear Filters
        </button>
      </div>
    </div>
  )
}

export default FiltersGroup
