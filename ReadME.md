### Database Schema

    Users Table:
        UserID (Primary Key)
        FirstName
        LastName
        Email
        Password
        Phone

    Restaurants Table:
        RestaurantID (Primary Key)
        Name
        Address
        Phone
        Email
        MenuID (Foreign Key referencing Menu table)

    Menu Table:
        MenuID (Primary Key)
        RestaurantID (Foreign Key referencing Restaurants table)
        ItemName
        Description
        Price
        Category

    Orders Table:
        OrderID (Primary Key)
        UserID (Foreign Key referencing Users table)
        RestaurantID (Foreign Key referencing Restaurants table)
        OrderDate
        TotalAmount

    OrderItems Table:
        OrderItemID (Primary Key)
        OrderID (Foreign Key referencing Orders table)
        MenuID (Foreign Key referencing Menu table)
        Quantity
        Subtotal

    Category Table:
        CategoryID(Primary Key)
        CategoryName



        








