function greet() {
    alert('hello world.');
}

let createResult = null;

async function createCredential() {
    const result = await BitButil.webAuthn.createCredential({
        challenge: "Butil Verify Challenge",
        rp: { name: "Butil Verify" },
        user: { id: "ButilVerifyUserId", name: "ButilVerifyUser", displayName: "ButilVerifyUser" },
        authenticatorSelection: { authenticatorAttachment: "platform" },
        attestation: "direct",
        pubKeyCredParams: [{ alg: -7, type: "public-key" }, { alg: -8, type: "public-key" }, { alg: -257, type: "public-key" }]
    });
    console.log(result);
    document.querySelector(".result").innerHTML = JSON.stringify(result, null, 2);
    createResult = result;
}

async function getCredential() {
    // const result = await BitButil.webAuthn.getCredential({ challenge: "Butil Verify Challenge" });
    document.querySelector(".result").innerHTML = createResult?.rawId;
    const result = await BitButil.webAuthn.getCredential({
        challenge: "Butil Verify Challenge",
        allowCredentials: [{ id: createResult?.rawId, type: "public-key" }]
    });
    console.log(result);
    document.querySelector(".result").innerHTML = JSON.stringify(result, null, 2);
}
