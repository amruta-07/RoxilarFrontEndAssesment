import React, { useState, useRef } from 'react';
import Select from 'react-select';

const Search = ({
  month, setSearch, setMonth, searchtext
}) => {
  const dropdownRef = useRef(null);
  console.log(month)

  const months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];

  const handleMonthChange = (selectedOption) => {
    setMonth(selectedOption);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
      <input
        value={searchtext}
        placeholder='Search Transaction'
        onChange={(event) => {
          setSearch(event.target.value)
        }}
        style={{ marginRight: '8px', background: '#f8df8c', borderRadius: 20, height: 45, paddingRight: 20, paddingLeft: 12, borderWidth: 0, outline: "none" }}

      />
      <div style={{ marginRight: '8px' }}></div> {/* Add some space between input and dropdown */}
      <div className="custom-dropdown" ref={dropdownRef}>
        <Select
          value={month}
          onChange={handleMonthChange}
          options={months}
          placeholder="Select Month"
          isSearchable={false}
          styles={{
            control: (provided) => ({
              ...provided,
              borderRadius: '4px',
              border: '1px solid #ccc',
              minHeight: '38px',
              boxShadow: 'none',
              background: '#f8df8c',
              width: '190px',
              height: 42
            }),
            indicatorSeparator: (provided) => ({
              ...provided,
              display: 'none',
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              padding: '8px',
              color: '#333',
              background: "#fff",
              margin: 0,
              paddingTop: 13
            }),
            option: (provided, state) => ({
              ...provided,
              background: state.isSelected ? '#f0f0f0' : 'white',
              '&:hover': {
                background: '#f0f0f0',
              },
            }),
          }}
        />
        <div className="custom-dropdown-icon"

        ></div>
      </div>
    </div>
  );
};

export default React.memo(Search);
