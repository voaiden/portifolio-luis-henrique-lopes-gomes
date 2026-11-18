# 🔍 Dossiê de Auditoria Crítica de IA (Prompt Logbook)

Este documento registra três iterações complexas de copilotagem realizadas no desenvolvimento da aplicação, evidenciando a intervenção humana, correção de falhas e refatoração técnica.

---

## Ficha de Iteração 01: Lógica do Simulador Interativo em JavaScript

### 1. Engenharia de Prompt (Entrada)
* **Ferramenta:** Claude 3.5 Sonnet / Gemini Advanced
* **Prompt Submetido:**
> "Preciso de um script em JavaScript Vanilla para um formulário de 3 perguntas que calcule um score de risco de Síndrome do Impostor para desenvolvedores usando IA. O script deve escutar o evento submit, prevenir o comportamento padrão, capturar os valores dos selects, calcular uma pontuação numérica e exibir dinamicamente um bloco de resultado estilizado com Bootstrap 5 sem recarregar a página."

### 2. Resposta Bruta da IA (Código Inicial Gerado)
```javascript
document.getElementById('imposterForm').onsubmit = function(e) {
    e.preventDefault();
    var a = document.getElementById('aiUsageHours').value;
    var b = document.getElementById('codeComprehension').value;
    var c = document.getElementById('imposterFeeling').value;
    var total = parseInt(a) + parseInt(b) + parseInt(c);
    document.getElementById('resultBox').innerHTML = "Seu score é: " + total;
}