describe("About Functions And Closure (topics/12_about_functions_and_closure.js)", function () {
  it("defining functions directly", function () {
    let result = "a";
    function changeResult() {
      // the ability to access a letiables defined in the same scope as the function is known as 'closure'
      result = "b";
    }
    changeResult();
    expect(__).toBe(result, "what is the value of result?");
  });

  it("assigning functions to letiables", function () {
    const triple = function (input) {
      return input * 3;
    };
    expect(__).toBe(triple(4), "what is triple 4?");
  });

  it("self invoking functions", function () {
    let publicValue = "shared";

    // self invoking functions are used to provide scoping and to alias letiables
    (function (pv) {
      let secretValue = "password";
      expect(__).toBe(pv, "what is the value of pv?");
      expect("__").toBe(
        typeof secretValue,
        "is secretValue available in this context?"
      );
      expect("__").toBe(
        typeof publicValue,
        "is publicValue available in this context?"
      );
    })(publicValue);

    expect("__").toBe(
      typeof secretValue,
      "is secretValue available in this context?"
    );
    expect("__").toBe(
      typeof publicValue,
      "is publicValue available in this context?"
    );
  });

  it("arguments array", function () {
    let add = function () {
      let total = 0;
      for (let i = 0; i < arguments.length; i++) {
        // complete the implementation of this method so that it returns the sum of its arguments
        // __
      }
      // __
    };

    expect(15).toEqual(add(1, 2, 3, 4, 5), "add 1,2,3,4,5");
    expect(9).toEqual(add(4, 7, -2), "add 4,7,-2");
  });

  it("using call to invoke function", function () {
    let invokee = function (message) {
      return this + message;
    };

    //another way to invoke a function is to use the call function which allows
    //you to set the callers "this" context.  Call can take any number of arguments:
    //the first one is always the context that this should be set to in the called
    //function, and the arguments to be sent to the function,multiple arguments are separated by commas.
    let result = invokee.call("I am this!", "Where did it come from?");

    expect(__).toBe(result, "what will the value of invokee's this be?");
  });

  it("using apply to invoke function", function () {
    let invokee = function (message1, message2) {
      return this + message1 + message2;
    };

    //similar to the call function is the apply function.  Apply only has two
    //arguments:  the first is the context that this should be set to in the called
    //function and the second is the array of arguments to be passed into the called function.
    let result = invokee.apply("I am this!", ["I am arg1", "I am arg2"]);

    expect(__).toBe(result, "what will the value of invokee's this be?");
  });
});
