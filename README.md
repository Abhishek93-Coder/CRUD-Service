# CRUD-Service
API Endpoints Documentation
Register Employee

Endpoint: POST /api/v1/register
Description: Registers a new employee with the provided name, email, and age.
Request Body:
name (String, required): The name of the employee.
email (String, required): The email address of the employee.
age (String): The age of the employee (optional).
Response: If successful, it returns a JSON response indicating success.
Get All Employees

Endpoint: GET /api/v1/getAll
Description: Retrieves a list of all employees.
Response: Returns a JSON response containing a list of all employees.
Update Employee

Endpoint: PUT /api/v1/update/:id
Description: Updates the details (name, email, and age) of an existing employee with the specified id.
Request Parameters:
id (String): The unique identifier of the employee to be updated.
Request Body:
name (String, optional): The updated name of the employee.
email (String, optional): The updated email address of the employee.
age (String, optional): The updated age of the employee.
Response: If successful, it returns a JSON response indicating success.
Delete Employee

Endpoint: DELETE /api/v1/delete/:id
Description: Deletes an employee with the specified id.
Request Parameters:
id (String): The unique identifier of the employee to be deleted.
Response: If successful, it returns a JSON response indicating success.
