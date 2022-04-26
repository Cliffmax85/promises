/**
 * TODO: Exercise 1: use `fetch` & async/await to get data from an API
 */
export async function asyncGetQuotes() {
  const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
  const result =  await res.json();

  return { quote: result[0], totalResults: result.length };
}
/**
 * TODO: Exercise 2: use `fetch` & `.then` syntax to get the same data from the first exercise.
 */
export function thenGetQuotes() {
    const result = fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
      .then((res) => res.json())
      .then((result) => ({ quote: result[0], totalResults: result.length }))

      return result;
}
/**
 * TODO: Exercise 3: use `fetch`, async/await, and a try/catch statement to get data from an API and handle errors
 */
export async function getTryQuotes() {
  try {
    const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
    const result =  await res.json();
  
    return { quote: result[0], totalResults: result.length };
  } catch (error) {
    console.error(error);
  }
}
/**
 * TODO: Exercise 4: use `fetch`, `.then`, and `.catch` to get the same data from exercise 3 while handling errors
 */
export function thenGetTryQuotes() {
  const result = fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => ({ quote: result[0], totalResults: result.length }))
    .catch((error) => console.error('There was an error!'));

    return result;
}
/**
 * TODO: Exercise 5: use `fetch`, async/await, and a try/catch/finally statement to get data from an API, handle errors, then console.log('All done!') upon completion
 */
export async function asyncFinallyGetTryQuotes() {
  try {
    const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
    const result =  await res.json();
  
    return { quote: result[0], totalResults: result.length };
  } catch (error) {
    console.error(error);
  } finally {
    console.log('All done');
  }
}
/**
 * TODO: Exercise 6: use `fetch`, `.then`, `.catch`. and `.finally` to get the same data from exercise 5 while handling errors and calling console.log('All done!') upon completion
 */
export function thenFinallyGetQuote() {
  const result = fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => ({ quote: result[0], totalResults: result.length }))
    .catch((error) => console.error('An error happened Sadge'))
    .finally(() => console.log('Finally!'));

    return result;
}
/**
 * TODO: Exercise 7: Call your function from exercise 7 using .then
 */
export function thenAsyncGetQuotes() {
  thenFinallyGetQuote().then((result) => 
  console.log('USed the last function inside this one with this result', result));
}
/**
 * TODO: Exercise 8: Call your function from exercise 6 using async/await
 */
export async function asyncThenGetQuotes() {
  const result = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => ({ quote: result[0], totalResults: result.length}))
    .catch((error) => console.error('oopie, there was an error Sadge'))
    .finally(() => console.log('U R DUN'));

    return result;
}
