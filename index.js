const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1206902",
  key: "8189f01e538c04e42f87",
  secret: "4d6fb304d2b00dd032c0",
  cluster: "ap1",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});