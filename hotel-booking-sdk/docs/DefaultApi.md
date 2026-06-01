# HotelBookingSystemApi.DefaultApi

All URIs are relative to *https://api.hotelbook.example.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hotelsGet**](DefaultApi.md#hotelsGet) | **GET** /hotels | Get a list of hotels
[**hotelsHotelIdRoomsGet**](DefaultApi.md#hotelsHotelIdRoomsGet) | **GET** /hotels/{hotelId}/rooms | Get hotel rooms
[**hotelsHotelIdRoomsPost**](DefaultApi.md#hotelsHotelIdRoomsPost) | **POST** /hotels/{hotelId}/rooms | Add a room to the hotel
[**hotelsIdDelete**](DefaultApi.md#hotelsIdDelete) | **DELETE** /hotels/{id} | Delete a hotel
[**hotelsIdGet**](DefaultApi.md#hotelsIdGet) | **GET** /hotels/{id} | Get a hotel by ID
[**hotelsIdPut**](DefaultApi.md#hotelsIdPut) | **PUT** /hotels/{id} | Update hotel details
[**hotelsPost**](DefaultApi.md#hotelsPost) | **POST** /hotels | Add a new hotel
[**roomsIdDelete**](DefaultApi.md#roomsIdDelete) | **DELETE** /rooms/{id} | Delete a room
[**roomsIdGet**](DefaultApi.md#roomsIdGet) | **GET** /rooms/{id} | Get room details
[**roomsIdPut**](DefaultApi.md#roomsIdPut) | **PUT** /rooms/{id} | Update room details

<a name="hotelsGet"></a>
# **hotelsGet**
> [Hotel] hotelsGet(opts)

Get a list of hotels

### Example
```javascript
import {HotelBookingSystemApi} from 'hotel_booking_system_api';

let apiInstance = new HotelBookingSystemApi.DefaultApi();
let opts = { 
  'city': "city_example" // String | Filter hotels by city name
};
apiInstance.hotelsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **city** | **String**| Filter hotels by city name | [optional] 

### Return type

[**[Hotel]**](Hotel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="hotelsHotelIdRoomsGet"></a>
# **hotelsHotelIdRoomsGet**
> [Room] hotelsHotelIdRoomsGet(hotelId)

Get hotel rooms

### Example
```javascript
import {HotelBookingSystemApi} from 'hotel_booking_system_api';

let apiInstance = new HotelBookingSystemApi.DefaultApi();
let hotelId = "hotelId_example"; // String | 

apiInstance.hotelsHotelIdRoomsGet(hotelId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **String**|  | 

### Return type

[**[Room]**](Room.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="hotelsHotelIdRoomsPost"></a>
# **hotelsHotelIdRoomsPost**
> hotelsHotelIdRoomsPost(body, hotelId)

Add a room to the hotel

### Example
```javascript
import {HotelBookingSystemApi} from 'hotel_booking_system_api';
let defaultClient = HotelBookingSystemApi.ApiClient.instance;


let apiInstance = new HotelBookingSystemApi.DefaultApi();
let body = new HotelBookingSystemApi.RoomInput(); // RoomInput | 
let hotelId = "hotelId_example"; // String | 

apiInstance.hotelsHotelIdRoomsPost(body, hotelId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RoomInput**](RoomInput.md)|  | 
 **hotelId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="hotelsIdDelete"></a>
# **hotelsIdDelete**
> hotelsIdDelete(id)

Delete a hotel

### Example
```javascript
import {HotelBookingSystemApi} from 'hotel_booking_system_api';
let defaultClient = HotelBookingSystemApi.ApiClient.instance;


let apiInstance = new HotelBookingSystemApi.DefaultApi();
let id = "id_example"; // String | 

apiInstance.hotelsIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="hotelsIdGet"></a>
# **hotelsIdGet**
> Hotel hotelsIdGet(id)

Get a hotel by ID

### Example
```javascript
import {HotelBookingSystemApi} from 'hotel_booking_system_api';

let apiInstance = new HotelBookingSystemApi.DefaultApi();
let id = "id_example"; // String | 

apiInstance.hotelsIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Hotel**](Hotel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="hotelsIdPut"></a>
# **hotelsIdPut**
> hotelsIdPut(body, id)

Update hotel details

### Example
```javascript
import {HotelBookingSystemApi} from 'hotel_booking_system_api';
let defaultClient = HotelBookingSystemApi.ApiClient.instance;


let apiInstance = new HotelBookingSystemApi.DefaultApi();
let body = new HotelBookingSystemApi.HotelInput(); // HotelInput | 
let id = "id_example"; // String | 

apiInstance.hotelsIdPut(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**HotelInput**](HotelInput.md)|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="hotelsPost"></a>
# **hotelsPost**
> Hotel hotelsPost(body)

Add a new hotel

### Example
```javascript
import {HotelBookingSystemApi} from 'hotel_booking_system_api';
let defaultClient = HotelBookingSystemApi.ApiClient.instance;


let apiInstance = new HotelBookingSystemApi.DefaultApi();
let body = new HotelBookingSystemApi.HotelInput(); // HotelInput | 

apiInstance.hotelsPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**HotelInput**](HotelInput.md)|  | 

### Return type

[**Hotel**](Hotel.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="roomsIdDelete"></a>
# **roomsIdDelete**
> roomsIdDelete(id)

Delete a room

### Example
```javascript
import {HotelBookingSystemApi} from 'hotel_booking_system_api';
let defaultClient = HotelBookingSystemApi.ApiClient.instance;


let apiInstance = new HotelBookingSystemApi.DefaultApi();
let id = "id_example"; // String | 

apiInstance.roomsIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="roomsIdGet"></a>
# **roomsIdGet**
> roomsIdGet(id)

Get room details

### Example
```javascript
import {HotelBookingSystemApi} from 'hotel_booking_system_api';

let apiInstance = new HotelBookingSystemApi.DefaultApi();
let id = "id_example"; // String | 

apiInstance.roomsIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="roomsIdPut"></a>
# **roomsIdPut**
> roomsIdPut(body, id)

Update room details

### Example
```javascript
import {HotelBookingSystemApi} from 'hotel_booking_system_api';
let defaultClient = HotelBookingSystemApi.ApiClient.instance;


let apiInstance = new HotelBookingSystemApi.DefaultApi();
let body = new HotelBookingSystemApi.RoomInput(); // RoomInput | 
let id = "id_example"; // String | 

apiInstance.roomsIdPut(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RoomInput**](RoomInput.md)|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

