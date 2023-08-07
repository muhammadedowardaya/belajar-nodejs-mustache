test("test 1", () => console.info("test 1"));
test("test 2", () => console.info("test 2"));
// gunakan test.only untuk menjalankan hanya yang
// menggunakan test.only saja, test yang lain akan di skip
test.only("test 3", () => console.info("test 3"));
test("test 4", () => console.info("test 4"));
test("test 5", () => console.info("test 5"));
