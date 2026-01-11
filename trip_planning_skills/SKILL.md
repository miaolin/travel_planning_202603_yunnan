---
name: trip-itinerary-generator
description: generate trip html file from given information. The main task is to generate a trip itinerary in the format of an interative web page to list out the detailed trip information based on user provided information.
---

# Trip itinerary generation

Inputs: 

user can provide various types of information indicating trip related information such as booked airticket, booked hotels, interested hotels, relevant blog post, etc. These types of information can be in the format of images, screenshot, text, etc.

Outputs:

If the trip is going to China, pls generate the web page using Chinese. Otherwise generate it in English.
The output page must have the following tabs, including trip overview, todo list, flight information, hotel information, daily trip, cost, etc.
* Trip overview: provides a general overview 
* Todo list: it is generated based on planned trip routine and the provided booked information. 
  * For the flight, if the flight is only booked and not paid pls list pay the flight in the todo list. 
  * For the hotel, if some of the days no confirmed booking information is provided, please list book the hotels at those dates in the todo list.
  * For transport, pls figure out the gaps between hotels and generate at least two transport options. For each option, pls provide the details. 
* Flight information: the detailed flight information and things to take care. 
* Hotel information: pls present the daily stay in the calendar format, with details included paid or not. And also provides two transportation options between hotels.
* Daily itinerary: based on the booked hotels and other information list a detailed routine for each day
* Cost: estimate the individual cost and total cost including paid ones and unpaid ones. 

## Additional resources

- Example of the generated HTML file [yunnan_trip_itinerary.html](yunnan_trip_itinerary.html)
