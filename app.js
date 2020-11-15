// If you have an Ad blocker activated you should disable it for a better experience
// Follow the steps by number either here or on index.html

// STEP 1: Complete the instant search configuration with these parameters:
// - Application id: latency
// - Search API key: b37781ea260eea196da5b3346d5ff4c9
// - Index name: instant_search
const search = instantsearch({
  appId: "latency",
  apiKey: "b37781ea260eea196da5b3346d5ff4c9",
  indexName: "instant_search"
});

// STEP 6: Add a searchBox widget
search.addWidget(
  instantsearch.widgets.searchBox({
    container: "#search-input"
  })
);

// STEP 7: Add a hits widget using the search.addWidget() function
search.addWidget(
  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      item: `<div class="hit">
      <div class="hit-image"><img src="{{image}}" alt="{{name}}"/></div>
      <div class="hit-content">
        <h3 class="hit-price">{{price}}</h3>
        <h2 class="hit-name">{{{_highlightResult.name.value}}}</h2>
        <p class="hit-description">{{{_highlightResult.description.value}}}</p>
      </div>
    </div>;`,
      empty: "There is no any results"
    }
  })
);

// STEP 8: Add a refinementList widget for the "brand" attribute

search.addWidget(
  instantsearch.widgets.refinementList({
    container: document.querySelector("#left-column"),
    attributeName: "brand"
  })
);

// STEP 9: Add a pagination widget
search.addWidget(
  instantsearch.widgets.pagination({
    container: document.querySelector("#pagination")
  })
);

// LAST STEP: Start the search
search.start();
