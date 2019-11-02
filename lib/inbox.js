const hasNewMessage = () => {
  // TODO: return true with a probability of 20%.
 return Math.floor((Math.random()*100)+1) <= 20;

};


// let messages = [
// {
// sender: 'GitHub Team',
// subject: 'Welcome to GitHub'
// },
// {
// sender: 'Arnold Schwarzenegger',
// subject: "I'm Back"
// },
// {
// sender: 'Delores Haze',
// subject: "Tis not meant to be"
// },
// ];

const newMessage = async () => {
  let data =  await fetch("https://fml.shanghaiwogeng.com/api/v1/stories")
  return await data.json()   // This will return a **Promise** object
};

// newMessage().then((msgs)=>{
//     console.log(msgs);
let messages = [];
let y = 1;

const refresh = async () => {
  const msgs = await newMessage() //msgs should contain 4 data now
  // Add your code to get `name` and `text` values from data and put into the `sender` and `subject` message object.

  msgs.forEach((message) => {

    // for (var i = 0; i < msgs.length; i++){
    //   messages.push({
    //     sender: msgs[i].name,
    //     subject: msgs[i].text
    //   });
    // }
    messages.push({
      sender: message.name,
      subject: message.text
    })
  })
  console.log(messages);


    // const refresh = () => {
      // TODO: Implement the global refresh logic. If there is a new message,
      //       append it to the DOM. Update the unread counter in title as well.

  let unreadCount = document.getElementById("count");
  if (hasNewMessage() == true) {
    console.log(hasNewMessage());
      appendMessageToDom();

    y ++;
    unreadCount.innerText = `(${y})`;

    let a = document.querySelector("title");
    a.innerText = `Inbox (${y})`;

  }

}

const incomingMsg = () => {
// TODO: return a random message as an object with two keys, subject and sender

  let x = messages[Math.floor(Math.random()*messages.length)];
  return x;
};

const appendMessageToDom = () => {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
  let message1 = incomingMsg();
  let inboxMsg = document.getElementById("inbox");
  inboxMsg.insertAdjacentHTML('afterbegin', `<div class="row message unread"><div class="col-3">${message1.sender}</div><div class="col-9">${message1.subject}</div></div>`);
};










// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {

    setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});

