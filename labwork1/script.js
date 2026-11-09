function displayFact() {
  const facts = [
    "Tyrannosaurus rex had a bite force strong enough to crush bones!",
    "Triceratops had three horns and a large bony frill around its head.",
    "Stegosaurus had a brain about the size of a walnut.",
    "Velociraptors were about the size of a turkey, not as large as in the movies!",
    "Some dinosaurs had feathers, and modern birds evolved from feathered dinosaurs.",
  ];

  const randomIndex = Math.floor(Math.random() * facts.length);
  const fact = facts[randomIndex];

  alert(fact);
}
