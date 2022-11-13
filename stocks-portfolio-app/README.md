## Json sever kinds

##################################
localhost:2000/products?_page=1&_limit=3   => here we are showing page number with limit
localhost:2000/products?_sort=name&_order=desc   => here we are sorting by name field with descending order
localhost:2000/products?price_gte=200&price_lte=500   => here we are get value between price 200 to 500 data
localhost:2000/products?name_like=^ka   => here we are getting value start from "ka"
localhost:2000/products?q=ind   => here we are getting value any where in the object it's display
localhost:2000/products?_embed=reviews  => we have two array of object based on reviews it's merge and display(https://www.youtube.com/watch?v=gDIX80yDgR0&list=PLC3y8-rFHvwhc9YZIdqNL5sWeTCGxF4ya&index=8)






