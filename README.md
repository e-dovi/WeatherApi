# Weather API
### openapi: 3.0.3

**info:**
  
  title: Weather Info
  version: 1.0.0
  description: >-
    An application that gathers information from different APIs and renders an HTML using ejs template. 

![weather](https://github.com/e-dovi/WeatherApi/assets/118570519/2b93d396-bbad-480f-9bc6-94e46498b86e)

**paths:**
  /weather/{location}:
    
    summary: >-
      This path renders an HTML page containing information about the weather
      and a link that shows the flag of the country of that area.
    
    description: >-
      The 'location' parameter can be the city, UN code, ISO
      Alpha-2 code, or ISO Alpha-3 code.
   
    get:
      summary: This operation renders an HTML page.
      
      description: >-
        The operation uses 'weatherapi.com' to get some data about the weather
        of a certain location and uses the name of the country found in the data
        to generate the URL corresponding to the 'countryflagsapi.com'
        requirements.   
      
      operationId: ''
      
      responses:
      
        default:
          
          description: Default error sample response
      
      parameters:
        
        - name: location
          in: path
          description: 'The location to get the weather from.'
          required: true
          schema:
            type: string
