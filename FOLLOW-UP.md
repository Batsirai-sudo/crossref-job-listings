# Follow-up Questions

```
Use this document to answer any follow-up questions.
```

### Follow Up Questions:

1. What libraries did you use? Why did you use them?
```
a) ngx-skeleton-loader   
  ```
The reason of using this package is to give a good user experience to the user as they interact with the web application
it give a modern beautiful loader as the application processes server side effects by calling the API


  ```
b) @angular/material
 ```
 Is to use high quality prebuit components already bult 
 ```
c) @ngrx/store
  ```
  Reason for using this package is to make use of Redux state management to centralise the data to be accessible globally in the application
  

1. If you had more time, what further improvements or new features would you add?
   
   I would implement an internationalization of the language so that you can toogle different language which makes it a best practice for building apps and
   user experience for people who use different languages than english

2. Which parts are you most proud of? And why?

Am so proud of the NgRx state management package that i implemented it realy makes it easier for me share data between components in the by centrallising the data at one place
Am also proud of the service implementation which is part of the Angular application structure it makes side effects calls to the API so flexible by decopling it from of the 
other classes and those other classes will be able to access the API through Dependecy injection which makes it easier in the processes of Unit testing and also usefully
that application can be scalable by reusing the services in multiple places.

3. Which parts did you spend the most time with? What did you find most difficult?

They are 2 places where i did spent time which is 
  1) Structuring the interface for the JobInterface object which the API was bringing. I had to make sure that i go through each and every object that  was bringing and make sure i got the correct name for the object property otherwise the the property name is wrong the application wolud break
  2) I also spent more time in implementing the Redux state management. In particular when i wanted to access the state management using the select method of the store it was giving me the Observer back instead of the actual data that am selecting. So i had to access it through the subscribe method

