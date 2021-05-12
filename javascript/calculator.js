function btnadd() {
    let a = parseInt(document.getElementById("val1").value);
    let b = parseInt(document.getElementById("val2").value);
    document.getElementById("ans").innerText = a + b;
}

function btnsub() {
    document.getElementById("ans").innerText = document.getElementById("val1").value - document.getElementById("val2").value;
}

function btnmul() {
    document.getElementById("ans").innerText = document.getElementById("val1").value * document.getElementById("val2").value;
}

function btndiv() {
    document.getElementById("ans").innerText = document.getElementById("val1").value / document.getElementById("val2").value;
}