# Back-End
Backend for Flatten the Curve app that houses message data.

 ### Message Model
| Key          | Data Type         | Metadata |
| :--          | :--               | :--      |
| id           | unsigned int      | primary key, auto-increments, generated by database|
| avatar       | string (link)     | |
| coordinates  | Geometry(Point, 4326)    | required |
| geoLock      | json              | required |
| userUUID     | string            | required |
| postField    | string            | required |
| image        | string            | blob url |