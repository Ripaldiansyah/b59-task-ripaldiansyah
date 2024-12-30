const icon = {
  "Node JS":
    "https://img.icons8.com/?size=100&id=FQlr_bFSqEdG&format=png&color=000000",
  "React JS":
    "https://img.icons8.com/?size=100&id=122637&format=png&color=000000",
  "Next JS":
    "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000",
  TypeScript:
    "https://img.icons8.com/?size=100&id=cHBUT9SmrD2V&format=png&color=000000",
};

function getIcon(name) {
  return icon[name];
}

module.exports = { getIcon };
