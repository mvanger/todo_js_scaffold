describe("Todo", function() {
  var todoApp = {};
  var todoItem = {};

  // beforeEach(function() {
  //   x = new X();
  // });

  it("should make a duplicate object", function() {
    expect(Object.clone()).toEqual(todoItem);
  });
});