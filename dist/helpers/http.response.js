"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeHttpError = makeHttpError;
exports.default = void 0;

/**
 * This function is responsible for returning the appropriate error message
 * to the client.
 * @param {number} statusCode Represents the HTTP Status Code
 * @param {string} title Represents the Error Title
 * @param {string} errorMessage Represents the Error message
 * @param {string} stack Represents the Error stack
 */
function makeHttpError({
  statusCode,
  title,
  errorMessage,
  stack
}) {
  const toReturn = {
    errors: [{
      title,
      error: errorMessage,
      stack
    }]
  };
  return {
    headers: {
      'Content-Type': 'application/json'
    },
    statusCode,
    data: JSON.stringify(toReturn)
  };
}
/**
 * This function is responsible for returning the appropriate API Response
 * to the client
 * @param {boolean} status Represents the Status of the API Response
 * @param {number} statusCode Represents the HTTP Status Code
 * @param {string} message Represents the return messsage from the API
 * @param {any} data Represents the returned data from the API Response
 */


const apiResponse = ({
  status,
  statusCode,
  message,
  data
}) => {
  const toReturn = {
    status,
    message,
    data
  };
  return {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    statusCode,
    data: JSON.stringify(toReturn)
  };
};

var _default = apiResponse;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2h0dHAucmVzcG9uc2UudHMiXSwibmFtZXMiOlsibWFrZUh0dHBFcnJvciIsInN0YXR1c0NvZGUiLCJ0aXRsZSIsImVycm9yTWVzc2FnZSIsInN0YWNrIiwidG9SZXR1cm4iLCJlcnJvcnMiLCJlcnJvciIsImhlYWRlcnMiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImFwaVJlc3BvbnNlIiwic3RhdHVzIiwibWVzc2FnZSIsIkFjY2VwdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0EsYUFBVCxDQUF1QjtBQUM1QkMsRUFBQUEsVUFENEI7QUFFNUJDLEVBQUFBLEtBRjRCO0FBRzVCQyxFQUFBQSxZQUg0QjtBQUk1QkMsRUFBQUE7QUFKNEIsQ0FBdkIsRUFLWTtBQUNqQixRQUFNQyxRQUFRLEdBQUc7QUFDZkMsSUFBQUEsTUFBTSxFQUFFLENBQ047QUFDRUosTUFBQUEsS0FERjtBQUVFSyxNQUFBQSxLQUFLLEVBQUVKLFlBRlQ7QUFHRUMsTUFBQUE7QUFIRixLQURNO0FBRE8sR0FBakI7QUFVQSxTQUFPO0FBQ0xJLElBQUFBLE9BQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBREo7QUFJTFAsSUFBQUEsVUFKSztBQUtMUSxJQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixRQUFmO0FBTEQsR0FBUDtBQU9EO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTU8sV0FBVyxHQUFHLENBQUM7QUFBRUMsRUFBQUEsTUFBRjtBQUFVWixFQUFBQSxVQUFWO0FBQXNCYSxFQUFBQSxPQUF0QjtBQUErQkwsRUFBQUE7QUFBL0IsQ0FBRCxLQUF5RDtBQUMzRSxRQUFNSixRQUFRLEdBQUc7QUFDZlEsSUFBQUEsTUFEZTtBQUVmQyxJQUFBQSxPQUZlO0FBR2ZMLElBQUFBO0FBSGUsR0FBakI7QUFLQSxTQUFPO0FBQ0xELElBQUFBLE9BQU8sRUFBRTtBQUNQTyxNQUFBQSxNQUFNLEVBQUUsa0JBREQ7QUFFUCxzQkFBZ0I7QUFGVCxLQURKO0FBS0xkLElBQUFBLFVBTEs7QUFNTFEsSUFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sUUFBZjtBQU5ELEdBQVA7QUFRRCxDQWREOztlQWdCZU8sVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBcGlSZXNwb25zZSwgSUVycm9yUmVzcG9uc2UgfSBmcm9tICcuLi90eXBpbmdzL2ludGVyZmFjZXMnXG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyByZXNwb25zaWJsZSBmb3IgcmV0dXJuaW5nIHRoZSBhcHByb3ByaWF0ZSBlcnJvciBtZXNzYWdlXG4gKiB0byB0aGUgY2xpZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXR1c0NvZGUgUmVwcmVzZW50cyB0aGUgSFRUUCBTdGF0dXMgQ29kZVxuICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIFJlcHJlc2VudHMgdGhlIEVycm9yIFRpdGxlXG4gKiBAcGFyYW0ge3N0cmluZ30gZXJyb3JNZXNzYWdlIFJlcHJlc2VudHMgdGhlIEVycm9yIG1lc3NhZ2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGFjayBSZXByZXNlbnRzIHRoZSBFcnJvciBzdGFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUh0dHBFcnJvcih7XG4gIHN0YXR1c0NvZGUsXG4gIHRpdGxlLFxuICBlcnJvck1lc3NhZ2UsXG4gIHN0YWNrLFxufTogSUVycm9yUmVzcG9uc2UpIHtcbiAgY29uc3QgdG9SZXR1cm4gPSB7XG4gICAgZXJyb3JzOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBlcnJvcjogZXJyb3JNZXNzYWdlLFxuICAgICAgICBzdGFjayxcbiAgICAgIH0sXG4gICAgXSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIHN0YXR1c0NvZGUsXG4gICAgZGF0YTogSlNPTi5zdHJpbmdpZnkodG9SZXR1cm4pLFxuICB9XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyByZXNwb25zaWJsZSBmb3IgcmV0dXJuaW5nIHRoZSBhcHByb3ByaWF0ZSBBUEkgUmVzcG9uc2VcbiAqIHRvIHRoZSBjbGllbnRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RhdHVzIFJlcHJlc2VudHMgdGhlIFN0YXR1cyBvZiB0aGUgQVBJIFJlc3BvbnNlXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhdHVzQ29kZSBSZXByZXNlbnRzIHRoZSBIVFRQIFN0YXR1cyBDb2RlXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBSZXByZXNlbnRzIHRoZSByZXR1cm4gbWVzc3NhZ2UgZnJvbSB0aGUgQVBJXG4gKiBAcGFyYW0ge2FueX0gZGF0YSBSZXByZXNlbnRzIHRoZSByZXR1cm5lZCBkYXRhIGZyb20gdGhlIEFQSSBSZXNwb25zZVxuICovXG5jb25zdCBhcGlSZXNwb25zZSA9ICh7IHN0YXR1cywgc3RhdHVzQ29kZSwgbWVzc2FnZSwgZGF0YSB9OiBJQXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgdG9SZXR1cm4gPSB7XG4gICAgc3RhdHVzLFxuICAgIG1lc3NhZ2UsXG4gICAgZGF0YSxcbiAgfVxuICByZXR1cm4ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIHN0YXR1c0NvZGUsXG4gICAgZGF0YTogSlNPTi5zdHJpbmdpZnkodG9SZXR1cm4pLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwaVJlc3BvbnNlXG4iXX0=