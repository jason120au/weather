// server.autosuggest.js
import React from 'react';
import Autosuggest from 'react-autosuggest';

import './styles.css';
import AutosuggestHighlightMatch from "autosuggest-highlight/umd/match";
import AutosuggestHighlightParse from "autosuggest-highlight/umd/parse";


class Autocomplete extends React.Component {
    constructor() {
        super();

        //Define state for value and suggestion collection
        this.state = {
            value: '',
            suggestions: []
        };
    }

    // Filter logic
    getSuggestions = async (value) => {
        const inputValue = value.trim().toLowerCase();
        let response = await fetch("https://owncloud.jason120au.net/search/v3/search.php?override=true&q=" + inputValue);
        let data = await response.json()
        return data;
    };

    // Trigger suggestions
    getSuggestionValue = suggestion => suggestion.text;

    // // Render Each Option
    // renderSuggestion = suggestion => (
    //     <span className="sugg-option">
    //         <span className="name">
    //             {suggestion.text}
    //         </span>
    //     </span>
    // );

    // OnChange event handler
    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    // Suggestion rerender when user types
    onSuggestionsFetchRequested = ({ value }) => {
        this.getSuggestions(value)
            .then(data => {
                if (data.Error) {
                    this.setState({
                        suggestions: []
                    });
                } else {
                    this.setState({
                        suggestions: data
                    });
                    
                }
            })
    };

    // Triggered on clear
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    getSuggestionValue(suggestion) {
        return `${suggestion.text}`;
    }

      
      renderSuggestion(suggestion, { query }) {
        const suggestionText = `${suggestion.text}`;
        const matches = AutosuggestHighlightMatch(suggestionText, query);
        const parts = AutosuggestHighlightParse(suggestionText, matches);
      
        return (
          <span className={'suggestion-content ' }>
            <span className="name">
              {
                parts.map((part, index) => {
                  const className = part.highlight ? 'highlight' : null;
      
                  return (
                    <span className={className} key={index}>{part.text}</span>
                  );
                })
              }
            </span>
          </span>
        );
      }
      onSelected(event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) {
          console.log(suggestion);
      }

    


    render() {
        const { value, suggestions } = this.state;

        // Option props
        const inputProps = {
            placeholder: 'Type an address',
            value,
            onChange: this.onChange
        };

        // Adding AutoSuggest component
        return (
            <div class="autocomplete">

            
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                onSuggestionSelected={this.onSelected}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            /></div>
        );
    }
}

export default Autocomplete;