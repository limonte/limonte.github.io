export const sayHelloInConsole = () => {
  console.log(
    `%cThanks for checking out my website, good to see you here 🤝`,
    'background-color: #e0005a; color: #ffffff; font-size: 16px; padding: 10px;'
  );
  console.group(`%cContact me:`, 'font-size: 16px;');
  console.log(`%cme@limonte.dev`, 'background-color: gold; color: black; font-size: 16px; padding: 4px;');
  console.log(`%csweetalert2@gmail.com`, 'background-color: gold; color: black; font-size: 16px; padding: 4px;');
  console.groupEnd();
};
