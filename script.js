function greet() {
    alert('hello world.');
}

async function createCredential() {
    const result = await BitButil.webAuthn.createCredential({
        challenge: "Butil Verify Challenge",
        rp: { name: "Butil Verify" },
        user: { id: "ButilVerifyUserId", name: "ButilVerifyUser", displayName: "ButilVerifyUser" },
        authenticatorSelection: { authenticatorAttachment: "platform" },
        pubKeyCredParams: [{ alg: -7, type: "public-key" }]
    });
    console.log(result);
}

async function getCredential() {
    const result = await BitButil.webAuthn.getCredential({ challenge: "Butil Verify Challenge" });
    console.log(result);
}
