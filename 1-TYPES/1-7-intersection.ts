{
  // Intersection Types: AND

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  internWork({
    name: 'elice',
    score: 1,
    work: () => {},
    employeeId: 1
  })
}
