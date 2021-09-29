import React, { Component } from "react";
import SearchIcon from '@material-ui/icons/Search';

import { IconButton, InputBase } from "@material-ui/core";

class SearchBar extends Component {
    render() {
        return (
            <div style={{ border: '1px solid #C6C6C6', height: '48px', borderRadius: '8px', padding: '0px 12px' }}>
                  <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search google maps' }}
                  />
                </div>
        );
    }
}

export default SearchBar
