export function calculator() {
    const calculateButton = document.getElementById("calculateButton");
    const totalBudgetSpan = document.getElementById("totalBudget");

    if (calculateButton && totalBudgetSpan) {
        calculateButton.addEventListener("click", () => {
            const materialsCost = parseFloat(document.getElementById("materialsCost").value);
            const laborCost = parseFloat(document.getElementById("laborCost").value);
            const otherCosts = parseFloat(document.getElementById("otherCosts").value);

            if (isNaN(materialsCost) || isNaN(laborCost) || isNaN(otherCosts)) {
                swal({
                    title: "ERROR",
                    text: "Por favor, ingrese valores numéricos válidos para los costos.",
                    icon: "error",
                    button: "Volver a intentar"
                });
            } else {
                const totalBudget = materialsCost + laborCost + otherCosts;
                totalBudgetSpan.textContent = totalBudget.toFixed(2);
            }
        });
    }
}
