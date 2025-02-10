// Basically following few rules for best practices while designing.
// There is SSR server side rendering, CSR client side rendering.
// SSR is typically fast. but to use it we must be sure of device on client side.
// CSR can be more useful for multiple devices, but it can be little slow.
// while sending request from client side, dont use extra words to confuse
// if we already using specific method it is already obvious , don't need to overcomplicate it by using extra words in url like GET /fetchUser. no need to use fetch word.
//Dont over use POST for everthing, PUT, PATCH, DELETE exists for a purpose.