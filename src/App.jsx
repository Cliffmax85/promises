import { asyncGetQuotes, thenGetQuotes, getTryQuotes, asyncFinallyGetTryQuotes, thenGetTryQuotes, thenFinallyGetQuote, thenAsyncGetQuotes, asyncThenGetQuotes} from "./services/promise-me";

export default function App() {
  const handleClick = (callback) => {
    const result = callback();
    console.log(result);
  };
  return (
    <>
      <button onClick={() => handleClick(asyncGetQuotes)}>
        Async Get Quotes
      </button>
      <button onClick={() => handleClick(thenGetQuotes)}>
        Get Then Quotes  
      </button>  
      <button onClick={() => handleClick(getTryQuotes)}>
        Get async try Quotes  
      </button>  
      <button onClick={() => handleClick(asyncFinallyGetTryQuotes)}>
        Get async finally get try Quotes  
      </button>  
      <button onClick={() => handleClick(thenGetTryQuotes)}>
        Get try Quotes with then   
      </button>  
      <button onClick={() => handleClick(thenFinallyGetQuote)}>
        Get Quotes with then and finally  
      </button>  
      <button onClick={() => handleClick(thenAsyncGetQuotes)}>
        Get Quotes with then and finally using another function
      </button>  
      <button onClick={() => handleClick(asyncThenGetQuotes)}>
        Get Quotes with then and finally and catch
      </button>  
    </>
  )
}
