

import React,{useEffect,useState} from 'react'
import Flights from './Flights'
import AminPrice from './minPrice'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import "./App.css"
function App () {

   
   const [FlightName,setFlightName] = useState([]);
   const [Origin,SetOrigin] = useState("");
   const [Price,SetPrice]= useState([]);
   const [DateOfJourney,SetDate] = useState(null);
   const [query_Origin,setQuery_Origin] = useState("US-NY");
   const [query_Destination,setQuery_Dest] = useState("SFO-sky");
   const [Destination,SetDestination] = useState("");
   
   
   useEffect(()=>
   {
     //getMinPrice();
     
     console.log("Calling Use effect")
    getFlightName();
   },[query_Origin,DateOfJourney,query_Destination]);
   
   
   
   
   const getFlightName = async () =>{
    
    if(DateOfJourney != null)
    {
      const DateConvert = DateOfJourney.toISOString()
      var Date_final = DateConvert.slice(0,10)
      console.log(Date_final)
    }
    else
    {
      var Date_final = '2020-12-20'
    }
      
    
  const response = await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${query_Destination}/${query_Origin}/${Date_final}?inboundpartialdate=${Date_final}`, {
  "method": "GET",
  "headers": {
  "x-rapidapi-key": "36a93f6ea0msh2414af55d6f88eap14a4c9jsn04cb0f41b6c1",
  "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
 }
   });
   const data = await response.json();
   console.log(data)
   //SetPrice(data.Quotes);
   setFlightName(data.Carriers);
   console.log(data.Carriers);
   };



  //  const getMinPrice = async () =>{
  //   if(DateOfJourney != null)
  //   {
  //     const DateConvert = DateOfJourney.toISOString()
  //     var Date_final = DateConvert.slice(0,10)
  //     console.log(Date_final)
  //   }
  //   else
  //   {
  //     var Date_final = '2020-12-20'
  //   }
  //  const response = await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${query_Destination}/${query_Origin}/${Date_final}?inboundpartialdate=${Date_final}`, {
  //  "method": "GET",
  //  "headers": {
  //    "x-rapidapi-key": "36a93f6ea0msh2414af55d6f88eap14a4c9jsn04cb0f41b6c1",
  //    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
  //  }
  //    });
  //    const data = await response.json();
  //    //console.log(data)
  //    SetPrice(data.Quotes);
  //    //setFlightName(data.Carriers);
  //    console.log(data.Quotes);
  //    };




   const UpdateDate = e => {
      console.log(DateOfJourney.toISOString());
   }
   if(DateOfJourney!=null)
   {
     const DateConvert = DateOfJourney.toISOString()
     const Date_final = DateConvert.slice(0,10)
     console.log(Date_final)
   }
   const updateOrigin = e=> {
     
     SetOrigin(e.target.value)  
     //console.log(Origin) 
    }
    const updateDest = e => {
      SetDestination(e.target.value)
    }
    const getSearch = e => {
      e.preventDefault();
      setQuery_Origin(Origin);
      setQuery_Dest(Destination);
      console.log(Origin)
    }
    
   return(
       <div>
        
        <h1>Dude Airline Bookings: </h1>
        <div className = "Input_field">
        <form onSubmit = {getSearch}>
          <input name = "Origin" placeholder = "From" value = {Origin} onChange = {updateOrigin} 
          />
          <input name = "Destination" placeholder = "To" value = {Destination} onChange = {updateDest}
          />
          <p>Departure:</p> <DatePicker className="DatePicker" selected = {DateOfJourney} onChange = {(date) => (SetDate(date))} dateFormat = 'yyyy/mm/dd' minDate = {new Date()}/>
          <p>
          <button className = "btn btn-primary" type = "submit">Search</button>
          </p>
          </form>
          </div>
          <h2>Search Results</h2>
         {FlightName.map(flight => (
            <Flights 
            key = {flight.CarrierId}
            Flight = {flight.Name}
            />
         ))}

         {/* {Price.map(price => (
           <AminPrice 
           key = {price.QuoteId}
           min = {price.MinPrice} 
           />
         ))} */}
         <div class="lds-roller">
         <div></div>
         <div></div>
         <div></div>
         <div></div>
       </div>
       </div>
       
   )
   
}

export default App
