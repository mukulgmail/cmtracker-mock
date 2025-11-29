document.getElementById("btnSubmit").onclick = function () {

    const tpn = document.getElementById("TPNSelect").value;
    const serial = document.getElementById("SearchSerialNumbers").value;

    document.querySelector("#result tr td:nth-child(1)").innerText = tpn;
    document.querySelector("#result tr td:nth-child(2)").innerText = serial;

    // AUTO status logic
    // Even serial length → PASS
    // Odd  serial length → FAIL
    document.querySelector("#result tr td:nth-child(3)").innerText =
        serial.length % 2 == 0 ? "PASS" : "FAIL";
};
