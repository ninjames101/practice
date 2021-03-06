window.onload = function() {
  var assert = chai.assert;
  var expect = chai.expect;
  mocha.setup('tdd');

  suite('basic dom select and mutate', function () {

    test("it gets text by id", function () {
      assert.strictEqual(getTextById('title'), 'Hello, World!');
      assert.strictEqual(getTextById('subtitle'), 'What a beautiful day!');
    });

    test("it sets text by id", function () {
      setTextById('title', 'Goodbye, World!');
      setTextById('subtitle', 'Farewell!');
      assert.strictEqual(document.getElementById('title').textContent, 'Goodbye, World!');
      assert.strictEqual(document.getElementById('subtitle').textContent, 'Farewell!');
    });

    test("it gets text by className", function () {
      assert.strictEqual(getTextByClassName('subtitle'), 'How are you today?');
      assert.strictEqual(getTextByClassName('words'), 'This is a sentence.');
    });

    test("it sets text by className", function () {
      setTextByClassName('subtitle', 'Goodbye, World!');
      setTextByClassName('words', 'Another sentence here now.');
      assert.strictEqual(document.getElementsByClassName('subtitle')[0].textContent, 'Goodbye, World!');
      assert.strictEqual(document.getElementsByClassName('words')[0].textContent, 'Another sentence here now.');
    });

    test("it adds a class by id", function () {
      addClassById('the-truth', 'is-out-there');
      assert.isTrue(document.getElementById('the-truth').classList.contains('is-out-there'));
    });

    test("it gets a value by name", function () {
      getValueByName('email');
      assert.strictEqual(getValueByName('email'), 'hello@world.com');
    });

    test("it sets a value by name", function () {
      setValueByName('email', 'nope@nope.com');
      assert.strictEqual(document.getElementsByName('email')[0].value, 'nope@nope.com');
    });

    test("it hides by class name", function () {
      hideByClassName('hide-me');
      let elements = document.getElementsByClassName('hide-me');

      for (var i = 0; i < elements.length; i++) {
        assert.strictEqual(elements[i].style.display, 'none');
      }
    });

    test("it styles by class name", function () {
      setStyleByClassName('style-me', 'color', 'red');
      setStyleByClassName('style-me', 'background', 'black');
      setStyleByClassName('style-me', 'fontSize', '10px');

      let elements = document.getElementsByClassName('style-me');

      for (var i = 0; i < elements.length; i++) {
        assert.strictEqual(elements[i].style.color, 'red');
        assert.strictEqual(elements[i].style.background, 'black');
        assert.strictEqual(elements[i].style.fontSize, '10px');
      }
    });

    test("it creates a new element", function(){
      var newElement = document.createElement('p');
      newElement.innerHTML = 'You Made Me';
      assert.deepEqual(makeElement('You Made Me'), newElement);
    });

    test("it appends a new element to the page", function(){
      addElement('add-to-me');
      var addedElementText = document.getElementById('add-to-me').firstChild.nextSibling.innerHTML;
      assert.strictEqual(addedElementText, "You added me!")
    })
  });

  mocha.run();
};
