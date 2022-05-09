let studentRooms;
let dinnerGroup;
let appUsers;

window.onload = () => {
  //localStorage.setItem("users", JSON.stringify(appUsers));
  //localStorage.setItem("rooms", JSON.stringify(studentRooms));
  //localStorage.setItem("groups", JSON.stringify(dinnerGroup));

  studentRooms = localStorage["rooms"] ? JSON.parse(localStorage["rooms"]) : [];

  appUsers = localStorage["users"]
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  dinnerGroup = localStorage["groups"]
    ? JSON.parse(localStorage.getItem("groups"))
    : [];

  appUsers.forEach((e) => {
    if (e.password === "") {
      e.password = "qwerty";
    }
  });

  console.log(studentRooms);
  console.log(appUsers);
  console.log(dinnerGroup);
};

function login() {
  var localUsername = $("#username");
  var localPassword = $("#password");

  if (localUsername.val().length > 2 && localPassword.val().length > 5) {
    var usersWithTheSameRoom = "";
    appUsers.forEach((u) => {
      if (u.username === localUsername.val()) {
        userExists = true;
        for (let i = 0; i < appUsers.length; i++) {
          if (appUsers[i] !== u && u.room === appUsers[i].room) {
            usersWithTheSameRoom += appUsers[i].username + " ";
          }
        }
        if (u.password === localPassword.val()) {
          alert(
            `Login sucessfull ${u.username} is in room: ${u.room} with: ${usersWithTheSameRoom} @ Friday 420AM`
          );
          localUsername.val("");
          localPassword.val("");
          return true;
        }
      }
    });
  }
}

function register(umnumerodepichatudoempequenoparaninguemdesconfiar) {
  // REGISTER
  // for registry purposes
  var localUsername;
  var localPassword;
  var changePassword = false;
  if (umnumerodepichatudoempequenoparaninguemdesconfiar === 999) {
    localUsername = $("#username");
    localPassword = $("#password");
  }

  if (appUsers.length > 0) {
    for (let i = 0; i < appUsers.length; i++) {
      if (appUsers[i].username === localUsername) {
        return false;
      }
    }
  }

  if (umnumerodepichatudoempequenoparaninguemdesconfiar < 999) {
    localUsername = $("#usernameR");
    changePassword = true;
  }

  var newUser = {
    id: appUsers.length + 1,
    username: localUsername.val(),
    password: changePassword ? "qwerty" : localPassword.val(),
    room:
      umnumerodepichatudoempequenoparaninguemdesconfiar === 999
        ? studentRooms[Math.trunc(Math.random() * 2)]
        : studentRooms[umnumerodepichatudoempequenoparaninguemdesconfiar],
    dinner: 1,
  };

  appUsers.push(newUser);
  localStorage.setItem("users", JSON.stringify(appUsers));

  localUsername.val("");
  localPassword.val("");
}
