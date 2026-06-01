# Authorization Guide
This API uses **Bearer Authentication (JWT)** to secure destructive and sensitive operations.

* `GET` requests (viewing hotels and rooms) are completely public and do not require credentials.
* `POST`, `PUT`, and `DELETE` requests require a valid JWT token passed in the header:

```http
Authorization: Bearer <your_jwt_token>