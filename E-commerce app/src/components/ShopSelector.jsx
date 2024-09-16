import PropTypes from 'prop-types';

function ShopSelector({onFilterChange}) {
  
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    onFilterChange(name, checked);
  };

  return (
    <div className="ShopSelector">
      <h1>All Filters</h1>

      <div className="Allfilters">
        <label>
          <input
            type="checkbox"
            name="groceries"
            onChange={handleCheckboxChange}
          />
          groceries
        </label>
        <label>
          <input
            type="checkbox"
            name="beauty"
            onChange={handleCheckboxChange}
          />
          beauty
        </label>
        <label>
          <input
            type="checkbox"
            name="fragrances"
            onChange={handleCheckboxChange}
          />
          fragrances
        </label>
        <label>
          <input
            type="checkbox"
            name="furniture"
            onChange={handleCheckboxChange}
          />
          furniture
        </label>
      </div>
    </div>
  );
}

ShopSelector.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default ShopSelector;