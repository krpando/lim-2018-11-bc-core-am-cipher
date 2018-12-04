describe("cipher", () => {

  it("debería ser un objeto", () => {
    assert.equal(typeof cipher, "object");
  });

  describe("cipher.encode", () => {

    it("debería ser una función", () => {
      assert.equal(typeof cipher.encode, "function");
    });

    it("debería retornar 'HIJKLMNOPQRSTUVWXYZABCDEFG' para 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' con offest 33", () => {
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
  });

  describe("cipher.decode", () => {

    it("debería ser una función", () => {
      assert.equal(typeof cipher.decode, "function");
    });

    it("debería retornar 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' para 'HIJKLMNOPQRSTUVWXYZABCDEFG' con offest 33", () => {
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
  });

  describe("cipher.encode para minúsculas", () => {

    it("debería retornar 'abcdefghijklmnopqrstuvwxyz' para 'hijklmnopqrstuvwxyzabcdefg' con offest 33", () => {
      assert.equal(cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"),"hijklmnopqrstuvwxyzabcdefg");
    });

  });

  describe("cipher.decode para minúsculas", () => {

    it("debería retornar 'hijklmnopqrstuvwxyzabcdefg' para 'abcdefghijklmnopqrstuvwxyz' con offest 33", () => {
      assert.equal(cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg"),"abcdefghijklmnopqrstuvwxyz");
    });
  });

  describe("cipher.encode para espacio, números y símbolos", () => {

    it("debería retornar '56789:;<=>(espacio)&%+()*-.!#$' para '0123456789(espacio)!@&#$%()<>?' con offset 5",() => {
      assert.equal(cipher.encode(5,"0123456789 !@&#$%()<>?"),"56789:;<=> &%+()*-.!#$");
    });
  });

  describe("cipher.decode para espacio, números y símbolos", () => {

    it("debería retornar '0123456789(espacio)!@&#$%()<>?' para '56789:;<=>(espacio)&%+()*-.!#$' con offset 5",() => {
      assert.equal(cipher.decode(5,"56789:;<=> &%+()*-.!#$"),"0123456789 !@&#$%()<>?");
    });
  });

  describe("cipher.encode para tildes, 'ñ','Ñ' y otros caracteres no considerados",() =>{

    it("debería retornar 'Òâêîôûò' para 'Ñáéíóúñ' con offset 5",() => {
      assert.equal(cipher.encode(5,"Ñáéíóúñ"),"Òâêîôûò");
    });
  });

  describe("cipher.decode para tildes, 'ñ','Ñ' y otros caracteres no considerados",() =>{
    it("debería retornar 'Ñáéíóúñ' para 'Òâêîôûò' con offset 5", () =>{
     assert.equal(cipher.decode(5,"Òâêîôûò"),"Ñáéíóúñ");
    });
  });
});