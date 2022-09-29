const player = {
  name: "nico",
  point: 10,
  fat: true,
};

console.log(player);

console.log(player.name);
console.log(player["name"]);

player.fat = false;
player.lastName = "potato";
player.point += 5;

console.log(player);
