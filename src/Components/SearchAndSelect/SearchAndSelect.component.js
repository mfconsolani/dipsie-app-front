import React from "react";
import "./SearchAndSelect.styles.css"
import { Row } from '@geist-ui/react'
import { SearchForm, SelectField } from "..";

const SearchAndSelect = ({ label, onSubmit, entry, onChange, candidate }) => {
  return (
    <Row style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "1em", justifyContent: "center" }}>
      <SearchForm label={label} onSubmit={onSubmit} />
      {candidate && entry ?
        <SelectField entry={entry} onChange={onChange} candidate={candidate} />
        : null}
    </Row>

  )
};

export default SearchAndSelect;