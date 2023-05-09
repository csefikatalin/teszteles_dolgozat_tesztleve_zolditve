QUnit.module("Másodfokú egyenlet... ", function () {
    QUnit.test("0. létezik-e", function (assert) {
        assert.ok(
            masodfokuEgyenletMegoldasa,
            "Létezik-e a masodfokuEgyenletMegoldasa?"
        );
    });

    QUnit.test("0. függvény-e", function (assert) {
        assert.ok(
            typeof masodfokuEgyenletMegoldasa === "function",
            "Függvény-e?"
        );
    });
    
    // általános eset: Diskrimináns>0
    QUnit.test("1. masodfokuEgyenletMegoldasa(1, 4, 4)", function (assert) {
        let eredmeny = {
            X1: -2,
            X2: -2,
        };
        assert.deepEqual(masodfokuEgyenletMegoldasa(1, 4, 4), eredmeny);
    });
    QUnit.test(
        "2. masodfokuEgyenletMegoldasa(0, 0, 0) a,b,c=0",
        function (assert) {
            assert.deepEqual(masodfokuEgyenletMegoldasa(0, 0, 0), {
                X1: "Az egyenlet nem másodfokú!",
                X2: "Az egyenlet nem másodfokú!",
            });
        }
    );
    //0-val osztunk
    QUnit.test(
        "3. masodfokuEgyenletMegoldasa(0, 10, 10) a = 0, 0-val osztunk",
        function (assert) {
            assert.deepEqual(masodfokuEgyenletMegoldasa(0, 10, 10), {
              X1: "Az egyenlet nem másodfokú!",
              X2: "Az egyenlet nem másodfokú!",
            });
        }
    ); 
    //Diskrimináns 0 
    QUnit.test("4. masodfokuEgyenletMegoldasa(2, 4, 2) D=0", function (assert) {
      console.log("teszt") 
      assert.deepEqual(masodfokuEgyenletMegoldasa(2, 4, 2), {
            X1: -1,
            X2: -1,
        });
    });

    QUnit.test("5. masodfokuEgyenletMegoldasa(1, 3, 6) D<0", function (assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(1, 3, 6), {
            X1: "komplex",
            X2: "komplex",
        });
    });
    QUnit.test(
        "5,5. masodfokuEgyenletMegoldasa(4, 0, 0) D=0",
        function (assert) {
            assert.deepEqual(masodfokuEgyenletMegoldasa(1, 0, 0), {
                X1: 0,
                X2: 0 ,
            });
        }
    );
    QUnit.test("6. masodfokuEgyenletMegoldasa(11, 21, 0) ", function (assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(11, 21, 0), {
            X1: 0,
            X2: -1.9090909090909092,
        });
    });

    QUnit.test(
        "7. masodfokuEgyenletMegoldasa(1.5, 7, 1) tört szám",
        function (assert) {
            assert.deepEqual(masodfokuEgyenletMegoldasa(1.5, 7, 1), {
                X1: -0.14752049189933322,
                X2: -4.519146174767333,
            });
        }
    );
    QUnit.test(
        "8. masodfokuEgyenletMegoldasa(-1, 2, 3) a<0",
        function (assert) {
            assert.deepEqual(masodfokuEgyenletMegoldasa(-1, 2, 3), {
                X1: -1,
                X2: 3,
            });
        }
    );
    QUnit.test(
        "9. masodfokuEgyenletMegoldasa(-2.5, 2, 3) a<0, tört",
        function (assert) {
            assert.deepEqual(masodfokuEgyenletMegoldasa(-2.5, 2, 3), {
                X1: -0.7661903789690602,
                X2: 1.56619037896906,
            });
        }
    );
    QUnit.test(
        "10. masodfokuEgyenletMegoldasa(2, 0, 2) b=0",
        function (assert) {
            assert.deepEqual(masodfokuEgyenletMegoldasa(2, 0, 2), {
                X1: "komplex",
                X2: "komplex",
            });
        }
    );
    QUnit.test(
        "11. masodfokuEgyenletMegoldasa(2, 1, 0) c=0",
        function (assert) {
            assert.deepEqual(masodfokuEgyenletMegoldasa(2, 1, 0), {
                X1: 0,
                X2: -0.5,
            });
        }
    );
    QUnit.test("12. masodfokuEgyenletMegoldasa(1, -2, 3)", function (assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(1, -2, 3), {
            X1: "komplex",
            X2: "komplex",
        });
    });
    QUnit.test(
        "13. masodfokuEgyenletMegoldasa(1.3, 5.4, 0.5)",
        function (assert) {
            assert.deepEqual(masodfokuEgyenletMegoldasa(1.3, 5.4, 0.5), {
                X1: -0.09475404204228842,
                X2: -4.059092111803865,
            });
        }
    );
    /**az a értéke szövegként megadott szám  */
     QUnit.test(
        "14. masodfokuEgyenletMegoldasa('1', '4', '4')",
        function (assert) {
            let eredmeny = {
                X1: -2,
                X2: -2,
            };
            assert.deepEqual(
                masodfokuEgyenletMegoldasa("1", "4", "4"),
                eredmeny
            );
        }
    ); 
    /**az a értéke . helyett , - t tartalmaz */
       QUnit.test(
        "15. masodfokuEgyenletMegoldasa('1.3', '5.4', '0.5')",
        function (assert) {
            assert.deepEqual(masodfokuEgyenletMegoldasa("1.3", "5.4", "0.5"), {
                X1: -0.09475404204228842,
                X2: -4.059092111803865,
            });
        }
    ); 
      QUnit.test(
        "16. masodfokuEgyenletMegoldasa('1,3', '5,4', '0,5')",
        function (assert) {
            assert.deepEqual(masodfokuEgyenletMegoldasa("1,3", "5,4", "0,5"), {
                X1: -0.09475404204228842,
                X2: -4.059092111803865,
            });
        }
    ); 
    /**a változók értéke szöveg */
    QUnit.test("17. masodfokuEgyenletMegoldasa('a', 4, 4)", function (assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa("a", 4, 4), {
            X1: "Legalább az egyik változó nem szám!",
            X2: "Legalább az egyik változó nem szám!",
        });
    });
    QUnit.test("18. masodfokuEgyenletMegoldasa(1, 'b',  4)", function (assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(1, "b", 4), {
            X1: "Legalább az egyik változó nem szám!",
            X2: "Legalább az egyik változó nem szám!",
        });
    });
    QUnit.test("19. masodfokuEgyenletMegoldasa(1, 4,  'c')", function (assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(1, 4, "c"), {
            X1: "Legalább az egyik változó nem szám!",
            X2: "Legalább az egyik változó nem szám!",
        });
    });
    QUnit.test("20. masodfokuEgyenletMegoldasa('','','')", function (assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa("", "", ""), {
            X1: "Az egyenlet nem másodfokú!",
            X2: "Az egyenlet nem másodfokú!",
        });
    });
    QUnit.test("21. masodfokuEgyenletMegoldasa('','')", function (assert) {
      assert.deepEqual(masodfokuEgyenletMegoldasa("", ""), {
          X1: "Az egyenlet nem másodfokú!",
          X2: "Az egyenlet nem másodfokú!",
      });
  });
});
