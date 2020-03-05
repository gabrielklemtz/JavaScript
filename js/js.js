const limite = 200;
const imposto = 0.08;
const telefone = 99.99;
const acessorio = 9.99;

var saldobancario = 0;
var montante = 0;

saldobancario = prompt( "Digite seu saldo bancario: " );


function calcularTaxa(montante){
    return montante = montante * imposto;
}

function formatAmount(montante) {
	return "$" + montante.toFixed( 2 );
}


while(montante < saldobancario){
    montante = montante + telefone;

    if (montante < limite) {
        montante = montante + acessorio;
    }
}


montante = montante + calcularTaxa( montante );

console.log(
	"Sua compra: " + formatAmount( montante )
);

if (montante > saldobancario) {
	console.log(
		"Você não pode pagar a conta. :("
	);
}


