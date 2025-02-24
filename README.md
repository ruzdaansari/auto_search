# AutoComplete Recipe Search

AutoComplete Recipe Search is a React-based application that provides real-time recipe suggestions as users type. It fetches data from an external API and offers a smooth search experience with caching and keyboard navigation.

## Features

- **Live Search Suggestions**: Fetches and displays recipe suggestions dynamically.
- **API Integration**: Uses `https://dummyjson.com/recipes/search` to fetch recipes.
- **Caching Mechanism**: Stores previous search results to optimize API calls.
- **Keyboard Navigation**: Navigate through suggestions using `ArrowUp` and `ArrowDown` keys.
- **Auto Selection**: Clicking on a suggestion updates the input field.

## Technologies Used

- React (useState, useEffect)
- Fetch API for data retrieval
- CSS for styling

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/ruzdaansari/auto_search.git
   ```
2. Navigate to the project folder:
   ```sh
   cd repository-name
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Usage

1. Type a recipe name in the search bar.
2. Select a suggestion using the keyboard or mouse.
3. The selected recipe name appears in the input field.

## License

This project is licensed under the MIT License.

---
Feel free to contribute or report issues!

