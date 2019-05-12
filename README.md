## Slomux implementation

### `npm start`

## List of main changes have been made: 

* basic code formating (indentations, semicolons)
* createStore function:
    * added validation for actions
    * added initialization
    * method subscribe has been extended with unsubscribe functionality
* connect function: 
    * added default arguments
    * removed forceUpdate
    * added subscribtion for any props changes
    * added unsubscribe functionality in case of component unmounting
* reducer:
    * initial state became an object
    * returned stated is immutable object now
* separate store
* application components have been devided to view and container
* IntervalComponent:
  * increase and decrease methods moved out of render
  * interval time has been changed from 1 to 1000 (ms)
  * used PureComponent to avoid extra-rendering without receiving new props
  * added functionality to disable button in case of counter equal 1 (1000ms)
  * destructuring was used to clarify code
  * sequense of parameters that pass to connect function has been changed
  * added functionality to hide controls if timer started
  * added default props
* TimerComponent:
    * setTimeout has been changed to setInterval
    * added button to clear current interval
    * added functionality to disable 'Старт' button in case of timer already started
    * added functionality to disable 'Пауза' button in case of timer already paused
