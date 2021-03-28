const users = [
  {
    firstName: "stan",
    lastName: "Maurer",
    email: "stan@web.de",
    friends: [
      {
        firstName: "Ben",
        lastName: "Skaffort",
        email: "ben@web.de",
      },
      {
        firstName: "Jenny",
        lastName: "Kaslair",
        email: "jenny@web.de",
        friends: [
          {
            firstName: "Mike",
            lastName: "Billton",
            email: "mike@web.de",
            friends: [],
          },
          {
            firstName: "Tom",
            lastName: "Strange",
            email: "tom@web.de",
            friends: [
              {
                firstName: "julian",
                lastName: "Vogel",
                email: "vogel@web.de",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    firstName: "mike",
    lastName: "mikelson",
    email: "mike@web.de",
    friends: [
      {
        firstName: "honk",
        lastName: "honkson",
        email: "honk@web.de",
      },
      {
        firstName: "bla",
        lastName: "blubber",
        email: "blubber@web.de",
        friends: [
          {
            firstName: "Mike",
            lastName: "Billton",
            email: "mike@web.de",
            friends: [],
          },
          {
            firstName: "Tom",
            lastName: "Strange",
            email: "tom@web.de",
            friends: [
              {
                firstName: "schwobsi",
                lastName: "schwobbl",
                email: "schwobsi@web.de",
              },
            ],
          },
        ],
      },
    ],
  },
];

function createLi(index, parent, firstName, lastName, email) {
  const li = `<li>
                  <div>
                    <strong>${index + 1}: ${parent ? `Friend` : ""}</strong>
                    <p>${firstName}</p>
                    <p>${lastName}</p>
                    <p>${email}</p>
                  </div>
                </li>`;

  return li;
}

function usersRecursion(users, parent) {
  if (!users || users.length === 0) return;

  users.forEach((user, index) => {
    const ul = document.createElement("ul");
    const li = createLi(
      index,
      parent,
      user.firstName,
      user.lastName,
      user.email
    );
    ul.innerHTML = li;

    parent ? parent.append(ul) : document.body.append(ul);
    usersRecursion(user.friends, ul);
  });
}

usersRecursion(users);
