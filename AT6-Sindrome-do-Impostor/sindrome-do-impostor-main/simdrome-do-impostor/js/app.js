document.addEventListener('DOMContentLoaded', () => {
    // 1. Alternância de Tema Claro/Escuro com localStorage
    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-bs-theme', savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // 2. Lógica da Microaplicação Interativa (Simulador de Autoeficácia)
    const imposterForm = document.getElementById('imposterForm');
    const resultBox = document.getElementById('resultBox');

    if (imposterForm) {
        imposterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const aiHours = parseInt(document.getElementById('aiUsageHours').value);
            const comprehension = parseInt(document.getElementById('codeComprehension').value);
            const feeling = parseInt(document.getElementById('imposterFeeling').value);

            const totalScore = aiHours + (4 - comprehension) + feeling;
            
            let diagnosisTitle = '';
            let diagnosisText = '';
            let badgeClass = '';

            if (totalScore <= 4) {
                diagnosisTitle = '🟢 Baixo Risco / Desenvolvedor Resiliente';
                diagnosisText = 'Você mantém uma postura crítica excelente. Utiliza a IA como aceleradora, mas preserva a autonomia lógica e a autoria técnica.';
                badgeClass = 'bg-success-subtle text-success border-success';
            } else if (totalScore <= 7) {
                diagnosisTitle = '🟡 Alerta de Dependência Moderada';
                diagnosisText = 'Sinais de erosão na autoeficácia. Você está ganhando velocidade de entrega, mas começando a delegar o raciocínio crítico integral para as LLMs.';
                badgeClass = 'bg-warning-subtle text-warning border-warning';
            } else {
                diagnosisTitle = '🔴 Alto Risco de Síndrome do Impostor & Analfabetismo Funcional';
                diagnosisText = 'Atenção crítica! Delegação excessiva combinada com baixa auditoria gera erosão severa da autoeficácia técnica e pânico quando o assistente falha.';
                badgeClass = 'bg-danger-subtle text-danger border-danger';
            }

            resultBox.className = `mt-4 p-4 rounded-3 border ${badgeClass} d-block`;
            resultBox.innerHTML = `
                <h4 class="h5 fw-bold mb-2">${diagnosisTitle}</h4>
                <p class="mb-0">${diagnosisText}</p>
                <div class="mt-3 small font-monospace">Pontuação de Risco Diagnóstico: ${totalScore}/9</div>
            `;
        });
    }

    // 3. Visualização de Dados com Chart.js
    const ctx = document.getElementById('imposterChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [
                    'Delegação Passiva (Risco)', 
                    'Auditoria Crítica Ativa', 
                    'Desenvolvimento Manual Autônomo'
                ],
                datasets: [{
                    label: 'Distribuição do Estilo de Codificação',
                    data: [55, 30, 15],
                    backgroundColor: [
                        '#ef4444',
                        '#f59e0b',
                        '#6366f1'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            boxWidth: 12,
                            font: { family: 'Inter', size: 12 }
                        }
                    }
                }
            }
        });
    }
});