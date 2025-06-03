document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("contato-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        if (nome && email && mensagem) {
            document.getElementById("mensagem-status").innerText = "Mensagem enviada com sucesso!";
            document.getElementById("mensagem-status").style.color = "green";
        } else {
            document.getElementById("mensagem-status").innerText = "Preencha todos os campos!";
            document.getElementById("mensagem-status").style.color = "red";
        }
    });
});
