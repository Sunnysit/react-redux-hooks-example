const initState = {
    counter: 5,
 }
 
 const counterReducer = (state = initState, action) => {
     switch (action.type) {
       case 'INCREMENT_COUNT':
         return {...state,
                 counter:state.counter+1      
         }
       case 'INCREMENT_COUNT_TEN':
            return {...state,
                    counter:state.counter+10      
            }

        case 'DOUBLE_COUNT':
            return {...state,
                    counter:state.counter*2      
            }
      case 'DECREMENT_COUNT_TEN':
          return {...state,
                  counter:state.counter-10      
        }
       case 'DECREMENT_COUNT':
           return {...state,
             counter:state.counter-1      
     }
       case 'RESET_COUNT':
           return {...state,
             counter:0     
     } 
       default:
         return state
     }
   }
 
 export default counterReducer;