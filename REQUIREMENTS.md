# Project features

Your application reflects the same user experience as that of a real-world e-commerce website, including a(n):

* Product list page, which displays the available products for the user to choose and add to their cart (in various quantities) ✅
* Product details page, which displays more information about any particular product ✅
* Shopping cart, which includes the products that the user has added to their cart ✅
* Checkout form, which collects information about the user (e.g., name, address, payment details, etc.) ✅
* Order confirmation page, which shows the outcome after the user completes the checkout process (i.e., submits the checkout form) ✅

# Project Rubric
## Best Practices
Criteria |	Meets Specifications
---|---
Scaffold and configure a single-page application with Angular |The project requires only `npm install` and `ng serve` to install and launch the application ✅
Document the project in the README | The Project README includes a description of the project, as well as instructions for installation and launch
Organize and write clean code | Components, models, services, and other assets are easy to find and organized intuitively. <br> Code is free from syntax errors and follows the Udacity Frontend Nanodegree Style Guide ✅
Design for user experience | The experience and flow of the application resemble that of a typical e-commerce application, including: <br> • The shopping cart page shows a total cost for all products in the cart ✅ <br> • Input forms are validated (e.g., a minimum length for the customer’s name on the shopping cart checkout page) ✅ <br> • Feedback is given to the user when the cart is modified (i.e., how is the user alerted when a product has been added to the cart?) ✅ <br> • The details page for a product shows a photo of the product, the name, the price, and the description. ✅ <br> • Products can be removed from the cart ✅ <br> • An order confirmation page (e.g. a “success” page) is shown to the user after successful checkout ✅
Use CSS to style the application | All components are styled, and CSS syntax is clean and follows the Udacity Frontend Nanodegree Style Guide. ✅ <br> The provided CSS may be used but is not required.

## Components
Criteria | Meets Specifications
---|---
Fetch and use data from an external API | The list of products is retrieved from an external API or by using the `HttpClient` service to read the provided `data.json` file. ✅ <br> The product list template shows relevant product information to the user, including a photo of the product, the name, and the price. ✅ <br> The `*ngFor` directive is used to loop over any lists. ✅
Create a logical hierarchy of components | Application code clearly shows component hierarchy where child components are dependent on parent components, and sibling components are not dependent on each other. ✅
Collect input from the user using controlled form elements and Angular events | `ngModel` is used on the element to bind a form control to a data property. `ngModelChange` is used to listen to any `ngModel` changes (i.e., rather than `change`). ✅
Use Angular event bindings | The application listens for and responds to user actions (e.g., `click`) using Angular event bindings. ✅
Create and use custom TypeScript models | The application includes a TypeScript model for a product. That is, component code incorporates instances of a `Product` type. ✅ <br> Individual properties of the model are appropriately typed (e.g., `url: string`). ✅

## Data Flow
Criteria | Meets Specifications
---|---
Use decorators to pass data between parent and child components | When information needs to be shared between parent and child components, the application uses the `@Input` decorator. ✅ <br> Conversely, when sending data from a child component to its parent component, the application uses the `@Output` decorator and `EventEmitter` class. ✅
Use a service to pass data between sibling components | Cart data is shared between the product list component and the shopping cart component. As such, a service is used to facilitate passing data between said components. ✅

## Routing
Criteria | Meets Specifications
---|---
Use Angular routing in templates | The application uses the `<router-outlet>` placeholder and the `routerLink` attribute in HTML templates. ✅  <br> As a single-page application, the page does not reload during navigation.
Set up and configure the app routing module| An `AppRoutingModule` is included in the application, with relevant components imported and `path` and `component` values appropriately set. ✅