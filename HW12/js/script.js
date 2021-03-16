const students = [
  {
    name: "Mark",
    marks: [100, 65, 88, 90, 50],
    attends: 0,
    avg: getAvgMark,
    max: getMaxMark,
    attend: setAttend,
    info: getInfo,
  },
  {
    name: "John",
    marks: [83, 10, 65, 0, 50, 83],
    attends: 0,
    avg: getAvgMark,
    max: getMaxMark,
    attend: setAttend,
    info: getInfo,
  },
  {
    name: "Joel",
    marks: [100, 65, 90, 20],
    attends: 0,
    avg: getAvgMark,
    max: getMaxMark,
    attend: setAttend,
    info: getInfo,
  },
];

function getAvgMark() {
  let a = 0;
  this.marks.forEach((e) => {
    a += e / 2;
  });
  return a;
}

function getMaxMark() {
  let result = Math.max(...this.marks);
  return result;
}

function setAttend() {
  this.attends++;
}

function getInfo() {
  return `${this.name} ${this.max()} ${this.avg()}
 ${this.attends}`;
}

students.forEach((e) => {
  for (let i = 0; i < 3; i++) {
    e.attend();
  }
});

students.forEach((e) => {
  console.log(e.info());
});
