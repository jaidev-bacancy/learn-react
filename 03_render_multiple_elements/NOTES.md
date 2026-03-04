# What I did?

 - Fetched a dummy API of products and displayed every product on a card using JSX and React.

# What I learnt?

- **Benefit of using JSX:** It provides the functionality of writing HTML like code along with JS (with minor syntactic changes).
- **DRY(Don't Repeat Yourself):** Using just one function `Card()`, I avoided writing same card container for every product.
- **Drawback of using this function calling approach:** My `Card()` function took some arguments, which if not ordered properly changed how the data is displayed to the user. Hence the need for using ***Components.***